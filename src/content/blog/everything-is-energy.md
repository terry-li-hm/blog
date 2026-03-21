---
title: "Everything Is Energy"
description: "Tokens are energy. Text is mass. The context window is the budget. The rest is plumbing."
pubDatetime: 2026-03-21T13:59:57.000Z
draft: false
tags: [ai, agents, design]
---

Einstein showed that mass and energy are the same thing. Not analogous. Not metaphorically similar. The same thing, in different forms, convertible via a constant. A universe that looks like it contains two fundamental quantities actually contains one.

Agent systems have a version of this, and we've been slow to see it.

Every tool description, every prompt template, every memory file, every system rule loaded into an LLM's context window consumes tokens. Tokens are the universal currency — the ATP of an agent system. They are finite, consumed by everything, and when they're gone, the system stops. This much is obvious.

What's less obvious is the other direction. A piece of text sitting in a file, unloaded, costs nothing. It's potential energy. The moment it enters the context window, it becomes kinetic — actively consuming budget, actively influencing output, actively competing with every other loaded fragment for the agent's attention. Loading is spending. Unloading is recovery. The metabolism — the process of deciding what to load, how long to keep it, when to evict it — is energy management.

This means the tool description you wrote last month and the memory file you saved yesterday and the system rule you've had since day one are not three different kinds of thing. They are the same kind of thing: text that converts to energy when loaded. They differ in shape, in function, in how often they're needed. But they share the same substrate, compete for the same budget, and face the same fundamental question: is this fragment earning the energy it costs?

Traditional software doesn't work this way. A function definition in Python doesn't compete with other functions for the right to exist in the runtime. It's compiled, loaded, and present whether it's called or not. The cost of having it is near zero. But in an LLM system, presence has a cost. Every token of context consumed by a mediocre tool description is a token unavailable for a better one. Scarcity is not an implementation detail. It's the physics.

This is why metabolism matters, and why it can't stop at tool descriptions. The first organ I built a metabolism for was tool descriptions — versioned variants, fitness signals, mutation and selection. It worked. But it was like discovering E=mc² and only applying it to uranium. The equation holds for everything.

Prompt templates are energy. They cost tokens when loaded and either earn those tokens by shaping better output or waste them by adding noise. Memory files are energy. They carry context from past sessions and either reduce the agent's uncertainty or fill its window with stale information. System rules are energy. They constrain behaviour continuously and either prevent mistakes or displace attention that could go to the task at hand.

The question for each fragment is always the same: is the work produced by this text worth the energy it consumes? If yes, keep. If no, evict or evolve.

And here's where it gets interesting: the thing that answers that question — the mechanism that decides whether a piece of text is earning its energy — is not a formula. Formulas can measure tokens consumed and success rates achieved. They can compute information gain per unit cost. But they can't tell you whether a prompt template that technically works also *fits* — whether it maps to the agent's natural reasoning, whether it makes the right action feel obvious, whether it belongs.

That judgment is taste. And taste turns out to be the metabolism itself — not a signal fed into the machinery, but the machinery's reason for existing. The signals, the fitness functions, the mutation operators, the promotion gates — all of it serves taste. All of it exists to answer the question taste poses: does this belong here?

Everything in the context window is energy. Taste decides how to spend it. The rest is plumbing.

*Third in a series: [The Missing Metabolism](/posts/the-missing-metabolism) → [Taste Is the Metabolism](/posts/taste-is-the-metabolism) → this.*
