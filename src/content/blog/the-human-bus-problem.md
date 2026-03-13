---
title: "The Human Bus Problem"
description: "Adding more AI tools doesn't make you faster if you're still the junction between every agent step."
pubDatetime: 2026-03-13T03:28:00.000Z
draft: false
tags: ["ai-engineering", "workflows"]
---

Here's the thing that took me embarrassingly long to notice: I was spending more time managing AI tools than I was actually thinking. I had delegates for coding, research agents for lookup, orchestrators for planning — and I was busier than before any of them existed. Not a productivity failure. A structural one. The bottleneck wasn't execution. It was me.

Every task I handed off followed the same shape: I'd identify something, form a plan, dispatch it to a delegate, wait, receive output, evaluate it, decide what to do next, and dispatch again. Repeat until done. Each agent step was fast. The gaps between them — where I was reading, deciding, re-framing, routing — those gaps were where all the time went. I was the bus. Every token had to pass through me to get anywhere.

The instinctive response to this, the one I fell into, is to add more tools. Better delegate. Smarter orchestrator. Richer context. But that's solving the wrong problem. If you're the junction between every step, adding more capable steps on either side just gives you more traffic to manage. You're not less busy. You're busier with higher-quality inputs.

This is what "agentic" actually means, and it's not what most people think it means. Agentic doesn't mean more agents. It means fewer human checkpoints. The number of agents is irrelevant; what matters is whether any of them can hand off to each other without stopping to ask you. An agentic system with five agents and one human gate is just a fancier bus route. You're still driving.

The real leverage is in auditing the handoffs you own. Not the tasks — the handoffs. Every time information or a decision has to pass through you, ask whether it actually needed to. Most of the time the answer is no: the delegate could have auto-routed on confidence, the validation could have been a check rather than a read, the failure could have escalated to you only when it actually failed rather than when it succeeded for your review. You're in the chain not because you're necessary, but because no one designed you out.

Parallel execution is the clearest version of this. Instead of dispatching task A, waiting for it, then dispatching task B that doesn't depend on A, you run them together and come back to both outputs at once. Obvious in principle. Almost never the default in practice, because the default practice is still sequential — it evolved from a world where work moved one step at a time and you were the only processor. Parallelism isn't a feature you add; it's a habit you build by asking "what else could be running right now?"

Auto-validation is subtler. Most delegate output doesn't need you to read it and judge it. It needs a threshold: did the test pass, did the schema match, does the diff look sane? Humans are bad at this anyway — we read too charitably, miss edge cases, get bored halfway through a long diff. A validation step that compares output against a spec and escalates only on failure is more reliable than your attention, and it doesn't cost your attention at all. The pattern: generate → validate automatically → surface only failures. You review exception reports, not logs.

What this reframes is what your attention is actually for. The scarcest resource in an AI-assisted workflow isn't execution — delegates are fast and increasingly cheap. It's not even planning, which you can now get significant help with. The scarcest resource is the initial identification: noticing that a problem exists, framing it precisely enough to be actionable, deciding which of the available levers is the right one. That first moment where vague dissatisfaction becomes a concrete task — that's where your attention compounds. Everything downstream of it can, in principle, run without you.

So the question isn't how to get better at reviewing agent output. It's how many steps between task identification and task completion you can make agent-to-agent, with you only at the start and the end. And once you've cleared the middle — once the bus route runs itself — where does your attention go next?
