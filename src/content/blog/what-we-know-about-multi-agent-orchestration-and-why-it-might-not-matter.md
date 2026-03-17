---
title: "What We Know About Multi-Agent Orchestration (And Why It Might Not Matter)"
description: "The research on multi-agent AI systems was mostly done on cheap models. Now that frontier models are the ones people actually use, we might be optimising for the wrong game."
pubDatetime: 2026-03-18T12:31:03.000Z
revisionNote: "Added frontier-specific findings: model-family interaction effects, GPT inertia vs Claude flexibility, Polydev cost study, production benchmarks, economics section"
modDatetime: 2026-03-17T23:27:15.000Z
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

When you're running Claude Opus 4.6, GPT-5.4, or Gemini 3.1 Pro, the dynamics shift in ways the literature hasn't fully measured. But we're starting to get data.

The 45% threshold becomes irrelevant. Frontier models are well above it on most tasks that matter. If coordination only helps when individual agents struggle, and your agents don't struggle, what are you coordinating?

The diversity argument gets complicated. A rebuttal paper — "Rethinking Mixture-of-Agents" — found that sampling one strong model diversely (different temperatures, different prompts) outperforms mixing it with weaker models. When model quality is unequal, the weak models don't add perspective; they add noise. But a separate study found that a diverse council of comparable-quality models hit 91% on GSM-8K versus 82% for three copies of the same model. The reconciliation: when one model is substantially stronger, sample it diversely. When models are genuinely comparable, inter-model diversity wins.

The sycophancy dynamics are different, but not absent. A UC Berkeley study ran a thousand moral dilemmas through GPT-4.1, Claude 3.7 Sonnet, and Gemini 2.0 Flash. GPT revised its position less than 3% of the time. Claude and Gemini revised 28-41% of the time. Who speaks first matters enormously — GPT as the first speaker anchors the group far more than Claude or Gemini. And when Karpathy's LLM Council was replicated with de-anonymised responses, models "folded immediately" toward whichever answer came from the most prestigious model. Anonymous ranking isn't a nice-to-have; it's structural.

## What the frontier models actually do differently

The most surprising finding comes from the one paper that tested real frontier models in multi-agent configurations. Claude, GPT, and Gemini don't just perform differently — they respond to coordination architectures differently.

Claude uniquely benefits from heterogeneous mixing. Put a weaker model as orchestrator and stronger Claude models as subagents, and performance jumps 31% over a homogeneous all-strong setup. The same architecture degrades performance for GPT and Gemini families. Nobody predicted this from the cheap-model literature, because cheap models don't have these family-specific interaction effects.

Decentralized mixed-capability architectures, on the other hand, help all three families. The topology isn't neutral — it interacts with the model family in ways that matter for system design.

Meanwhile, the production benchmarks tell their own story. Opus 4.6 leads on code correctness and knowledge work but regressed on multi-tool coordination compared to its predecessor. Gemini 3.1 Pro leads on multi-tool coordination but has production-blocking latency. GPT-5.4 is the cheapest and best at computer use but has no native multi-agent architecture. Each model is the best multi-agent citizen for a different job, and none of them is universally dominant.

## The economics of frontier orchestration

Perhaps the most practically useful finding: you don't need frontier models everywhere in a multi-agent system. A study from Arizona State and Microsoft found that Claude Haiku with multi-model consultation matched Claude Opus on SWE-bench at 62% lower cost. The key was that the two approaches solved different problems — only 76% overlap in which tasks they cracked. Each covered the other's blind spots.

Similarly, AI21's Maestro showed that a smaller model running eight parallel trajectories with structured plans outperformed a larger model running once, at lower total cost. The architecture ate the capability gap.

This maps to what production deployments are doing: frontier models for orchestration and complex reasoning, mid-tier for execution. Not because mid-tier is good enough for everything, but because the marginal quality gain from all-frontier doesn't justify the cost when a strong judge can select the best trajectory from cheaper candidates.

## What probably still holds

Not everything is model-dependent. Some findings look structural.

Judge quality matters more than generator quantity. This is an architectural insight, not a capability one. Whether your models are frontier or mid-tier, a panel of diverse evaluators outperforms a single judge, and spending compute on evaluation beats spending it on more drafts.

Diminishing returns after round two or three of refinement. This matches basic information theory more than it matches specific model capabilities. The first revision captures the obvious gaps; subsequent rounds polish noise.

Start simple, add complexity only when measured gains justify it. Anthropic's own engineering guidance says this. Google's agent patterns say this. The production deployment data says this. The most reliable agent systems are the ones that add multi-agent orchestration only where single-agent demonstrably fails. On SWE-bench, the scaffold — prompts, tools, context management — explains as much variance as the model tier.

And the failure mode that kills production systems isn't model capability. It's the handoff contracts between agents. Every agent needs explicit, validated input-output schemas. The models are fine; the interfaces between them are where things break.

## The honest framing

The gap between what we know and what we need to know is exactly where the value is. No one has published a controlled comparison of all three frontier model families in an identical multi-agent harness. No best-of-N scaling curves for frontier models. The model-family interaction effects are real but come from one paper.

The academic researchers use cheap models because they have academic budgets. The practitioners who could test this on Opus and GPT-5.4 are building products, not writing papers. The AI labs publish impressive demos but not controlled ablations.

If you're advising organisations on how to build AI agent systems — and these organisations are using frontier models, not Mixtral — the honest answer has two parts. The structural insights transfer: invest in judges, cap your iterations, start simple, design your handoff contracts carefully. But the specific parameters — which model family benefits from which topology, where diversity helps versus hurts, when to go all-frontier versus tiered — those are yours to discover empirically.

The literature gives you the shape. The frontier-specific data gives you the first few data points. The rest is still being written, mostly by people too busy shipping to publish.
