---
title: "The Reliability Hierarchy: Hooks, Rules, Skills"
description: >-
  In AI agent systems, use the most reliable trigger mechanism that fits — most
  builders default to skills for everything, which is using the weakest
  mechanism as the default.
pubDatetime: 2026-03-18T15:00:00.000Z
draft: false
tags:
  - ai-agents
  - claude-code
  - architecture
---

There's a principle I keep applying when building agent systems: use the most reliable trigger mechanism that fits the constraint. The mechanisms aren't interchangeable. They have a hierarchy.

| Mechanism | Trigger | Reliability | Best for |
|-----------|---------|-------------|----------|
| Hook | Event (tool call, file write, command) | Guaranteed — code runs | Enforcement, guardrails, invariants |
| Rule | File path match | Deterministic — file match loads context | Scoped conventions, code standards |
| Skill | Description matching | Probabilistic — model decides relevance | Invocable procedures, workflows |

Most agent builders default to skills for everything. That's using the least reliable mechanism as the default.

## Why skills are the weakest

Skills trigger because a model reads a description and decides it's relevant to the current task. That's fuzzy by design. The model has to infer that "if the user asks to commit changes" maps to your git workflow skill, not to a generic response about git.

I kept a running note: "skill not firing = description gap." Every time a skill I'd written failed to activate, the fix was rewriting the description — adding natural language phrasings, making the trigger conditions explicit, writing in the vocabulary users actually use rather than the vocabulary that felt right when building the thing.

That's not a problem with skills as a concept. It's a property of the mechanism. Skills are pattern-matched text. Text matching is probabilistic. If you're building enforcement logic on top of probabilistic matching, you're going to have gaps.

## Why everyone defaults to skills

Skills are easy to write. They're markdown. You can get from idea to working tool in five minutes without touching any code. They feel productive because each new skill file is a visible, tangible artifact you can point at.

There's also a mental model issue. Skills look like functions — named procedures you can invoke. That framing works fine for invocable workflows but breaks down when you want guaranteed enforcement. A function that only runs sometimes isn't a function. It's a suggestion.

The productivity of writing skills pulls builders toward using them for things that need harder guarantees. Enforcement logic ends up in skill descriptions rather than hooks. Context-setting ends up in skills rather than path-scoped rules. The whole system becomes a stack of probabilistic triggers and you wonder why things are inconsistent.

## The right default

**Hooks for enforcement.** If something should always happen — if you're writing a guardrail, an invariant, something where "the model forgot to trigger it" is unacceptable — put it in a hook. A hook runs when an event fires. It doesn't depend on the model deciding to invoke it. In my setup, I use hooks to block `rm -rf` without validation, to warn when code is being written in-session instead of delegated, to enforce git hygiene. None of those can tolerate being probabilistic.

**Rules for context.** Path-scoped rule files load deterministically when the model is working in a matching directory. If I'm editing Rust code, I want coding conventions loaded without having to think about it. If I'm editing vault notes, I want note structure conventions loaded. Rules are the right mechanism for "context that should always be present when working in this domain." No description needed, no invocation needed — just a path pattern and a file.

**Skills for invocable procedures.** Skills are right when you have a workflow a user will explicitly invoke, where the probabilistic nature is acceptable because the user is actively asking for the thing. `/commit`, `/review-pr`, `/publish` — these work well as skills because invocation intent is clear from the request. The model is deciding whether to use a skill, not whether to enforce a rule.

The failure mode to avoid is using skills to express things that should be hooks or rules, because skills feel easier to write. The reliability gap will show up eventually. You'll see inconsistent behavior, wonder why the agent isn't following the instructions you wrote out carefully in that skill description, and the answer will always be: wrong mechanism for the constraint.

**Related:** [AI Tool Architecture](AI Tool Architecture), [Claude Technical Reference](Claude Technical Reference)
