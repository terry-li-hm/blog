---
title: "AI Vendors Are Not Neutral Infrastructure"
description: "The DoD-Anthropic dispute reveals a new category of operational risk: foundation model vendors can unilaterally revoke access based on their own values, not just SLA violations."
pubDatetime: 2026-03-14T09:09:08.000Z
draft: false
tags: ["ai-governance", "banking", "risk", "vendor-risk"]
---

When AWS goes down, it's a technical failure. When Anthropic decides a use case violates its model constitution, it's a values judgment — and the customer has no appeal.

The DoD-Anthropic dispute this month revealed something that most enterprise AI risk frameworks aren't designed to handle: foundation model vendors retain a unilateral kill switch based on their own usage policies, not the customer's. That switch can be pulled not because of a contract breach or a security incident, but because the vendor disagrees with how you're using the model.

This is a new category of concentration risk. Not 'will the API go down?' but 'will the vendor decide my use case is unacceptable?'

For any organisation running compliance workflows, risk memo generation, or operational processes on a single foundation model API, the exposure is real. A vendor's policy team can suspend service in a way that an operational resilience framework built around IT outages simply doesn't anticipate.

The obvious response is multi-vendor architecture. But the more immediate fix is simpler: treat 'model constitution review' as a mandatory step in AI vendor due diligence — the same way you'd review SLAs or data processing agreements. What are the vendor's usage redlines? Who can invoke them? What's the continuity plan if access is withdrawn mid-deployment?

The deeper point is harder to operationalise: foundation model vendors are opinionated partners, not neutral infrastructure. When you build on one, their values become load-bearing constraints in your architecture. That's not a reason to avoid them. It's a reason to know exactly what you're accepting.

Current third-party risk frameworks were written for commodity IT vendors. They don't have a field for 'vendor model constitution' or 'usage policy trigger conditions.' That gap will close — the question is whether it closes before or after the first bank discovers it the hard way.
