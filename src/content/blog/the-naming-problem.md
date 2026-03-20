---
title: "The Naming Problem"
description: "We called them agents. But the word is doing more harm than we think."
pubDatetime: 2026-03-20T15:51:07.000Z
draft: false
tags: [ai, agents, design]
---

An agent is a function with an LLM as the argument. Swap the model, same agent. The definition — tools, knowledge, constraints — is what makes it what it is. The model is a dependency, not an identity.

Every framework already does this mechanically. You pass `model="claude-opus-4-6"` as a parameter. But the industry hasn't thought through what the separation implies, and the word "agent" is why.

Call something an agent and you import the connotations of personhood. Autonomy, memory, identity, purpose. People start asking: does it remember? does it learn? who is it? These are natural questions to ask about an agent. They're absurd questions to ask about a function.

Call something a tool and you undersell it. A hammer doesn't choose what to hit. These things select their own actions, adapt mid-task, make decisions about which tools to use and when to stop. That's not a tool.

Call it a program and you import determinism. Programs follow instructions. These things reason about ambiguous inputs and choose paths that weren't prescribed. That's not a program either.

Every word above "function" is an analogy, and every analogy imports wrong assumptions from its source domain. The naming problem isn't laziness. It's that the category genuinely didn't exist before.

Here's what's new: an LLM brings reasoning and knowledge in a single call. Databases give you knowledge without reasoning. Rules engines give you reasoning without knowledge. No prior component combined both. When you make this component an argument to a function, you get something that occupies a point in the design space that nothing has occupied before — more autonomous than a tool, less autonomous than a person, stateful during execution but disposable after, making real decisions but only when invoked.

This matters because the word you use shapes the architecture you build. Call it an agent and you'll design for persistence, memory, personality, continuous operation. Call it a function and you'll design for clean inputs, composability, disposability, one task per invocation. The second set of instincts is almost always better.

The practical consequences are immediate. Persona prompts — "you are a senior accountant" — are the industry's default way to specialise an agent. They don't work because they're trying to add capability by adding identity. What actually works is loading specific knowledge: the tax code gotchas, the compliance edge cases, the domain-specific constraints. Within the context argument, specifics outperform roles every time. Context is capability. Persona is vibes.

From the caller's perspective, the thing is a transformation: goal in, result out. From the inside, it's an entity during execution: state, decisions, side effects. Both views are correct. The caller's view leads to better architectures because it focuses on what matters — the result — and lets the implementation be whatever it needs to be.

The model is not the agent. The definition is the agent. And "agent" is probably the wrong word for it. But it's the word we have, and knowing it's wrong — knowing that it imports assumptions that warp our thinking about persistence, identity, and autonomy — might be more useful than finding the right word.

P.S. Compressing this to a tweet turned out to be the best way to stress-test every claim. Every vague word, every overclaim, every broken analogy surfaces immediately at 280 characters. The tweet is the blade; the post is the handle.
