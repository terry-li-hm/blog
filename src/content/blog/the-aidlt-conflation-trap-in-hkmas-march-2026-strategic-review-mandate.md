---
title: "The AI/DLT Conflation Trap in HKMA's March 2026 Strategic Review Mandate"
description: "HKMA's new strategic review circular bundles AI inference risk and smart contract risk into one workstream \u2014 a governance design flaw that will cause banks to under-govern both."
pubDatetime: 2026-03-18T09:46:40.000Z
draft: false
tags: ["hkma", "banking", "governance", "hong-kong", "model-risk", "tokenisation", "dlt", "consulting"]
---

HKMA's March 2026 strategic review circular — delivered via two speeches by Deputy CE Carmen Chu — converts AI and DLT governance from voluntary best practice to supervisory expectation for all licensed Hong Kong banks. Around 60 institutions have been explicitly called on to join EnsembleTX and conduct strategic reviews of how AI, DLT, cloud, and HPC are reshaping their business models.

The mandate is real. But the framing contains a structural problem that will cause most banks to fail at both objectives simultaneously.

## The conflation

The circular groups AI inference risk and smart contract risk under a single "strategic review" umbrella. These are not the same problem.

**AI inference risk** is probabilistic and stochastic. A model makes predictions under uncertainty. The risk is that outputs are wrong in ways that are systematically biased, miscalibrated, or opaque. The control discipline is model risk management: validation, ongoing monitoring, performance benchmarking, human-in-the-loop review gates.

**Smart contract risk** is deterministic and code-law. Once deployed, a smart contract executes exactly as written — including its bugs. The risk is that code is incorrect, incomplete, or exploitable. The control discipline is software engineering assurance: formal audit, code review, test coverage, deployment access controls, and legal analysis of settlement finality.

A governance function that knows how to validate LLMs does not automatically know how to audit Solidity contracts. A technology risk team that can review smart contract logic may have no experience calibrating model performance on imbalanced data.

## The trap

Banks that respond to the mandate with a single integrated workstream — "we covered AI and DLT in our Q2 strategic review" — will produce documentation that satisfies neither AI-specific nor DLT-specific examination questions. The model risk examiner will ask about inference validation methodology. The technology risk examiner will ask about smart contract audit trails and settlement finality controls. A unified governance memo answers neither.

The trap is not malicious — it reflects how the circular was drafted. But the examination consequences will be felt at the individual bank level, not the regulatory drafting level.

## The two-workstream response

The supervisory-defensible response is two parallel workstreams with distinct ownership:

1. **Tokenisation readiness** — EnsembleTX onboarding, smart contract risk controls, settlement finality analysis, legal documentation of code-law obligations
2. **AI governance** — model risk inventory, risk tiering against HKMA expectations, agentic AI permission controls, board-level reporting

Both get presented to the board as supervisor-required deliverables. But they are owned by different teams, measured by different metrics, and examined by different supervisory functions.

The strategic review mandate is an opportunity. But only for banks that read it carefully enough to notice what it is conflating.
