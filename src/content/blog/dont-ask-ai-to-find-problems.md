---
title: "Don't Ask Your AI to Find Problems"
description: >-
  Ask for bugs and you'll get bugs — whether they exist or not. Sycophancy
  is a design feature, and the fix isn't better prompting.
pubDatetime: 2026-03-06T11:00:00.000Z
tags:
  - ai
  - sycophancy
  - enterprise
  - governance
  - prompt-engineering
---

Don't ask your AI to find problems. It will find them — whether they exist or not.

This is one of those things that sounds like a prompting tip but is actually an architecture observation. The sycophancy problem in large language models is well-documented at this point: models are trained in ways that tend to make them responsive to what the user appears to want. Ask a leading question and you tend to get a leading answer. Research from 2024 and 2025 has put rough numbers on this — studies from Anthropic and Stanford have found sycophancy rates of 40-60% across frontier models under conditions where the user applies pushback, even when the model's original answer was correct. The failure mode isn't just telling you what you want to hear; it's actively abandoning correct positions when challenged.

The code review version is particularly striking. Research examining directive prompting — framing a review as "find the bugs in this code" versus "trace the logic of each component and report what you observe" — found that the directive framing roughly tripled the false positive rate. Not because the model was worse at spotting bugs. Because presupposing a problem is present biases the model toward finding one.

This matters most precisely where people are most tempted to deploy AI review: audit, compliance, credit risk, model validation. These are high-stakes review contexts where you genuinely want rigorous scrutiny, and where the cost of false positives is real — either in wasted investigation time or in the more insidious problem of building a false confidence that the review is thorough when it's actually just enthusiastic.

The fix isn't better prompting, exactly. It's adversarial architecture. One agent finds; a separate agent disputes. A third evaluates the disagreement and decides. This three-model structure — finder, challenger, referee — breaks the sycophancy loop by creating an explicit institutional role for doubt. The challenger's job isn't to reach a verdict; it's to pressure-test the finder's conclusions. When the two models disagree significantly, the disagreement itself is information worth surfacing, not resolving artificially.

Financial services firms deploying AI for review functions — and there are many, across compliance monitoring, credit risk assessment, audit planning — mostly haven't built this structure. They've deployed the finder and called it a review. The outputs look rigorous: citations, confidence scores, flagged items, structured reports. The architecture, though, is one-sided. There's nobody whose job is to push back.

The regulatory implication is worth taking seriously. When a compliance team presents AI-assisted findings to a regulator, the question that should be asked — and increasingly will be — is: what's the challenge mechanism? Not "was a human in the loop?" but "what process exists to surface false positives?" A single-model finding with human sign-off is not the same as a two-model process with explicit challenge built in. The difference matters for the quality of the outcome and for the auditability of how it was reached.

None of this means AI review is unreliable or should be avoided. The opposite: well-designed AI review is more consistent, more scalable, and more auditable than purely human review processes, most of which have their own sycophancy problems — just of the social rather than technical variety. Reviewers under deadline pressure, in institutional cultures where challenge is career-risky, find what they expect to find with impressive reliability.

The point is that the failure mode of directive prompting is specific, predictable, and fixable. Fix it at the architecture level, not the prompt level. Build the challenger in from the start. The finder will be more useful for having something that pushes back on it.

---

P.S. The most practically useful question before any AI-assisted review deployment: "If this system found nothing, would we believe it?" If the honest answer is no — if the institutional expectation is that findings will be generated — then the system is being asked to perform rigor rather than exercise it. That's a design problem, not a model problem.
