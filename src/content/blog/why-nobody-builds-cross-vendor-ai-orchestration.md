---
title: "Why Nobody Builds Cross-Vendor AI Orchestration"
description: "Every AI lab builds single-vendor orchestration. The cross-vendor layer is a gap — and it's a gap for a reason."
pubDatetime: 2026-03-13T08:18:00.000Z
draft: false
tags: [ai, agents, strategy]
---

Anthropic builds Claude Code with Agent tools that spawn Claude subagents. OpenAI builds Codex with multi-file execution. Google builds Gemini CLI with tool use. Each one is excellent orchestration — for their own models.

Nobody builds the layer that says: "Try Gemini first because it's free and good at algorithmic tasks. If quota is burned, fall back to Codex because it's best at multi-file navigation. If both are down, use OpenCode because it's unlimited."

This isn't because it's technically hard. It's a 150-line script. The reason is incentives.

Anthropic wants you to use Claude for everything. Their orchestration makes Claude subagents easy and external tools hard. OpenAI wants Codex to be your entire dev workflow. Google wants Gemini to be the default. Each lab's orchestration is designed to keep you in their ecosystem.

The open-source community builds general frameworks (LangChain, CrewAI) but they're optimised for the common case: one LLM provider, multiple tools. Not multiple LLM providers competing on the same task.

So the cross-vendor orchestration layer falls to the user. And this is actually fine, because the hard part isn't routing — it's knowing what to route where. That's domain knowledge:

- Code generation with cross-file dependencies → Codex (best at repo navigation)
- Isolated algorithmic logic → Gemini (highest benchmark scores, free)
- Boilerplate and bulk operations → OpenCode (unlimited, good enough)
- Judgment, strategy, failure triage → Claude Opus (worth the premium)

This routing table doesn't generalise. It's specific to coding tasks, specific to current model capabilities, specific to current pricing. It changes monthly. No framework captures it because no framework can — it's experiential knowledge that updates faster than software releases.

The gap exists because it should. Cross-vendor orchestration isn't a product. It's a practice.
