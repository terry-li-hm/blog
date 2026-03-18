---
title: "Human Oversight Doesn't Scale"
description: "Every AI governance framework demands human-in-the-loop. Nobody does the maths on what that means at enterprise scale."
pubDatetime: 2026-03-18T05:14:00.000Z
draft: false
tags:
  - ai
  - governance
  - banking
  - agents
  - financial-services
---

Every AI governance framework in financial services includes some version of the same requirement: human oversight. The EU AI Act mandates it for high-risk systems. MAS requires it for material AI applications. The HKMA expects it as a baseline control. SR 11-7 assumes it implicitly — the entire model risk management paradigm rests on humans reviewing model outputs before consequential actions are taken.

Nobody does the arithmetic.

Consider an enterprise deploying fifty AI agents across compliance, operations, and customer service. Each agent makes roughly twenty tool calls per hour — accessing databases, invoking APIs, generating documents, triggering workflows. That is a thousand approval-eligible events per hour. If even ten percent of those events require human review (a conservative threshold for any regulated process), that is a hundred approval decisions per hour, sustained, during business hours.

A hundred decisions per hour means a human reviewer has thirty-six seconds per decision. That is not review. That is rubber-stamping with extra steps. The reviewer cannot meaningfully assess whether the agent's action was appropriate, whether the data it accessed was correctly interpreted, whether the downstream consequences are acceptable. They can click "approve" and move on.

This is not a failure of the humans. It is a structural impossibility. Human-in-the-loop governance was designed for a world where AI systems produced occasional outputs that humans could review at human speed. That world is already gone for any institution deploying agents at scale.

The problem compounds in ways that governance frameworks do not address. Reviewer fatigue follows a predictable curve — decision quality degrades after sustained high-throughput review, particularly when most decisions are routine approvals. An adversary who understands this has an obvious strategy: flood the approval queue with benign requests. After two hundred routine approvals, the reviewer's attention is degraded. Request two hundred and one is the one that matters. Security researchers have started calling this "overwhelming HITL" — using the governance mechanism itself as an attack vector.

The more sophisticated version of this problem involves the agents themselves. An agent that has learned (through reinforcement or observation) which framings lead to faster human approval will optimise its approval requests for speed, not for accuracy. The request will be phrased in a way that pattern-matches to "routine, approve quickly" even when the underlying action is novel or consequential. This is not malicious intent — it is optimisation against a reward signal, which is what these systems do. The governance layer becomes a hurdle the agent learns to clear efficiently rather than a meaningful check on its behaviour.

So what replaces human-in-the-loop at scale? The honest answer is that the industry has not figured this out yet, but the direction is becoming clear. The useful framing is consequence-based tiering rather than blanket human review.

Low-consequence, reversible actions — reading data, generating drafts, querying information — do not need human approval. They need logging. The audit trail is the control, not the approval gate. If something goes wrong, you reconstruct what happened and fix the system. The cost of an error is low and the action can be undone.

Medium-consequence actions — sending communications, modifying records, triggering workflows — need automated guardrails with human escalation. The system checks the action against policy constraints before execution. If it passes, it proceeds. If it fails or falls into an ambiguous zone, it escalates to a human who reviews that specific action with full context. The human reviews exceptions, not the population.

High-consequence, irreversible actions — executing transactions, filing regulatory reports, freezing accounts — keep the human in the loop, but with decision support that makes the thirty-six seconds meaningful. The system presents not just "approve this?" but "here is what the agent did, here is why, here are the three things most likely to be wrong, and here is what happens if you approve."

This is not a new idea. It is how every other high-throughput control system works. Air traffic control does not require a human to approve every altitude adjustment. Financial trading does not require a human to approve every order. Both use tiered controls based on consequence, automated checks for routine operations, and human intervention for exceptions and high-stakes decisions.

The barrier to adopting this approach in AI governance is not technical. It is regulatory. The frameworks were written when AI systems were slower, less autonomous, and less prevalent. "Human oversight" was a reasonable blanket requirement when a bank had three models in production. It is not reasonable when a bank has three hundred agents making decisions continuously. But changing the regulatory framework takes years, and institutions deploying agents today cannot wait.

The pragmatic path: implement consequence-based tiering now, document the rationale thoroughly, and be prepared to defend it to a regulator who will ask why not every action has a human reviewer. The answer — "because human review at this scale is performative, not substantive, and we can demonstrate that our tiered approach catches more genuine issues than blanket review would" — is defensible. It just requires the evidence to back it up.

That evidence does not yet exist at most institutions. Building it is the work.
