---
title: "Traces Are the New Debugger"
description: "When behaviour emerges from both code and model responses, reading source files isn't enough. You debug by examining execution traces."
pubDatetime: 2026-03-07T00:46:57.000Z
draft: false
tags: ["ai-agents", "engineering", "architecture", "production", "infrastructure"]
---

There's a debugging assumption baked into most software engineering practice: if the system does something unexpected, you read the code. The logic is there, the conditionals are there, the data transformations are there. Follow the path and you find the problem.

That assumption breaks for agentic systems.

When behaviour emerges from both deterministic code and model responses — and those responses vary with context, phrasing, and model state — reading source files tells you what was possible, not what happened. Harrison Chase puts it simply: in non-deterministic systems, you debug by examining execution traces, not source code. The trace is the ground truth. Everything else is speculation.

This isn't just a theoretical distinction. In practice it means that teams building agent systems need to treat trace capture as first-class infrastructure, not an afterthought. What did the agent actually receive as context? What decision did it make at each step? Which tools did it call, in which order, with which inputs? None of that is visible from the code alone.

The analogy that helps me is flight data recorders. An aircraft's systems are well-specified and deterministic — but you still instrument everything, not because the code is wrong but because the interaction between a complex system and a variable environment produces outcomes you can't reason about in advance. You need the record. The trace is the record.

For financial services AI this lands with particular force. Model risk management frameworks already require documentation of model behaviour, test results, and decision rationale. But most of those frameworks were written for batch models with fixed inputs and auditable outputs. An agent that reasons across multiple steps, calls external tools, and produces outputs that depend on its prior context in the session is a different kind of system. The audit trail needs to be the trace, not just the code.

The practical implication: before you deploy an agent to anything consequential, instrument it first. Capture the full execution context at each step. Not because you expect it to fail — because when it does something surprising, and it will, you need to be able to explain what happened. That explanation lives in the trace.

Tools like LangSmith and Langfuse exist precisely for this. They're not debugging conveniences. For agentic systems in production, they're the equivalent of the debugger itself.

This connects to the broader accountability question in [The Trust Spectrum](/posts/the-trust-spectrum/) — how much oversight a system requires depends on who notices when it fails. Traces are what make oversight possible once the system is running.
