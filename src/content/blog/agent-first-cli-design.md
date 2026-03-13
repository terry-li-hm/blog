---
title: "Agent-First CLI Design: TTY Detection as Philosophy"
description: >-
  The primary user of my CLI tools isn't me anymore. Designing for that
  changes everything about how output should work.
pubDatetime: 2026-03-06T17:30:00.000Z
tags:
  - cli
  - ai-agents
  - engineering
  - developer-experience
  - rust
---

The primary user of my CLI tools isn't me anymore.

This took a while to notice and longer to act on. I'd been building command-line tools for personal use — spaced repetition, data analysis, workflow automation — and treating them as human tools with AI integration as a secondary feature. The tools had pretty terminal output: coloured panels, Unicode symbols, progress bars, nicely formatted tables. They felt polished. They also burned tokens every time an AI agent tried to read their output, because the ANSI escape codes that produce the pretty formatting were being included in context that the model was processing as content.

The turning point was porting a Python script to Rust and watching Claude read the output as part of a workflow. The session transcript showed the model parsing around colour codes, misinterpreting table formatting as meaningful structure, spending context window on decorative characters that had nothing to do with the data. The tool was optimised for the human case I used maybe twice a day and was actively degrading the agent case that ran dozens of times.

The fix is a four-line check. At the point where the tool is about to produce output, ask: is standard output connected to a terminal? If yes, produce human-formatted output — the colours, the panels, the spacing that makes information readable at a glance. If no — if the output is being piped, redirected, or captured by an agent — produce plain text. No decoration. No escape codes. Just the data.

This is TTY detection, and it's been a standard technique in Unix tools for decades. `ls` uses it. `git` uses it. The reason it's worth discussing now is that the "not a terminal" case has changed. Previously, non-TTY output meant pipes to other tools or scripts. Now it increasingly means an AI agent that will read the output as context. The stakes of getting the distinction wrong have gone up.

The philosophy underneath the four-line check is a reframing of who the tool is for. Traditional tool design assumes a human caller and optionally accommodates machine callers with a `--json` flag or similar. Agent-first design inverts this: the default output is machine-readable, and the pretty output is the opt-in when a human is actually in the terminal. Zero flags, zero configuration. The environment self-selects the consumer and the tool responds accordingly.

This matters for more than output formatting. An agent-first CLI design also means error messages that are specific and machine-parseable rather than sympathetic and human-readable. An error that says "invalid date format: expected YYYY-MM-DD, received '2026-3-6'" is useful to both humans and agents. An error that says "Hmm, that date doesn't look right — try using ISO format!" is optimised for the human case at the cost of the agent case. The agent needs to know what was wrong and what the correct form is, without inference.

It means exit codes used precisely: zero for success, non-zero for failure, specific codes for specific failure modes where the caller needs to distinguish between them. It means documentation that describes tool behaviour from the caller's perspective, not just the human user's — what the tool emits, under what conditions, in what format. A `prime` command or a `--agent-help` flag that gives an AI agent operational guidance: what's slow, what will fail silently, when to retry versus escalate.

None of this makes the tools harder to use. Most of it makes them better for human callers too, because the clarity that benefits a machine caller is usually also the clarity that benefits a human who uses the tool in a script or pipeline context. The agent-first mindset is, in most practical respects, a rigor-first mindset.

The conclusion I've arrived at is that any CLI tool built in 2026 that doesn't handle the non-TTY case explicitly is already partially obsolete. The agent caller is here. Whether or not you've thought about it, your tools are being called by agents. The question is whether they're producing output that agents can use cleanly, or output that requires the agent to do extra work to extract the signal from the formatting.

TTY detection is the minimum. The philosophy it represents is the point.

---

P.S. The fastest way to find out how agent-friendly your tools are: ask an AI to complete a workflow using them and read the session transcript. The parts where the model pauses to parse formatting, or produces an incorrect result because of a misread table, are the agent-unfriendly parts. They're also usually the parts that a four-line check would fix.
