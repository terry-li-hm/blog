---
title: "What Chinese AI Labs See That Western Ones Don't"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [china, ai-ecosystem, multi-agent]
draft: false
description: "A strand of multi-agent research — latent-space inter-agent communication — is thriving in Chinese labs and almost invisible in the West."
---

I've been reading through multi-agent AI research for a project at work, and I keep running into the same pattern: English-language literature converges on the same set of problems (sycophancy, prompt bloat, latency), and then proposes the same category of solutions (better prompting, smarter topologies, stronger judges). It's a coherent body of work. It's also missing something.

Buried in the arXiv listings, mostly from late 2025, there's a cluster of papers from Chinese labs that aren't debating sycophancy at all. They're asking a different question: what if text isn't the right medium for agents to talk to each other in the first place?

## The bottleneck everyone accepts

Standard multi-agent systems work like this: Agent A thinks, serialises its thoughts into tokens, sends them to Agent B, which parses those tokens, reconstructs context, and thinks again. Every handoff involves a round-trip through language — compress thought into words, transmit, decompress back into representation. It works. It's also slow, lossy, and expensive.

Western research has mostly treated this as a fixed constraint and worked around it. You get papers on reducing round-trips, better system prompts to preserve fidelity, debate formats that surface disagreement before consensus collapses. All reasonable. All downstream of an assumption no one is questioning: that agents communicate in text.

## What Chinese labs are trying instead

Four papers, all with Chinese lab co-authorship, propose bypassing language entirely.

**Interlat** (Zhejiang University / Alibaba / NTU / SJTU, arxiv:2511.09149) <!-- [VERIFY] --> has agents share their last hidden states — the internal vector representations — instead of generating tokens. On ALFWorld benchmarks, this delivers +3.3 percentage points of accuracy improvement and a 24x latency reduction (9.19 seconds down to 0.20 seconds). <!-- [VERIFY] --> The hidden states can be compressed to just 8 tokens without performance loss.

**LatentMAS** (arxiv:2511.20639) <!-- [VERIFY] --> goes further: no additional training required. It uses a shared latent working memory that agents read and write to directly. Across nine benchmarks covering maths, commonsense reasoning, and code, it achieves up to 14.6% accuracy gains while reducing token usage by 70–84% and running 4–4.3x faster. <!-- [VERIFY] -->

**Cache-to-Cache** (Tsinghua University, arxiv:2510.03215) <!-- [VERIFY] --> fuses the KV-cache between models using a learned neural projector — essentially a translation layer between two models' internal representations. The accuracy gains are more modest (6–14%), but the architecture is interesting: it handles the heterogeneous-model case, the hard part of making this work at scale.

And then there's **Thought Communication** (arxiv:2510.20733), a NeurIPS 2025 Spotlight <!-- [VERIFY] --> that formalises the whole approach as a latent variable model, proving that shared and private agent thoughts can be identified nonparametrically. It's the theoretical scaffolding the other three papers were built without.

None of these are production-ready. Most variants currently require same-architecture or same-family models — which is a significant constraint in a heterogeneous deployment. But the direction is clear.

## Why the divergence?

I've been thinking about why this work is concentrated in Chinese labs and nearly absent in Western ones. A few hypotheses, none conclusive.

One: **different pressure points.** The Western multi-agent ecosystem is largely API-based — you call OpenAI or Anthropic, get tokens back, pass them to the next model. Latency is real but tolerable; cost is the sharper concern. If you're running inference infrastructure at the scale Chinese labs operate — owning the hardware, owning the models — the communication bottleneck looks different. Cutting latency 24x isn't just a nice number; it changes what's architecturally feasible.

Two: **proprietary model access.** Sharing hidden states only works if you have access to the model's internals. Western practitioners almost universally work through APIs that expose only token-level outputs. Chinese labs, building and hosting their own models, have the access required to even attempt this. <!-- [VERIFY] --> The constraint shapes the research agenda.

Three: **publication culture.** English-language conferences and workshops set the agenda for what "counts" as multi-agent research. Work that doesn't cite or engage with that canon is less likely to surface in the feeds most Western researchers are reading. The Thought Communication paper made NeurIPS, so it's findable. The others require knowing to look.

## What this suggests

The Western literature on multi-agent systems assumes text is the communication medium. The Chinese literature has started treating that assumption as an engineering parameter — one you can optimise. That's a meaningful difference in framing.

If latent-space communication matures — if the same-architecture constraint is solved, if the approach generalises across model families — it would change the economics of multi-agent systems substantially. Token budgets, latency ceilings, the entire debate about how many agents you can afford to run in parallel: all of that gets recalculated.

I don't think Western labs are unaware of this direction. But I haven't seen any published work pursuing it with the same focus. That gap, whatever its cause, is worth watching.
