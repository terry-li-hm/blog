---
title: "Meta-Skills Are the Multiplier"
description: >-
  We cut from 181 skills to 35 and added a 15-row routing table. Behavior
  improved across the board. The lesson: meta-skills compound, tool wrappers
  just add.
pubDatetime: 2026-03-18T15:00:00.000Z
draft: false
tags:
  - ai-agents
  - architecture
  - knowledge-management
---

The realization happened mid-session. I was debugging why the agent kept making the same class of mistake — wrong tool for the situation, wrong framing, wrong level of confidence — and I was looking at the skill list trying to figure out what was missing. We had 181 skills at that point.

The problem wasn't missing skills. The problem was that 181 skills is a flat index competing for the same finite token budget, and most of those skills were doing the same thing: wrapping a CLI with a note about which flags to use. "Use fasti for calendar operations." "Use poros --matrix for journey time comparisons." "Use adytum save with the Agents vault." Practical. Correct. Completely additive. Each one improved one specific situation, and none of them touched anything else.

When I went through the list asking "which of these actually changes how the agent thinks across interactions?" the answer was uncomfortable. Maybe a dozen. Everything else was tool documentation that belonged closer to the tool itself, not competing in the always-loaded context for attention it rarely needed.

The insight is obvious in retrospect: meta-skills and practical skills are different categories of thing. A practical skill — how to call fasti, how to format a Telegram message, how to search the vault — adds value exactly when that specific situation arises and nowhere else. A meta-skill — how to decide when to delegate vs act in-session, how to debug a tool silently failing, how to evaluate whether a search returned enough — adds value in every interaction where that cognitive operation is relevant. The first category is additive. The second is a multiplier.

This prompted a different question: what are all the cognitive operations the agent actually performs, and where does it currently go wrong on each of them? The answer to that turned into what I now call the "How to Think" table — fifteen rows mapping situation types to the right cognitive operation. It covers things like: when to trust the first search result vs verify across sources; how to distinguish "task complete" from "task looks complete"; when a correction signals a local error vs a systematic misconception; how to handle a tool returning empty output (verify the path exists before concluding "no results"). None of these are about specific tools. All of them are about the quality of reasoning that touches every tool interaction.

That table now lives in the always-loaded config, not in the skill index. The distinction matters. Skills load at session startup and get served by a routing mechanism that matches natural language triggers — the agent retrieves them on demand when the situation fits. The "How to Think" table is different: it's not triggered by a situation, it's the prior through which every situation is processed. It doesn't belong in the on-demand index. It belongs in the thing that's always running.

After the cut — 181 skills down to 35, most of the tool wrappers moved closer to the tools themselves or folded into a single reference document — the behavior improved in exactly the ways the meta-routing table targeted. Fewer silent failures. Better calibration on when to search vs when to act on what's already in context. Fewer situations where the agent confidently completed the wrong task. The specific skills that remained got more reliable too, because the routing was cleaner and there was less noise in the index.

The lesson I keep coming back to: if you're building a skill system for an AI agent and most of your skills describe how to call specific tools, you're building an additive system. It'll get incrementally better at each specific tool and nowhere else. The leverage is in the other category — the skills that change how the agent reasons about the situation before it picks up any tool at all. Those compound.

One practical test for distinguishing the categories: would this skill have improved the last three interactions where something went wrong, or just one of them? If the answer is one, it's probably tool documentation. If the answer is all three, you've found a multiplier.

---

P.S. The right home for tool knowledge isn't the skill index — it's as close to the tool as possible. Inline in the tool's help output, or in a reference doc that the agent pulls when working with that tool. The skill index should be a routing table for cognition, not a collection of flag documentation.
