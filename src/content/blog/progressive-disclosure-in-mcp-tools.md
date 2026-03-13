---
title: "Progressive disclosure in MCP tools"
description: "When building MCP servers, search should return scannable summaries — not full content. Let the model decide what to read."
pubDatetime: 2026-03-11T10:33:19.000Z
tags: ["ai-engineering", "mcp", "tooling"]
---

There's a temptation when building MCP tools to make them complete. A search tool returns full results. A fetch tool returns full pages. Everything the model could possibly need, delivered upfront. The problem is that "everything" is expensive — every token in a tool result competes for space with everything else in the context window.

The better pattern is progressive disclosure: return the minimum needed to decide, then fetch the rest only if it matters.

I ran into this building a session memory tool. The search endpoint originally returned full memory entries — content, source, confidence score, date — for ten results at a time. Roughly 2,500 tokens per search call. Most of those tokens were for memories the model would glance at and ignore. The useful ones were a handful, and even those didn't need the full metadata until the model decided to act on them.

The fix was simple: search returns compact one-liners — an ID, a category, and a 120-character preview. Around 650 tokens total. A separate `get(id)` call returns the full entry for whichever memories the model actually wants. The model scans the list, picks what's relevant, and only then pays the full cost.

This matches how humans use search. Nobody reads every result in full before deciding what to click. The snippet exists precisely to help you not read the full page. MCP tools should work the same way.

The MCP specification actually has a native mechanism for this — the Resources API, where tool results can return resource URIs instead of inline content, and the client fetches them on demand. It's architecturally elegant. In practice, though, the tool-based approach has an advantage: the model explicitly decides which IDs to look up. With resource URIs, the client might eagerly resolve all of them, collapsing the progressive disclosure into a full dump again. Explicit tool calls give the model agency over what it expands.

The broader principle is that context efficiency in agentic systems isn't just about compression — it's about deferral. Not everything needs to be loaded at the same time. Tools that return scannable indexes instead of full content, that paginate instead of dumping, that answer "what's available?" before "what does it contain?" — these tools make the model a better decision-maker because they leave the decision about what to read to the model itself.

The token you don't load is the cheapest token of all.
