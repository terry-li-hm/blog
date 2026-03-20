---
title: "I Made AI Remember to Remember"
description: "Most AI memory is either always-on or ephemeral. The missing category is prospective: remember until a context arises, then forget."
pubDatetime: 2026-03-17T05:29:11.000Z
draft: false
tags:
  - ai-tools
  - systems
---

Most AI memory discussions fixate on retrieval. How do you store knowledge so you can find it later? Vector databases, RAG pipelines, embedding similarity — all variations on the same question: given a query, what's relevant?

But that's only one kind of remembering. There's another kind that gets almost no attention in AI agent design: **remembering to remember**. Psychologists call it prospective memory — the ability to recall an intention when a future context arises, not when you go looking for it.

The difference matters. "What's Terry's mortgage payment?" is retrospective — you search for it. "Next time we're triaging email, flag any Grammarly renewal nudges" is prospective — nothing to search for yet. The trigger hasn't happened. You need to recognise the context when it arrives and surface the intention at that moment.

## The gap

I run Claude Code as my primary interface for... most things. It has a memory system with several layers:

- **Rules** (CLAUDE.md) — always loaded, permanent, unconditional
- **Gotchas** (MEMORY.md) — always loaded, high-frequency patterns to avoid
- **Skills** — loaded on demand, permanent capabilities
- **Conversation** — ephemeral, gone after the session

None of these handle "when X happens, do Y, then forget about it." Rules are permanent. Conversation is too transient. Skills are for capabilities, not reminders. And MEMORY.md is for patterns, not one-off triggers.

So I added a fifth layer: a simple markdown file of context-triggered reminders.

```
- WHEN: email triage and seeing Grammarly emails → THEN: do NOT renew, lapsing Mar 28
- WHEN: working in ~/code/sopor → THEN: run migration for historical data
- WHEN: solving a client problem → THEN: ask "can I test this instead of arguing for it?"
```

The format is deliberately simple. `WHEN: <trigger context> → THEN: <action>`. Each entry gets checked when entering a matching context — email triage, a project directory, a type of thinking. After it fires and the action is taken, delete it.

## Why this works better than it should

Three properties make this disproportionately useful:

**It bridges sessions.** The subscription audit happened today. The email triage happens Thursday. Different sessions, different context windows. Without the prospective entry, Thursday-me has no idea that Tuesday-me decided to let Grammarly lapse. The decision falls through the crack between conversations.

**It's context-shaped, not time-shaped.** A calendar reminder fires at 3pm whether or not you're doing email. A prospective reminder fires when you're actually in the right context to act on it. "Flag Surfshark renewal" is useless during a coding session. It's perfectly timed during email triage.

**It self-destructs.** This is the key design choice. Prospective entries are temporary by definition. They exist to bridge a gap between a decision and its execution context, then disappear. No accumulation, no decay management, no staleness reviews. Fire once, delete, done.

## The pattern underneath

Every personal productivity system eventually reinvents prospective memory. GTD's "waiting for" list. Trigger-based reminders. "If I'm at the store, buy milk." The insight isn't that this is novel — it's that AI agent architectures systematically neglect it.

The industry conversation about AI memory is stuck on "how do we remember more?" The more interesting question is: how do we remember *at the right moment* and then *stop remembering*?

**Related:** [The Accidental Life OS](The Accidental Life OS) · [When Your Life OS Becomes the Life](When Your Life OS Becomes the Life) · [Hooks Are Life Infrastructure](Hooks Are Life Infrastructure) · [Eliminate the Reminder, Don't Schedule It](Eliminate the Reminder, Don't Schedule It) · [AI Agents Need Notebooks, Not Just Memories](AI Agents Need Notebooks, Not Just Memories)
