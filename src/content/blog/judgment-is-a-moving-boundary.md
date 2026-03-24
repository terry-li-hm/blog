---
title: "Judgment Is a Moving Boundary"
description: "The line between tool and skill isn't a property of the task. It's a property of how well you understand the task."
pubDatetime: 2026-03-24T07:47:14.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

When you build an AI agent, you decide which steps are tools and which are skills. Tools handle the predictable parts. Skills handle the parts that need judgment. Most people treat this as a property of the task -- inbox triage is a skill, date parsing is a tool. Fixed categories.

But the boundary moves.

## The same task migrates

A year ago, categorizing customer support tickets required genuine judgment. The categories were fuzzy, overlapping, context-dependent. An LLM had to reason about each one.

Six months later, the patterns stabilized. Ninety percent of tickets fell into five categories with clear signals. A fixed prompt with examples handled them. The remaining ten percent still needed judgment, but the task had split: ninety percent tool, ten percent skill.

This isn't a failure of the original skill. It's the natural lifecycle. The skill's job was to hold the space while the patterns were unclear. Once they crystallized, the judgment became a predictable transformation -- and predictable transformations belong in tools.

## Why this matters

If you think the tool/skill boundary is static, you build once and stop looking. Your agent accumulates skills that should have been demoted to tools months ago. Each one burns tokens on work that could be done cheaper, faster, and more reliably by something simpler.

If you think the boundary moves, you audit. You ask: is this output still surprising? Has the judgment become predictable? Can I describe the decision logic as a rule?

Every "yes" is a demotion candidate. Not because the skill was built wrong, but because you understand the problem better now.

## Judgment is the residual

Judgment is whatever remains after you've identified all the predictable parts. It's not a property of the task -- it's a property of your understanding of the task.

When you first encounter a problem, everything feels like judgment. As you learn the patterns, the judgment zone shrinks. The predictable parts peel off into tools. What's left is the genuine judgment -- the cases where context matters in ways you can't yet specify.

This residual might shrink to zero. Some tasks turn out to be entirely predictable once you understand them well enough. The skill dies, replaced by tools. Other tasks have an irreducible core of judgment that persists -- where context genuinely shifts in ways that resist pre-specification. Those skills survive.

## The audit question

For any step in your agent pipeline: is the output a function of the input, or a function of the input plus context that changes in unpredictable ways?

If it's just the input, it's a tool. Today. Regardless of whether an LLM implements it.

If it's the input plus shifting context, it's judgment. For now. Check again in three months.
