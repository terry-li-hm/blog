---
title: "Skills as Files"
description: "The simplest agent architecture might already be the right one: give the agent a file explaining how to do something, and let it read when needed."
pubDatetime: 2026-03-07T00:46:57.000Z
draft: false
tags: ["ai-agents", "mcp", "infrastructure", "developer-experience", "claude-code"]
---

I've been building a library of skills for my AI workflow — plain markdown files in a folder, each one describing how to handle a specific type of task. How to search LinkedIn. How to manage calendar events. How to publish a garden post. The agent reads the relevant file when needed and follows it.

I didn't design this as an architecture. It just emerged as the obvious solution to a problem: the agent kept doing things wrong in predictable ways, and the fix was always to explain the right approach clearly. A file is the clearest explanation format I have.

Then I read a piece from LlamaIndex arguing that files may be the central abstraction for AI agents — not just a workaround, but a deliberate design pattern. For many tasks, skills as files is simpler than MCP: no schema definitions, no server infrastructure, doesn't bloat the context window with unused tool definitions. The agent reads the file when needed and executes. Simple, auditable, cheap.

What struck me was that this is exactly what CLAUDE.md files are — the convention Boris Cherny describes for teams using Claude Code. A shared file checked into git, containing every mistake and correction the team wants remembered. Context engineering, not prompt engineering. The file is the institutional memory.

There's a practical argument here against reflexively reaching for MCP for every capability. MCP is powerful when you need structured, typed tool calls with clear schemas — reading calendar events, writing to a database, calling an API with specific parameters. But for *how to behave* and *what to consider* in a given situation, a well-written file often does the same job with far less infrastructure overhead. The agent already knows how to read and reason over text. Give it good text.

The scaling limitation is real: files don't work for knowledge bases with thousands of documents — you need proper retrieval infrastructure for that. But for a personal workflow with dozens of skills, or a team with shared practices encoded in markdown, the file is a surprisingly complete solution. The overhead of building and maintaining a server that serves one file is rarely worth it.

The broader principle: prefer the simplest architecture that the agent can actually use. Files are things agents understand natively. Start there. Add infrastructure only when files genuinely can't do the job.

There's a related argument about enforcement: files explain how to behave, but hooks *enforce* it. The distinction between writing a rule and making the system assert it is covered in [Rules Decay, Hooks Don't](/posts/rules-decay-hooks-dont/).
