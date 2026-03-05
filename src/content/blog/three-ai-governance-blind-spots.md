---
title: "Three AI Governance Blind Spots No Framework Covers"
description: >-
  Most AI governance frameworks are technically-focused risk checklists.
  Three structural risks are missing from almost all of them.
pubDatetime: 2026-03-06T21:30:00.000Z
draft: false
tags:
  - ai-governance
  - financial-services
  - vendor-risk
  - responsible-ai
  - enterprise-ai
---

The major APAC AI governance frameworks — HKMA's guidance, MAS AIRM, the emerging APAC practitioner consensus — are serious documents. They address model risk, data governance, human oversight, explainability, and fairness in ways that are operationally specific and genuinely useful. Banks following them will be better governed than banks that aren't.

Three structural risks don't appear in any of them.

**Geopolitical vendor availability risk**

Enterprise AI deployments are now materially dependent on a small number of frontier model providers, most of whom are US-headquartered and subject to US export controls, sanctions regimes, and government direction. The probability of any specific government action affecting a specific deployment is low. The consequence — operational disruption to systems that may be deeply integrated into critical workflows — is potentially severe, and the remediation timeline for migrating a deeply integrated AI deployment is measured in months, not days.

Standard business continuity planning addresses vendor outages and service degradation. It does not typically address the scenario where a vendor becomes legally inaccessible in a regulated market. This risk is qualitatively different from SLA-type vendor risk, and it requires a different governance response: diversification of model providers where feasible, migration planning for critical applications, and explicit board-level acknowledgment of the concentration.

The Hong Kong context is particularly acute. The regulatory environment requires AI systems to meet specific governance standards; if the vendor underpinning a key system becomes inaccessible and the fallback doesn't meet those standards, the operational and regulatory consequences compound.

**AI total cost of ownership repricing risk**

Current AI pricing reflects market-share capture at subsidised rates. The leading frontier model providers are pricing below what sustainable economics would require, at scale, absent the specific conditions of the current competitive environment. This is not conjecture — the cost structures of these models at current pricing are not publicly disclosed, but the market dynamics (massive capital raises, aggressive pricing competition, stated prioritisation of deployment over near-term revenue) are consistent with subsidised pricing as a strategy.

The repricing risk is not that any specific provider will immediately raise prices dramatically. It's that the total cost of ownership for enterprise AI deployments is currently being calculated at rates that may not be sustainable, and that switching costs — once AI is deeply integrated into workflows, proprietary data is used for fine-tuning, and internal expertise is built around specific provider APIs — create lock-in that makes repricing painful.

Governance frameworks should require that AI deployment business cases include sensitivity analysis on a 3-5x pricing increase, and that critical AI applications have a documented migration path that's been tested to some level of readiness.

**The alignment schism and reputational vendor risk**

As documented in the preceding post on vendor values, the leading AI providers are increasingly differentiated by what they will and won't build, not just by what they can build. For financial institutions with ESG commitments, responsible technology frameworks, or stakeholder accountability to investors who care about these things, the implicit co-signing of vendor values through procurement decisions creates a reputational risk exposure that most governance frameworks don't address.

This isn't about any specific provider being good or bad. It's about the gap between the institution's stated values and the implicit values of its technology supply chain — a gap that is closing in other supply chain contexts (environmental sourcing, labour standards) and will close in AI vendor selection too, under regulatory and investor pressure.

The governance response is to build explicit values assessment into vendor selection, document the reasoning, and establish a monitoring process for material changes in vendor positions.

None of these three risks require dramatic governance overhauls. Each requires a relatively specific addition to existing frameworks: a geopolitical availability assessment in vendor risk; a repricing scenario in cost modelling; a values alignment check in vendor due diligence. The cost of adding them is low. The cost of encountering them unprepared is not.

---

P.S. The most useful question for surfacing these risks in an existing governance programme: "Which of our AI systems would fail to meet our governance standards if the primary vendor became inaccessible tomorrow, and what's the remediation plan?" If the answer is unclear, the geopolitical and repricing risks are probably not being managed.
