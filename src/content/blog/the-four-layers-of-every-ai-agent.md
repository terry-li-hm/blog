---
title: "The Four Layers of Every AI Agent"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-architecture, agents, consulting]
draft: false
description: "Interaction, inference, orchestration, tooling. The boundaries between them must be enforcement points, not design principles."
---

When someone asks me to review an AI agent architecture, I start by asking them to draw it on a whiteboard. Not a diagram — just the layers. What's doing what, and where does one thing end and another begin.

Most of the time, what I get back is a rough cloud with arrows. Sometimes there's a box labelled "LLM" in the middle. Sometimes there's a box labelled "RAG." The team has clearly thought about the pieces. What they haven't thought about is the structure.

There's a decomposition that works for any AI agent system, regardless of the use case:

**Interaction.** Not "chat." I'm deliberate about the word. Chat implies a UI, implies a user typing messages, implies a narrow class of deployment. Calling it the interaction layer forces the question: what signals does this system actually receive? It might be a Slack message. It might be a webhook from a core banking system. It might be a scheduled trigger with no human input at all. The architecture has to work for all of those, and "chat" smuggles in the assumption that it doesn't.

**Inference.** The model itself. This layer is simpler than people treat it — it takes a context window in and produces tokens out. The interesting decisions (which model, which version, how it's routed) live here, but they're configuration decisions, not architectural ones.

**Orchestration.** Control flow, routing, handoffs. This is where agents actually earn their name. A single LLM call isn't an agent; an agent is a system that decides what to do next, routes to the right sub-process, handles branching, manages retries. The orchestration layer holds the graph of decisions.

**Tooling.** External actions. Everything the agent can reach out and touch — APIs, databases, file systems, other services. And here's the point I make in almost every architecture conversation: RAG is a tool call. It's not a separate tier. It's not a special category with its own access controls and its own logging contract. It's a tool call, subject to the same permissions and the same audit requirements as any other API the agent invokes. Treating it differently creates a gap — one that tends to be exactly where the compliance review finds the problem.

---

These four layers are a useful map. But the map isn't the territory, and the architecture question isn't really about the layers themselves. It's about the seams between them.

In a regulated environment — banking, healthcare, anything with a regulator who can ask you to reconstruct exactly what your system did on a specific date — the seam between layers must be a hard enforcement point. A synchronous gate. Not a logging statement. Not a best-efforts check. A gate: something that must be passed before execution continues.

Interaction → Orchestration: has this signal been validated, authenticated, and scoped? Orchestration → Inference: is this the right model for this decision, and are the inputs within policy? Orchestration → Tooling: does this agent have permission to make this call, and is the action being logged to an immutable trail?

These gates are not a fifth layer. They're not processing stages. They're transition constraints — things that must be true before state moves across a boundary. The distinction matters because it's easy to slip into thinking about them as features to add later, or as cross-cutting concerns that every layer handles on its own.

That's the mistake. When I hear a client describe compliance or memory or audit logging as "cross-cutting," I ask two questions: who owns it, and what's the gate? If there's no clear answer to either, I know what's happened. Cross-cutting is not a design decision — it's a design deferral.

---

There are three signals I watch for in conversations about AI architecture. They tell me quickly whether the team has thought carefully about the structure or just assembled something that works in a demo.

The first is the interaction/chat distinction. If a team calls their interaction layer a "chat interface" when the deployment includes scheduled triggers and system-to-system webhooks, they've anchored the design on the happy path. The system will handle the edge cases eventually, but not by design.

The second is the cross-cutting response. If I ask where compliance controls live and someone says "that's a cross-cutting concern — every layer handles it," I push immediately: what does handling it mean, who's accountable when two layers handle it differently, and what happens when neither layer thinks it's their problem? Cross-cutting without an owner is unowned.

The third is the RAG-as-tier assumption. If a team has separate access controls for their RAG pipeline versus their other tool calls, there's a gap in the audit surface. Regulators don't care how the system is architected internally — they care about what data was accessed, when, by what process, and what came out. RAG is a tool call. Treat it as one.

---

The layers aren't the hard part. Any competent engineering team can decompose an agent system into interaction, inference, orchestration, and tooling. The hard part is the enforcement architecture at the seams — synchronous gates that don't degrade under load, don't get bypassed when a deadline is close, and don't depend on every layer correctly implementing a shared convention.

That's where most agent systems fail the regulated deployment test. Not because the model was wrong. Not because the tooling was broken. Because someone decided the boundaries were a design principle rather than an enforcement point, and then the system reached production and the enforcement was optional.

Optional is not a governance posture.
