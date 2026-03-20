---
title: "Your AI Risk Tier Is Probably Wrong"
description: "List-based and process-based approaches to AI risk classification both fail in predictable ways. The failure mode depends on which you chose."
pubDatetime: 2026-03-18T05:15:00.000Z
draft: false
tags:
  - ai
  - governance
  - banking
  - risk
  - financial-services
---

Every AI governance framework requires risk tiering. You classify each AI system by its potential for harm, then apply controls proportional to the tier. High-risk systems get intensive governance — independent validation, human oversight, continuous monitoring. Low-risk systems get a registry entry and baseline policies. The logic is sound. The execution is where it falls apart.

There are two fundamental approaches to AI risk tiering, and they fail in opposite directions.

The first is the list approach. The EU AI Act is the canonical example. Annex III contains a prescriptive list of high-risk AI use cases: credit scoring, recruitment, law enforcement, critical infrastructure. If your system falls on the list, it is high-risk. If it does not, it is not. This is clear, auditable, and simple to implement. It is also brittle. The list was written by legislators who could not anticipate every use case, and it becomes stale the moment a new application emerges that does not match any list category. A document summarisation agent that happens to process regulatory filings — is that "critical infrastructure" or a productivity tool? The list does not say. The institution guesses, and the guess is usually in the direction that requires less governance.

The second is the process approach. Singapore's MAS uses this — a materiality assessment based on impact, complexity, and reliance. The institution evaluates each system against a rubric and decides the tier. This is flexible, adaptive, and captures nuance. It is also subjective. The team building the system has an incentive to rate it lower — lower tiers mean faster deployment, fewer approval gates, less documentation. Nobody wants their project classified as high-materiality when medium will do. The assessment framework provides criteria, but the criteria require judgment, and the judgment is exercised by people with skin in the game.

Both approaches produce the same failure: misclassification. The list approach misclassifies by omission — novel or ambiguous use cases default to a lower tier because they do not appear on the list. The process approach misclassifies by optimism — the assessment is conducted by people who benefit from a lower rating.

The practical consequences show up downstream. A system classified as medium-risk when it should have been high-risk skips independent validation. It deploys without the monitoring infrastructure that would catch drift. It operates without the human escalation paths that would catch consequential errors. When something goes wrong — and in a large enough portfolio, something always goes wrong — the governance response is reactive rather than proactive. The post-incident review reveals that the tiering was wrong, the controls were insufficient, and the signals that would have caught the problem were never instrumented.

Banks that have been through a few cycles of this tend to develop informal workarounds. A risk officer who has seen three misclassifications will override the formal assessment and push systems to a higher tier based on intuition. This works but does not scale and does not survive the risk officer leaving. The institutional knowledge lives in a person, not in a process.

The emerging consensus among practitioners — not yet reflected in most frameworks — is that the right approach combines both methods and adds a third element. The list provides a floor: if your system matches a listed category, it is at least that tier, no debate. The process assessment captures everything the list misses, but with a structural check: the assessment is conducted or validated by someone who does not benefit from the outcome. An independent risk function, not the development team, makes the final tiering decision.

The third element is dynamic reclassification. A system's risk tier is not fixed at deployment. A customer service chatbot that starts answering account balance queries is low-risk. The same chatbot, six months later, now handling complaints and generating responses that reference specific product terms — that is medium or high risk. The scope crept, the tier did not. Dynamic reclassification means the tier is reassessed when the system's capabilities, data inputs, or decision scope change. This is operationally expensive, which is why almost nobody does it, and why almost everyone should.

The hardest version of this problem is happening right now with agentic AI. A traditional ML model has a relatively stable risk profile — it does one thing, on one type of data, with one type of output. An agent's risk profile shifts with every new tool it can invoke, every new data source it can access, every new action it can take. Tiering an agent at deployment is necessary but not sufficient. The tier needs to be a living classification, reassessed as the agent's capabilities evolve.

The question that separates institutions that have thought about this from those that have not: "When was the last time you reclassified a deployed AI system?" If the answer is "never" or "we don't have a process for that," the risk tiers in the inventory are a snapshot of deployment-day optimism, not a reflection of current risk.

**Related:** [AI Governance: Routing vs Compliance](AI Governance: Routing vs Compliance) · [Governance Is a Tax](Governance Is a Tax) · [Model Risk Management Was Not Built for This](Model Risk Management Was Not Built for This) · [The Agent Governance Gap Is Already Here](The Agent Governance Gap Is Already Here) · [Inference Cost Collapse Is a Governance Liability](Inference Cost Collapse Is a Governance Liability)
