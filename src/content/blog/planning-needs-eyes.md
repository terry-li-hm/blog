---
title: "Planning Needs Eyes"
description: >-
  A 3-pass AI planning pipeline caught 0 out of 6 design issues.
  The same planning done in-session with tool access caught 2.5.
  Planning isn't a prompt problem — it's a tools problem.
pubDatetime: 2026-03-14T14:00:00.000Z
draft: false
tags:
  - ai-agents
  - engineering
  - cli
  - compound-engineering
---

I built a planning pipeline as a CLI tool. Three passes of Claude Opus, chained together: a research pass, a writing-plans pass, and a reasoning review. The idea was to replicate what my in-session planning skills do — the ones that read files, search the vault, and spin up subagents — but as a standalone command I could run from anywhere. `opifex --plan spec.md` and get back a reviewed, structured plan.

It caught zero out of six design issues in the spec it was given.

The same planning run done in-session — with full tool access, file reads, vault search, subagents — caught two and a half. Still not great, but meaningfully better than nothing. And the gap between zero and two and a half is the entire point.

## What went wrong

The pipeline worked exactly as designed. Three calls to `claude --print`, each with a carefully constructed prompt. The first pass asked for research findings, SpecFlow analysis, acceptance criteria, risks. The second pass asked for a writing-plan-style decomposition. The third pass asked for a reasoning review of the first two outputs. The prompts were good. The chain was clean. The output was fluent, structured, and completely disconnected from reality.

The problem is that `claude --print` is prompt-only. No file reads. No WebSearch (despite the prompt asking for it). No subagents. The tool tells the model to research framework documentation and check for gotchas, but the model has no way to actually do that. It can only reason about the spec text it was given. And reasoning about a spec without seeing the codebase is just... thinking harder about the spec. Which is what a longer system prompt does. You don't need three passes for that.

The in-session run was different. The research agents actually opened files. They found that the project used a roll-up architecture that the spec didn't mention — a structural constraint that would have broken the naive implementation. They found data redundancy between two modules that the spec treated as independent. These were the two biggest design issues, and they were invisible to any process that couldn't look at the code.

## The information-action gap

Even the in-session run only caught 2.5 out of 6. The research surfaced the right information — the roll-up pattern, the redundancy — but the planning step didn't always connect findings to the spec. It found the architecture. It didn't always flag "and this contradicts section 3 of your spec." That's a second problem: the gap between having information and using it to challenge assumptions. But at least the information existed. The CLI version didn't even get that far.

## The split

This clarified something I'd been fuzzy about: the boundary between tasks that delegate well and tasks that don't.

Execution delegates fine. Writing code from a spec is self-contained. The spec says what to build, the model builds it, the tests say whether it worked. The feedback loop is tight and doesn't require external context. This is why code generation works as a CLI tool — `claude --print` with a good prompt and a file dump produces working code at a high rate.

Planning doesn't delegate the same way. Planning requires comparing what IS against what SHOULD BE. What IS lives in the codebase, in past decisions, in architectural constraints that aren't written down anywhere obvious. You can't compare against things you can't see. A planning prompt without tool access is asking "what could go wrong?" in the abstract, which produces generic risks that apply to everything and catch nothing specific.

The split is clean: planning and review need the agent loop (tools + iteration), execution doesn't. Trying to push planning through the execution pathway — prompt in, text out, no tool access — strips the thing that makes planning valuable.

## The broader lesson

Not everything can be a CLI wrapper around a prompt.

This is tempting to forget because so many things can. Translation, summarisation, code generation, formatting — these are inference tasks. The model has everything it needs in the prompt. But planning, review, debugging, and architecture analysis are investigation tasks. They require the model to go look at things, form hypotheses, check them, and revise. That's the agent loop: tools plus iteration, not just inference.

The tell is whether the task requires comparing against external state. If the model needs to check something that isn't in the prompt, it needs tools. If it doesn't, a prompt is enough. `claude --print` is a very good inference engine. It is not a planning engine, because planning requires eyes.

I'll keep `opifex --plan` around — but rewired to run in-session where the model can actually read the codebase it's planning for. The three-pass structure was the right idea. The medium was wrong. Planning needs eyes, not just a longer prompt.
