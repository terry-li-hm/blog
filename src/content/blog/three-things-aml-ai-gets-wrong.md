---
title: "Three Things AML AI Models Still Get Wrong in 2026"
description: >-
  The models aren't the problem. The operating models are. Three structural
  failures in AML AI from years building these systems inside a bank.
pubDatetime: 2026-03-06T15:00:00.000Z
tags:
  - aml
  - banking
  - ai
  - financial-services
  - model-risk
---

The models aren't the problem. The operating models are.

After years building AML AI in production at a bank — including the bank's first ML model for alert prioritisation and participation in the HKMA's GenAI Sandbox — the failures I've seen aren't primarily about model capability. They're structural. The same three problems appear across deployments with sufficient regularity that they're starting to look less like implementation mistakes and more like design assumptions that need to change.

The first is the explainability gap. AML models are good at scoring. They're not good at generating the kind of reasoning that a SAR narrative requires. A model that flags a transaction with a high risk score and a list of contributing features has done the detection work. But the compliance officer writing the SAR needs to describe, in plain language, why this transaction is suspicious in a way that a financial intelligence unit analyst can act on. "Feature importance scores" is not that description.

The gap between model output and SAR rationale is not a prompting problem. It's a documentation design problem. The model was built to classify; nobody specified that it also needed to generate investigation-ready narratives. Adding a language model to convert feature scores into narrative text is a patch, not a solution. The solution is building the narrative generation requirement into the system design from the start, which requires knowing — before you build the model — what a usable SAR narrative looks like and what information it requires.

The second failure is label quality. Historical human decisions are a poor training signal for AML work, and the reasons are structural. The decisions that became labels — alerts that were investigated and dispositioned — reflect the judgment of individual analysts operating under time pressure, with information that was available at the time but incomplete. They also reflect the biases and blind spots of the compliance teams that made them: what patterns they were trained to look for, what customer types were disproportionately scrutinised, what investigation depth was typical given the resourcing. Training a model on these labels bakes in the historical decision-making, not the underlying ground truth.

The ground truth — whether money laundering actually occurred — is rarely available as a label. So models trained on human-generated labels tend to model human judgment, which has the same systematic errors that human judgment has, just executed faster and at scale. The solution is more laborious than it sounds: curating training data with explicit attention to label quality, using regulatory outcomes and prosecutions where they're available, and designing feedback loops that catch systematic errors before they compound.

The third is population drift, and it's the one that most actively undermines deployed models over time. Criminal methodologies adapt. The patterns a model was trained on reflect the patterns that were prevalent when the training data was collected. Criminals who encounter increased scrutiny change their behaviour; the new behaviour may not match the training distribution at all. Meanwhile, the model's performance appears stable on the evaluation metrics it was built for, because those metrics measure accuracy on the historical distribution, not on the current one.

Detecting drift in AML is genuinely hard because you don't have clean ground truth to measure against. The proxy is monitoring false negative rates through case outcomes — when investigations that the model rated low-risk turn out to involve actual suspicious activity — but this requires investing in feedback infrastructure that most institutions treat as an afterthought rather than a core system requirement.

None of these problems are unsolvable. All three have known mitigations. The challenge is that the mitigations require decisions that need to be made at the system design stage, not retrofitted after deployment. An explainability capability that's designed in is fundamentally different from one that's added later. Label quality programmes that run from the start produce different training data than ones that start after the model has already been trained on poor labels. Drift detection infrastructure that's built in from deployment is different from monitoring added in response to a compliance finding.

The framing that I keep coming back to is this: AML AI is not primarily a modelling challenge. It's an operating model challenge. The technical components — the model architecture, the feature engineering, the scoring logic — are the parts that get the most attention and are probably the most solvable. The operating model components — how human judgment integrates with model output, how labels are generated and curated, how drift is detected and addressed — get less attention and cause more failures.

---

P.S. The question I'd ask any vendor selling AML AI to a bank: "Show me your feedback loop architecture." Not the model card. The feedback loop. How do investigation outcomes flow back to model improvement? If the answer is vague, the model will be less accurate in two years than it is today, regardless of its performance at launch.
