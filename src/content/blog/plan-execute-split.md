---
title: "Stop Asking Which AI Model Is Better. Ask Which Phase."
description: "The planning/execution split is more useful than any benchmark comparison."
pubDatetime: 2026-03-12T09:12:28.000Z
draft: false
tags: [ai-engineering, workflow, tooling]
---

I spent an afternoon trying to figure out whether Claude Sonnet 4.6 or Opus 4.6 was "better" for my work. I looked at benchmarks, read practitioner reviews, ran a Perplexity deep research. The honest answer: it's the wrong question.

The benchmarks tell an interesting story. On coding (SWE-bench: 79.6% vs 80.8%) and computer use (72.5% vs 72.7%), the two models are essentially tied. But on graduate-level reasoning — GPQA Diamond — there's a real gap: 74% for Sonnet, 91% for Opus. That's not noise.

The insight is that this gap maps cleanly onto phases of work, not types of work.

When I'm planning a system — deciding what to build, what to touch, what the failure modes are — I'm doing exactly the kind of abstract reasoning where Opus's 17-point GPQA advantage is real. When I'm executing — generating code, drafting text, running file operations — that gap collapses. Sonnet is just as good and twice as fast.

Claude Code actually has a built-in alias for this: `opusplan`. Plan mode uses Opus for architecture decisions; execution mode auto-switches to Sonnet. The model switch is triggered by the phase, not the task category.

I've added a version of this to my own workflow gate: switch to Opus before reviewing the implementation plan, switch back to Sonnet before delegating execution. It's a two-command ritual, but it means I'm always matching reasoning depth to where it actually matters.

The deeper principle: "which model is better" is a product question. "Which model for which phase" is a workflow question. The second one is more useful because it gives you something to act on regardless of how the benchmarks shift.

---

*Prompted by an afternoon of model comparison research that kept circling back to the same answer: hybrid routing beats picking a winner.*
