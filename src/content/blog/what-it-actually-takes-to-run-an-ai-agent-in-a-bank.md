---
title: "What it actually takes to run an AI agent in a bank"
description: "The resistance to AI agents in banking isn't mostly cultural. It's infrastructure — and the gap is more interesting than the politics."
pubDatetime: 2026-03-07T05:44:33.000Z
draft: false
tags: ["ai", "banking", "llm", "infrastructure"]
---

The most common question I hear from people building AI tooling is some variant of "why aren't banks using this yet?" The assumption underneath is that resistance is cultural — risk-averse executives, slow procurement, compliance theater. Some of that is true. But the deeper answer is infrastructure, and it's more interesting than the politics.

Consider what an LLM-based agent actually needs to do its job. It needs to read your codebase, understand context, write and run code, inspect results, iterate. Each of those steps involves something a bank cannot do by default: sending data to an external API. Your codebase is proprietary. Your data models reveal business logic. Even a seemingly innocuous question like "what does this function do?" carries implicit information about how risk is calculated, how positions are valued, how trades are structured. None of that can leave the building.

This sounds like a reason to write off AI agents entirely. It isn't. The major cloud providers have spent years solving exactly this problem. You can run capable models inside your own cloud tenancy — same model, different pipe. The data stays within your regulatory perimeter; the API call goes to an endpoint you control. The agent works the same way. What changes is where the inference happens.

But solving the data residency problem reveals a harder one underneath.

A coding agent that can only read files and suggest changes is barely an agent — it's an expensive autocomplete. The value comes from execution: running tests, calling tools, firing off shell commands, observing results. This is where banks genuinely struggle, not because the technology doesn't exist, but because execution in a regulated environment requires a design that most vendors haven't thought through.

Every command an agent runs needs to be logged. Not in the loose sense of "we have audit logs somewhere," but with the specificity a compliance officer could defend in front of a regulator: who ran what, when, against which system, with what output. The agent's identity — which model, which version, which session — needs to be as traceable as a human operator's. Most agent frameworks treat this as an afterthought, a logging wrapper you bolt on at the end. Banks need it to be load-bearing architecture.

The execution environment itself needs isolation. An agent working on code should not have filesystem access to anything outside its working context. It shouldn't be able to make outbound network calls unless explicitly permitted. The right model is something like a disposable container per agent session — ephemeral, network-isolated, with mounts scoped to exactly what the task requires. This is solvable with existing tooling, but it requires deliberate choices that most default setups don't make.

The third piece is allowlisting at the tool level, not just the network level. Reading a diff and making an outbound HTTP call to an external service are categorically different operations. A system built for regulated environments draws this distinction before the agent starts, not after it's already done something unexpected. The agent knows what it's permitted to do as a structural constraint, not a suggestion.

None of this is exotic. The components exist. Private model endpoints, containerised execution environments, session-level audit hooks, allowlisted tool schemas — these are all buildable today, mostly from off-the-shelf parts. What's rare is someone treating them as first-class requirements rather than operational concerns to address after the demo lands.

I've watched this play out from the inside. Banks that invested in the plumbing first — data governance, environment controls, audit pipelines — found that layering AI agents on top was relatively straightforward. Banks that tried to retrofit those controls after a proof-of-concept got stuck in a loop: the PoC works, the production path is unclear, the project stalls. The order of operations matters more than the technology.

The vendors who will do well in this space are the ones who walk into a bank's architecture review with the compliance story already built — not as a feature list, but as a design philosophy. Every component of the agent loop designed with auditability, isolation, and least privilege from the start. The rest is configuration. The gap between "AI agent that works in a demo" and "AI agent a bank can actually run" is almost entirely in that design work, and it's narrower than most people think.
