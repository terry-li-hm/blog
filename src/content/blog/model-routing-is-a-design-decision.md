---
title: "Model Routing Is a Design Decision"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-architecture, cost-optimization, enterprise-ai]
draft: false
description: "Your AI budget question isn't which model — it's which phase of the workflow needs depth, and which just needs speed."
---

There's a question I keep hearing in enterprise AI conversations: which model should we use? The answer almost everyone reaches first is: the best one we can afford. Pick Opus, use it everywhere, done.

That instinct is understandable and wrong.

The problem isn't cost, though cost is real. The problem is that "best model for everything" conflates tasks that need very different things from a model. Sonnet and Opus are nearly identical on coding and execution work — SWE-bench scores of 79.6% vs 80.8% <!-- [VERIFY] --> — a gap barely worth noticing. But on graduate-level reasoning, the gap is enormous: 74% vs 91% on GPQA <!-- [VERIFY] -->. That's not a rounding error. That's a different tool entirely.

So the question isn't which model. It's which *phase of your workflow* each model is actually suited for.

---

Here's the pattern that works: route by phase, not by task category.

The categories people reach for — "complex tasks get Opus, simple tasks get Sonnet" — aren't wrong exactly, but they're the wrong unit of analysis. A "complex task" like AML alert review contains phases that vary enormously in what they need. The intake screening step (does this alert meet the threshold to even look at?) is high-volume, mostly pattern-matching, and forgiving of rough edges. The compliance interpretation step (what does this regulatory provision *actually require* in this context?) is low-volume, ambiguous, and where errors compound. Same task. Completely different reasoning demands.

The routing rule that holds up in practice: strong model for planning, architecture, and ambiguous compliance interpretation. Cheaper model for high-volume screening, drafting, and execution.

In my own workflow, Claude Code's `opusplan` alias operationalises this — Opus for the planning pass, Sonnet for execution. The overhead of switching is zero; the cost difference is material.

---

The savings are not trivial. Against uniform Opus deployment, phase-aware routing reduces costs 40–80% <!-- [VERIFY] --> without sacrificing quality on the work that matters. That range is wide because it depends heavily on your volume ratio — how many screening steps versus how many judgment steps. But in almost every enterprise workflow I've seen, the screening layer vastly outnumbers the interpretation layer. You're paying Opus rates for work Sonnet handles equally well.

The harder question, and the one most teams skip, is figuring out which steps in their specific workflow actually require depth. The failure mode is doing this by intuition rather than measurement. Someone decides "drafting is simple, so Sonnet" without checking whether their drafts are downstream of decisions that depend on the draft quality being good. Or they route compliance interpretation to Sonnet because it usually gets it right, until the edge case that matters.

The diagnostic I find useful: for each step, ask what kind of error is catastrophic. If the catastrophic failure mode is a false negative on a high-stakes judgment call — a compliance gap missed, a risk misclassified — that step needs the stronger model. If the catastrophic failure mode is throughput (too slow, too expensive to run at scale), and errors are catchable downstream, route to the cheaper model and catch them there.

---

There's a subtler version of this that matters for banks specifically. In regulated environments, compliance interpretation isn't just high-stakes — it's often the *only* step that generates the audit trail a regulator will later scrutinise. Routing that step to the cheaper model to save money is the wrong trade-off. The cost difference between Sonnet and Opus on a thousand compliance interpretations is probably less than the cost of one regulatory remediation.

The frame that I keep coming back to: your AI budget question isn't which model. It's which phase of your workflow needs depth, and which just needs speed. Get that routing right and the cost question largely answers itself — and more importantly, so does the quality question.

The routing decision is an architectural decision. It belongs in your system design, not in a conversation about procurement.
