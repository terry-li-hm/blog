---
title: "Enterprise AI Has a Plumbing Problem, Not a Model Problem"
description: "Most enterprises are optimising the wrong variable. The gap between 5% and 40% agent adoption won't be closed by better models."
pubDatetime: 2026-03-11T09:29:28.000Z
draft: false
tags:
  - ai-agents
  - enterprise
  - architecture
---

Every large enterprise AI conversation I've been in eventually arrives at the same question: GPT-5 or Gemini? Azure OpenAI or the open-source route? Which model wins?

It's the wrong question. The model is the least constrained part of the problem.

A recent industry survey found that 46% of enterprises cite integration with existing systems as their primary challenge with AI agents. Not model quality. Not cost. Not governance. Integration — the pipes. Meanwhile, only 23% of enterprises are actually scaling AI agents; the remaining majority are stuck in perpetual experimentation. Gartner projects that 40% of enterprise applications will embed agents by end of 2026, up from less than 5% today. That eight-fold jump won't come from GPT-5.4 being marginally better than GPT-5.3.

It will come from enterprises finally solving the plumbing.

Consider what a hedge fund's applied AI team discovered when they set out to build an AI research engine: the blockers weren't model capability. They were PDFs that hid their most valuable data inside tables and charts, hundreds of datasets requiring consistent integration, compliance guardrails that had to be built before any team-level customisation could happen. The model was almost incidental. The engineering work was about connecting intelligence to the systems that already existed.

Or consider what emerges when you push agents to work at financial-data scale. Standard retrieval breaks. The accuracy-versus-comprehensiveness trade-off that RAG handles fine on small corpora becomes acute when you need to analyse an entire earnings season across hundreds of companies. Context windows don't rescue you — there's substantial research showing that language models systematically ignore content in the middle of long inputs, so a larger window just gives you a larger blind spot. Tasks run for ten minutes to three hours across more than a hundred tools. The agents that survive this aren't smarter. They're better plumbed.

The plumbing problem has three distinct layers, and most organisations are solving them in the wrong order.

The first is model coupling. The most common enterprise AI architecture today has GPT-4o baked into every component — not because it's the only option, but because teams integrated it directly and now every swap requires touching code across the stack. A more durable approach standardises on the OpenAI-compatible API interface across all LLM calls, then builds a routing layer that directs general content to managed APIs and sensitive data to self-hosted models where data residency requirements demand it. Model selection becomes a configuration decision. When Gemini or a newer Claude turns out to be better for a specific task, you change a config file, not your architecture.

The second is the integration layer itself. Here's the arithmetic that matters: a large enterprise with AI ambitions has perhaps twenty core systems that every AI initiative will eventually need to touch — a claims platform, a policy administration system, a customer database, a regulatory reporting tool. Under the current approach, every new AI initiative rebuilds access to those systems from scratch, differently each time, with different assumptions baked in. The first fraud detection agent integrates with the claims platform. So does the second. And the third. Each team solves the same problem with slight variations, none of which are visible to the others.

The Model Context Protocol changes this arithmetic. Each system gets one MCP server, built once, maintained by the team that owns the system. Every agent that follows connects to the same servers. The fraud agent, the underwriting assistant, the customer service bot — they all consume the same integration work. New initiatives become configuration problems rather than integration projects. And as a side effect, when every system access flows through an MCP server, you get a versioned, auditable interface to your enterprise systems for free. When a regulator asks what data the AI accessed and when, the answer lives in the server logs rather than scattered across bespoke integration code in a dozen agent implementations.

The third layer is the one nobody's solved yet. Even at the most sophisticated AI infrastructure organisations, the current state of the art for handling agent failures is: try again, with the context of the failed attempt preserved. That's it. For a chatbot, that's fine. For an agent executing a ten-step underwriting workflow that reaches step seven before a timeout, it's not.

Long-running agents in enterprise environments need something closer to what workflow engineers have understood for years: durable execution. The ability to checkpoint state, resume from an exact step rather than from the beginning, handle retries with backoff, and — critically — escalate to a human at defined gates rather than silently failing or silently succeeding with wrong data. In a regulated industry, the human-in-the-loop isn't a concession to AI's limitations. It's an architectural requirement for high-stakes decisions that the architecture has to make explicit, not leave to the agent's judgment.

The hedge fund that built the system I described earlier arrived at a structure that reflects all three layers, even if they didn't frame it that way. Compliance guardrails and model evaluation lived centrally. Integration — connectors into earnings transcripts, filings, broker research — was built once and shared. Individual investment teams then built agents scoped to their asset class, with tool access limited by design. Ten people supporting a hundred and eighty teams. The leverage came not from having better models than competitors, but from solving the plumbing once.

The teams who will close the gap between 5% and 40% agent adoption aren't the ones running the most benchmarks. They're the ones who've stopped treating integration as something they'll figure out per-project, and started treating it as infrastructure worth building correctly once.

---

P.S. The model still matters, of course — just not at the margin where most organisations are spending their attention. The more interesting model question for multi-market enterprises isn't GPT versus Gemini. It's what you do when one of your markets runs on a different cloud stack entirely, and the model you've standardised on isn't available there. That's a routing problem, which brings you back to the plumbing.
