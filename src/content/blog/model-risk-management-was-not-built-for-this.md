---
title: "Model Risk Management Was Not Built for This"
description: "SR 11-7 assumes models are tools that produce outputs for human review. AI agents are actors that take actions autonomously. Every assumption breaks."
pubDatetime: 2026-03-18T05:16:00.000Z
draft: false
tags:
  - ai
  - governance
  - banking
  - model-risk
  - agents
  - financial-services
---

The Federal Reserve's SR 11-7 is the foundational document for model risk management in banking. Published in 2011, it defines what a model is, what model risk means, and how banks should govern the models they use. If you work in model risk at a bank, SR 11-7 is your operating system. It shapes how you validate, monitor, and document every quantitative system in the institution.

SR 11-7 was not written for AI agents. It was written for credit scoring models, VaR calculations, stress testing frameworks, and pricing engines — systems that take inputs, apply a fixed transformation, and produce outputs that humans review before taking action. The framework assumes a specific architecture: a model exists as a bounded analytical tool within a larger human decision-making process. The model recommends. The human decides.

AI agents invert this architecture. An agent does not recommend — it acts. It accesses databases, invokes APIs, generates documents, triggers workflows, and modifies records. The human does not sit between the model's output and the consequential action. The agent is the actor. The human, at best, monitors the actions after they happen or reviews a sample.

This inversion breaks SR 11-7's assumptions at every level.

The first assumption that breaks is bounded scope. A traditional model has a defined input space, a fixed transformation, and a predictable output format. You can validate it by testing inputs against expected outputs. The model's behaviour is deterministic or nearly so — the same inputs produce the same outputs within tolerance. An agent's scope is not bounded. It decides which tools to invoke, which data to access, and which sequence of actions to take. Two identical prompts can produce different action sequences depending on the agent's context, the state of external systems, and the stochastic nature of language model generation. You cannot validate an agent the way you validate a model, because the agent's behaviour is not a function of its inputs in the same way.

The second assumption that breaks is periodic validation. SR 11-7 envisions a lifecycle where models are validated before deployment, monitored during production, and revalidated periodically — annually or when material changes occur. This works because traditional models are relatively stable between validation cycles. The decision boundaries do not shift dramatically from quarter to quarter. An agent's behaviour can shift between Tuesday and Wednesday. A change in an external API it calls, a new document in its context window, a subtle prompt modification — any of these can alter the agent's action patterns in ways that a quarterly validation would never detect. The temporal gap between validation cycles is a blind spot that grows wider as the agent's operational tempo increases.

The third assumption that breaks is output interpretability. SR 11-7 requires that model outputs be understandable to the people who use them and the validators who assess them. A credit score of 720 means something specific. A VaR estimate of $50 million means something specific. These outputs can be interrogated, compared to benchmarks, and stress-tested. An agent's "output" is a sequence of actions taken across multiple systems over an extended period. The output is not a number or a classification — it is behaviour. Validating behaviour requires different tools than validating outputs. You need runtime monitoring, action logging, and anomaly detection, not backtesting and sensitivity analysis.

The fourth assumption that breaks is the independence of model risk from operational risk. In the SR 11-7 world, model risk is the risk that a model's outputs are wrong. Operational risk is the risk that something goes wrong in how the model is used, maintained, or integrated. These are managed by different teams with different frameworks. An agent collapses this distinction. When an agent takes an action based on its own reasoning, model risk and operational risk are the same thing. The "model" made a bad decision and the "operation" executed it, simultaneously. The governance separation that works for traditional models creates a gap for agents — the model risk team validates the agent's reasoning, the operational risk team manages the systems it interacts with, and nobody owns the intersection where the agent's reasoning drives operational outcomes.

Regulators are aware of this problem. The NIST AI Risk Management Framework issued a request for information in January 2026 specifically asking how existing frameworks should evolve for agentic AI. MAS's proposed AI Risk Management Guidelines explicitly address agents alongside traditional AI. But regulatory guidance moves slowly, and banks deploying agents today cannot wait for updated frameworks.

The pragmatic response is to treat SR 11-7 as a floor, not a ceiling. The traditional model risk management controls — documentation, validation, ongoing monitoring, independent review — still apply. They are necessary. They are not sufficient. On top of them, institutions need continuous behavioural monitoring (not just periodic validation), action-level audit trails (not just output logging), runtime policy enforcement (not just pre-deployment testing), and human escalation mechanisms triggered by consequence, not by schedule.

This is more work, more infrastructure, and more cost than traditional model risk management. Institutions that pretend SR 11-7 covers their agent deployments are building on a foundation that was designed for a different building. The foundation is not wrong. It is incomplete. And the gap between what the framework covers and what the agent does is where the risk lives.
