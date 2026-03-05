---
title: "The AGI Question Nobody Is Asking Correctly"
description: >-
  Sequoia says AGI is here. Dan Shipper says we're not there yet. They're both
  right — they're measuring different things. The question that actually matters
  is Sholto Douglas's "nines of reliability."
pubDatetime: 2026-03-06T15:00:00.000Z
draft: false
tags:
  - ai
  - agi
  - reliability
  - agents
vault_notes:
  - "AGI"
---

Sequoia published a piece in January 2026 arguing that AGI is here. Dan Shipper published a piece in mid-2025 arguing we're not there yet. Both are credible observers. Neither is wrong. They're measuring different things, which is why the AGI debate keeps generating heat without producing light.

Sequoia's definition: AGI is "the ability to figure things out," arising from three ingredients — knowledge from pretraining, reasoning from inference-time compute, and iteration from long-horizon agents. By their measure, systems like Claude Code already qualify. They can work reliably for roughly thirty minutes on complex tasks, and METR data shows agentic capability doubling every seven months. On this definition, AGI is a capability threshold, and we've crossed it.

Dan Shipper's definition is different: AGI arrives "when it makes economic sense to keep your agent running continuously." That requires 24/7 unsupervised operation — continuous learning, persistent memory, coherent goals across weeks, no human supervision needed. By this measure, we're not close. Current agents still require a human in the loop for anything consequential.

The gap between them isn't empirical. It's definitional. Sequoia measures capability: can it do the work? Shipper measures trust and autonomy: can we leave it running? These are related but distinct questions, and confusing them produces a lot of bad argument.

The framing that actually matters comes from Sholto Douglas, in a conversation with Dwarkesh Patel. Douglas argues that agent usefulness is fundamentally about "nines of reliability" rather than peak performance. The arithmetic is unforgiving: if a workflow requires ten sequential steps and your model succeeds on each step 90% of the time, the probability the whole chain completes successfully is only about 35%. Push per-step reliability to 99% and end-to-end success jumps to roughly 90%. Errors compound multiplicatively.

This reframes the AGI question in a more useful way. The issue isn't whether AI can figure things out — it demonstrably can. The issue is whether it can maintain that capability consistently enough over long chains of dependent actions that you'd stake something real on the outcome. A system that's brilliant in curated demonstrations but degrades under extended operation isn't AGI in any economically meaningful sense, regardless of where it falls on benchmark leaderboards.

The nines framing also explains why progress feels simultaneously fast and slow. Individual capability improvements are visible and rapid — new models are clearly better than old ones. But the end-to-end reliability gains that unlock real autonomy happen more gradually and are harder to see. Each incremental improvement in per-step reliability produces nonlinear gains in end-to-end success, but only after you've crossed certain thresholds. Progress looks slow, slow, slow — and then suddenly transformative.

There's a separate question about what happens when agents become reliable enough for genuinely long-horizon tasks. Ajeya Cotra has written about coordination as the underappreciated advantage of advanced AI systems: a system that can see every database, document, and metric across an organization simultaneously doesn't have principal-agent problems, doesn't have misaligned incentives between departments, and wastes no resources on the meetings and management layers that exist purely to align separate human heads. The economic implications of that are significant and not yet priced in.

For practical purposes — deploying AI in regulated environments, building AI-assisted workflows, thinking about what to automate versus what to keep human — the Shipper/Douglas framing is more useful than the Sequoia one. The question isn't "has AGI arrived?" It's "at what task length and error tolerance does this specific system remain reliable enough to use without supervision?" Answer that for your context, and you know what to automate.

---

P.S. The models improve fast enough that answers to the reliability question change on roughly six-month timescales. Whatever threshold you calculate today — for autonomous deployment of a specific workflow — is worth rechecking before you commit to an architecture built around it.
