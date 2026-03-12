---
title: "Agentic AI: From Workflow to Autonomy"
status: stub
date: 2026-03-12
tags: [agentic-ai, architecture, enterprise-ai]
---

## The tension

Production agentic AI today looks like a structured workflow — deterministic steps, LLM calls with defined I/O contracts, scoped tools, orchestrator controls sequencing. Think Compound Engineering, not Skynet. That's the right call for now: auditable, governable, explainable to a regulator.

But the industry trajectory is toward genuine autonomy. The question isn't whether that happens — it's whether the architectural decisions you make today enable or block the transition.

## The argument to develop

- CE-style workflows are the right starting point, not the destination
- The trap: over-engineering for determinism in ways that can't be unwound (hardcoded step sequences, no state management, no dynamic tool selection)
- What to build now so you're not stuck later: proper state management, tool schemas that can be composed dynamically, human-in-the-loop gates that can be widened as trust increases
- The governance layer doesn't change — what changes is who (or what) makes the routing decisions

## Open questions

- Is "fully autonomous" actually the right end state in regulated industries, or is the real goal "autonomy within defined guardrails"?
- What does the transition look like in practice — gradual widening of agent scope, or a step change?
