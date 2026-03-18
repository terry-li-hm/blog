---
title: "Inference Cost Collapse Is a Governance Liability"
description: "When AI agent calls approach zero cost, the natural rate-limiter on decision volume disappears \u2014 and oversight frameworks designed for prediction models break."
pubDatetime: 2026-03-18T09:47:12.000Z
draft: false
tags: ["inference", "governance", "banking", "model-risk", "agentic-ai", "sr-11-7", "consulting"]
---

The standard framing of NVIDIA GTC 2026 is bullish: inference costs are collapsing, agent frameworks are maturing, and AI is finally deployable at enterprise scale. This framing is correct on the technology. It is dangerously wrong on the governance implication.

## The rate-limiter is disappearing

Every governance framework for AI in financial services — SR 11-7, HKMA model risk circulars, MAS TRM guidelines — was designed for a world where AI systems produce predictions that humans review before consequential decisions are made. One model output per credit application. One flag per transaction. One recommendation per risk report.

This design assumption held partly because compute costs imposed a natural rate-limiter. AI calls were expensive enough that banks deployed them at decision points that were already supervised.

When inference cost approaches zero, the rate-limiter disappears.

OpenAI's Codex crossed 2M weekly active users in early 2026, growing 4x year-to-date. These agents are autonomously writing, reviewing, and deploying code — inside bank developer environments, mostly ungoverned. ByteDance ArkClaw runs fully autonomous document workflows at ¥9.9 per month. When an AI agent can make thousands of consequential decisions per hour at near-zero marginal cost, the volume of AI-generated outputs requiring oversight is no longer bounded by economics.

## The oversight math breaks

SR 11-7 and its successors were not designed for this regime. Model validation assumes a manageable population of model outputs. Human-in-the-loop review assumes the loop is traversable — that there are enough humans, with enough time, to actually review what the model produces.

Cheap inference breaks both assumptions. Banks that deploy agentic systems without rethinking oversight architecture will accumulate regulatory exposure proportional to the volume of ungoverned AI decisions — which, at near-zero cost, can be very large very fast.

## The counterintuitive governance position

Falling inference costs are not a reason to relax governance. They are a reason to strengthen oversight architecture *before* deployment, because the failure mode at scale is not "the model is wrong sometimes" — it is "the model is making ten thousand consequential decisions per hour with no human able to review the outputs."

The first banks to build execution-tier controls — access scope, output review gates, audit logging, decision volume caps — will have a structural advantage when regulators catch up. This is not a compliance exercise. It is a competitive moat built before the moat becomes mandatory.

The practical implication for bank AI programs is concrete: before any agentic system reaches production, the governance question is not "does this model perform acceptably?" It is "can we actually oversee the volume of decisions this agent will make at near-zero cost?"

At current deployment trajectories, most banks cannot. The work is to build the capacity before the regulator asks the question.
