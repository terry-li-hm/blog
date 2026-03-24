---
title: "A Skill Is One Judgment"
description: "Skills are temporary by design. Judgment is whatever deterministic code can't automate yet."
pubDatetime: 2026-03-24T07:34:27.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

I spent a day auditing 38 AI skills in my personal agent system. The question: is the LLM adding genuine judgment, or just being an expensive shell?

Nine skills looked like they should be demoted to deterministic tools. On closer reading, only four actually were. The other five had real judgment buried inside -- interpreting free text, making quality calls, adapting to context.

The audit was useful. But the real insight came from pushing on what "judgment" means.

## Judgment is a moving boundary

A judgment is whatever deterministic code can't automate yet.

Today, "categorize this inbox" requires an LLM. Tomorrow a fine-tuned classifier handles it. The skill dies. A tool replaces it.

This means every skill is temporary by design. Skills have a lifecycle:

1. A judgment is discovered (something needs interpretation)
2. A skill wraps it (LLM applies reasoning)
3. Patterns emerge (the LLM keeps making the same calls)
4. Rules get encoded (patterns become deterministic logic)
5. A tool replaces the skill (no LLM needed)
6. The skill dies

The bias is always toward demotion. When I audited my 38 skills, four had already completed this lifecycle without anyone noticing. The LLM was running commands and formatting output -- zero judgment, pure plumbing. They should have been tools months ago.

## One judgment, bracketed by tools

Once you accept that judgment is the only thing a skill is for, the structure becomes obvious. Every useful skill had the same shape:

1. Gather context (deterministic)
2. Make one judgment call (LLM)
3. Act on the judgment (deterministic)

The gathering step was always a script that could run without an LLM. Read the calendar. Fetch the inbox. Check the readiness score. Pure data assembly.

The emit step was always a write that could happen without reasoning. Append a row. Post a tweet. Update a TODO. Pure state mutation.

The skill's entire value was the judgment in the middle. Everything else was a tool wearing a skill costume.

## The hierarchy

This gives you four clean categories:

- **Tool** -- deterministic, no LLM needed
- **Skill** -- one judgment per LLM call, bracketed by tools
- **Pipeline** -- multiple skills chained by deterministic tools
- **Conversation** -- pipeline where the human provides intermediate data

A conversation isn't an exception. Each turn is one judgment. The human's response between turns is just another "tool" providing data. The principle holds universally.

If a skill makes two distinct judgments, it's two skills. If it makes zero, it's a tool. No gray area.

## Why one judgment, not two

When a skill makes multiple judgments in one call, quality degrades by position. The first judgment gets full attention. The third gets whatever's left. This is well-known in prompt engineering, but most skill frameworks ignore it by letting skills grow into multi-page checklists.

Forcing one judgment per skill also makes each step independently testable. You can verify the gather tool produces correct data without invoking the LLM. You can verify the emit tool writes correctly without needing a judgment. The only untestable part is the judgment itself -- which is the irreducible core of what the LLM is for.

## The practical test

For any piece of AI automation, ask two questions:

1. What's the one judgment here?
2. Is it still a judgment, or has it become a pattern?

If you can't name the judgment, it's a tool. If the judgment has become predictable, it's ready to become a tool. Skills exist in the gap between -- and the gap is always shrinking.

I extracted 22 tools from what used to be monolithic skills. The skills got thinner and sharper. But more importantly, I now have a framework for knowing when a skill has outlived its purpose. The goal isn't to build more skills. It's to build skills that make themselves unnecessary.
