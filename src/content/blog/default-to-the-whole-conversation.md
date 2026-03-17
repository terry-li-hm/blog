---
title: "Default to the Whole Conversation"
description: "When AI tools search conversation history, they should index both sides by default — not just the human's half."
pubDatetime: 2026-03-17T04:52:05.000Z
draft: false
tags:
  - ai-tools
  - design-principles
---

I built a CLI that searches my Claude Code session history. For months, it defaulted to searching only my prompts — the things I typed. The AI's responses were opt-in, behind a `--deep` flag.

Today I ran an email triage session. Afterwards I asked, "did we already discuss these items?" The tool said no. But we had — every single one. The decisions, the outcomes, the "let it pause" and "download at leisure" calls — all lived in Claude's responses.

My prompts were just triggers. "Check emails." "Yes." "Do it." The substance was on the other side.

This is obvious in retrospect: in an AI-assisted workflow, the conversation is the unit of work, not the human's half of it. The AI's output contains the synthesised decisions, the triaged lists, the drafted replies. Searching only the human side is like reading only the questions on an exam and trying to reconstruct the answers.

The fix was trivial — flip the default, add `--prompts-only` for the rare case where you actually want just your inputs. But the design principle generalises:

**When building tools that process AI conversations, index both sides by default. Offer a filter to narrow, not a flag to widen.**

This applies to session search, memory extraction, wrap outputs, anything that treats conversation history as data. The human's prompts are the steering. The AI's responses are the cargo.
