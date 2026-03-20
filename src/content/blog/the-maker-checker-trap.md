---
title: "The Maker-Checker Trap"
description: "Most AI maker-checker implementations capture the correction but not the reason. That's a feedback loop with no signal."
pubDatetime: 2026-03-18T05:13:52.000Z
draft: false
tags:
  - ai
  - banking
  - governance
  - financial-services
---

Every bank deploying AI in a regulated process eventually lands on the maker-checker pattern. The AI generates an output — a draft SAR narrative, a credit assessment, a customer communication — and a human reviews it before it goes anywhere. The human is the quality gate. The pattern satisfies the regulator, satisfies the risk committee, and satisfies the operational risk team. Everyone can point at the human in the loop and say the system is controlled.

Here is what almost nobody notices: the checker is performing two jobs simultaneously. The first job is quality control — catching errors before they reach customers or regulators. The second job is data labelling. Every time a checker overrides the AI's output, they are generating a training signal. The original output, the correction, and the final approved version form a labelled example that could teach the model to be better next time.

The first job gets all the attention. The second job barely gets acknowledged. And the second job is where the compounding value lives.

When a compliance analyst rewrites a paragraph of a model-generated SAR narrative, two things have happened. The obvious thing: a bad paragraph was caught. The less obvious thing: the system now has a concrete example of what "good" looks like for that specific type of case, from someone who knows. If the correction is captured in a structured way — not just the amended final text, but the reason the original was wrong — the model can learn from it. Over time, the corrections get fewer. The model converges on what good output looks like for this institution, this jurisdiction, this analyst population.

But most implementations capture the *what* and not the *why*. They store the final approved version. They might store a diff against the original. They almost never store a structured reason for the override — was the tone wrong, the legal citation incorrect, the risk characterisation too aggressive, the customer context missing? Without a taxonomy of rejection reasons, the feedback loop generates volume but not signal. The model sees that its output was changed. It cannot learn why.

This is the maker-checker trap: the pattern looks like it creates a learning system, but without structured exception capture, it creates a correction system that never compounds. The checker catches the same category of error on Tuesday that they caught on Monday. The AI makes the same category of mistake next week that it made this week. The human overhead stays constant or grows with volume, which is the opposite of what you wanted when you deployed AI in the first place.

The fix is a design decision, not a technology decision, and it needs to happen on day one. When scoping a maker-checker implementation, the override capture mechanism — what was wrong, why it was wrong, what category of error it represents — is a first-order design requirement. It belongs in the same conversation as model architecture and integration design. Retrofitting structured exception logging into a system that was designed to store only the final approved output is painful, slow, and often blocked by the same legacy infrastructure that made the AI deployment attractive in the first place.

There is a deeper problem underneath this one. The maker-checker pattern, as typically implemented, optimises for the wrong thing. It optimises for the checker catching errors, which means the system's success metric is "low error rate in final outputs." That is necessary but insufficient. The metric that actually matters is "declining error rate over time" — evidence that the system is learning from its corrections, not just being corrected. If the error rate in the AI's raw output is flat quarter over quarter while the checker catches everything, you have an expensive spellchecker, not a learning system.

The institutions that get this right tend to discover it accidentally. An analyst notices that the model's output improved in a specific area after a batch of corrections with detailed notes. Someone investigates and realises the structured feedback was being ingested. The improvement was real. Then they look at the areas where feedback was unstructured — just approvals and overrides with no annotation — and find the model performance is flat. The evidence builds itself, but only if someone is looking.

Rules-based automation does not have this property. When you override a rule, you manually update the rule. There is no compounding learning loop. The maker-checker feedback mechanism is specific to ML and GenAI systems, and it is one of their genuine structural advantages over rules-based approaches. But only if the capture mechanism is designed for it. Most are not.

The question to ask of any maker-checker deployment: six months from now, will the checker's workload be lower because the system learned, or the same because it did not? If the answer is "the same," the checker is not checking — they are subsidising a system that refuses to improve.

**Related:** [Human-in-the-Loop Is an Architecture Decision](Human-in-the-Loop Is an Architecture Decision) · [Human Oversight Doesn't Scale](Human Oversight Doesn't Scale) · [Three Things AML AI Gets Wrong](Three Things AML AI Gets Wrong) · [LLM Evals Aren't Data Science](LLM Evals Aren't Data Science) · [AI Evals: Metrics Before Diagnosis](AI Evals: Metrics Before Diagnosis)
