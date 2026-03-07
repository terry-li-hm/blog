---
title: "The Silent Stall: Debugging GPT-5.4-Pro's Responses API"
description: "Three hours of debugging revealed two non-obvious behaviours about GPT-5.4-Pro that aren't in the docs: a minimum token budget requirement and a wall-clock timeout gap in Rust async code."
pubDatetime: 2026-03-07T14:00:00.000Z
draft: false
tags: ["rust", "llm", "openai", "debugging", "async"]
---

I spent three hours debugging an infinite hang in [consilium](https://consilium.sh), my multi-model deliberation CLI written in Rust. The `--council` mode — which queries five frontier LLMs in parallel, runs debate rounds, then calls a judge — would start, print one line, and then block indefinitely.

`--quick` mode worked fine. `--council` hung forever.

This post is about what I found: two behaviours of GPT-5.4-Pro's Responses API that aren't documented, and a gap in how Rust async code handles timeouts in retry chains.

---

## The Setup

consilium uses OpenRouter as a universal LLM gateway, with native API fallbacks for lower latency. For GPT-5.4-Pro, it calls `https://api.openai.com/v1/responses` directly — the [Responses API](https://platform.openai.com/docs/api-reference/responses), not the older Chat Completions endpoint (GPT-5.4-Pro isn't a chat/completions model).

The blind phase of `--council` queries all five models in parallel using `tokio::spawn` tasks. Each task calls the native API, falls back to OpenRouter on failure, and the parallel phase completes when all tasks finish.

The hang was in this phase.

---

## Finding 1: `max_output_tokens` must be ≥ ~3000 or the request stalls silently

The original code had this for thinking models (o3, o4, GPT-5.4-Pro, etc.):

```rust
if is_thinking_model(model) {
    max_tokens = max_tokens.max(16000); // floor for reasoning budget
}
```

We'd already reduced this from 16,000 to 4,096 to fix a separate slowness issue. Then I tried reducing it further to 1,500 to match what other models received. That's when things got weird.

With `max_output_tokens: 1500`, a direct curl test would hang past 90 seconds and return an empty body. No error. No timeout. Just silence.

```bash
# This completes in ~10s
curl ... --json '{"max_output_tokens": 200, ...}'

# This stalls forever
curl ... --json '{"max_output_tokens": 1500, ...}'
```

Increasing back to 4,096 fixed it. Testing revealed the threshold is somewhere around 3,000:

| `max_output_tokens` | Structured prompt | Simple prompt |
|---------------------|-------------------|---------------|
| 200 | 12s ✓ | 9s ✓ |
| 1,500 | stall >90s ✗ | 25s ✓ |
| 2,500 | stall >60s ✗ | 13s ✓ |
| 3,000 | 81s ✓ | 13s ✓ |
| 4,096 | 67-75s ✓ | 7s ✓ |

The model only uses ~335 tokens for a 120-word structured response (133 reasoning + 202 text). The ceiling just needs to be large enough for the model to allocate its internal reasoning buffer.

**The fix:** keep `max_tokens = max_tokens.max(4096)` for thinking models in the Responses API client.

---

## Finding 2: Structured prompts make GPT-5.4-Pro slow, regardless of token count

Even with 4,096 tokens, GPT-5.4-Pro takes 67-81 seconds for a prompt like:

```
You are participating in the BLIND PHASE of a council deliberation.
Provide a CLAIM SKETCH:
1. Your core position (1-2 sentences)
2. Top 3 supporting claims
3. Key assumption
4. One thing that would change your mind
Keep it concise (~120 words).
```

The same model answers "What is 2+2?" in ~7 seconds with a simple system prompt.

The multi-point enumerated structure triggers the full reasoning pass even for trivial questions. With `reasoning: {effort: "medium"}` and a structured 14-line prompt, the model appears to reason through each numbered item regardless of the underlying complexity.

This is a model behaviour, not something you can tune away without changing the prompt.

**The implication:** for any interactive tool that sends structured prompts to GPT-5.4-Pro via the Responses API, expect 60-80 second latency per call. Plan accordingly with timeouts.

---

## Finding 3: reqwest timeouts don't protect you from retry chains

This is the Rust-specific part.

reqwest's `.timeout()` on a `RequestBuilder` covers the entire request including body reading — so you'd expect a 120-second timeout to fire correctly. And it does, for individual requests.

The problem is the retry chain. consilium's `query_model_with_fallback` tries the native API (with its own retry loop), then falls through to OpenRouter, which also has retries. With `retries = 2`, the worst case is:

```
native attempt 1: 120s timeout
native attempt 2: 120s timeout
native attempt 3: 120s timeout
→ OpenRouter attempt 1: 120s timeout
→ OpenRouter attempt 2: 120s timeout
→ OpenRouter attempt 3: 120s timeout
Total: 720s+ for one model
```

reqwest's per-request timeout is correct, but the outer retry chain has no wall-clock cap.

**The fix:** wrap each `tokio::spawn` task with `tokio::time::timeout`:

```rust
let wall_timeout = Duration::from_secs_f64(timeout_secs);
let result = tokio::time::timeout(
    wall_timeout,
    query_model_with_fallback(/* ... */),
)
.await
.unwrap_or_else(|_| {
    (name.clone(), name.clone(), format!("[Error: {name} timed out after {timeout_secs:.0}s]"))
});
```

This gives each parallel task a hard ceiling, regardless of how many retries or fallbacks happen inside. For the sequential debate rounds, the same pattern applies — wrap the `query_model_async` call:

```rust
let result = tokio::time::timeout(
    Duration::from_secs(120),
    query_model_async(/* ... */),
)
.await
.unwrap_or_else(|_| (name.to_string(), model_name, format!("[Error: {name} timed out]")));
```

---

## The result

After all fixes, `consilium --council` completes in ~7-9 minutes instead of hanging indefinitely. GPT-5.4-Pro and Kimi-K2.5 time out cleanly and the remaining three models run the full debate. The judge delivers a verdict. The council still works — just with a degraded panel.

If you need faster council runs, override the first model:

```bash
CONSILIUM_MODEL_M1="google/gemini-2.5-flash" consilium --council "your question"
```

---

## Summary

Three things worth remembering about GPT-5.4-Pro's Responses API:

1. **Minimum token budget required.** `max_output_tokens < ~3000` causes silent stalls. Set a floor of 4,096.
2. **Structured prompts are slow.** Multi-point enumerated prompts trigger full reasoning regardless of question difficulty. Budget 60-80s per call.
3. **Test with production parameters.** A simple `curl` with a short system prompt will show 7-10s latency. The same model with your actual production prompt may take 10x longer. Always benchmark with the exact payload you'll send.

And the Rust lesson: per-request timeouts are necessary but not sufficient. Any retry chain needs a wall-clock timeout wrapping the whole thing.
