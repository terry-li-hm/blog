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

A judgment is whatever can't be reduced to a predictable transformation yet.

The key word is "predictable," not "deterministic." An LLM can be a tool. Computer vision used to require specialized CNNs trained on labeled datasets. Now a vision-language model does it better, cheaper, with a prompt. The VLM is the tool -- it performs a predictable transformation. The implementation happens to be an LLM, but the operation is still tool-shaped: input goes in, predictable output comes out.

The distinction isn't "uses LLM" vs "doesn't use LLM." It's "predictable transformation" vs "novel reasoning." Structured extraction, classification, format conversion -- these are tools even when an LLM performs them. The LLM is just a cheaper, more flexible runtime than custom code.

Judgment is whatever remains after you've identified all the predictable parts. And that remainder keeps shrinking.

Today, "categorize this inbox" might require genuine judgment -- the categories are fuzzy, context-dependent, evolving. Tomorrow the patterns stabilize and an LLM-as-tool handles it with a fixed prompt. Or a fine-tuned classifier. The implementation doesn't matter. What matters is that the transformation became predictable.

This means every skill is temporary by design. Skills have a lifecycle:

1. A judgment is discovered (something needs novel reasoning)
2. A skill wraps it (LLM applies open-ended reasoning)
3. Patterns emerge (the LLM keeps making the same calls)
4. The transformation becomes predictable (fixed prompt, classifier, rule)
5. A tool replaces the skill (LLM or otherwise)
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

- **Tool** -- predictable transformation (code, LLM, classifier -- implementation irrelevant)
- **Skill** -- one judgment call (novel reasoning that can't yet be made predictable)
- **Pipeline** -- multiple skills chained by tools
- **Conversation** -- pipeline where the human provides intermediate data

A conversation isn't an exception. Each turn is one judgment. The human's response between turns is just another "tool" providing data. The principle holds universally.

If a skill makes two distinct judgments, it's two skills. If it makes zero, it's a tool. No gray area.

## Why one judgment, not two

When a skill makes multiple judgments in one call, quality degrades by position. The first judgment gets full attention. The third gets whatever's left. This is well-known in prompt engineering, but most skill frameworks ignore it by letting skills grow into multi-page checklists.

Forcing one judgment per skill also makes each step independently testable. You can verify the gather tool produces correct data without invoking the LLM. You can verify the emit tool writes correctly without needing a judgment. The only untestable part is the judgment itself -- which is the irreducible core of what the LLM is for.

## The practical test

For any piece of AI automation, ask two questions:

1. What's the one judgment here?
2. Has the output become predictable?

If you can't name the judgment, it's a tool. If the judgment has become predictable -- whether you automate it with code, a fixed prompt, or a fine-tuned model -- it's ready to become a tool. Skills exist in the gap between what's predictable and what isn't. That gap is always shrinking.

I extracted 22 tools from what used to be monolithic skills. The skills got thinner and sharper. But more importantly, I now have a framework for knowing when a skill has outlived its purpose. The goal isn't to build more skills. It's to build skills that make themselves unnecessary.
