---
title: "Supply-Driven Compute"
description: "Most people use AI tokens when they have a task. The better model: you have tokens, find the best task. It changes everything."
pubDatetime: 2026-03-18T14:15:00.000Z
tags: ["ai-workflow", "automation", "agentic-ai", "compound-engineering"]
draft: false
---

Most people run AI the same way they run a dishwasher. Dirty dishes pile up, you load them in, you press start.

Demand-driven. Task first, compute second.

But if you're on a subscription — and increasingly, that's how AI compute is sold — unspent tokens at the end of the cycle are waste. Not potential. Waste.

So flip it.

## The pattern

Instead of "I have a task, use tokens," run "I have tokens, find the best task."

Three layers make this work:

**Prospectors** scan your workspace — task lists, git history, stale documents, upcoming deadlines, knowledge gaps — and score every candidate task on two axes: *value* (how much does completing this actually help?) and *autonomy* (can an agent do this without human input?). Value times autonomy is the dispatch score.

**An orchestrator** merges the prospectors' lists, dedupes, and dispatches the top tasks to parallel workers. Model routing matters here: expensive models for judgment and synthesis, cheaper ones for research and collection.

**Workers** execute and deposit results into a persistent knowledge layer — a vault, a wiki, a docs folder. Whatever the system can search next time.

The key property: the prospectors derive objectives from existing state. No human input needed to find the work. The human reviews output, not input.

## Why it compounds

Each burn session's output enriches the corpus the next session's prospectors scan. Research notes become source material. Study guides surface knowledge gaps. Skill definitions get tighter. The system literally gets better at knowing what to work on.

This doesn't happen with demand-driven usage. When you only run tasks you thought of, you only get answers to questions you asked.

## Where it applies

This isn't specific to coding or AI tooling. The pattern works anywhere you have:

1. **Use-it-or-lose-it capacity** — subscription AI, reserved cloud instances, team hours that don't roll over
2. **A searchable state** — documents, code, task lists, calendars — anything a prospector can scan
3. **Autonomous executability** — tasks where the output is useful even without real-time human steering

Consulting firms with bench time. Research teams with cluster allocations. Content teams with editorial calendars. Any context where idle capacity and latent value coexist.

## The uncomfortable part

Supply-driven compute requires you to trust that the system can find valuable work without you pointing at it. Most people aren't ready for that. They want to stay in the loop — not because the loop needs them, but because the loop is where they feel useful.

The dishwasher doesn't need you to watch it run.
