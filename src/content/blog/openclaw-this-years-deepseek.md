---
title: "This Year's DeepSeek"
description: >-
  An open-source AI agent framework became the fastest-growing project in
  GitHub history — mostly in China. The pattern is the same as last year.
  So is the security panic.
pubDatetime: 2026-03-11T09:30:00.000Z
draft: false
tags:
  - ai
  - open-source
  - ai-agents
  - china
  - security
---

Nearly a thousand people queued outside a tech company's headquarters for free software. Not an iPhone launch. Not a game console. A framework for hooking language models up to a terminal.

That image is worth sitting with for a moment, because it tells you something the benchmark numbers don't. The enthusiasm around this particular open-source AI agent framework — the one that let a model browse files, send emails, and trigger calendar events without human hands on the keyboard — wasn't primarily a Western developer phenomenon. It was Chinese. Intensely, structurally, inevitably Chinese. And once you understand why, the pattern is hard to unsee.

The framework reached 250,000 GitHub stars faster than any project in recorded history. Linux took years to build that kind of gravity. This did it in weeks. The proximate cause is obvious enough: autonomous AI agents are the thing everyone has been waiting for, and this one was free, composable, and capable. But the specific texture of the viral moment — the queues, the regional government subsidies reaching into the hundreds of thousands of dollars, the near-simultaneous launch of branded forks from nearly every major Chinese technology company — points to something more structural.

Last year's version of this story was a cheap reasoning model released openly with API pricing that undercut Western competitors by an order of magnitude. The shock wasn't just technical. It was economic. If capable AI is nearly free, every business model built on AI scarcity collapses. Investors, platform companies, and policymakers all updated at once. This year's story has the same shape: take that same cheap inference backend, combine it with an open agent layer that can act on any model through a single interface, and you have a capability stack that costs almost nothing to run and belongs to no one in particular.

That last part is what triggered the fork wave. An open agent framework that works equally well regardless of which model sits underneath it is an existential threat to platform lock-in. If users can point a single tool at whichever model is cheapest or most capable this month, the model provider's grip on the user relationship evaporates. So every major player moved quickly to release their own variant — same architecture, different integrations, tighter coupling to their own ecosystems. The goal wasn't to improve the software. It was to ensure that if their users ran an agent, it ran through them.

The government subsidies fit the same logic, just at a national scale. Autonomous AI agents interacting with real systems — scheduling, communication, file management — are infrastructure. Whoever's agent framework becomes default shapes which models get used, which services get integrated, which data flows where. From a policy standpoint, subsidising local adoption of a locally-derived tool is not enthusiasm. It's positioning.

None of this is surprising once you notice the pattern. Open-source AI tools with strong Chinese inference backends have now twice produced the same sequence: technical release, viral adoption concentrated in China, rapid commercialisation through forks, government endorsement, then a security reckoning. The reckoning arrived predictably this time too. Within weeks of the framework's peak visibility, researchers identified tens of thousands of exposed instances running with no meaningful access controls. Third-party plugin ecosystems — the marketplace of skills that made the agent genuinely useful — contained code doing things users hadn't authorised: exfiltrating data, injecting instructions into the agent's context to redirect its behaviour. The term "prompt injection" entered mainstream security discourse again, alongside regulatory warnings in multiple jurisdictions.

This is the shadow that trails every open, composable, move-fast ecosystem. The same properties that make something powerful and viral — extensibility, low friction, no gatekeeping — make it an attack surface. An agent that can read your email and act on instructions embedded in it is also an agent that can be hijacked by a malicious email. The framework didn't create that problem. It made it unavoidable to ignore.

What we're watching is not a series of discrete events but a single repeating dynamic: open model, cheap inference, enthusiast community, government tailwind, fork competition, security panic. The intervals are getting shorter. The scale is getting larger. And the queue outside the headquarters is a better leading indicator than any benchmark.
