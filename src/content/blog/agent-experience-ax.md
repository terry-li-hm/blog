---
title: "AX: Agent Experience Is the New DX"
description: >-
  Developer experience became a competitive moat in the API era. Agent
  experience is next. Most tools aren't designed for it yet.
pubDatetime: 2026-03-06T11:30:00.000Z
tags:
  - ai-agents
  - developer-experience
  - api-design
  - infrastructure
---

Developer experience became a competitive moat in the API era. Stripe's documentation, Twilio's onboarding, GitHub's CLI — the products that won their categories didn't just have better capabilities. They were easier to start, easier to debug, easier to trust. DX was the hidden variable that determined adoption.

Agent experience is the same forcing function, arriving faster.

I noticed this concretely when onboarding an AI email tool recently. The setup was a single URL, a pre-baked token, a linear flow — then a `prime` command that gave the agent a runtime strategy briefing. Not just `--help` syntax, but genuine operational intelligence: when to use each function, what was slow, what would hang under certain conditions, how to handle the cases where the expected path wouldn't work. The briefing was designed for a caller that couldn't ask follow-up questions.

That's AX-aware design. It's rare.

Most tools are designed for a human caller. The assumption is that when something goes wrong, the human will read the error message, make an inference, and try something different. Interactive flows assume stdin. Auth flows assume a browser session. Error messages assume a reader who can ask for clarification. When an AI agent calls these tools, every one of those assumptions breaks.

The agent reads an error message designed for a browser console and can't make the inference. It hits an interactive flow and hangs waiting for input that will never come. It encounters a 200 response with an error nested in the payload and has no way to know whether to retry, escalate, or report success. These aren't edge cases; they're the standard experience of an AI agent calling infrastructure designed before AI agents were the expected caller.

The gap between DX-good and AX-good is not huge. It's mostly about defaulting to the right assumptions and being explicit about the rest. Machine-interpretable error messages with clear error codes. Auth flows that work with long-lived tokens or service accounts without interactive steps. Documentation that distinguishes between human-interactive and agent-callable flows. A `--json` flag as a first-class output mode rather than an afterthought. A `prime` endpoint or command that gives the agent context without requiring it to read documentation it can't act on.

Financial services is the specific context where this gap matters most urgently, for two related reasons. First, banks are building internal agent deployments against their own infrastructure — risk systems, compliance engines, customer data platforms — that were almost universally designed before agents were in scope. The infrastructure exists. The agent-friendliness doesn't. Second, the regulatory pressure on AI governance in financial services means that when an agent takes an action, there needs to be a clear audit trail for what the agent called, what it received, and how it decided. That audit trail is much harder to build when the infrastructure isn't designed to emit machine-readable state.

The firms that will have the most capable agent deployments in two to three years are the ones that are treating AX as an infrastructure investment now, not a nice-to-have. The question isn't whether their agents will eventually call internal systems — they will. The question is whether those systems will be ready to be called by agents, or whether every agent deployment will require custom wrappers and error-handling code that exists solely to compensate for infrastructure that wasn't designed for the use case.

---

P.S. A useful audit for any internal tool: can an AI agent successfully complete the primary workflow without any interactive steps? If not, that's an AX gap. The tools that fail this test aren't broken — they work perfectly well for their designed caller. They just have a different caller now.
