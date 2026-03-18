---
title: "Stealing from Peers: A Truth-Seeking Discipline"
description: "Most people scan competitors for positioning. I scan them for transferable patterns — and route each steal to every domain it applies to."
pubDatetime: 2026-03-18T09:15:24.000Z
draft: false
tags: [ai-agents, productivity, meta-cognition]
---

I spent an afternoon running 11 parallel AI researchers across the agent engineering landscape — Manus, Devin, Claude Code power users, LangGraph, Chinese coding agents, enterprise AI delivery patterns, governance frameworks. The goal wasn't competitive intelligence. It was theft.

Not product theft. Pattern theft. The question isn't "what does Manus do?" It's "what *technique* makes Manus work, and where else does that technique apply?"

This distinction matters. Products are contextual. Techniques are portable.

## The Process

Five researchers in the first wave, six in the second. Each targeting a different slice: coding agents, multi-agent frameworks, context engineering as a discipline, enterprise AI consulting delivery, AI governance for agents, MCP ecosystem, leaked system prompts, Chinese AI ecosystem, personal AI setups.

Each researcher has one job: extract *patterns*, not *products*. "What problem does this solve? How does it work? Where else could I apply it?"

The output goes through a three-way routing:
- **Personal stack** — does this improve my tools?
- **Consulting delivery** — does this help client engagements?
- **AI governance** — does this inform regulatory advisory?

One technique often routes to all three. Manus's "file system as external memory" improves my context management, becomes a consulting framework for client architecture discussions, and informs audit trail design for governance advisory.

## Ten Things I Learned

**Scaffolding exceeds model intelligence — but validate it's load-bearing.** Every power user converges on the same finding: the infrastructure around the model matters more than the model itself. But a Princeton team built a 100-line Python script that achieves 74% on SWE-bench with nothing but bash and a capable model. Before building elaborate scaffolding, test whether removing it actually degrades outcomes.

**Context engineering has displaced prompt engineering.** Karpathy named it in June 2025. Everyone is practicing it. The framework: Write (persist outside context), Select (pull relevant in), Compress (reduce tokens), Isolate (split across components). If you're still thinking about "prompt engineering," you're solving last year's problem.

**Fresh context is the secret weapon.** Models subconsciously defend outputs they just produced. Review agents should never share context with generating agents. Clean handoffs between task phases — only summaries flowing up from workers to orchestrators — prevent context contamination. This is an architectural choice, not a prompting trick.

**The review cost trap is real.** AI delegation lowers production cost but increases coordination and review cost — and that falls entirely on the human. One study found 47% more PRs per day, with review fatigue rising proportionally. Not all output needs equal review. The answer is triage by risk, not review everything equally.

**Co-design beats generic.** Chinese frameworks like Qwen-Agent are built specifically for Qwen3's training format — and outperform generic tool-calling interfaces as a result. If you're building tools for one specific model, optimize for how that model reasons. Generic is a tax you pay for flexibility you may not need.

**The 30% ceiling.** The best current AI agent completes 30% of real workplace tasks. 95% of enterprise AI pilots fail to deliver measurable ROI. The gap isn't model capability — it's integration, governance, and workflow redesign. The consulting opportunity is bridging this gap, not selling the model.

**Proactive is the next threshold.** Most AI setups are reactive — you invoke the AI. The jump is to AI that advocates for your goals without being asked. Scheduled scans, context-triggered actions, proactive nudges. The infrastructure exists; the design pattern is still emerging.

**Error is signal, not noise.** The best agents keep failed attempts in context. They return linter errors in the same turn as the edit. They treat LLM variance as a signal worth measuring, not randomness to eliminate. Designing systems that learn from imperfection is more productive than pursuing consistency.

## The Meta-Insight

Nobody else is doing this systematically. People scan competitors for positioning. They read HN for curiosity. But the specific motion — *scan peers, extract the technique not the product, route to every domain it applies to* — is rare.

It's a truth-seeking discipline, not competitive intelligence. The question "what are others doing?" is the same epistemic move as "can I test this empirically?" or "what am I assuming?" It's about making contact with reality rather than reasoning from priors.

I've made it a monthly practice. The first scan yielded 50+ transferable patterns across 30+ sources. Most were implementable in minutes. A few were architectural shifts worth thinking about for weeks.

The best part: the sources don't know they're teaching you. They're just building in public.
