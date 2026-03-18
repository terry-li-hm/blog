---
title: "Your AI Roadmap Is Already Obsolete"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [ai-strategy, enterprise-ai, planning]
draft: false
description: "A 3-year AI roadmap designed around today's model capabilities may be solving last year's problem by year 2."
---

A few weeks ago, Andrej Karpathy ran an experiment he called autoresearch. He pointed an AI system at a model training problem, gave it no human guidance, and let it run unsupervised for roughly two days at depth-12 — meaning it iterated, evaluated, and iterated again without anyone checking in. <!-- [VERIFY] --> When it finished, it had surfaced approximately 20 real improvements to the model's training configuration. Not suggestions. Actual improvements, validated against a locked metric. <!-- [VERIFY] -->

This is not an AGI claim. It is something more specific and, for enterprise AI planning purposes, more immediately disruptive: AI is now partially automating its own R&D.

---

I've spent the past few months working through what an AI strategy should actually look like for large financial institutions. Banks building AI programmes, insurers standing up centres of excellence, asset managers trying to figure out where to start. The question I keep hearing is: "What can the model do?"

It's the wrong question. Or rather, it's incomplete in a way that makes the answer systematically misleading.

The right question is: at what rate is that answer changing?

If AI systems can run training experiments autonomously overnight and find genuine improvements, then the capability baseline isn't fixed for the duration of your programme — it's moving, and moving faster than human-paced R&D would predict. A 3-year AI roadmap built on today's model capabilities may be solving last year's problem by year 2. The roadmap isn't wrong at the time of writing. It's wrong by construction, because it encodes a capability snapshot as a durable forecast.

---

This has a specific structural implication that most roadmaps don't account for: the human effort required to improve an AI model is no longer the bottleneck it used to be.

Enterprise AI forecasts typically assume human-paced progress: a team of researchers runs experiments, publishes findings, the next model generation incorporates them, and this takes months to years. Autoresearch — and the broader pattern it represents — compresses that loop. <!-- [VERIFY]: how broadly this applies beyond Karpathy's specific experiment --> If the loop is compressing, then capability forecasts built on historical research velocity are systematically too conservative. Your 2027 capability assumption might arrive in 2026. Your 2028 assumption might arrive before your programme governance has reviewed the previous phase.

This isn't cause for panic. It is cause for a specific kind of architectural discipline.

---

The consultants who will add the most value over the next three years aren't the ones who know which model is best today. That knowledge is perishable faster than a slide deck can be revised. The durable value is in knowing how to build AI programmes that don't collapse when the baseline shifts.

Concretely, this means two things.

First: every multi-year AI programme needs a model-agnostic layer. If your integration strategy, your data governance controls, your agent tooling, and your audit trail are coupled to a specific model or provider, you've built technical debt into the foundation. When the baseline shifts — and it will — the cost of adapting is proportional to how tightly everything is coupled. The teams that decoupled early (standardised on an OpenAI-compatible API interface, built MCP servers for core systems once, routed by task phase not by provider preference) can swap models as a configuration change, not an architecture project.

Second: the roadmap's horizon should be explicit about what it assumes. A three-year programme should state clearly: "We're assuming model capabilities improve at roughly historical rates. If AI R&D automation accelerates that, here's which workstreams become easier (anything relying on improved reasoning), which become irrelevant (anything built around current model limitations), and which governance checkpoints we'd pull forward." Most roadmaps don't say this because it feels like hedging. It isn't hedging. It's intellectual honesty about the half-life of the forecast.

---

The autoresearch result is one data point, not a trend line. But it's the first concrete evidence I've seen that the "human in the loop for AI improvement" assumption — the assumption baked into every long-horizon AI forecast — is not permanent. <!-- [VERIFY]: whether subsequent work has replicated or expanded on autoresearch findings -->

Most enterprise AI programmes are being planned as though the capability baseline is fixed for the planning period. Some of that is understandable — organisations need stable plans. Some of it is motivated reasoning — it's easier to get budget approval for a programme that doesn't require you to explain that the ground might shift under it.

But the right response to a moving baseline isn't to pretend it's stationary. It's to build the programme so that movement is survivable: model-agnostic integrations, short feedback loops on use case selection, governance checkpoints that can actually accelerate when the technology does.

The question isn't what the model can do. It's whether your programme can keep up with the answer changing.
