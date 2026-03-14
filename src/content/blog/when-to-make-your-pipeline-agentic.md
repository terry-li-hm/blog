---
title: "When to Make Your Pipeline Agentic"
description: "Most LLM pipelines don't need agents. The ones that do share a specific pattern — the step needs to decide what to do next, not just process what it's given."
pubDatetime: 2026-03-14T10:54:45.000Z
draft: false
tags:
  - ai-engineering
  - agents
---

I built an AI intelligence pipeline that gathers articles, extracts structured insights, identifies gaps, researches them, and synthesises a daily briefing. It started on LangGraph. I ripped LangGraph out. The pipeline got simpler, easier to debug, and produced identical output.

The pipeline is linear: gather → extract → gap-analyse → research → synthesise → write. Each step transforms the previous step's output. LangGraph added a state graph, node definitions, and framework overhead to what is fundamentally a chain of function calls.

But I keep wondering: *should* it be agentic?

## The test I landed on

A step earns agency when it needs to **decide what to do next** based on what it sees, not just **process what it's given**.

Linear steps process. They take input, apply a transformation, produce output. The control flow is fixed — you know at design time what runs after what. A retry loop with a quality gate is still linear; you just run the same step again.

Agentic steps decide. They look at their input and choose between multiple possible actions. "This article is thin — should I search for a better source, extract what I can, or skip it entirely?" That's a routing decision the step makes at runtime.

## Concrete examples from my pipeline

**Not agentic (current, working fine):**
- Extract structured cards from articles → always the same transformation
- Quality gate checks citations against sources → pass/fail/retry, fixed logic
- Gap analysis identifies missing coverage areas → pattern matching on cards

**Would earn agency:**
- "These 3 articles cover the same announcement from different angles — I should merge them into one card, not three" → the step decides to change its own output structure
- "This regulatory claim about HKMA guidance doesn't match what I know — let me check the actual circular before including it" → the step decides to do additional work
- "Nothing significant today, but yesterday's developing story has new information" → the step decides to revisit previous output

## The pattern

The common thread: the step encounters something **unexpected** and needs to **choose a response** that wasn't predetermined. If you can write an `if/else` for every case at design time, it's not agentic — it's just branching logic.

Most pipelines are branching logic dressed up as agents.

## When I'll actually add agency

Not now. I'm starting an eval flywheel — labelling extraction cards, categorising failure modes, building judges. The data will show me which failures are prompt-fixable (most of them) and which genuinely need the step to make runtime decisions about control flow.

Building the agentic layer in response to data, not in anticipation of it. If I see extraction failures clustering around "the source was ambiguous and the step didn't know what to do" rather than "the prompt was sloppy," that's the signal. The pipeline that works today is more valuable than the architecture that might work better tomorrow.
