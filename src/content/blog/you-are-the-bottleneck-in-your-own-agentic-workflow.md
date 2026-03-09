---
title: "You Are the Bottleneck in Your Own Agentic Workflow"
description: "Adding more AI tools doesn't help if you're still the bus between them."
pubDatetime: 2026-03-09T01:54:41.000Z
draft: false
tags: ["ai", "workflows", "tooling"]
---

There's a pattern I've seen play out repeatedly as people get more serious about AI-assisted work. They adopt more tools — a coding agent here, a research assistant there, a review agent for pull requests — and yet somehow the pace doesn't change much. The bottleneck shifts, but it doesn't disappear. After a while, you realise why: you've become the bus.

Every task flows through you. You route each piece of work to the right agent, wait for the result, review it, decide whether it passed, then route the next task. You're not doing the work anymore, but you're still the junction between every step. The agents execute; you orchestrate. And orchestrating manually, one handoff at a time, is its own kind of full-time job.

The standard response to this is to add more agents. If one AI is making you a bottleneck, surely more AI will help? But this misdiagnoses the problem. The bottleneck isn't execution capacity — it's the number of human checkpoints in the chain. Adding agents without removing yourself from the handoff logic just gives you more things to babysit.

The real question isn't which AI to use. It's which handoffs still require you.

Most of the handoffs that feel like they need a human — routing a task to the right tool, checking whether the output compiled, deciding if tests pass — are actually mechanical. They have clear criteria. Rust code goes to a tool that handles sandboxed compilation. A build either passes or it doesn't. Tests either pass or they don't. These don't need judgment; they need automation.

What genuinely needs you is narrower than you think: defining the task well enough for an agent to execute without ambiguity, and making calls when something fails in a way that wasn't anticipated. Everything else — the routing, the validation, the retry logic, the notification that something finished — is ceremony that you're performing manually because no one built the automation yet.

This is the distinction that matters: agentic doesn't mean more agents. It means fewer human checkpoints. The goal is a system where you hand off a decomposed task list, agents route themselves to the right tools, run in parallel, validate their own outputs, and only surface the failures that genuinely need a decision. You come back to a summary, not a queue of approvals.

The version of this I've been building runs tasks through parallel isolated environments — one per task, no shared state — auto-routes based on what the task requires, runs the validation commands after each delegate finishes, and sends a single notification when everything is done. I see pass/fail counts. I see which task failed and why. I make one decision on the failure, not twenty micro-decisions along the way.

What I don't do anymore is sit between steps. That's the difference.

The hardest part of getting here wasn't the tooling. It was accepting that most of what felt like oversight was actually just overhead. The judgment calls I thought I was making at each handoff were mostly pattern-matching against clear criteria — which is exactly what you'd automate if you were designing the system from scratch instead of evolving into it.

If your agentic setup still feels like it's "too involving," don't reach for another agent. Audit which handoffs you own. Then ask, for each one: is there actually a decision here, or am I just manually executing something with obvious criteria? The ones with obvious criteria are the bottleneck. Remove yourself from those, and the ones that remain will feel much more like real work.
