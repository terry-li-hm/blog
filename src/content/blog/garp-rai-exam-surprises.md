---
title: "What Surprised Me Studying for the GARP Responsible AI in Finance Exam"
description: >-
  I expected the hard parts to be the technical sections. They weren't.
  The governance sections were harder, and more useful.
pubDatetime: 2026-03-06T15:30:00.000Z
draft: false
tags:
  - responsible-ai
  - ai-governance
  - financial-services
  - model-risk
  - garp
---

I expected the hard parts to be the technical sections. They weren't.

Studying for the GARP Responsible AI in Finance exam with a background in ML and financial services, the technical content felt familiar: explainability methods, fairness metrics, adversarial robustness, model validation frameworks. Important material, but not surprising. The governance sections were different. They required thinking about AI accountability in ways that production deployment rarely surfaces explicitly, and the gaps they revealed were more useful than any technical concept I revisited.

Three things surprised me enough to change how I think about the work.

The first was the framing of accountability as a design question rather than a post-hoc one. The exam material returns repeatedly to the idea that who is responsible when a model fails isn't determined at the point of failure. It's determined earlier — by how the system was documented, approved, and monitored before it was deployed. If your governance trail doesn't answer the accountability question in advance, the answer at failure defaults to "everyone and no one," which is the same as no accountability at all.

I knew this abstractly. The exam forced me to think through what it means concretely. A model risk framework that specifies approval chains and sign-off requirements but doesn't name accountable individuals — by role, not just by function — hasn't actually assigned accountability. A monitoring programme that generates reports but doesn't specify who is responsible for acting on them doesn't create accountability. The governance documentation that protects an organisation and the people in it is specific about who is responsible for what, before anything goes wrong.

The second surprise was the practical complexity of fairness in financial services contexts. The academic framing — demographic parity, equalised odds, individual fairness — is reasonably well-established. The exam material is where it gets complicated: a model can satisfy demographic parity on approval rates while embedding historical discrimination at the feature level, if the features used are correlated with protected characteristics in ways that reflect past biased decisions. The feature engineering is doing the discriminatory work that the model-level metric doesn't catch.

This is familiar to anyone who has worked on model fairness in a financial services context, but the exam made me think more carefully about where the audit needs to happen — not just at the model output level, but at the training data and feature selection levels. The governance question isn't only "is the model fair?" It's "at which stage of the pipeline could unfairness be introduced, and is that stage being examined?"

The third surprise was the sophistication of APAC regulators relative to their reputation in global AI governance conversations. The EU AI Act dominates the narrative, and not without reason — it's comprehensive and will shape global practice. But the HKMA and MAS guidance for AI in financial services is more operationally specific for the problems financial services firms actually face. The GenAI sandbox model — deploy under supervision, learn from production, then codify guidance — produces guidance that practitioners can actually implement, because it's calibrated against real deployment experience rather than anticipated theoretical risk.

This doesn't make APAC regulations better in some absolute sense. It means they're often better answers to the specific question "how should a financial services firm actually govern this AI deployment?" The exam material reflects this, and it's one of the reasons the credential is worth considering for anyone whose work intersects with AI governance in financial services — not as a credential signal, but as a structured way to find the gaps in your thinking that production experience doesn't always surface.

The exam is in April. Whether or not you're sitting it, the governance framing it forces is worth working through independently: do your AI systems have named individuals accountable for their outcomes? Is fairness being assessed at the pipeline stages where it could be compromised, not just at the output? And are you learning from your regulatory environment or only from the regulations that get global attention?

---

P.S. The most practically valuable thing about a structured exam in a domain where you're already a practitioner is that it forces engagement with the parts you've been avoiding. Production experience builds deep knowledge in specific areas and leaves systematic gaps elsewhere. The governance sections I found hardest were exactly the sections where my production experience had been thinnest.
