---
title: "Agentic Search Ate RAG"
description: "When AI agents can grep, read, and reason iteratively, most RAG infrastructure becomes unnecessary middleware."
pubDatetime: 2026-03-17T08:26:38.000Z
draft: false
tags: [ai, rag, agentic]
---

I run a personal knowledge base of ~40 markdown files with a curated index. No embeddings, no vector database, no chunking strategy. Just file names, a one-page index, and an AI agent that can grep.

It works better than any RAG pipeline I've built.

## What happened

Agentic search — an AI that can grep, read files, reason about what it found, and decide what to look for next — has eaten most of RAG's value proposition. The retrieval layer got absorbed into the reasoning layer.

All that RAG infrastructure (embedding pipelines, vector databases, chunking strategies, rerankers) was middleware compensating for a model that couldn't search iteratively. Once the model can, the middleware is unnecessary for most use cases.

Good file structure + clear naming *is* the retrieval system. The agent provides the intelligence.

## Where RAG still wins

RAG isn't dead everywhere. Five cases where it still earns its keep:

1. **Massive corpora** — millions of documents. An agent can't grep its way through that in reasonable time.
2. **Latency-critical retrieval** — when you need answers in milliseconds, not seconds. No room for a multi-hop reasoning loop.
3. **Conceptually distant queries** — when the user's words share no surface tokens with the stored text. Grep can't bridge a semantic gap; embeddings can.
4. **Structured similarity** — "show me documents like this one" is inherently a vector operation. No amount of grep replicates nearest-neighbour over dense representations.
5. **No agent available** — traditional search UX, API endpoints, mobile apps. If you can't run an agentic loop at query time, you need pre-computed retrieval.

## The pattern

This is a clean example of AI capability gains absorbing an adjacent software layer. The reasoning model made the retrieval middleware unnecessary — not by being better at retrieval, but by making retrieval a subtask of reasoning.

The consulting question for anyone building a RAG pipeline: *will your users have access to an agentic interface?* If yes, you might be building unnecessary complexity. If no, RAG is still justified.
