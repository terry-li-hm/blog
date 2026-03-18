---
title: "Optimize for Routing, Not Tokens"
description: >-
  With 1M context windows, token savings are rounding error. The real metric
  is P(right tool | user intent) — does your agent reach for the right tool
  at the right moment?
pubDatetime: 2026-03-18T15:00:00.000Z
tags:
  - ai-agents
  - architecture
  - llm
draft: false
---

The session started as a token-reduction exercise.

I had 181 skills loaded into Claude Code and someone pointed out — correctly, on the surface — that this was a lot of context to burn on every session. The instinct was sound: audit the skill set, consolidate redundant ones, defer what doesn't need to be always-loaded. Fewer skills, smaller context, faster responses. The standard systems-thinking move.

Halfway through the restructuring, something odd surfaced. Every time I pruned a skill, I noticed the routing degraded slightly. Not the skill's functionality — that was still there, behind a dedicated command. The degradation was in discovery. Skills I'd removed from the always-loaded set stopped getting invoked organically, even when they were the right tool for the job. The model wasn't reaching for them because it didn't know they existed in the moment they were relevant.

The instinct to optimize for tokens had been solving the wrong problem.

Here's the frame shift: with a 1M context window, 181 skills is not meaningfully expensive. Call it 20K tokens for skill descriptions — that's 2% of available context. Optimizing that is rounding error. What's not rounding error is the probability that the right tool gets invoked when the user needs it. Every misroute is a degraded interaction. Every "you could have used X here" moment is a routing failure. Those compound in a way that token overhead doesn't.

P(right tool | user intent) is the metric that matters. Every architectural decision should be evaluated against it.

The tool-index is a good example of what this means in practice. It's a 109-line always-loaded document that does nothing except tell the model what tools exist and when to reach for each one — one-line descriptions, trigger phrases, notes on which tools overlap and how to choose between them. On a pure token-accounting view, it's waste: it doesn't implement any behavior, it just occupies context. But removing it causes routing failures. The model starts conflating tools with similar names, forgetting the specialist tool exists and defaulting to the general one, or asking the user which approach to take when the index would have answered that silently.

Those 109 lines are load-bearing. They're not wasted context; they're routing infrastructure.

The principle that shakes out is simple: auto-load what improves routing, defer what doesn't. Not "auto-load the most important skills" — importance is a different dimension. The question is specifically whether the always-loaded presence of this thing changes which tool gets selected at decision points. If yes, it belongs in always-loaded context. If no — if the skill is only ever invoked explicitly, if the user always knows to ask for it by name — defer it. The saving is real and the routing cost is zero.

This also changes how you think about skill descriptions. The description isn't documentation for the user; it's routing signal for the model. A description that accurately captures when to reach for this tool is more valuable than one that accurately describes what the tool does. These overlap but they're not the same. "Use for creating and publishing garden posts" routes better than "manages ~/notes/Writing/Blog/Published/ via the sarcio CLI." The former describes intent; the latter describes implementation. The model routes on intent.

Where I landed after the restructuring: the skill set didn't shrink nearly as much as I expected. A handful of genuinely redundant skills got consolidated. A few truly specialist tools got deferred. But most of the 181 stayed, because most of them were routing signal I couldn't afford to lose. The real outcome was cleaner descriptions and better-calibrated trigger phrases — not a smaller context footprint.

The token savings were rounding error. The routing accuracy improvement was the whole point.
