---
title: RAG Solved the Wrong Problem
description: >-
  The retrieval pipeline was built for systems that couldn't reason about their
  own information needs. Agents can.
pubDatetime: 2026-03-11T10:00:00.000Z
tags:
  - ai
  - architecture
  - agents
---

Imagine a system that receives a question, decides it needs two searches — one keyword, one semantic — runs the first, notices the results are thin, reformulates and runs the second, then decides it already has enough and skips a third. It retrieves what it needs, when it needs it, in the form that suits the question. Now imagine the dominant architecture for AI retrieval makes all of that impossible by design.

That architecture is Retrieval-Augmented Generation, and the idea behind it was sensible when it emerged: language models have knowledge cutoffs and can't access your documents, so you retrieve relevant chunks and stuff them into the context window before generating an answer. A pipeline: query comes in, retriever runs, chunks land in context, model generates. The problem isn't that it doesn't work. The problem is that it was designed for a system that couldn't reason about its own information needs — and we kept using it after that stopped being true.

The pipeline commits to a retrieval strategy before knowing what the question actually demands. It decides how many chunks to retrieve, which similarity metric to use, whether to rerank — in advance, as configuration, not as reasoning. For a passive model that will consume whatever context it receives, this is the best available approach. For an agent that can ask itself what kind of retrieval this question requires, it's a step backward.

When you give an agent search tools instead — a keyword tool and a semantic one — it can reason about retrieval the same way it reasons about anything else. Precise terms and known identifiers belong in keyword search. Conceptual similarity and paraphrase belong in semantic search. Some questions need both, in sequence, with the second informed by what the first returned. Some questions don't need retrieval at all, and the agent can recognise that without being forced through a pipeline that retrieves anyway. The pipeline isn't reasoning. The agent is. The distinction matters more than the retrieval method.

For high-volume, predictable retrieval — processing thousands of documents, running the same query pattern at scale — a pipeline beats an agent on cost and latency every time, and no one should pretend otherwise. The architecture choice isn't RAG versus agentic search; it's which tool fits the task. The mistake is treating RAG as the default and agentic search as the exotic edge case, when for reasoning systems the relationship may be reversed.

The deeper issue is that we're still importing design decisions from an era when AI couldn't reason. The retrieval pipeline joins a longer list of inherited assumptions: embeddings as the universal representational layer, context windows as the natural unit of working memory, pipelines as the right abstraction for what are now reasoning systems. RAG wasn't wrong for what it was built for. The question is which other decisions we're still carrying forward without noticing, because we adopted them before the systems they were built around ceased to apply.
