---
title: "The Fairness Impossibility Is Not a Bug"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-governance, fairness, consulting]
draft: false
description: "Every AI fairness debate is secretly a values debate disguised as a technical question."
---

Every AI fairness debate I've sat through eventually hits a wall. The data scientists say the model is fair. The compliance team says it's not. The regulator wants "bias testing." Nobody agrees on what they're measuring. This is usually diagnosed as a communication problem, or a maturity problem, or a problem with the data scientists not explaining themselves clearly enough.

It's not. It's a math problem. And the math has been settled since 2017.

## What each fairness measure actually asks

Start with a credit scoring model. A bank uses it to approve or deny personal loan applications. Two demographic groups in the applicant pool, with different historical default rates — say 30% for one group, 60% for the other. That difference in base rates is the key fact. Hold onto it.

Now, what does "fair" mean?

One answer: **approve equal proportions from each group**. If 45% of Group A gets approved, 45% of Group B should too. This is demographic parity. It doesn't look at whether the approved applicants actually repay — it just counts the approval rates. It's the measure you'd reach for if you thought equal access was the point.

A second answer: **among the people the model says "yes" to, equal proportions should actually be creditworthy**. If the bank approves 100 people from each group, roughly the same number should repay. This is predictive rate parity (or precision parity). It's the measure you'd reach for if you thought every loan approval should carry equal confidence. A "yes" should mean the same thing regardless of who you're saying it to.

A third answer: **among the people who are genuinely creditworthy, the model should detect them at equal rates**. If Group A has 600 creditworthy applicants and Group B has 300, the model should approve roughly the same share of each. This is equal opportunity. It asks: are we letting qualified people through at the same rate? It's the measure you'd reach for if you thought the harm of wrongly denying a good borrower was the central concern.

Three reasonable answers. Three different questions. And here is where it gets mathematically uncomfortable: **you can only satisfy two of them at the same time**.

## The impossibility

Researcher Alexandra Chouldechova showed in 2017 that when two groups have different base rates — different underlying frequencies of the outcome you're predicting — it is algebraically impossible for a model to simultaneously satisfy predictive rate parity and equalized odds (which combines equal opportunity with equal false positive rates), unless the model is perfect. No real model is perfect. Therefore, you will always be trading one against another.

The mechanism is Bayes' theorem rearranged. Precision is a function of the base rate, the false positive rate, and the false negative rate simultaneously. Once you fix two of those, the third is determined. You cannot free-choose all three across groups with different base rates — the math simply doesn't allow it.

What this means concretely: if you lower the approval threshold for Group B to increase their approval rate (chasing demographic parity), you let through more non-creditworthy Group B applicants — precision drops for that group. If you raise the threshold for Group B to improve precision (chasing predictive rate parity), you deny more genuinely creditworthy Group B applicants — equal opportunity worsens. Every adjustment trades one measure against another. There is no threshold that satisfies all three.

Kleinberg, Mullainathan, and Raghavan independently showed a related result the same year: calibration — the property that a risk score of 0.7 actually means a 70% default probability, equally true for both groups — conflicts with equalized odds whenever base rates differ. A perfectly calibrated model implies different optimal thresholds per group. Equal error rates across groups forbids that.

## Why this matters in practice

Take AML. A bank's transaction monitoring model flags suspicious activity for human review. Two customer segments: large corporate correspondent banking clients and retail remittance customers sending money internationally.

The model flags 12% of remittance flags as genuine (12% precision) but 31% of correspondent banking flags as genuine. A compliance analyst reviewing a remittance flag has less than half the hit rate. That's a predictive rate parity violation — and a real operational problem, because analyst time is finite and false alarms crowd out genuine cases.

But if you tune the model to fix this — raise the threshold for remittance customers — you start missing real laundering in that segment. Your detection rate for genuine suspicious activity (equal opportunity) drops. Regulators who care about whether you're detecting financial crime at equal rates across your customer base will object.

And if you tune it the other way, to detect laundering equally in both segments regardless of cost, your false positive rate for clean remittance customers goes up. Real people have accounts frozen, remittances delayed, relationships de-risked. Equalized odds says: don't impose that burden on clean customers unequally. Fair point.

There is no model configuration that makes all three objections go away simultaneously. The impossibility isn't a modelling failure — it's a features of the problem.

## The values decision hiding inside

Here is what the impossibility theorem actually says: choosing a fairness measure is choosing whose error costs most.

Demographic parity prioritises equal access. Predictive rate parity prioritises equal accuracy — the institution's confidence in its own decisions. Equal opportunity prioritises equal detection — the chance that a qualified person gets through. Equalized odds extends this by also caring about equal false accusation rates — the burden on people who are wrongly flagged.

None of these is wrong. They're responses to different underlying values about what the institution owes to the people it affects. The credit decision question isn't technically: "which measure does the model satisfy?" It's politically: "who bears the cost of being wrong, and is that acceptable?"

Regulators are beginning to acknowledge this, awkwardly. The EU AI Act requires bias testing for high-risk AI systems. It does not specify which fairness measure to test. The firm must decide. MAS FEAT in Singapore is similar — it expects you to document and justify your choice. HKMA follows the same logic under its supervisory framework. The regulatory expectation is not "be fair in some universal sense." It is "choose a fairness measure, justify it, and demonstrate you've implemented it." Which means the regulator is explicitly handing the values decision back to the institution.

This is the part that makes most technical teams uncomfortable. The impossibility theorem is clean and mathematical. But its governance implication is that the data science team cannot resolve the fairness question by building a better model. They can measure more precisely, monitor more carefully, and surface tradeoffs more clearly. But the choice of which tradeoff to accept belongs somewhere else — with the risk committee, the board, legal, whoever in the organisation is actually accountable for how it treats people.

What I've seen in practice is that the values decision gets made implicitly by whichever stakeholder sets the model objective function, usually without anyone noticing that a values choice was made at all. The data scientist optimises for overall accuracy. The choice between whose errors matter more gets buried in the threshold setting. Nobody signs off on it explicitly.

The theorem doesn't resolve the argument. It just forces you to have it in the open, with the right people in the room.

That's not a bug. That's the point.
