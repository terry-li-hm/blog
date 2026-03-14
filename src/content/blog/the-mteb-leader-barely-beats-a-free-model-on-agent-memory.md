---
title: "The MTEB Leader Barely Beats a Free Model on Agent Memory"
description: "I benchmarked Google's top-ranked embedding model against a tiny local one on actual agent memory retrieval. The gap is smaller than the leaderboard suggests."
pubDatetime: 2026-03-14T10:43:26.000Z
draft: false
tags:
  - ai
  - ai-agents
  - enterprise
  - memory
---

I've been building a benchmark harness for AI agent memory backends — the systems that let agents remember things across sessions. Along the way I got curious about a simpler question: does the embedding model matter?

The MTEB leaderboard ranks hundreds of embedding models on retrieval quality. Google's Gemini Embedding 001 currently sits at the top with a score of 68.32, a meaningful gap over everything else. At the bottom of the rankings you'll find models like `all-MiniLM-L6-v2` — a tiny 384-dimension model that runs locally on a laptop in milliseconds. The leaderboard implies these are in different leagues.

So I tested both on actual agent memory retrieval. Not academic benchmarks — a real corpus of 53 facts that an AI coding assistant might accumulate over weeks of work: who owns what project, which regulator requires what, team preferences, technical decisions, dates, metrics. Twenty queries ranging from simple lookups ("What is Terry's role?") to multi-hop reasoning ("What framework does the person leading data science prefer?") to temporal questions ("What changed about the AML model after March 2026?").

The results, using the same vector store backend (SQLite with cosine similarity):

Gemini Embedding 001 (MTEB #1, 3072 dimensions, API): 100% recall, 422ms per query. Every expected fact retrieved across all twenty queries.

all-MiniLM-L6-v2 (local, 384 dimensions, free): 89% recall, 8ms per query. Missed three expected facts, all on the hardest queries — the ones requiring temporal reasoning or cross-referencing multiple facts.

The keyword baseline — plain word matching, no embeddings at all — scored 79% recall at 0.3ms. No model, no vectors, no API calls.

There are a few things worth noting here. The MTEB leader does win. 100% versus 89% is a real gap, and on the hard queries it genuinely matters. If your agent needs to answer "what changed after date X" by connecting two separate facts, the better embedding model finds both where the cheap one misses one.

But the gap only shows up on the hard queries. For straightforward retrieval — "who owns AML validation?", "when does Capco start?" — every model including the keyword baseline hits 100%. For an agent memory store with fewer than a hundred entries, most queries are straightforward.

The latency difference is 50x. For an interactive agent that queries memory on every turn, 422ms versus 8ms is the difference between feeling responsive and feeling sluggish. And that's before you factor in cost, privacy (API calls send your memory contents to a third party), and offline capability.

This is early data — four backends, two embedding models, one corpus. I'll update this as I bring more backends online and test additional models. But the directional finding already challenges a common assumption in enterprise AI architecture: that you need a top-tier embedding model for agent memory. For small stores — and most agent memory stores are small — you probably don't. The model that runs locally for free gets you 89% of the way there, at a fiftieth of the latency.

The question worth asking before specifying an embedding model for your agent architecture isn't "what's best on MTEB?" It's "how many memories will this agent actually have, and how hard are the queries?" For most current deployments, the honest answer is: not many, and not very.
