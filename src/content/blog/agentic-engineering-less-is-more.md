---
title: "Agentic Engineering: Why Less Is More"
description: >-
  Tool enthusiasm is often net-negative. Context pollution degrades performance
  faster than features improve it. The principles that actually work.
pubDatetime: 2026-03-06T23:00:00.000Z
tags:
  - ai-agents
  - engineering
  - context
  - claude-code
  - architecture
vault_notes:
  - "Agentic Engineering Principles"
---

The hardest thing to accept about building with AI agents is that adding more usually makes things worse.

More tools, more memory harnesses, more elaborate prompting structures, more attempts to inject relevant context — all of these feel like improvements. Most of them degrade performance. The mechanism is consistent: every addition competes for context window space, and context pollution degrades agent reasoning faster than features improve it.

The principle that practitioners who've pushed agents to production keep arriving at independently: bare is better. A focused agent with minimal tooling, clean context, and a specific task outperforms a comprehensive agent burdened with everything it might conceivably need.

This is counterintuitive because we're used to software where features add value monotonically. More database indexes don't usually slow down queries that don't use them. More functions in a library don't usually break the ones you're calling. But an agent's context window is a shared resource across everything the agent is trying to do, and every item in that context is something the model has to hold in working memory while reasoning about the task. An agent with twenty MCP tools loaded has twenty tool descriptions consuming context even when the task needs exactly one of them.

The practical implication is scope before tooling. What does this specific agent need to accomplish? What's the minimum set of tools that enables it? Everything else is potential pollution. The agent that's good at one thing, with access to the tools that one thing requires, consistently outperforms the general-purpose agent that can theoretically do anything.

Research and implementation are the clearest case of tasks that should be separated rather than combined. The failure mode of combining them is predictable: an agent asked to "build an auth system" researches all available options, loads descriptions of JWT, OAuth, SAML, and twelve libraries into context, makes a decision, and then tries to implement from a context already polluted by all the alternatives it considered and rejected. The implementation hallucinates because the research phase left residue.

The right pattern: research agent determines the approach — "JWT with bcrypt-12, seven-day refresh token rotation, this specific library" — and hands a fully specified instruction to a fresh-context implementation agent that has no knowledge of what was considered and rejected. The second agent works from clean context. The quality difference is substantial and consistent.

The same logic applies to endpoints. Agents start tasks well; they struggle with knowing when to stop. The two most reliable completion signals are a test suite — "all N tests must pass, you may not modify the test files" — and a visual specification — "iterate until the screenshot matches this design." Both give the agent a verifiable termination condition that doesn't depend on the agent's own judgment about whether the work is done. The agent's judgment about completion is often wrong. An external verifiable condition is not.

There's a meta-principle underneath all of this that takes longer to accept: agents are not the same kind of thing as the software systems they're replacing. Agents respond to context, to framing, to what's in their working memory at the moment of decision. The engineering discipline for agents is not about building more comprehensive systems — it's about understanding what the agent actually processes and removing everything that degrades the signal.

The discipline is more like managing a talented colleague who needs clear scope and gets confused when given too much background than like configuring a software system. You wouldn't give a new analyst the full history of every project the firm has ever run before asking them to do a single analysis. You'd give them what they need and keep the rest out of the way.

---

P.S. The models improve fast. A workaround built for a current model's limitation is often obsolete within months. This is another argument for keeping systems lean: fewer assumptions baked in means less to unwind when the model changes. Minimal context design ages better than elaborate context management.
