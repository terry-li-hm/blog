---
title: "The Bootstrap Problem in AI Tooling"
description: "You need the tool to build the tool. The answer is: build the dumb version first, use it once, then have it build its replacement."
pubDatetime: 2026-03-13T08:25:52.000Z
draft: false
tags: [ai, tools, building]
---

You want a CLI that orchestrates AI coding agents to execute plans. But to build that CLI, you need... an AI coding agent orchestrator.

The bootstrap problem in AI tooling is real and surprisingly common. You can't delegate the build until you have the delegation tool. You can't automate the workflow until you have the automation.

The answer is embarrassingly simple: build the dumb version first.

A 150-line Python script. Sequential fallback. No parallelism, no smart routing, no learning. Just: try Gemini, if it fails try Codex, if that fails try OpenCode. It took twenty minutes to write and worked on the first real test.

Then you use the dumb version to build the smart version. The prototype executes the spec for its own replacement. The 150-line script launches Codex, which builds a proper CLI with routing tables, parallel execution, validation, and logging.

This isn't clever engineering. It's the oldest pattern in computing — write the first compiler in assembly, then rewrite it in itself. The AI version is: write the first orchestrator as a script, then have it orchestrate its own replacement.

The lesson isn't about AI specifically. It's about the paralysis that comes from wanting the perfect tool before you start. The dumb version that exists beats the smart version that doesn't. Ship the prototype, use it once, let it build what you actually wanted.

Every tool I use daily started as something I'd be embarrassed to show anyone. The embarrassment is the point — it means you shipped instead of designed.
