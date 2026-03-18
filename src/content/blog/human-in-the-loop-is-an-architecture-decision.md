---
title: "Human-in-the-Loop Is an Architecture Decision"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-governance, hitl, architecture]
draft: false
description: "It's not enough to say humans are in the loop. You need to show the loop is in the system."
---

Every client I've worked with on AI governance can tell me that their system has human oversight. It's in the policy, the slide deck, the risk committee minutes. "Our AI has human review" appears early and prominently, usually in bold, often with a diagram showing a human figure somewhere between two process boxes.

What almost none of them can show me is the loop working.

There's a difference between a governance statement and a production pattern. "Humans are in the loop" as a statement is a claim about intent. "Humans are in the loop" as a pattern is a claim about architecture — and architecture either exists in the code or it doesn't exist at all.

The actual pattern, when implemented properly, has four steps: interrupt, snapshot state, present findings, resume on approval. That's it. The workflow pauses at a defined checkpoint, captures everything needed for a human to make a meaningful decision, surfaces it in a form the human can actually act on, then waits for a signal before continuing. Each step is explicit. Each transition is observable. The whole thing can be demonstrated end-to-end.

I built this into Lacuna's regulatory gap analysis workflow using LangGraph. The workflow fans out across all requirements in parallel, runs the analysis, and then — before generating the final report — hits an interrupt. State is snapshotted. The human reviewer sees the findings across all requirements, can query, can adjust, and then approves. On approval, the workflow resumes and generates the report against the reviewed state. The key detail: LangGraph's interrupt mechanism means the workflow is genuinely paused, state is persisted, and resumption picks up exactly where it stopped. It's not a UX layer bolted on top of a system that would run to completion anyway. The pause is load-bearing.

This distinction matters enormously when regulators ask about it — and they do ask. HKMA's GenAI consumer protection circular requires human-in-the-loop for customer-facing applications. The HKMA sandbox cohort has expanded to all four financial regulators. The question regulators will eventually ask isn't "does your policy mention human review?" It's "show me the checkpoint. Show me what state the human sees. Show me the approval gate. Show me what happens if the human rejects it." These are architecture questions, not policy questions.

Most AI deployments can't answer them. Not because the teams didn't care about oversight, but because oversight was designed as a governance layer rather than a system property. The assumption was that humans would review outputs before acting on them — which is fine for a tool that produces a draft. It's not fine for an agentic workflow that proceeds through multiple steps and takes actions. By the time the human sees anything, the interesting decisions have already been made.

The fix isn't more review at the end. It's intervention points in the middle. That requires thinking about where in the workflow human judgment adds the most value, what information the human needs at that point to make a real decision, and what a rejection means for the subsequent steps. These are system design questions. They need to be answered before the code is written, not after the system is in production and a regulator is asking to see the loop.

There's also a practical problem with treating HITL as a policy statement: it creates compliance debt. When the regulation requires human oversight and the implementation doesn't have it, you're building technical debt in a form that's particularly expensive — it requires rearchitecting production systems under regulatory scrutiny. The teams that are ahead on this built the interrupt-snapshot-present-resume pattern in from the start, because they thought of it as an architectural requirement rather than a governance add-on.

The pitch frame I've started using with clients is blunt: it's not enough to say humans are in the loop. You need to show the loop is in the system. Not in the policy, not in the diagram, not in the committee minutes. In the system, where it can be demonstrated, audited, and evidenced.

If you can't demo the checkpoint, you don't have a human-in-the-loop system. You have a human-in-the-loop slide.
