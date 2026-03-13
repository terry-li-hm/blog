---
title: "AI Evals: Why Teams Build Metrics Before They've Read a Trace"
description: >-
  Most teams build evaluators before reading a single trace. The sequence
  that actually works is the opposite: observe, categorise, then measure.
pubDatetime: 2026-03-06T21:00:00.000Z
tags:
  - evals
  - ai
  - engineering
  - production
  - llm
---

Most AI teams build their evaluation framework before they've read a single trace. This is the single most common reason AI evaluation programmes fail to improve the systems they're evaluating.

The failure mode is understandable. The team is under pressure to show that the system is working. A dashboard with a score gives stakeholders something to look at. "Our LLM-as-judge gives us 87% quality" sounds like progress. The problem is that the 87% is measuring something the team defined before they knew what "quality" actually meant for this system, under the conditions this system actually encounters. The score is real; what it represents is often not.

The sequence that actually works starts before any measurement. It starts with traces — raw conversations, actual inputs and outputs from the system in production or in controlled testing. It starts with reading them. A lot of them. Not sampling for patterns that match a pre-existing taxonomy; reading them openly, looking for things that feel wrong before you can articulate why they're wrong. This is what experienced practitioners call error analysis, and it's the step that most teams skip because it doesn't produce a deliverable.

Error analysis produces a failure taxonomy. After reading enough traces, patterns emerge: specific categories of output that are wrong in specific ways. The system consistently fails on cross-referential queries. It hedges excessively when the user wants a direct answer. It confabulates specific details when the retrieval step returns low-relevance context. The taxonomy is specific to your system, your users, your deployment context. It doesn't transfer from someone else's evaluation framework.

Only after the taxonomy is established does measurement become useful. The evaluation metric should be a measurement of the failure modes you've observed — not a general quality score, but a specific probe: how often does the system confabulate specific details when retrieval confidence is low? How does the hedge rate compare across different user intent categories? The metric has a clear interpretation because it was designed to measure something you've actually seen.

This sequence — observe, categorise, then measure — is systematically undervalued because each step is less legible than the one that follows it. Error analysis produces notes and categories, not a score. A taxonomy is harder to present to stakeholders than a dashboard. The discipline of doing the observational work before instrumenting it feels inefficient when the team could be building evaluators.

But the teams that skip to measurement first end up optimising for the metric rather than for the failure. They build evaluation frameworks that are internally consistent, beautifully instrumented, and measuring things that don't correspond to the failure modes that actually matter. They improve their scores without improving their systems, which is the most demoralising possible outcome for an evaluation programme.

The related failure: treating LLM-as-judge as an oracle rather than an instrument. A language model judge is a scaled version of the humans who calibrated it. It encodes their concept of quality for the cases they evaluated. It generalises imperfectly to cases that differ from the calibration set — especially rare failures, adversarial inputs, and the long tail of user behaviour that doesn't appear frequently in early production data. Using a judge that was calibrated on a specific set of examples to certify that the full system is working is a sampling problem: you've validated the judge on cases you've seen; you're using it on cases you haven't.

The practical implication is simple: don't trust an LLM judge on failure modes you haven't used to calibrate it. When a new failure mode appears — as they will, in any system with real users — add examples of it to the calibration set before the judge is used to evaluate it at scale.

None of this makes AI evaluation frameworks unnecessary. Systematic measurement is genuinely valuable, and the teams that have built rigorous evaluation infrastructure consistently outperform the ones that haven't. The point is that the value comes from measurement that's grounded in what the system actually does wrong, which requires doing the observational work first.

---

P.S. The fastest shortcut to better evals: spend two hours reading raw traces before building anything. The failure categories that emerge from that reading will be more useful than anything a generic evaluation framework can provide. The discipline is to do this before building the dashboard, not after.
