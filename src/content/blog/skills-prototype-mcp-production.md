---
title: "Skills as Prototype, MCP as Production"
description: >-
  Skills and MCP servers aren't competitors. They're different stages of the
  same lifecycle. Build the procedure as a skill first. Graduate the tool parts
  to MCP when they stabilize.
pubDatetime: 2026-03-18T15:00:00.000Z
draft: false
tags:
  - ai-agents
  - mcp
  - architecture
---

The question that comes up every time someone starts building seriously with AI agents: should this be a skill or an MCP server?

It's a false dichotomy. Skills and MCP servers aren't competing approaches to the same problem. They're different stages in the life of a tool. Asking which one wins is like asking whether a whiteboard sketch wins against a production system. They're for different moments.

A skill is a markdown file that tells an AI agent how to do something. It describes the procedure, the context, the gotchas. Zero infrastructure. No types. No server to run. You can write one in five minutes on your phone. If the procedure is wrong, you edit the file and it takes effect next session. The feedback loop is tight enough to iterate in real time. This is the right way to build when you don't yet know if the thing is worth building properly.

An MCP server is a different commitment. You're writing code, defining typed interfaces, handling errors, managing state across sessions. It takes hours, not minutes. In exchange, you get something that any MCP-compatible client can call — not just the agent you built it for today. You get reliability guarantees you can test for. You get stateful operations that a markdown file can't express. You get an artifact that doesn't degrade when the model changes.

The lifecycle I've arrived at after building both: write the skill first. Work through the procedure, find the edge cases, understand what the tool actually needs to do. When it stabilizes — when you're not editing the skill every other session, when the procedure has settled into something you'd be comfortable formalising — that's when the tool parts graduate to MCP.

"Tool parts" is the operative phrase. An MCP server is the right home for things that are mechanical and stateful: API calls, file operations, queries against external systems. The orchestration layer — the judgment calls, the sequencing decisions, the context about when to use the tool and what to do with the result — that stays in the skill. Even after the MCP server exists, the skill often continues to exist alongside it, describing how to use the server rather than how to do the thing manually. The skill becomes a thin wrapper over a real implementation.

Some things never graduate, and that's correct. Stable knowledge — mental models, heuristics, decision frameworks — is well-served by a static file. There's no server-shaped hole in a document that explains how to think about something. A skill that captures "how to read error messages from this particular system" or "when to escalate vs retry" is doing exactly the right job as a file. The model already knows how to read; it just needs the right context. No typed interface improves on that.

The real question, then, isn't which approach wins. It's: which stage is this tool at?

If the procedure is unclear or untested, write a skill. If the procedure is stable but the tool parts are slow, fragile, or need to work across clients, graduate to MCP. If it's pure orchestration or stable knowledge, keep the file — it's already in its final form.

The failure mode I see most often is skipping the skill stage entirely. Someone decides a capability belongs in an MCP server before they understand what the capability actually needs to do. They spend hours on typed interfaces for a procedure that turns out to need three more iterations before it's right. The hours aren't wasted exactly, but they're premature. The whiteboard phase exists for a reason.

The other failure mode is refusing to graduate. A skill that's calling external APIs through shell commands, handling authentication in markdown comments, and growing edge cases faster than you can document them is a production system living in the wrong container. It graduated in scope but not in form. The mismatch compounds: every new edge case gets a prose workaround, the file gets longer, the model has to parse more text to execute what could be a typed function call. At some point the skill is slower and less reliable than an MCP server would have been two months ago.

Stage-awareness is the discipline. Build at the stage the tool is actually at. Promote when the signs are there. Keep files that are already in their right form.

---

P.S. The five-minute skill prototype isn't a throwaway — it's evidence. If you build the skill, run it a dozen times, and find yourself never needing to edit it, that's the most useful data point for whether an MCP implementation is worth the investment. The skill tells you whether the thing is worth building properly.
