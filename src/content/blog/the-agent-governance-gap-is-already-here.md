---
title: "The Agent Governance Gap Is Already Here"
description: "Agentic AI isn't a future governance problem \u2014 it arrived ungoverned, and this week saw the first enforcement action."
pubDatetime: 2026-03-14T08:50:12.000Z
draft: false
tags: ["ai-agents", "banking", "governance", "china", "risk"]
---

The framing most banks are still operating under is: *AI agents are coming, and we should start thinking about governance.* That framing is wrong. Agents are already deployed. Governance hasn't arrived yet.

This week made the gap concrete in several ways at once.

Three Chinese regulators — MIIT, CNCERT, and CAC — issued coordinated warnings targeting AI agents with system-level permissions, all in the same week. Multiple Chinese banks responded by blocking Claude Desktop outright. That's the first concrete enforcement action against an agentic AI tool by financial institutions acting under regulatory pressure. Not a policy paper. Not a consultation. A block.

Separately, 314 malicious plugins were found on ClawHub, an agent plugin marketplace. Poisoned plugins can silently exfiltrate credentials, memory files, and client data. No marketplace currently requires mandatory security vetting. The reason this attack vector exists without a policy response isn't negligence — it's that existing technology risk frameworks were written before agent architectures existed. Open-source dependency scanning, third-party software vetting, BYOD policies: none of them contemplate a plugin that can read an agent's persistent memory or invoke a banking API on its own authority.

The pattern over the past week: every daily snapshot surfaced at least one agentic governance gap. Plugin supply chain attacks. Agent permission tiers. Persistent memory audit trails. BYOD agent risks. Chinese bank enforcement.

This matters for banks specifically because agent risk doesn't map cleanly onto existing model risk frameworks. SR 11-7 and its equivalents were designed for predictive models — systems that take inputs and return outputs, with a human in the loop at the decision boundary. Agents are different: they chain decisions, acquire tools, write to systems, and act across sessions. The risk isn't a bad prediction. It's an autonomous action the institution didn't authorise and can't audit.

The practical implication: governance frameworks need a separate tier for agentic systems. Any AI system with write, delete, or API-invocation access to production systems requires a different approval gate than a copilot or a summariser. The Chinese regulator warnings — coordinated across three agencies in one week — are the most useful forcing function available right now for getting that policy written before the next supervisory review.
