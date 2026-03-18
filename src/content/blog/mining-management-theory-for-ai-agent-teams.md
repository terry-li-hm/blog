---
title: "Mining Management Theory for AI Agent Teams"
description: "What Grove, Drucker, Deming, and Weinberg knew about managing humans turns out to apply — with surprising specificity — to orchestrating AI agent teams."
pubDatetime: 2026-03-18T23:02:04.000Z
draft: false
tags: [ai, agents, management, fodina]
---

I spent a session extracting management heuristics from four classic thinkers — Andy Grove, Peter Drucker, W. Edwards Deming, and Gerald Weinberg — and mapping them onto the problem of orchestrating AI coding agents. The transfer was unexpectedly precise. Not metaphorical-if-you-squint precise, but *this-changes-what-I-do-tomorrow* precise.

The exercise started with a simple question: when you're a lead agent dispatching work to parallel workers, merging their outputs, and handling failures, aren't you just... managing? And if so, what do the people who spent decades thinking about management have to say about it?

Turns out, quite a lot.

Grove's concept of Task-Relevant Maturity maps directly. You don't manage a senior engineer the same way you manage a junior one — and you shouldn't manage Sonnet-on-a-familiar-pattern the same way you manage Opus-on-a-novel-domain. The maturity isn't the model. It's the model multiplied by the task type. A model that reliably produces good vault notes might need heavy guidance on schema migrations. Adjust the spec density, not the model.

Deming's "94% of problems are system problems" is perhaps the sharpest transfer. When an agent produces bad output, the instinct is to blame the agent and retry. But the failure is almost always in the prompt, the decomposition, or the missing context — the system, not the worker. Only after ruling out spec ambiguity, missing context, and over-scoped tasks should you conclude the model can't do it.

But Deming offers an equally important counterbalance through what he called "tampering" — adjusting a stable process in response to random noise. If one agent hallucinates a single import, rewriting the entire system prompt is tampering. It increases variation rather than reducing it. The discipline is to wait for the same error to recur across three independent runs before modifying the orchestration template. One-off glitches are noise. Patterns are signal.

The most surprising find came from Weinberg's *Psychology of Computer Programming*. His observation that programmers can't effectively test their own code — because they see what they intended, not what they wrote — transfers to agent orchestration as a specific architectural constraint: never let the agent that generated code be the one that debugs it. The model gets stuck in a token-probability rut, reinforcing the same flawed logic that produced the error. Flush the context, or swap to a different model entirely.

What made this exercise genuinely productive, though, wasn't the extraction itself — it was running the same probe across multiple models and comparing what each one surfaced.

I fired the same management-mining prompt at Claude, Gemini, DeepSeek, and GPT-5.4. Each model found moves the others missed. Claude extracted the foundational layer — TRM, leverage, PDCA. Gemini found a "stutter limit" heuristic (terminate agents stuck in repetitive tool-call loops) and the idea of a NULL_ACTION protocol (giving agents a structured way to say "I can't proceed" instead of producing confident garbage). GPT-5.4 contributed perhaps the sharpest single heuristic: spec validation by parallel inference — dispatch two independent agents with the same brief and compare their interpretations. If they infer different contracts, the spec is broken, even if it reads well to you.

Each model's weights are a different lossy compression of human knowledge. The delta between extractions *is* the signal. What one model's training data emphasised, another's glossed over. The management theory itself is stable and canonical — it's all in the books. But the creative work of mapping it onto agent orchestration requires the kind of lateral transfer where models genuinely disagree about what matters most.

The meta-lesson is almost too neat: the best way to mine knowledge is to apply the management principles you're mining. Orchestrate multiple workers. Don't let any single agent be the sole judge. Reduce variation through structured output. And when the system fails, fix the system, not the worker.

P.S. The closing insight converged across all four models independently: *spend less effort checking work and more effort engineering the conditions under which parallel work becomes mergeable, truthful, and cheap to steer.* Grove, Drucker, Deming, and Weinberg all arrived at the same place from different directions. Good management theory, it turns out, is good management theory — regardless of whether the subordinates are carbon or silicon.
