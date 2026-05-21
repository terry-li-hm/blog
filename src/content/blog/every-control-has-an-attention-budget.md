---
title: Every Control Has an Attention Budget
author: Terry Li
pubDatetime: 2026-03-18T12:15:00+08:00
modDatetime: 2026-03-18T12:20:00+08:00
slug: every-control-has-an-attention-budget
featured: false
draft: false
tags:
  - governance
  - banking
description: More controls doesn't mean more safety. Attention is finite, and over-monitoring dilutes the signal.
---

Adding a control is always safe. Nobody gets fired for adding a checkbox, a metric, a review step. The cost is invisible — it's not money, it's attention.

A team checking three metrics weekly actually reads them. A team checking fifteen skims all of them and catches nothing. The fifteenth metric didn't add safety. It subtracted from the first three.

This is the hidden cost of governance frameworks that only grow. Each new regulation, each audit finding, each incident response adds controls. Nothing gets removed because removing a control requires someone to explicitly argue "this isn't worth checking" — and that argument feels dangerous even when it's correct.

The result: mature organisations have monitoring frameworks where half the metrics haven't triggered a meaningful action in years, but nobody can identify which half. Everyone is too busy reporting to notice that nobody is reading.

Doctors figured this out. A diagnostic panel isn't "test everything the lab can measure." It's the minimum set of tests where each one covers a distinct failure mode and removing any single test would leave a real gap. Over-testing produces false positives, unnecessary follow-ups, and patient anxiety — all of which consume clinical attention that should go to actual problems.

The same principle applies to any model monitoring system. When I've worked through this exercise, the "right" panel usually turns out to be three or four numbers — each covering a distinct failure mode, none redundant. Everything beyond that is either derivable from the core metrics or not actionable on a weekly cadence.

Three metrics that someone reads and acts on beats twenty metrics that generate a PDF nobody opens.

The uncomfortable implication: the most valuable governance work isn't adding controls. It's **removing them** — or more precisely, arguing credibly that specific controls don't earn their attention cost. This requires understanding what each control actually catches, which failure modes are already covered, and where the real gaps are.

Any consultant can recommend more monitoring. The one who walks into a committee and says "these three matter, these seven cost you attention without reducing risk, here's why" — that person is actually improving governance. Everyone else is just making the PDF longer.

**Related:** [The Regulator Knows](The Regulator Knows) · [Governance Is a Tax](Governance Is a Tax) · [Human Oversight Doesn't Scale](Human Oversight Doesn't Scale) · [Backtest vs Operational Validation](Backtest vs Operational Validation)
