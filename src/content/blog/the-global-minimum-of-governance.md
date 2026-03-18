---
title: The Global Minimum of Governance
author: Terry Li
pubDatetime: 2026-03-18T12:00:00+08:00
modDatetime: 2026-03-18T12:00:00+08:00
slug: the-global-minimum-of-governance
featured: false
draft: false
tags:
  - governance
  - ai
  - banking
description: Governance isn't about catching every failure — it's about proving your process was reasonable when one happens. The real skill is knowing what to deliberately not monitor.
---

I spent this week building a monitoring script for an AML model. The model hibernates low-risk alerts — sets them aside so investigators can focus on the cases that matter. My job was to design the weekly report that proves hibernation is still safe.

The naive approach is to monitor everything: STR rates, AUC, score distributions, customer accumulation, alert coverage, typology breakdowns. More metrics feels more responsible. But a team checking fifteen metrics weekly starts ignoring all of them. A team checking three actually reads them.

So the question isn't "what should we monitor?" It's the harder one: **what should we deliberately choose not to monitor, and can we defend that choice?**

This is the same question in every governance framework I've seen — AML, credit risk, model risk, AI governance. The skeleton is always identical:

1. Define criteria upfront
2. Monitor consistently
3. Act on breaches
4. Document everything

The domain changes. The logic doesn't. And the value isn't in making the skeleton thicker. It's in knowing which bones are load-bearing.

I think of it like a doctor choosing a diagnostic panel. Blood pressure, cholesterol, heart rate — none of them *is* health. But each covers a distinct failure mode, and over-testing produces false positives that waste resources and dilute attention. The skill is the minimum panel where removing any single test would leave a real gap.

For the hibernation monitor, that turned out to be three numbers: weekly alert volume, high-risk STR conversion rate, and low-risk STR conversion rate. Volume catches upstream changes. High-risk rate catches model degradation. Low-risk rate catches hibernation leaking. Each covers a different failure mode. None is redundant. Everything else we considered — AUC, score distributions, customer concentration — was either derivable from these three or not actionable on a weekly cadence.

There's an uncomfortable truth underneath this: a lot of governance is theatre. Controls that exist to satisfy an auditor, not to prevent harm. But theatre serves a function — the act of checking forces a rhythm of attention. The person running the script has to look at the numbers. If something is wildly off, they'll notice.

The skill that matters isn't building better theatre. It's knowing which parts aren't theatre and making those sharper. Any consultant can recommend more controls. The one who can say "these three matter, these seven are costing you attention without reducing risk" — that person is actually helping.

Nobody gets fired for adding a checkbox. Arguing against one requires you to articulate the trade-off explicitly. That's where judgment lives.
