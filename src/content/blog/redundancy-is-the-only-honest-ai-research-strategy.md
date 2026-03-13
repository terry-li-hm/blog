---
title: "Redundancy Is the Only Honest AI Research Strategy"
description: "I ran the same question through 6 AI tools and scored them against peer-reviewed evidence. Every tool got something wrong that another got right."
pubDatetime: 2026-03-13T12:00:00.000Z
draft: false
tags:
  - ai
  - research
  - tools
  - methodology
---

I ran a simple experiment: take one research question with clear ground truth, run it through six AI research tools, and score every output against peer-reviewed meta-analyses.

The question was straightforward — is resistance training or cardio better for sleep? The evidence is clear and recent (multiple 2024-2025 meta-analyses). A good research tool should get this right.

None of them got everything right.

## What happened

| Tool | Score (/30) | Cost | What it got right | What it got wrong |
|------|-------------|------|-------------------|-------------------|
| Grok | 26 | $0.05 | Found a Feb 2026 study the others missed, cited specific statistics | Slightly overconfident recommendation |
| Noesis (Perplexity API) | 24.5 | $0.40 | Most comprehensive, 46 sources | Concluded resistance training is "measurably superior" — the broader evidence doesn't support that cleanly |
| WebSearch | 21 | Free | Correct headline, real citations | No depth, no nuance |
| Exa Answer | 19 | $0.01 | Decent synthesis | Leaned on a 2017 review, overstated findings |
| Exa Search | 14.5 | $0.01 | Found relevant papers | Surfaced old studies, no synthesis |
| Claude (no tools) | 13.5 | Free | Correct direction | Vague, no citations, nothing novel |

I scored on six dimensions: accuracy, citation quality, nuance, recency, uncertainty disclosure, and false confidence.

## The KOL surprise

I also checked what Andrew Huberman and Rhonda Patrick — two of the most-cited health communicators — actually said about this topic.

Neither of them claims "resistance training beats cardio for sleep." Huberman makes a mechanistic claim about resistance training and growth hormone. Patrick focuses on HIIT and metabolic recovery. The "resistance training outperforms aerobic for sleep" framing that circulates online? It traces to AI-generated summaries of a 2018 systematic review. Not to anything either person verifiably said.

The popular internet claim is an AI-generated telephone game.

## The lesson

The cost of running the same question through five tools is about fifty cents. The cost of trusting the wrong single tool is unknowable.

Every tool in this experiment was confidently wrong about something that another tool got right. Grok found studies that Noesis missed. Noesis was comprehensive but overconfident. WebSearch was correct but shallow. Claude without tools was nearly useless for research.

The "which AI tool is best for research?" question is wrong. The right question is: **how many independent sources are you cross-referencing?**

Redundancy feels wasteful. It's actually insurance. In a domain where every tool hallucinates differently, the only robust strategy is: run them all, and pay attention to where they disagree. Disagreement is where the interesting stuff lives — and where the mistakes hide.

## For teams using AI in consulting

"We use Perplexity" or "We use ChatGPT for research" is a single point of failure dressed up as a tool choice. The quality of your research output depends on how many independent sources you cross-check, not which single tool you picked.

Fifty cents of redundancy. Or an unknown amount of confidently wrong advice to a client. Pick one.
