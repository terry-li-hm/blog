---
title: "What We Know About Multi-Agent Orchestration (And Why It Might Not Matter)"
description: "The research on multi-agent AI systems was mostly done on cheap models. Now that frontier models are the ones people actually use, we might be optimising for the wrong game."
pubDatetime: 2026-03-18T12:31:03.000Z
draft: false
tags:
  - ai
  - agents
  - research
---

There's a satisfying body of research on how to orchestrate multiple AI agents for better output. Mixture-of-Agents ensembles. Multi-agent debate. GAN-style generate-judge-revise loops. Tournament selection. The papers have numbers, the numbers look good, and the frameworks have shipped.

There's just one problem: almost all of it was tested on models that are no longer the ones anyone serious is using.

## The consensus that isn't

The research converges on a few clean findings. Diversity beats quantity — two genuinely different models match or exceed sixteen copies of the same one. Self-consistency (sample multiple times, vote on the answer) beats multi-agent debate on accuracy-per-token. Investing in judge quality pays off more than adding generators. And iterative refinement hits diminishing returns after two or three rounds.

These findings come from papers I've verified, not just skimmed. The Mixture-of-Agents result is real: six diverse models hit 65.1% on AlpacaEval 2.0 versus GPT-4o's 57.5%. The sycophancy problem in debate is real: agents flip correct answers under social pressure, degrading performance by 3-8 percentage points. The 45% capability threshold is real: below that single-agent accuracy, coordination helps; above it, the overhead costs more than it gains.

But then you check the model lists. GPT-4o-mini. Llama. Mixtral. Qwen. Mid-tier models from mid-2024. The kind of models where diversity is easy because they fail in genuinely different ways, and where coordination helps because individually they're not that good.

## The frontier problem

When you're running Claude Opus, GPT-4.5, or Gemini 2.5 Pro, the dynamics shift in ways the literature hasn't measured.

The 45% threshold becomes irrelevant. Frontier models are well above it on most tasks that matter. If coordination only helps when individual agents struggle, and your agents don't struggle, what are you coordinating?

The diversity argument gets complicated. A fascinating rebuttal paper — "Rethinking Mixture-of-Agents" — found that sampling one strong model diversely (different temperatures, different prompts) outperforms mixing it with weaker models. When model quality is unequal, the weak models don't add perspective; they add noise. The stronger model's correct reasoning gets diluted by the weaker model's confident mistakes.

The sycophancy dynamics might be entirely different. Current research shows mid-tier models caving to social pressure in debate. Do frontier models do this too? More subtly? Less? We genuinely don't know. The paper that quantified sycophantic conformity was an ICML workshop contribution, not a large-scale frontier study.

## What probably still holds

Not everything is model-dependent. Some findings look structural.

Judge quality matters more than generator quantity. This is an architectural insight, not a capability one. Whether your models are frontier or mid-tier, a panel of diverse evaluators outperforms a single judge, and spending compute on evaluation beats spending it on more drafts.

Diminishing returns after round two or three of refinement. This matches basic information theory more than it matches specific model capabilities. The first revision captures the obvious gaps; subsequent rounds polish noise.

Start simple, add complexity only when measured gains justify it. Anthropic's own engineering guidance says this. Google's agent patterns say this. The production deployment data says this. The most reliable agent systems are the ones that add multi-agent orchestration only where single-agent demonstrably fails.

## The honest framing

So we have a literature that's directionally useful but empirically untested where it matters most. The qualitative insights — invest in judges, diversity helps, cap your iterations — are probably robust because they're structural. The specific numbers and thresholds are not portable to frontier models because they were never measured there.

This is actually the interesting question, and nobody's publishing on it. Not because it's hard to study, but because the people running frontier models at scale are companies with no incentive to share what works. The academic researchers use cheap models because they have academic budgets. The practitioners who could test this on Opus and GPT-4.5 are building products, not writing papers.

Which means the gap between what we know and what we need to know is exactly where the value is. If you're advising organisations on how to build AI agent systems — and these organisations are using frontier models, not Mixtral — the honest answer is: the research gives you the shape of the solution, but the specific parameters are yours to discover empirically.

May or may not extrapolate. That uncertainty is the most useful thing the literature teaches us.
