---
title: "Your AI Pipeline Is Probably MapReduce"
description: "Most AI workflows are parallel-then-aggregate, not agent graphs. Knowing the difference saves you from framework theatre."
pubDatetime: 2026-03-14T16:00:00.000Z
draft: false
tags:
  - ai
  - architecture
  - consulting
---

I built an AI landscape review pipeline. Five nodes: gather articles, analyse gaps, research, synthesise, write. It runs on a cron schedule, processes a batch of articles, and writes structured notes to disk.

My first instinct was LangGraph. It's the standard agent orchestration framework. BlackRock uses it. JPMorgan uses it. It must be the right tool.

Then I looked at what my pipeline actually does.

## The map-reduce hiding in plain sight

My pipeline has two parallelisable steps:

1. **Extract insights from 20 articles** — each extraction is independent. Article 7 doesn't need to know what article 3 said.
2. **Research 5 gaps** — each gap investigation is independent. The regulatory gap doesn't affect the model release gap.

Both steps fan out, do independent work, and collapse the results. That's not a graph. That's map-reduce:

```
Gather → [Map: extract per article] → Reduce: gap analysis
       → [Map: research per gap]    → Reduce: synthesise
       → Quality gate → Write
```

The entire "orchestration" is three lines of Python:

```python
cards = await asyncio.gather(*[extract(article) for article in articles])
findings = await asyncio.gather(*[research(gap) for gap in gaps])
```

No framework. No state graph. No conditional edges. No checkpoint serialisation. Just functions running in parallel and a list collecting the results.

## The test: do your parallel tasks need to see each other?

This is the only question that matters.

**If no** — your parallel tasks are independent map operations. Each worker takes an input, produces an output, knows nothing about the others. `asyncio.gather`, `concurrent.futures`, a bash loop with `&` — any of these work. You have map-reduce.

**If yes** — your parallel workers need to read or modify shared state mid-execution. Worker A's output changes what Worker B should do next. That's coordination, not parallelism. That's where agent frameworks earn their keep.

Most AI pipelines I've seen — RAG retrieval, document processing, batch analysis, content generation, evaluation harnesses — are firmly in the "no" category. Each chunk, each document, each query is processed independently. The results are aggregated at the end. Map-reduce.

## Why people reach for agent frameworks anyway

Three reasons, none of them technical:

**The tooling is exciting.** LangGraph gives you a visual graph editor, step-by-step traces, checkpoint persistence. It feels like building something serious. `asyncio.gather` feels like writing a script. The outputs are identical, but one feels like engineering and the other feels like scripting. We systematically overvalue the feeling.

**The examples are all agents.** Every LangGraph tutorial shows a chatbot, a research agent, a coding assistant. If your mental model of "AI application" is shaped by these examples, everything looks like it needs an agent framework. But most production AI isn't chatbots — it's batch processing with LLM calls instead of SQL queries.

**Nobody gets fired for choosing the enterprise framework.** In consulting, recommending LangGraph is safe. Recommending `asyncio.gather` sounds like you're not taking the problem seriously. But the consultant who knows which problems are simple — and says so — is more valuable than the one who applies the enterprise solution to everything.

## The cathedral and the chapel, again

I've [written before](/posts/cathedral-vs-chapel) about the cathedral-vs-chapel distinction in enterprise AI. This is the same pattern at the infrastructure layer.

LangGraph is a cathedral. It handles concurrent agents with shared mutable state, human-in-the-loop interrupts, checkpoint persistence across days, audit trails for regulators. When you need that — and some problems genuinely do — it's the right tool and it's battle-tested.

But most AI pipelines are chapels. They process a batch, produce an output, and finish. The entire orchestration is a for-loop with some async fanout. Adding LangGraph to a chapel doesn't make it a cathedral. It makes it a chapel with flying buttresses that serve no structural purpose.

## The checklist

Before reaching for an agent framework, ask:

1. **Do parallel tasks need to see each other's intermediate state?** No → map-reduce.
2. **Does a human need to intervene mid-pipeline?** No → map-reduce.
3. **Does the pipeline need to pause and resume across hours or days?** No → map-reduce.
4. **Do you need an audit trail of every state transition for regulators?** No → map-reduce.

If you answered "no" four times, your pipeline is map-reduce. Write it that way. It will be shorter, faster, more debuggable, and require zero framework knowledge to maintain.

Save the agent framework for the 10% of problems that actually need it. Knowing which 10% — that's the skill.
