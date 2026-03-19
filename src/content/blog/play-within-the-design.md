---
title: "Play Within the Design"
description: >-
  Every AI coding platform has mechanisms designed for specific purposes.
  Using them as intended beats clever hacks — and the reason is deeper than
  cleanliness.
pubDatetime: 2026-03-18T10:00:00.000Z
tags:
  - ai-agents
  - claude-code
  - architecture
draft: false
---

There is a temptation, when you hit the edges of one mechanism, to press another into service. You run out of space in CLAUDE.md — the always-loaded instructions file for Claude Code — and instead of trimming, you reach for the rules files feature. Rules files are meant to be path-scoped: put a rule in `~/.claude/rules/coding.md` and it loads only when you're editing code files. Useful, precise, lightweight. But you can also remove the path-scoping entirely. Then the rule loads unconditionally, in every session, regardless of context. Which is exactly what CLAUDE.md does.

So you've created a second CLAUDE.md. You've solved the space problem by duplicating the mechanism.

I did this. The rules files in my setup had no path restrictions — they were loading always-load content via a mechanism designed for contextual loading. It felt like a clever workaround. It was a design violation. The difference between those two things is what this post is about.

The Claude Code context system has several distinct mechanisms, and each is designed for something specific. CLAUDE.md holds the always-loaded rules and preferences — the baseline that applies in every session. Rules files (`.claude/rules/*.md`) hold knowledge that is relevant only in certain contexts, scoped by file path so they activate when you're working in that area of the codebase. Skills (slash commands) are invocable procedures — you call them when you need them. Hooks enforce mechanical rules that should trigger on specific events regardless of context or conversation. MCP connects to external tools and data sources.

The temptation to blur these boundaries is real. Content feels important, so you want it always loaded. Context budgets are finite, so you want everything available at once. But the mechanisms aren't interchangeable, and using them interchangeably has costs beyond messiness.

The deeper reason is that the design assumes these mechanisms are used as intended. Path-scoped rules carry an implicit signal: this knowledge matters here, in this context, not everywhere. When you strip the path-scoping, you break that signal — the model receives contextual knowledge without the context that gives it meaning. The information is present but the framing is lost. You're not just working around the design; you're degrading the signal the design was built to carry.

The fix is straightforward to state and genuinely hard to do: ask what each mechanism is designed for, and use it for that.

| Mechanism | Designed for | Not for |
|-----------|--------------|---------|
| CLAUDE.md | Always-loaded rules, preferences, baseline context | Anything that only matters in specific contexts |
| Rules files | Path-scoped knowledge, contextual expertise | Overflow from CLAUDE.md — if it has no path, it shouldn't be a rules file |
| Skills | Invocable procedures, multi-step workflows | Always-on reminders or rules |
| Hooks | Mechanical enforcement, event-triggered checks | Reasoning about nuanced situations |
| MCP | External tools and live data | Replacing skills or rules |

When I consolidated the always-loaded content back into CLAUDE.md and restored proper path-scoping to the rules files, the system got tighter rather than just smaller. The rules files started doing what they were designed to do: activating vault conventions when I'm working in the vault, coding standards when I'm writing code. The always-loaded layer became genuinely always-needed, not just always-available.

There's a broader principle hiding in this. Every platform has a design philosophy encoded in its mechanisms. The mechanisms aren't arbitrary — they reflect how the designers think about information, context, and attention. Abusing a mechanism means you've found a workaround to a constraint the designers put there intentionally. Sometimes constraints are wrong and should be pushed against. But "I ran out of space" is not a reason the constraint was wrong. It's a reason to write tighter content.

The phrase I keep coming back to is playing within the design. Not because creativity is bad or rules shouldn't be questioned, but because the design encodes assumptions about how information flows — both to the model and to the person building with it. Fighting the design means you're learning to work around the system rather than with it. And that's a much harder thing to unlearn.
