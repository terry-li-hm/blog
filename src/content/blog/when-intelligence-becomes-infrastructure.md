---
title: "When Intelligence Becomes Infrastructure"
description: "What changes when LLMs stop being the special thing and become just another software component? The answer is: everything about how you build."
pubDatetime: 2026-03-07T03:26:38.000Z
draft: true
tags: ["ai-agents", "software-design", "developer-experience", "llms"]
---

<!-- STUB — write this post -->

<!-- Core argument:
The interesting transition isn't "AI gets smarter" — it's "AI stops being remarkable."
When LLMs are the special component, you build around them: prompts are precious,
every call is hand-crafted, you celebrate the magic. When they're infrastructure —
like a database or an HTTP client — you treat them accordingly: typed interfaces,
error handling, SLAs, boring reliability.

The shift is happening now. Signs:
- You stop calling it "AI" in your PR descriptions
- You write unit tests for prompts, not just demos
- You care about latency and cost, not capability benchmarks
- The model is swappable (OpenRouter, one line change)

What changes architecturally:
- The prompt is an interface contract, not a creative artifact
- Failure modes are first-class (retry logic, fallbacks, structured output validation)
- Observability is assumed, not bolted on

The consulting angle: most enterprises are still in the "special component" phase.
They're building cathedrals around models that will be commodity in 18 months.
The teams that will win are building the plumbing, not the shrine.

Related: [Skills as Files](Skills as Files) · [Traces Are the New Debugger](Traces Are the New Debugger) · [Agentic Engineering Principles](Agentic Engineering Principles)
-->
