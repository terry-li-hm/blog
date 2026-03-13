---
title: "AI Governance Category Error: Routing vs. Compliance"
description: >-
  Your AI governance framework is a routing spreadsheet pretending to be a
  compliance programme. Regulators will spot the difference.
pubDatetime: 2026-03-06T12:00:00.000Z
tags:
  - ai-governance
  - compliance
  - financial-services
  - regulation
  - risk
---

Your AI governance framework is a routing spreadsheet pretending to be a compliance programme.

This is a specific, fixable category error that I've encountered across a surprising range of financial services firms, including ones with mature risk functions and serious governance infrastructure. The error is easy to make because the two things look similar from the outside and because nobody in the room benefits from pointing out the distinction.

The typical AI risk tiering framework works like this: a new AI initiative is submitted for review, assigned to one of three or four risk tiers based on criteria like data sensitivity, customer impact, and model complexity, and routed to the appropriate approval forum with corresponding documentation requirements and sign-off timelines. The framework is real governance infrastructure. It creates transparency, enforces review cadences, and makes the approval process visible and auditable. It is valuable and should exist.

What it isn't is a mechanism for satisfying mandatory regulatory obligations.

The category error happens when firms treat a low risk tier as a form of regulatory exemption. A Tier 1 designation — low risk, lightweight review, shorter approval cycle — becomes understood, implicitly or explicitly, as meaning that the initiative doesn't need to worry about SR 11-7 model risk guidelines, or SS1/23, or Consumer Duty obligations, or DORA operational resilience requirements. It doesn't mean that. It can't mean that, because a risk tiering framework determines how much governance to apply. It cannot waive obligations that exist independently of the framework.

The problem is real because mandatory obligations in financial services AI governance are frequently not framed as a checklist that can be ticked off at approval time. They're ongoing requirements about documentation, monitoring, model validation, and accountability. A low-risk routing decision doesn't make these requirements go away — it just makes them less visible in the approval process.

What regulators are likely to look for, and what firms should want to demonstrate, is that the governance framework does two distinct things cleanly. One: it determines how much internal oversight to apply — how rigorous the review, which forums are involved, how frequently the model is re-validated. Two: it ensures that mandatory obligations are tracked and met, regardless of tier. A Tier 1 model might get a lighter internal review process while still needing to satisfy specific documentation, monitoring, and accountability obligations.

Most frameworks conflate these two functions. The practical fix is one sentence, added to the framework documentation and to every tier definition: "This framework routes and escalates; it cannot waive or modify any mandatory regulatory controls." That sentence creates clarity for every future submission about what the tier decision does and doesn't determine.

This might seem pedantic. It isn't. The firms that have conflated routing with compliance tend to discover the gap under examination — either in regulatory review, or when a model that was approved through the lightweight track becomes the subject of a complaint or audit query that requires demonstrating compliance with obligations the routing decision implicitly set aside.

The governance architecture that actually works separates the questions. How much governance is required by risk level? That's the tiering framework's job. What governance is required regardless of risk level? That's a separate register, tied to each applicable regulatory obligation, with named accountabilities and evidence requirements. The two frameworks operate in parallel, and the approval process requires both to be addressed.

Building this is not dramatically more expensive than the single-framework approach. Maintaining the fiction that one framework is doing both jobs is, ultimately, much more expensive.

---

P.S. The clearest signal that a firm has conflated the two: ask what happens to a Tier 1 model that happens to use customer data in a context that triggers Consumer Duty obligations. If the answer is "Tier 1 doesn't require the full review," the gap is there. If the answer is "Tier 1 determines the internal review level, but Consumer Duty obligations apply independently," the architecture is sound.
