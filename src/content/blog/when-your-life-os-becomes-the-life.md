---
title: "When Your Life OS Becomes the Life"
description: "The real risk of building a personal AI operating system isn't that a better tool appears — it's that your system's complexity becomes the thing you maintain instead of the thing that maintains you."
pubDatetime: 2026-03-17T09:19:14.000Z
draft: false
tags:
  - ai-tools
  - systems-thinking
---

I've spent six months building a "life OS" on Claude Code — 150+ skills, a memory system with decay tracking, hooks for mechanical enforcement, LaunchAgents for scheduling, an Obsidian vault as the knowledge layer. It orchestrates a dozen CLI tools I've written, delegates coding to free-tier AI agents, and manages everything from email triage to career transitions.

Today I asked: is this still the right stack?

I spent an hour researching alternatives. Gemini CLI now has hooks and skills in the same markdown format. Goose supports 25+ LLM providers. OpenFang just shipped v0.1.0 with an ambitious "agent OS" architecture — persistent memory, scheduled autonomous tasks, 40 channel adapters. Khoj offers proactive scheduled digests and a mobile app.

None of them replace what I've built. But that's not the interesting finding.

The interesting finding is *why* so much of my system exists. A huge proportion of the complexity — MEMORY.md with its 150-line budget and decay tracker, NOW.md as a 15-line resume point rewritten every session, prospective memory files, checkpoint routines — is compensation for a single architectural limitation: **Claude Code has no persistent state between sessions.**

Every session starts cold. The elaborate continuity system I've built is a bespoke workaround for the fact that I'm running a stateful personal operating system on a stateless conversation loop.

This isn't a criticism of Claude Code. It's the best tool available for this — the reasoning quality, tool access, and extensibility are unmatched. But it reveals a pattern worth naming: **when your workarounds for a tool's limitations become more complex than the tool itself, you've stopped using the tool and started maintaining a second system.**

The signs:
- You spend more time tuning the meta-system (skills, memory routing, enforcement hooks) than doing actual work through it
- Your documentation about how to use the system exceeds the system's own documentation
- The system requires its own maintenance routines (weekly reviews, decay audits, staleness checks)
- You build tools to manage your tools (a skill to manage MEMORY.md, a skill to review skills, a hook to check hooks)

The healthy response isn't to migrate — nothing else is ready. It's to **thin from inside**. Many of my 150 skills are procedural wrappers that duplicate what `--help` output already says. The skills that earn their keep encode *judgment* (when to do X instead of Y), not *procedure* (the flags for command Z).

The meta-lesson: the highest-leverage move for any personal system isn't adding capability. It's removing complexity that exists only to manage other complexity. Your system should be getting simpler over time, not more elaborate. If it's getting more elaborate, you're building the wrong thing.
