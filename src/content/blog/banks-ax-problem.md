---
title: "Banks Have an AX Problem They Don't Know About Yet"
description: >-
  Banks are building AI agents to call their APIs. Those APIs weren't designed
  for agent callers. The mismatch is subtle, consequential, and almost nobody
  is talking about it.
pubDatetime: 2026-03-06T16:00:00.000Z
tags:
  - banking
  - ai-agents
  - infrastructure
  - agent-experience
vault_notes:
  - "Agent Experience (AX)"
---

The obvious AI agent story in financial services is customer-facing: FX monitoring agents, mortgage comparison tools, portfolio summary bots. That story is well-told. There's a less-told story that will matter more, sooner, and it's internal.

Banks already have APIs for their risk systems, compliance engines, treasury pricing, KYC data, transaction records, and hundreds of internal services. These APIs were designed for human developers or for human-triggered batch processes. They're increasingly being called by AI agents. And they weren't designed for that.

The mismatch is subtle in the easy cases and catastrophic in the hard ones. Error messages assume a human will read them and can ask a clarifying question. An agent receiving a 400 Bad Request with a human-readable description has to decide what to do next — and without explicit guidance, it often hallucinates a fix and retries, producing unpredictable behavior. Auth flows that assume a browser session will hang when called headlessly. Interactive prompts that expect stdin will block indefinitely. APIs that return a PDF because a human would open it in a browser will confuse an agent expecting structured data.

None of these are exotic edge cases. They're the default behavior of systems built before agents were a design consideration.

The design layer that's missing is what I've been calling AX — agent experience. The same way DX (developer experience) became a competitive moat in the API economy, AX will separate firms that can effectively deploy agents from firms that are perpetually debugging why their agents misbehave. DX maturity took about a decade. AX maturity is going to be forced faster, because the business pressure to deploy agents in financial services is already intense.

Three things to audit in any internal API or tool that will be called by an AI agent. First: does your error message give enough information for a machine to recover without asking for help? An error that says "validation failed" is useless. An error that says "field X must be in format Y, received Z" is machine-actionable. Second: does your auth flow assume human interaction? OAuth flows that redirect to a browser, MFA challenges, CAPTCHAs — all of these break agent callers silently or noisily. Third: is your output format machine-parseable? PDFs, Excel files with merged cells, HTML responses meant for browser rendering — all of these require agents to do format conversion work that introduces failure points.

There's also a regulatory question that nobody is asking yet. When an AI agent executes a trade on your behalf and something goes wrong, where does liability sit? The current answer in most banks is "unclear," which is not a comfortable place to be when regulators start asking. The firms that solve AX first will also be the firms that have worked out the accountability architecture — because you can't design agent-friendly infrastructure without thinking through what happens when the agent makes a mistake.

The consulting frame is actually optimistic: banks already have the asset. The underlying APIs, the data, the transaction capabilities — these are extraordinarily difficult to build and took decades. AX is a design layer on top of existing infrastructure. It's expensive and non-trivial, but it's not starting from scratch. Fintechs starting fresh from the agent era won't have this problem, but they also don't have the data moat. The banks that move on AX quickly will have both.

---

P.S. The same logic applies to any enterprise with complex internal systems and an AI deployment mandate — not just banks. The banking context just makes the stakes clearer because the consequences of agent errors are measured in money and regulatory exposure.
