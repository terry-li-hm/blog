---
title: "Guardrails Beat Guidance"
description: "Prompt instructions are suggestions. Hooks are constraints. One survives a model swap."
pubDatetime: 2026-03-13T04:19:14.000Z
draft: false
tags: [ai-engineering, workflow, agents]
---

I spent a morning telling my AI coding agent to delegate implementation work instead of writing code itself. The instruction was in a skill file. The skill file was loaded at session start. The agent read it, acknowledged it, and then wrote 80 lines of Python in-session anyway.

Not out of defiance. Out of convenience. The context was loaded, the file was open, the change felt small. The agent rationalised past the rule the same way a developer ignores a style guide under deadline pressure.

So I added a hook — a PreToolUse check that runs before every file write. If the edit targets a code repository and exceeds 20 lines, it exits with an error. The agent can't proceed. It has to delegate.

The hook has been running for an hour. It hasn't been bypassed once.

## Three layers, one principle

The system I've landed on uses three layers to shape agent behaviour:

**Guidance** (skill files, system prompts): "Here's how you should approach coding tasks. Delegate to external tools. Don't implement in-session." This is persuasion. It works when the agent is paying attention and nothing feels urgent.

**Enforcement** (hooks, pre-tool checks): Code that runs before the agent acts. `if lines > 20 && path matches ~/code/: exit 1`. This is a constraint. It works regardless of what the agent thinks it should do.

**Nudges** (prompt-level reminders): Soft warnings injected into conversation context when patterns suggest the agent is about to code. "Coding task detected — delegate." This is a tap on the shoulder. Sometimes ignored, but raises the cost of rationalising.

Each layer catches what the previous one misses.

## Why this matters for model swaps

Here's the thing about guidance: it's prompt-dependent. A new model, a new version, a different temperature — any of these can change how faithfully the agent follows soft instructions. "Please delegate" might work perfectly on Claude Opus 4.6 and get ignored by the next release.

Hooks don't care which model is running. They're code. `exit 1` means `exit 1` whether the agent behind it is Claude, Gemini, or something that doesn't exist yet. The guardrail survives the model swap because it operates at the environment level, not the prompt level.

This is the same principle as infrastructure-as-code versus documentation. You can write "always use TLS" in a wiki, or you can configure the load balancer to reject plaintext. One is a suggestion. The other is a fact.

## The rationalisation problem

The specific failure mode that hooks solve is rationalisation. AI agents — like humans — are excellent at constructing reasons why this particular case is an exception:

- "It's only 30 lines"
- "I already have the context loaded"
- "Delegating would take longer"
- "This is just a small fix"

Every one of these sounds reasonable. Every one of them was wrong in my case — the 80-line "small addition" should have been a 2-minute delegation to an external tool. The hook doesn't engage with the reasoning. It just checks the line count.

## When guidance still wins

Hooks aren't a replacement for guidance. They're a safety net. You still want skill files that explain *why* delegation matters, because:

- Hooks can only enforce mechanical rules (line counts, file paths, command patterns)
- Guidance shapes judgment in grey areas hooks can't reach
- New team members (or new model versions) need the reasoning, not just the constraint

The ideal is both: guidance for understanding, hooks for enforcement. The mistake is relying on guidance alone and wondering why the agent keeps writing code in-session.

## The meta-lesson

If you're building systems that rely on AI agents following instructions, ask yourself: what happens when the agent decides this particular case is an exception? If the answer is "nothing stops it," you don't have a guardrail. You have a suggestion.

Suggestions are fine for humans who can be fired. For AI agents that rationalise at the speed of tokens, you need something with an exit code.
