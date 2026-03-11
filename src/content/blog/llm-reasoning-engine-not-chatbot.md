---
title: "Language Is the Medium, Not the Purpose"
description: >-
  The name "large language model" is the most misleading thing about the
  technology. LLMs are reasoning engines. Chatbot is just one interface.
pubDatetime: 2026-03-11T00:00:00.000Z
draft: false
tags:
  - ai-agents
  - architecture
  - llm
  - reasoning
---

The name "large language model" is probably the most misleading thing about the technology.

It implies the purpose is language. That the system generates text, responds to prompts, holds conversations. This framing produced a decade of chatbot projects, most of which are sophisticated autocomplete dressed up as intelligence. It also obscures what's actually interesting about the capability.

Language is the substrate, not the purpose. LLMs are trained on tokens — and tokens represent text, yes, but also code, tool calls, reasoning traces, image descriptions, structured data. The model doesn't care what the tokens mean in the human sense. It learned the patterns. The underlying capability is reasoning: recognising patterns, drawing analogies, decomposing problems, generating plans. Language is just the vehicle these capabilities happen to travel in.

The clearest evidence is what happens when you give an LLM tools.

The basic agent loop — Reason, Act, Observe, repeat — looks like this: the model thinks about what to do next, calls a tool, reads the output, thinks again. The model isn't "chatting." It's reasoning about a problem and using tools to gather information or take action. The text in between is thinking out loud, not the point.

What counts as a tool? Everything. A function that queries a database. A shell command. A web search. A call to another model. A memory read. A planner. An evaluator. Once you see it this way, the architecture becomes surprisingly simple: there is a reasoning core, and there is tooling around it. Memory is a tool. Planning is a tool — or it's the model's own in-context reasoning. Search is a tool. Code execution is a tool. Retrieval is a tool.

The chatbot is the degenerate case: a reasoning engine with no tools and a text interface. It's the simplest possible configuration, which is why it shipped first. It's also why it frustrates people — a reasoning engine with no tools can only reason, not act. Most valuable work requires action.

This matters for how you think about building with AI. The question isn't "how do I make the chatbot smarter?" It's "what tools does this reasoning engine need to solve this problem, and how do I govern how it uses them?" The model capability is largely fixed. The architecture around it — what tools exist, what they're allowed to do, how the reasoning loop is structured — is where the actual engineering happens.

The architects who will build durable AI systems in the next few years are the ones who stopped thinking about language models and started thinking about reasoning engines. The capability isn't to generate text. The capability is to reason about any problem that can be expressed in tokens — and increasingly, that's almost everything.

Chatbot was a fine first use case. It's a narrow one.

---

P.S. The most common objection is that LLMs hallucinate and therefore can't be trusted to reason. This conflates accuracy with reasoning capability. A reasoning engine that sometimes gets facts wrong is still a reasoning engine. The mitigation is tools — give the model access to verified sources, calculators, code execution. The reasoning loop handles the rest. Accuracy is a retrieval problem, not a reasoning problem.
