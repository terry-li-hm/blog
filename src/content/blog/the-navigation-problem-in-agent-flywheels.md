---
title: "The Navigation Problem in Agent Flywheels"
description: "Your agent system shouldn't stop when the task list is empty. The real bottleneck isn't execution — it's discovering what's worth doing next."
pubDatetime: 2026-03-19T09:51:22.000Z
draft: false
tags:
  - ai-agents
  - ai-engineering
  - workflows
---

I ran an overnight agent system recently. Eight concurrent agents, multiple waves, compounding outputs — the whole flywheel. It worked. Tasks dispatched, results came back, downstream agents picked up where upstream agents left off. The system hummed along exactly as designed.

Then, around wave four, something interesting happened. It stopped. Not because it hit a budget limit or an error. It stopped because it ran out of tasks. The TODO list was empty, and the model concluded — reasonably, by its lights — that there was nothing left to do.

This was wrong. The goals the system serves are continuous. Career development doesn't finish. Market intelligence doesn't reach a terminus. Knowledge systems don't achieve completeness. There was plenty of valuable work available. The system just couldn't see it.

This is the navigation problem, and I think it's the actual bottleneck in agent flywheels once you've solved execution.

Most agent systems are built around task lists. You give the system a queue of things to do, it works through them, and it's done. This is fine for bounded projects — "process these 200 documents" or "run these test suites." But for continuous value streams — the kind that matter most in professional work — a task list is the wrong abstraction. It implies that the work has edges. It doesn't.

Think about what a good employee does. Not the kind who waits for instructions, but the kind who never seems to run out of useful work. They finish a research brief and notice that the competitive landscape has shifted since the last analysis. They complete a client deliverable and realise that the methodology could become a reusable template. They solve a technical problem and see that the same pattern applies to three other systems.

What they're doing is scouting. Every completed task is a vantage point. You climb it, look around, and see what's newly visible. The output isn't just the deliverable — it's the navigation information embedded in the process of producing it.

Agent systems are bad at this by default. They're good at executing a well-defined task. They're reasonably good at compounding — taking output A and producing output B that builds on it. What they struggle with is the lateral move: "this research on vendor X revealed that vendor Y is doing something unexpected, and that has implications for our positioning that nobody asked about."

The lateral move requires something models don't naturally do well: asking "what does this change about what I thought I knew?" It's not synthesis (combining known things). It's reorientation (noticing that the map shifted).

In practice, I've found you need to build scouting into the system explicitly. Between waves of execution, there's a deliberate phase: what did we learn that changes the map? What external signals arrived while we were working? Given where we are now, what's the highest-value thing to do next for each goal? Are there goals with zero recent activity — and if so, why?

This scouting phase is where the real value lives. Execution is commodity work. Scouting — knowing where to point the agents next — is what separates a system that grinds through a task list from one that actually advances your goals.

The uncomfortable part is that scouting is hard to automate well. It requires judgment about what matters, which requires understanding the broader context, which requires exactly the kind of holistic reasoning that models do well in short bursts but poorly across long sessions. The model's natural instinct, when it runs out of explicit tasks, is to stop — or worse, to invent busywork that looks productive but serves nothing. "Let me audit the folder structure" is the agent equivalent of rearranging your desk when you don't know what to work on.

The fix I've landed on is structural. The scouting questions are hard-coded. The system can't proceed to the next wave without answering them. It can't claim task exhaustion without proving it checked every active goal for opportunities. The prompts make the model's instinct to stop visible by requiring it to justify stopping against explicit criteria — and those criteria are written in code, not suggestions in a prompt.

Even with this structure, the model hits diminishing returns around wave six or seven. Not because valuable work doesn't exist, but because the scouting requires a kind of creative lateral thinking that degrades over long contexts. The solution, ironically, is to kill the session and start fresh. A new context, loaded with the accumulated results, scouts better than a tired one.

This points to something broader about agent system design. The constraint that matters most isn't speed, or cost, or even accuracy. It's navigation — the ability to continuously discover what's worth doing. Execution scales trivially. Navigation doesn't. And if you build a system that's excellent at execution but can't navigate, it'll grind through your task list and then sit idle while your goals go unserved.

Your agent system shouldn't stop when the queue is empty. The queue should never be empty. If it is, the problem isn't that there's no work — it's that nobody's looking.
