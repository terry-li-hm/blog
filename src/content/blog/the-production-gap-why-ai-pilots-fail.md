---
title: "The Production Gap: Why AI Pilots Fail"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-consulting, enterprise-ai, production]
draft: false
description: "The consulting question isn't how to build AI — it's how to get it past the 62% graveyard."
---

There's a pattern I've seen enough times now to stop being surprised by it.

A bank builds a proof of concept. The demo works. Leadership is impressed. Someone announces "we're moving to production" — and then, quietly, nothing happens. The pilot gets a second review cycle, then a third. The data science team gets pulled onto something else. The vendor contract lapses. Eighteen months later the use case appears again on the AI roadmap as though it were new.

This is the production gap. And it's the defining commercial problem in enterprise AI right now, at least in financial services.

The numbers make it hard to dismiss as anecdote. Around 62% of AI initiatives in financial services are stuck in pilot or development phases, with only 12% deployed enterprise-wide. MIT's 2025 research put it even more starkly: 95% of corporate GenAI pilots fail to deliver measurable financial returns — not because the technology doesn't work, but because of implementation strategy. BCG found that only 26% of firms have the capabilities to move a model beyond proof of concept. Deloitte's 2024 numbers show that only 38% of AI projects in finance meet or exceed ROI expectations.

This isn't a model problem. It's an organisational problem wearing a technology costume.

When I look at pilots that stall, the failure modes cluster into a few patterns.

**The data problem was never actually solved.** The PoC ran on a clean data extract someone prepared manually for the demo. Moving to production meant pulling from actual source systems — systems with legacy schemas, inconsistent field definitions, missing historical records, and upstream processes nobody documented. The model was fine. The plumbing wasn't.

**Governance came after, not during.** The team built first and wrote the risk framework later. A working model hit the model risk review six months in and got sent back for documentation it should have had from day one: model cards, validation methodology, explainability evidence, HITL decision points. Each governance gap added weeks. In a regulated environment, governance retroactively applied is governance that never quite fits.

**Change management was treated as a communication task.** Leadership sent an email. Frontline staff were told the tool was available. Nobody asked whether the people who'd actually use it trusted it, whether it fit their workflow, or whether they even wanted it. Adoption was measured in licences deployed, not behaviour changed.

**The integration layer was invisible until it wasn't.** The PoC called a cloud API. Production needed to run inside the bank's network, pass through four security review layers, connect to a core banking system that hadn't been touched in eleven years, and produce outputs that could be ingested by a downstream process written in a language the current team had never seen. Each of these was a project in itself.

The consultancy response to all of this tends toward one of two poles. The strategy shop arrives with a beautiful deck about AI maturity models and transformation roadmaps, takes its fee, and leaves the client with a document. The systems integrator arrives with a delivery team, stands up a technology platform, and builds exactly what was specified without questioning whether it was the right thing to build.

Neither pole solves the production gap. The gap closes when someone sits inside both — close enough to the technical architecture to see where the data problems are, close enough to the regulatory constraints to know which governance work is non-negotiable, close enough to the organisation to understand what "change management" actually means for a 40-person compliance team that's been reviewing alerts the same way for twelve years.

What that looks like in practice: governance embedded in the architecture from day one, not retrofitted later. Data readiness assessed before the model is built, not discovered during deployment. Human-in-the-loop patterns that actually run end-to-end — not a governance statement about human oversight, but a system where a real person can interrupt, review, and resume a workflow on a real timeline. MLOps infrastructure that someone owns and monitors. And someone accountable for whether the thing gets used, not just whether it works.

The selling environment has caught up to this. "Strategy" alone is not what clients are buying. Clients have been burned by cheap pilots and capability demos. What moves now is end-to-end implementation with evidence — reference cases with hard numbers, from actual production deployments, not aspirational case studies.

The 62% graveyard isn't a technology failure rate. It's a delivery discipline failure rate. The technology almost always works. The question is whether the people responsible for getting it across the line have thought carefully about the six things that will kill it before it gets there.

Most haven't. That's the gap.

**Related:** [What Makes a Great AI Consultant](What Makes a Great AI Consultant) · [Human-in-the-Loop Is an Architecture Decision](Human-in-the-Loop Is an Architecture Decision) · [LLM Evals Aren't Data Science](LLM Evals Aren't Data Science) · [Governance Is a Tax](Governance Is a Tax) · [The Eval Gap](The Eval Gap)
