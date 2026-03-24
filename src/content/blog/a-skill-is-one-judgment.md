---
title: "A Skill Is One Judgment"
description: "The sharpest definition of what an AI skill should be -- and why most are too big."
pubDatetime: 2026-03-24T07:34:27.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

I spent a day auditing 38 AI skills in my personal agent system. The question: is the LLM adding genuine judgment, or just being an expensive shell?

Nine skills looked like they should be demoted to deterministic tools. On closer reading, only four actually were. The other five had real judgment buried inside -- interpreting free text, making quality calls, adapting to context. The audit was useful, but the real insight came from what happened next.

## The pattern that emerged

Every useful skill had the same shape:

1. Gather context (deterministic)
2. Make one judgment call (LLM)
3. Act on the judgment (deterministic)

The gathering step was always a script that could run without an LLM. Read the calendar. Fetch the inbox. Check the readiness score. Pure data assembly.

The emit step was always a write that could happen without reasoning. Append a row. Post a tweet. Update a TODO. Pure state mutation.

The skill's entire value was the judgment in the middle.

## The definition

A skill is one unit of judgment, bracketed by tools.

That's it. If a skill makes two distinct judgments, it's two skills. If it makes zero judgments, it's a tool. The boundaries are tools -- deterministic operations that don't need an LLM.

This gives you a clean hierarchy:

- **Tool** -- deterministic, no LLM
- **Skill** -- one judgment per LLM call
- **Pipeline** -- multiple skills chained by tools
- **Conversation** -- pipeline where the human provides intermediate data

A conversation isn't an exception. Each turn is one judgment. The human's response between turns is just another "tool" providing data. The principle holds universally.

## Why this matters

When a skill makes multiple judgments in one call, quality degrades by position. The first judgment gets full attention. The third gets whatever's left. This is well-known in prompt engineering, but most skill frameworks ignore it by letting skills grow into multi-page checklists.

Forcing one judgment per skill also makes each step independently testable. You can verify the gather tool produces correct data without invoking the LLM. You can verify the emit tool writes correctly without needing a judgment. The only untestable part is the judgment itself -- which is the irreducible core of what the LLM is for.

## The biology that helped

I named my integrity-checking tool "integrin" after the transmembrane proteins that check whether a cell's attachment points to its environment still exist. The name forced me to study real integrin biology, which revealed five layers of checking I wouldn't have designed otherwise:

1. Does the attachment point exist? (basic resolution)
2. Does it respond when you pull on it? (active probing)
3. Which attachment points are shared by many cells? (blast radius)
4. Has the cell lost ALL attachments? (flag for retirement)
5. How many dependencies does each cell have? (fragility ranking)

Three of those five came directly from studying the biology. The name wasn't a label -- it was a theory that carried design implications.

## Practical outcome

I extracted 22 tools from what used to be monolithic skills. Five gather tools (afferent -- inward) and eight emit tools (efferent -- outward) now serve as the deterministic brackets around judgment. Any skill can compose them. Any health check can verify them. The skills got thinner and sharper.

The hardest part was admitting that most of what I'd built as "skills" was deterministic work wearing a skill costume. The LLM was running commands and formatting output -- not judging. Making that distinction precise changed how I think about every new piece of automation: what's the one judgment here, and what's just plumbing?
