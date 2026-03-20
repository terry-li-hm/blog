---
aliases: ["The MTEB Leader Barely Beats a Free Model on Agent Memory"]
title: "The MTEB Leader Barely Beats a Free Model on Agent Memory"
description: "I benchmarked 10 memory backends and multiple embedding models on actual agent memory retrieval. The results challenge common assumptions about what matters."
pubDatetime: 2026-03-14T10:43:26.000Z
modDatetime: 2026-03-17T08:00:00.000Z
draft: false
tags:
  - ai
  - ai-agents
  - enterprise
  - memory
---

I built a benchmark harness that tests AI agent memory backends — the systems that let agents remember things across sessions. Ten backends, from a plain markdown file to knowledge graph frameworks. Along the way I got curious about a simpler question: does the embedding model matter? Does the backend matter? What actually drives retrieval quality for agent memory?

The test corpus is 53 facts an AI coding assistant might accumulate over weeks of work: who owns what project, which regulator requires what, team preferences, technical decisions, dates, metrics. Twenty queries ranging from simple lookups to multi-hop reasoning to temporal questions. Ground truth labels for every query.

Here's what happened.

The raw vector databases — SQLite with vec extension, PostgreSQL with pgvector, Neo4j with vector index — all hit 100% recall. Every expected fact retrieved across all twenty queries. The backend architecture made no difference. If you give three different databases the same embeddings, they return the same results. The embedding model is doing all the work; the database is just cosine similarity on stored vectors.

LangMem, a lightweight framework built on LangGraph's InMemoryStore, scored 89% recall at 13ms per query. It missed three facts on the hardest queries — temporal reasoning and cross-referencing. But it ingested 53 facts in 400 milliseconds, versus 28 seconds for the raw vector databases. For agent memory, where you're adding facts on every interaction, that ingest speed matters.

The keyword baseline — plain word matching against a markdown file, no machine learning whatsoever — scored 79% recall at 0.3ms. No embeddings, no vectors, no API calls, no dependencies.

Mem0, a popular memory framework that uses an LLM to extract and consolidate facts during ingestion, consolidated 53 facts down to 32 and scored 57% recall. Each fact took about 13 seconds to ingest because the LLM processes every addition. The total ingest time for 53 facts was nearly 12 minutes, versus half a second for LangMem.

Three backends didn't produce usable scores. Graphiti stores knowledge as graph edges between entities rather than retrievable text, so the benchmark's retrieval pattern doesn't match its architecture — it's designed for conversation-length inputs, not single facts. Cognee hit a Python 3.13 compatibility bug in its SQLAlchemy layer. Letta's hosted embedding endpoint was down during testing.

On embedding models: I tested the MTEB leaderboard leader (Google's Gemini Embedding 001, 3072 dimensions) against a tiny local model (all-MiniLM-L6-v2, 384 dimensions, free). Using the same SQLite backend, the MTEB leader scored 100% recall versus 89% for the local model. The gap is real but only appears on the hard queries — temporal reasoning and multi-hop. For straightforward retrieval, both score identically. The latency difference is 50x: 474ms per query for the API model versus 8ms for the local one.

A few things surprised me. Framework backends that add intelligence during ingestion — LLM-powered entity extraction, fact consolidation, knowledge graph construction — performed worse than raw vector databases that just store and retrieve embeddings. The "smart" processing during ingestion either loses information (Mem0's consolidation dropped recall by 43 points) or doesn't match the retrieval pattern (Graphiti's graph edges aren't directly queryable as text).

The ingest cost of framework backends is staggering. Mem0 took 703 seconds to ingest 53 facts. Graphiti took 781 seconds. Raw vector databases took 28 seconds. LangMem took 0.4 seconds. If your agent adds memories on every interaction, the framework overhead makes the agent feel slow or requires background processing that introduces latency between learning and recall.

The keyword baseline being competitive at 79% is the most uncomfortable finding. It suggests that for small agent memory stores — under a hundred entries — a curated text file with word matching gets you most of the way there. The marginal value of embeddings is the 10-20% recall improvement on harder queries. Whether that justifies the infrastructure depends on your use case.

The question worth asking before specifying a memory architecture for your agent isn't "which framework should we use?" It's "how many memories will this agent have, how hard are the queries, and how fast does it need to learn?" For most current deployments, the honest answer points toward the simplest option that clears the bar.

*Updated March 17, 2026 with full 10-backend results and embedding model comparison. Earlier version had 4 backends and 2 embedding models.*
