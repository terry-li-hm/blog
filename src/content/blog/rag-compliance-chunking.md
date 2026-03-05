---
title: "RAG for Compliance: The Hard Problem Is Chunking, Not Retrieval"
description: >-
  Banks are deploying RAG for compliance and discovering the hard problem
  isn't retrieval. It's the pipeline before it.
pubDatetime: 2026-03-06T09:00:00.000Z
draft: false
tags:
  - rag
  - compliance
  - ai
  - banking
  - financial-services
---

Banks are deploying retrieval-augmented generation for compliance and discovering, usually about six weeks in, that the hard problem isn't retrieval. It's chunking.

This surprises people because chunking sounds like a solved problem. Split the document at intervals, embed the chunks, store them in a vector database. The tooling is mature, the tutorials are plentiful, and the first demo almost always works. The first demo uses a clean document with self-contained sections and straightforward questions. Production compliance work does not.

Regulatory documentation in financial services is a different animal. It's dense, cross-referential, and deliberately ambiguous — ambiguous not through carelessness but because regulation is often intentionally written to give supervisors discretion. A regulatory notice says "refer to paragraph 3.2(b) of the principal circular." That paragraph references an exhibit. The exhibit defers to a supervisory guideline issued three years earlier. None of this is a clean chunk.

The standard chunking approach — arbitrary token windows, maybe with some overlap — treats each segment as a self-contained unit of meaning. For most documents, this is a reasonable approximation. For compliance documentation, it's wrong in a specific and expensive way. The compliance value doesn't live in individual paragraphs; it lives in the relationships between them. Policy interpretation, regulatory gap analysis, and edge case reasoning all depend on following cross-references correctly — not just surfacing the closest paragraph to the query.

What we found in practice: when you chunk regulatory documents without accounting for their structure, you get retrieval that works for FAQ-style queries and fails for anything requiring synthesis across sections. A question about whether a specific product type is exempt from a capital requirement might touch three different circulars that reference each other. A naive retrieval pipeline surfaces one, cites it confidently, and misses the caveat sitting in another.

The architecture that works better is more expensive to build. Chunk boundaries need to respect the document's own structure — section breaks, definition blocks, explicit cross-reference markers — rather than being imposed from the outside. Cross-references need to be resolved at index time: when a notice points to a guideline, the guideline's relevant section should be linked in the index, not chased at query time when the model is already generating an answer. Confidence calibration needs to be honest about when a query spans multiple documents with potentially conflicting guidance — surfacing the uncertainty rather than resolving it artificially.

The vendors selling compliance RAG mostly solve the easy version. They index the document, retrieve the closest paragraph, surface a citation. That's genuine utility for certain use cases — policy lookup, quick reference checks, FAQ deflection. But the compliance value proposition that gets pitched to financial services firms is usually more ambitious: policy interpretation, gap analysis, audit support, regulatory change impact assessment. Those use cases require the harder pipeline.

The banks getting this right share a pattern: they spend as much time on pipeline engineering as on model selection. They treat the retrieval problem as a domain problem — regulatory documents have a specific structure and cross-reference pattern — rather than a generic information retrieval problem. They build evaluation sets that test the cross-referential cases specifically, not just the single-document ones. And they're honest about confidence gradients, flagging when a query requires synthesis across sources rather than presenting every answer with equal certainty.

The ones that aren't will have beautifully cited hallucinations. The citations will be real. The synthesis will be plausible. And the compliance officer who stakes their professional judgment on it will discover the gap in the worst possible context.

The model is not the bottleneck. It hasn't been the bottleneck for a while. The retrieval pipeline is — and the retrieval pipeline, in compliance applications, is a domain-specific engineering problem that requires understanding the documents as deeply as the regulation requires.

---

P.S. The clearest signal that a compliance RAG deployment is underpowered: ask it a question that requires following a cross-reference. If the answer doesn't surface the referenced document, the pipeline is chasing citations rather than understanding them. That's fine for some use cases. Know which one you've built.
