---
title: "What AlphaSense Charges Ten Thousand Dollars For"
description: "I built an AI landscape intelligence pipeline for zero marginal cost. Here's what it does and what it can't."
pubDatetime: 2026-03-14T08:15:41.000Z
draft: false
tags: [ai, tools, consulting, banking]
---

AlphaSense charges $10K+ per year for AI-powered market intelligence. Structured extraction from news, regulatory filings, and earnings calls. Domain-specific framing for financial services. The platform is good.

I built something that does 80% of what matters to me for zero marginal cost. Here's what I learned about which 80% is easy and which 20% is hard.

## What the pipeline does

It runs every night. Lustro (my RSS aggregator) fetches articles from ~150 sources — analyst blogs, Chinese tech press, HKMA circulars, AI research labs. Then theoria (the pipeline) processes them:

1. **Extract** — Sonnet reads each article and produces a structured card: title, headline, "so what for banks," regulatory exposure, vendor lock-in assessment, China angle, governance action required, and how a consultant would use it (steering committee slide vs coffee conversation vs background reading).

2. **Check citations** — every regulatory reference gets programmatically verified against the source text. Items not found in the original article get flagged `[INFERRED]`. This matters because LLMs will confidently cite "HKMA SPM-2" whether or not the article mentions it.

3. **Filter junk** — failed scrapes, paywalled stubs, non-AI press releases get flagged and dropped before they waste downstream compute.

4. **Gap analysis** — what's missing from this week's coverage? The pipeline identifies topics that should have appeared (frontier model releases, regulatory updates, competitor moves) and researches them.

5. **Synthesise** — a weekly briefing with opinionated positions, source URLs on every claim, and a "Pattern Watch" section that tracks which themes are accelerating, emerging, or fading.

6. **Track source quality** — DuckDB logs every extraction. After a month, `theoria --stats` shows which RSS feeds actually produce actionable insights and which are noise.

## What it costs

Zero marginal cost. All LLM calls run through Claude Code's Max subscription ($200/month flat, already paid for development work). No API credits consumed. The pipeline is ~1,200 lines of Python, no frameworks, no LangChain, no vector databases.

For comparison: AlphaSense starts at $10K/year for individual access. Enterprise tiers are custom-priced.

## What AlphaSense does that this doesn't

Proprietary corpus. AlphaSense indexes earnings call transcripts, SEC filings, expert network transcripts, and broker research that never hits RSS. My pipeline reads the public web. For a consultant who needs "what did HSBC's CFO say about AI spending in the Q4 call" — AlphaSense wins, no contest.

Scale of curation. 150 RSS feeds vs AlphaSense's million+ sources with human editorial oversight. My source quality tracking helps, but it's not the same as a team of analysts curating a corpus.

Collaborative features. Search, alerts, shared notebooks for teams. My pipeline produces vault notes for one person.

## What this does that AlphaSense doesn't

**Citation checking.** No market intelligence platform verifies whether its AI-generated regulatory references actually appear in the source material. Mine flags `[INFERRED]` on every ungrounded claim. In consulting, one hallucinated regulation in a client deck is reputationally fatal.

**Gap analysis.** "What's missing from this week's coverage?" is a question no product asks automatically. My pipeline identifies coverage holes and researches them.

**Domain-specific extraction schema.** Not just summaries — structured fields designed for my specific role: governance actions (does the bank need to create, update, or retire a control?), consulting useability (is this a steering committee slide or background reading?), China dual-ecosystem angle.

**Source quality feedback loop.** After a month, I know which feeds produce insights and which produce noise. No market intelligence platform exposes per-source ROI to users.

**Full ownership.** I can change the extraction prompt in 5 minutes. When my role shifts from "AI governance for HSBC" to something else, the pipeline shifts with me. No vendor negotiation, no feature request tickets.

## The honest assessment

The 80% I built is the intelligence *format* — structured, opinionated, domain-specific briefings with quality controls. The 20% I can't replicate is the intelligence *corpus* — proprietary data sources that don't exist on the public web.

For a consultant who needs to stay current on the AI landscape and frame developments for banking clients, the pipeline is more useful than AlphaSense. For an analyst who needs to dig into a specific company's earnings history or cross-reference broker reports, AlphaSense is irreplaceable.

The interesting question isn't "which is better." It's "what happens when the format layer (structured extraction, citation checking, gap analysis) gets applied to the corpus layer?" That's what the next generation of these platforms should look like. Neither exists today.
