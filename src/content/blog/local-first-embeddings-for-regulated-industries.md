---
title: "Local-First Embeddings for Regulated Industries"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-architecture, embeddings, data-governance]
draft: false
description: "24MB download, <100ms per batch, nothing leaves the machine. For banks with air-gapped environments, this changes the conversation."
---

I've been building AI agents that need persistent memory across sessions — the kind where the agent recalls what you discussed last week without you re-explaining it. The obvious approach is to call an embedding API: send the text, get back a vector, store it locally. Works fine until you're in a bank.

The problem isn't latency or cost. It's that any embedding API call sends your text to a third-party server. For most use cases that's a non-issue. For a bank with data governance obligations, or any environment with strict data residency requirements, it's a hard stop. You can't build a session memory system if the session content has to leave the network to be indexed.

The alternative I've been running with: local vector embeddings via [fastembed-rs](https://github.com/Anush008/fastembed-rs), using the BGE-small-EN-v1.5 model in ONNX format. The model runs entirely on-device. Nothing leaves the machine. 24MB one-time download, under 100ms per batch at inference time, no API key, no network call.

For banks with air-gapped environments or data residency constraints, this changes what's architecturally possible. You can now build agent memory, semantic search over internal documents, and similarity retrieval — without any outbound data flow. The compliance story becomes trivial because there's nothing to explain to the governance team.

The trade-off is real and worth being honest about.

BGE-small produces 384-dimensional vectors. OpenAI's text-embedding-3-small produces 1536-dimensional vectors. In practice, higher dimensionality means more expressive representations and better recall, particularly for domain-specific vocabulary. Financial and legal text has a lot of domain-specific vocabulary.

For session memory retrieval — "what did we discuss about the AML project last Tuesday?" — 384 dimensions is fine. The queries are short, the recall requirements are forgiving, and the similarity signal is strong enough to surface the right chunks. I've been running this in production for my own agent setup and the retrieval quality is good.

For compliance document search — searching across regulatory circulars, policy documents, model risk submissions — I'd want to benchmark before committing. Specialised terms (HKMA SA-2, SR 11-7 model risk standards, IFRS 17 measurement approaches) may not be well-represented in a general-purpose small model trained on web text. You'd want to run a recall evaluation against your actual document corpus before deciding this is good enough for a compliance use case. It might be. It might not. Don't guess.

The architectural principle is separable from the model choice. The point is that local embedding is a viable option — one that eliminates both the API key dependency and the data residency concern in a single move. If BGE-small isn't sufficient for a given use case, the same local execution pattern works with larger ONNX-format models. The privacy and governance story doesn't change with model size; only the compute requirements do.

For banks building AI capabilities in 2026, the framing I keep returning to is: which parts of the AI stack genuinely require external APIs, and which parts have been outsourced by default without anyone asking the question? Embeddings are a case where the default (API call) has an obvious local alternative that's now fast enough and good enough for many production workloads. The choice to keep sending data externally should be a deliberate decision, not an assumption baked into the architecture from day one.

24MB model, no network call, nothing logged on a vendor's servers. For some environments, that's not just a nice property — it's the only architecture that clears legal review.
