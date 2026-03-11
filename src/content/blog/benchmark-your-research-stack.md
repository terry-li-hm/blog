---
title: "Benchmark Your Research Stack"
pubDate: 2026-03-10
description: "Running 10 real queries through 5 tools revealed that theoretical routing rules have systematic gaps — and the surprises were more useful than the confirmations."
tags: ["ai", "tooling", "workflow"]
draft: false
---

I use five research tools daily: a free built-in web search, two Perplexity-backed CLIs, an Exa semantic search CLI, and a grok/xAI wrapper for X/Twitter. I had a routing table — mental rules for which tool handles which query type. It was built from accumulated observation, not systematic testing.

Last week I ran an experiment: 10 real queries through multiple tools in parallel, scored the outputs, and updated the routing table with what I found. The confirmations were reassuring. The surprises were more useful.

## The Three Surprises

**1. "Reason" mode wasn't better than "search" mode for comparisons.**

I assumed that for trade-off queries ("X vs Y for Z"), the reasoning model would outperform the search model. It didn't. When sources exist, the search model structures them well. The reasoning model added hedging without adding insight — it surfaced the same three sources and then qualified everything more heavily. The routing rule is now: use reason only when sources are thin or the synthesis is genuinely multi-dimensional.

**2. X/Twitter search found nothing for employer culture queries.**

My routing table said: "what do people say about X on Twitter → grok --x-only." Seems obvious. But when I tested it against an employer culture query, the tool explicitly flagged "limited public discussions on X/Twitter" and fell back to Glassdoor data. Employer reviews don't live on X. They live on Indeed, Glassdoor, and LinkedIn. The tool was correct to fall back; the routing rule was wrong to send it there.

**3. Chinese search failed for professional salary data.**

I had a blanket rule: "HK local queries → search in Chinese first." This works well for restaurants, doctors, and consumer sentiment — those communities publish in Chinese. It fails for professional compensation data. Salary benchmarks for HK finance roles are published in English on Payscale, Morgan McKinley, and Robert Half. The Chinese query returned regulatory documents and job listings. The English query returned a clean salary table. Language routing isn't monolithic — it depends on where the publishing community actually writes.

## The Meta-Lesson

Routing tables built from observation are better than nothing, but they accumulate untested assumptions. The observation-based rule "X/Twitter queries → grok --x-only" sounds right until you test it on a query where the information simply doesn't exist on X.

The experiment cost about $0.40 in API calls and an hour of structured comparison. The output was a routing table with empirical backing and three specific corrections.

For any toolstack where you're making routing decisions by intuition, a structured benchmark is cheap insurance. Pick 8–10 representative queries from your actual work. Run each through 3–4 candidate tools. Score on quality and cost. The surprises pay for the session.

---

*Experiment log: `~/notes/Experiments/peira-2026-03-10-indago-benchmark/`*
