---
title: The Global Minimum of Governance
author: Terry Li
pubDatetime: 2026-03-18T12:00:00+08:00
modDatetime: 2026-03-18T12:20:00+08:00
slug: the-global-minimum-of-governance
featured: false
draft: false
tags:
  - governance
  - ai
  - banking
description: Governance isn't about catching every failure — it's about proving your process was reasonable when one happens. The real skill is knowing what to deliberately not monitor.
---

I was recently thinking about how to design a monitoring framework for a machine learning model in production. The naive approach is to monitor everything: accuracy metrics, score distributions, input drift, coverage rates, concentration patterns. More metrics feels more responsible. But a team checking fifteen metrics weekly starts ignoring all of them. A team checking three actually reads them.

So the question isn't "what should we monitor?" It's the harder one: **what should we deliberately choose not to monitor, and can we defend that choice?**

This is the same question in every governance framework I've seen — financial crime, credit risk, model risk, AI governance. The skeleton is always identical:

1. Define criteria upfront
2. Monitor consistently
3. Act on breaches
4. Document everything

The domain changes. The logic doesn't. And the value isn't in making the skeleton thicker. It's in knowing which bones are load-bearing.

I think of it like a doctor choosing a diagnostic panel. Blood pressure, cholesterol, heart rate — none of them *is* health. But each covers a distinct failure mode, and over-testing produces false positives that waste resources and dilute attention. The skill is the minimum panel where removing any single test would leave a real gap.

For the model I was thinking about, the "right" panel turned out to be three numbers. One caught upstream data changes. One caught model degradation. One caught the specific mechanism that mattered most to stakeholders. Each covered a different failure mode. None was redundant. Everything else we considered — aggregate accuracy metrics, distribution statistics, concentration patterns — was either derivable from these three or not actionable on a weekly cadence.

There's an uncomfortable truth underneath this: a lot of governance is theatre. Controls that exist to satisfy an auditor, not to prevent harm. But theatre serves a function — the act of checking forces a rhythm of attention. The person running the report has to look at the numbers. If something is wildly off, they'll notice.

The skill that matters isn't building better theatre. It's knowing which parts aren't theatre and making those sharper. Any consultant can recommend more controls. The one who can say "these three matter, these seven are costing you attention without reducing risk" — that person is actually helping.

Adding a control is always safe. Nobody gets fired for adding a checkbox. But every control costs attention, not just money — and attention is finite. Arguing *against* a control requires you to articulate the trade-off explicitly. That's where judgment lives.
