---
title: "Design Actions, Not Actors"
description: "The word 'agent' makes us think in nouns. The better designs start with verbs."
pubDatetime: 2026-03-21T01:00:00.000Z
draft: false
tags: [ai, agents, design]
---

The moment you say "I need a code review agent," you've already made three design mistakes. You're thinking about identity, persistence, and personality. You're about to write a system prompt that starts with "You are a senior code reviewer" and wonder why it doesn't help.

Start with the verb instead. "Review this code for security issues." Now you're thinking about inputs, tools, outputs, and when the job is done. No identity needed. No memory. No persona. Just: what does the action need to succeed?

This isn't just aesthetics. It's an empirical observation: persona assignment doesn't measurably improve frontier LLM performance. "You are a senior accountant" biases tone and vocabulary. Loading actual tax code edge cases improves capability. Context is capability. Persona is vibes.

The word "agent" is where the thinking goes wrong. It's a noun, and nouns lead to noun questions. Who is it? What does it remember? How does it behave? These are natural questions about agents. They're absurd questions about actions. Nobody asks "review code" what its personality is.

Every action has a clean anatomy. What verb? What tools does the verb need? What knowledge or context? Where does it need an LLM to reason — and where doesn't it? That last question matters most. If you can't name the specific point where the LLM provides value, you don't need one. A script will do.

The LLM is a reasoning engine — something you attach to an action when the inputs are open-ended and the path isn't predetermined. A thermostat doesn't need reasoning: one input, one rule, one output. "Review code" does: the input is arbitrary, the issues are unknown in advance, the LLM figures out the path at runtime. That's the only thing that makes this different from a function call. Not intelligence, not agency — just the ability to handle situations nobody wrote rules for.

One action, one invocation, one result. The action runs and dies. It doesn't persist, doesn't remember, doesn't accumulate identity across sessions. If you need it again, you invoke it again. This sounds limiting until you realise it's also how the best software works: stateless functions that compose. The state lives in the system, not the component.

Continuous actions exist too. "Monitor system health" is a verb — it just doesn't stop. "Assist with coding" is a verb in the continuous tense. The design principle holds: start with what it does, not what it is.

The practical methodology is five questions: What's the verb? What tools does it need? What context? Where does the LLM reason? What does it return? Answer those and you have a complete design. Everything the word "agent" adds on top — identity, memory, persona, autonomy — is either unnecessary or should be a deliberate choice, not a default that came with the noun.

P.S. "Agent" is exciting, and the excitement is where the wrong thinking starts.

*See also: [The Vocabulary Trap](/posts/the-vocabulary-trap) — how framework categories colonise your design thinking.*
