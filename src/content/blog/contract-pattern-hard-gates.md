---
title: "The Contract Pattern: Hard Gates for AI Agents"
description: >-
  AI agents know how to start a task. They don't always know when to stop.
  The contract pattern is the architectural fix.
pubDatetime: 2026-03-06T13:00:00.000Z
draft: false
tags:
  - ai-agents
  - engineering
  - architecture
  - agentic
---

AI agents know how to start a task. They don't always know when to stop.

This is one of those observations that sounds trivial until you've watched an agent complete a task to its own satisfaction, declare success, and leave behind something that doesn't match what was intended. Not because it made a catastrophic error — the work is often technically correct — but because "done" was left vague, and the agent found its own definition.

The contract pattern is the architectural response to this. Before a task begins, you write an explicit contract: a structured document that defines the acceptance criteria, the specific conditions that must all be satisfied for the task to be considered complete, and sometimes the conditions that would trigger an escalation rather than a completion. The session doesn't end until every criterion in the contract is checked off — and the checking is explicit, not implicit.

I started using this personally after reading about agentic engineering patterns that emphasised completion criteria as a first-class design concern. The insight that landed was this: agents are optimised for task execution, not for the meta-question of whether the task is actually done. That meta-question is a human responsibility, and the contract pattern is how you make it a structural responsibility rather than a hope.

In practice, a contract file looks simple: a checklist of specific, verifiable conditions. Not "the code works" but "the test suite passes with zero failures," "the API endpoint returns the expected schema for all three edge cases," "the documentation reflects the changed interface." Each item is verifiable without subjective judgment. The agent works through the task and checks each criterion against the actual output. A hook or a prompt structure prevents the session from concluding until the checklist is complete.

The enterprise version of this problem is the same, scaled. AI projects in financial services fail the same way. Teams define inputs and models carefully. They specify what the system should do. They leave "done" vague. The result is sprint reviews that become vibes — presentations of outputs that look like progress but haven't been checked against specific completion criteria. Milestones that are reached by agreement rather than by verification. Projects that ship technically functional systems that don't actually satisfy the business requirement that motivated them, because the business requirement was never written down in a form that could be checked.

The contract pattern applied to enterprise AI projects is less of a software pattern and more of a governance discipline. Before any significant work begins, write the acceptance criteria in terms specific enough to check. Not "the model is accurate" but "the model achieves ≥90% recall on the validation set representing the distribution from Q3 2025." Not "the governance framework is complete" but "the framework document has been reviewed and signed off by the named accountable person, the monitoring cadence is established, and the first quarterly review has been scheduled."

Specificity is the hard part. Acceptance criteria that can be satisfied by a sufficiently optimistic interpretation of the output are not acceptance criteria — they're aspirations written in checklist format. The test is whether two independent people would reach the same conclusion about whether the criterion has been met. If they wouldn't, the criterion isn't specific enough.

There's something uncomfortable about this for teams used to working with more flexibility. Explicit completion criteria constrain the work. They force decisions about what success actually means before the work starts, which is when those decisions are hardest to make and most useful to make. The discomfort is diagnostic: if it's difficult to write the acceptance criteria, that difficulty usually reflects a genuine ambiguity in what the team is trying to achieve.

Resolve the ambiguity in the contract. Don't defer it to the sprint review.

---

P.S. The most useful question at the start of any AI project, asked before any design work begins: "If we completed everything we planned, how would we know it worked?" The answer to that question is the contract. If the question can't be answered precisely, the project isn't ready to start.
