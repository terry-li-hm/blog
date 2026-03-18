---
title: "The Integration Layer Is the Moat"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [mcp, enterprise-ai, architecture]
draft: false
description: "MCP decouples the tool from the model. Once that happens, the durable asset isn't the model — it's which systems you've exposed."
---

I spend a lot of time in conversations where the central question is "which model should we be using?" It's the wrong question, and MCP is the reason why.

MCP — the Model Context Protocol — is usually pitched as better function calling. Cleaner interfaces, standardised tool definitions, easier to compose. That's accurate but undersells it. The more important thing MCP does is decouple the tool from the model entirely. An MCP server exposes a capability; the model is just a caller. Once that's true, any agent and any model can compose your tools freely, without bespoke glue code per pair.

That sounds like a developer convenience. In enterprise contexts, it's a strategic restructuring.

---

Here's the problem it actually solves. A bank running operations across eighteen markets doesn't have one system estate — it has eighteen, in various states of modernity, running on different core banking platforms, different data warehouses, different middleware stacks. When you try to build AI agents on top of that, the integration work is the majority of the project. And it has to be done again for every agent, and again for every new model or model version.

The combinatorial math is punishing. Three agents across ten systems across five markets with two model providers is not a technology problem — it's a maintenance commitment that compounds faster than your team can manage it. Most organisations that have tried this are either stuck in PoC, running one agent in one market, or quietly shelving the roadmap because the integration debt ate the team.

MCP converts this from a development problem to a configuration problem.

Build the MCP server for your core banking system once. Maintain it once, owned by the team that owns the system. Every agent — claims processing, AML review, credit underwriting, compliance monitoring — becomes a consumer of that server. Add a new market? Point their agent at the same server. Upgrade your model? The server doesn't care. The integration surface stops multiplying.

---

The strategic implication follows directly. If the integration layer is the durable asset, what does it mean to "invest in AI"?

Today, most enterprise AI investment is model-shaped. Which provider to standardise on. Which frontier model performs best on your benchmarks. Whether to fine-tune. Whether to run your own weights. These are real decisions, but they're made in a context where models change every six months and the performance gap between providers narrows with each generation.

The integration layer doesn't change on that cadence. An MCP server built against your core banking API is still working three model generations from now. The institutional knowledge embedded in that server — what the system exposes, how it behaves, what error conditions mean, what context the model needs to act usefully — that accumulates. It doesn't evaporate when Anthropic ships a new model.

This is what a moat looks like in the MCP era. It's not the model you've chosen. It's the coverage you've built: which systems have clean MCP servers, which capabilities those servers expose, and how well they've been hardened against the edge cases that only production traffic reveals.

---

There's an asymmetry worth naming. Building MCP server coverage requires actual work — understanding your systems deeply enough to expose them usefully, writing robust interfaces, handling auth and logging and versioning. It's not glamorous. It doesn't generate a demo. But it's also not replicable quickly. A competitor who hasn't done it can't catch up by purchasing a better model.

The organisations investing now in clean integration infrastructure are building something that their 2028 selves can build on regardless of what the model landscape looks like. The organisations waiting for the "right" model to standardise on before they integrate are deferring the durable work.

---

The pitch I keep coming back to, in conversations with FS clients thinking through their AI architecture: your AI strategy should be about which systems you've exposed, not which model you've chosen.

Models are inputs. The integration layer is the compounding asset. Treat it accordingly.
