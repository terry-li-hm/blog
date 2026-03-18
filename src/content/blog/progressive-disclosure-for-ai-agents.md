---
title: "Progressive Disclosure for AI Agents"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-architecture, mcp, agents]
draft: false
description: "Search returns summaries. Get returns detail. The model decides what to expand. 75% context savings."
---

There's a pattern that keeps appearing in MCP tool design, and it's worth naming because getting it wrong is expensive in a very literal sense.

The naive implementation: a search tool returns full records. You ask for jobs matching "AI governance in Hong Kong", the tool returns ten results — each with the full job description, responsibilities, qualifications, company background, and boilerplate. The model reads all of it before deciding which three are actually worth examining. You've burned 2,500+ tokens and the model hasn't started reasoning yet.

The better implementation: search returns compact summaries. ID, title, a 120-character preview, maybe a category tag. The model scans ten summaries, identifies the two that match what it's actually looking for, and calls a separate get-by-id tool for each. Full detail on demand, for exactly the records that warrant it. In practice, that's roughly a 75% reduction in context consumed per search call.

This is progressive disclosure — the same principle that makes good UIs readable — applied to the tool layer of an AI agent.

---

The reason it matters beyond token economics is that context is the agent's working memory. Every token you fill with content the model didn't need is a token that can't hold something it does need. With a naive search tool in a long agentic session, you're not just wasting money — you're evicting useful context to make room for records the model is about to ignore.

The pattern also forces a useful design discipline. Building a search-and-get pair requires you to decide: what's the minimum a model needs to decide whether a record is relevant? That's not always obvious. For job listings it's title and preview. For regulatory circulars it might be issuer, date, and first sentence. For email threads it might be subject, sender, and a snippet of the latest reply. The exercise of writing the compact summary format reveals what the model actually uses to make triage decisions — and it's usually far less than what a full record contains.

---

The principle generalises beyond MCP. Any agentic tool that fetches content should default to returning the minimum needed to decide, not everything. Gmail tools that return full email bodies on every list call. Slack tools that dump entire thread histories. Vector search tools that return full document chunks instead of passage summaries with source IDs. The same failure mode, different surfaces.

The direction of the default matters. If you build a tool that returns full content by default and ask agents to request summaries, you'll find that agents — particularly when operating under latency pressure or in complex multi-step tasks — take the path of least resistance and read the full content because it's already there. The cost of not-asking is zero; the cost of asking is another tool call. The incentives push toward the wasteful default.

Build the summary-first interface and make full detail a deliberate, explicit request. The model will use it correctly because it has to — there's no full content to skip past.

---

I ran into this while building job alert triage tools. The first version returned full LinkedIn job descriptions on every search. Within a few sessions the context window was filling up before the model had finished triaging the first pass. The fix was mechanical — a summary format for search, a get-by-id for anything worth reading — but the lesson was architectural: don't make the model pay to ignore things. Only charge it for what it actually reads.

The model is the selector. Give it enough to select, and nothing more until it asks.
