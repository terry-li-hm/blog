---
title: "Save Conclusions, Not Just Rules"
description: "When an answer requires multi-step reasoning to reach, save the conclusion — a fresh start won't reliably reproduce the chain."
pubDatetime: 2026-03-17T04:39:46.000Z
draft: false
tags:
  - knowledge-management
  - ai-tools
---

Knowledge systems love rules. "Always do X when Y." Rules are clean, composable, easy to store. But some of the most valuable knowledge isn't a rule — it's a conclusion that took real work to reach.

I asked my AI assistant what to eat while on antibiotics. Its first answer was congee — the reflexive "sick person food" answer. Wrong. Congee is mostly water and starch. Low protein, no probiotic support, poor stomach buffering. It took several rounds of reasoning through medication interactions, nutritional needs, and recovery priorities to land on ginseng chicken soup with fermented kimchi sides — protein and fat for stomach buffering, anti-inflammatory ginseng, probiotics to counter gut flora disruption.

The insight: a fresh session starting from scratch would likely produce "congee" again. The reasoning chain that got past the naive answer was non-trivial and non-obvious. If you only save the rule ("consider health context when recommending food"), you lose the hard-won conclusion. A future instance has to re-derive it, and re-derivation is unreliable — it might take a different path, or stop at the first plausible answer.

**The heuristic:** if the answer required a multi-step reasoning chain to reach, and a fresh start wouldn't reliably reproduce it, save the conclusion alongside the rule. The rule tells you *when* to think. The conclusion tells you *what thinking already produced*.

This applies beyond AI systems. Personal notes, team wikis, decision logs — anywhere knowledge persists across context switches. We over-index on capturing process ("here's how to think about X") and under-index on capturing results ("here's what thinking about X actually produced"). Both matter. Process without conclusions forces re-derivation. Conclusions without process become cargo cult.

The test is simple: could a capable person, given only the rule, reliably arrive at the same conclusion? If the answer is "probably, but not certainly" — save the conclusion too.
