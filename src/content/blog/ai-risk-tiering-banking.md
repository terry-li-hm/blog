---
title: "The Risk Tiering Gap in Banking AI"
description: "Banks have AI ethics principles. They don't have risk tiering. That's the gap that matters."
pubDatetime: 2026-03-19T12:00:00.000Z
draft: true
tags:
  - ai-governance
  - banking
  - risk-management
---

Every large bank now has a set of AI ethics principles. Fairness, transparency, accountability, human oversight — the words vary slightly but the substance is interchangeable. These documents exist because someone at the board level asked "do we govern AI responsibly?" and the answer needed to be yes.

The principles are fine. They are also, on their own, operationally useless.

A principle that says "AI systems should be fair" does not tell you which of your 400 AI systems need independent fairness testing, which need a bias monitoring dashboard, and which need nothing beyond a registry entry. A principle that says "human oversight should be proportionate to risk" does not tell you what proportionate means, or who decides. The principle is the aspiration. The risk tiering framework is the mechanism that turns the aspiration into differentiated action.

Most banks don't have one.

## What regulators actually expect

Regulators have noticed this gap, and they're filling it from the outside.

The EU AI Act takes the most prescriptive approach. Annex III lists specific high-risk use cases — credit scoring, recruitment screening, biometric identification — and mandates governance controls for each. If your system is on the list, it is high-risk regardless of your internal assessment. The advantage is clarity. The disadvantage is that the list was finalised before half the GenAI use cases in banking today existed. A customer-facing LLM that drafts investment rationales — is that "AI in financial services" (high-risk) or a text generation tool (not listed)? The Act provides a framework for answering this, but the answer requires institutional judgment that the list alone cannot supply.

MAS in Singapore takes a different path. The FEAT principles — Fairness, Ethics, Accountability, Transparency — are complemented by a materiality assessment approach. The bank evaluates each AI system against impact and complexity dimensions and determines governance intensity accordingly. This is more flexible but more subjective. The team deploying the system is typically the team assessing its materiality, and they have an incentive to rate it lower.

The HKMA has moved from high-level principles (2019 circular) to increasingly prescriptive expectations. The September 2024 circular required board-level sign-off on feasibility studies for AI in AML/CFT — the first time the HKMA mandated board involvement in a specific AI use case category. The March 2026 GenAI Sandbox++ pushes further into structured experimentation with regulatory guardrails. The direction of travel is clear: the HKMA expects banks to know what AI they have, to classify it by risk, and to govern it proportionately. They have not yet prescribed how.

NIST's AI Risk Management Framework provides a lifecycle-oriented approach — Map, Measure, Manage, Govern — that is influence-heavy and mandate-light. It is the reference architecture that many banks cite but few operationalise end to end.

The common thread: every serious regulatory framework assumes the bank has a way to classify AI systems by risk level and apply differentiated controls. The frameworks disagree on who should define the risk categories, how prescriptive the classification should be, and what "proportionate" governance looks like. But they all assume the classification exists.

## What banks actually have

Most banks have a two-layer governance stack: principles at the top, and an approval committee in the middle. The principles say what good looks like. The committee reviews individual use cases.

The missing layer is the one between them — the tiering framework that determines how much governance each system receives.

Without tiering, every AI use case goes through the same approval queue. An internal meeting summariser sits behind an autonomous credit decisioning engine. The committee reviews both with the same rigour, which means it either over-governs the summariser or under-governs the credit engine. In practice, it does both — spending disproportionate time on low-risk systems that have well-prepared submissions, while fast-tracking complex systems whose sponsors know how to navigate the process.

The result is governance theatre at the bottom and governance gaps at the top. The committee is busy. The portfolio is not well-governed.

I have seen this pattern in enough institutions to believe it is the default, not the exception. The published ethics principles create a false sense of maturity. The committee structure creates a false sense of oversight. Neither produces the differentiated, risk-proportionate governance that regulators are converging toward.

## What good risk tiering actually looks like

A functional risk tiering framework needs four things.

**A small number of tiers with clear consequences.** Three is usually right. Tier 1 (high-risk): full independent validation, continuous monitoring, senior committee review, board reporting. Tier 2 (medium-risk): delegated review by a risk function, periodic monitoring, standard documentation. Tier 3 (low-risk): self-assessment by the business unit, registry entry, annual attestation. The tiers are only useful if they drive materially different governance paths — different reviewers, different timelines, different monitoring cadences. If Tier 2 is just "Tier 1 but slightly less," the framework has not earned its complexity.

**Multi-dimensional scoring, not a list.** Lists age badly — as the EU AI Act demonstrates. A scoring approach evaluates each system across dimensions that matter: decision impact (what happens if the system is wrong?), model complexity (can it be explained?), data sensitivity (what data does it touch?), autonomy (does a human review outputs before they reach a customer or trigger an action?), and regulatory exposure (does this system fall under a specific regulatory obligation?). The composite score maps to a tier. The dimensions can be weighted — and the weights are the institutional judgment that distinguishes one bank's framework from another's.

**Independence in the assessment.** The team building the system should not be the team that determines its risk tier, at least not alone. The most reliable approach: the development team completes a self-assessment, and an independent function — AI risk, model risk management, or a dedicated governance team — validates or overrides it. The override rate is itself a diagnostic: if the independent function is overriding 40% of self-assessments upward, the rubric is either unclear or the incentive problem is unmanaged.

**Dynamic reclassification.** This is where most frameworks fail, because it is operationally expensive and nobody wants to re-govern something that is already in production. But AI systems change. A copilot becomes an agent. An internal tool gets extended to customer-facing channels. A model trained on one dataset starts ingesting another. The risk tier at deployment is a snapshot. Without a mechanism to trigger reassessment — scope changes, capability upgrades, incidents, regulatory shifts — the tier becomes stale. The question that separates mature governance from immature governance: when was the last time you reclassified a deployed AI system to a higher tier?

## The hard part: who decides what's high-risk?

The framework is the easy part. The politics are hard.

Risk tiering changes who controls the approval bottleneck. If low-risk systems can be approved by a business unit without going through the central committee, the committee loses volume — and some committee members will read that as losing power. The reframe matters: the committee's time is finite, and the tiering ensures that finite time is allocated to the decisions that actually require senior judgment. The committee's role becomes more important, not less. It just becomes more targeted.

The second political problem is calibration. Someone has to decide where the thresholds sit. A composite score of 8 out of 15 — is that medium or high? The answer is not mathematical. It reflects the institution's risk appetite, and risk appetite for AI is something most boards have not articulated. Without that articulation, the thresholds are set by whoever builds the framework, which means a consulting team or a middle-management working group is implicitly defining the board's risk appetite. This is a governance gap hiding inside a governance framework.

The third problem is the hardest: agentic AI. Traditional AI systems have relatively stable risk profiles. An agent's risk profile shifts with every new tool it can call, every new data source it can access, every new action it can take autonomously. Tiering an agent at deployment is necessary but radically insufficient. The tier needs to be a living classification — and the monitoring infrastructure to support that does not exist in most banks today.

None of these problems are reasons not to build a tiering framework. They are reasons to build one deliberately, with the political and operational realities in view, rather than treating it as a technical classification exercise.

The banks that get this right in the next twelve months will have a structural advantage — not because their AI is better, but because their governance is proportionate. They will deploy low-risk systems faster, govern high-risk systems more effectively, and answer the regulatory question that is coming for all of them: "Show me how you classify your AI systems by risk, and show me how the governance differs."

The ethics principles will not answer that question. The tiering framework will.
