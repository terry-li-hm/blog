---
title: "The Wrong Metric: Why I Stopped Switching AI Models Mid-Session"
description: "Per-task model routing optimises cost per token. But at personal assistant scale, friction is the real cost."
pubDatetime: 2026-03-12T18:00:00+08:00
modDatetime: 2026-03-12T18:00:00+08:00
slug: the-wrong-metric-why-i-stopped-switching-ai-models-mid-session
featured: false
draft: false
tags:
  - ai-tools
  - workflow
---

I spent a week building a routing table. Every task category mapped to a model: Sonnet for drafting, Sonnet for admin, Sonnet for daily routines, Opus for consilium, Opus for hard debugging. Sixteen rows. Looked thorough.

Then I realised I was optimising the wrong thing.

## The metric I was using

Cost per token. Sonnet is 1.67x cheaper than Opus per million tokens. So for high-volume, routine tasks — drafting emails, running morning briefs, logging daily notes — Sonnet makes sense on paper. The savings add up.

The flaw: I'm on a flat-rate plan. Per-token cost is not my constraint. My constraint is weekly pool consumption, and the marginal difference between Opus and Sonnet on a `/wrap` or a reminder lookup is a rounding error.

## The metric that actually matters

Friction per session.

Every `/model sonnet` before a draft, and `/model opus` before a decision, is a context break. It interrupts the flow of a session. Over a day, it's half a dozen interruptions for savings that don't register on my quota gauge.

The Chatbot Arena data makes this clearer: Opus leads Sonnet by 43 Elo points on human preference tasks. That gap isn't about coding benchmarks — it's about whether the response *feels* better in conversation. For a personal assistant doing orchestration, judgment, and synthesis, that gap exists on every interaction, not just the hard ones.

## The reframe

The question isn't "which model is best for this task?" It's "which model should I leave running all day and forget about?"

Delegation-first architecture changes the calculus. Coding execution goes to Codex, Gemini CLI, OpenCode — none of which touch my Max20 quota. What stays in-session is orchestration and judgment. That's exactly where Opus earns its keep, regardless of task size.

The new rule is simple: Opus default, don't switch. The only trigger is the weekly percentage gauge hitting 70% — a hard signal, not a per-task judgement call.

## The pattern generalises

This shows up in a lot of tooling decisions. You build a sophisticated routing system, feel good about the granularity, and discover the granularity was the problem. The right architecture often isn't the one that handles every case optimally — it's the one that handles every case *adequately* with the lowest operational overhead.

A single model that's good enough for everything beats a routing table that's optimal in theory and friction-generating in practice.

The wrong metric makes you feel like you're being rigorous. The right metric makes you feel like you're being lazy. Usually that's the tell.
