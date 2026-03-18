---
title: "Match Form to Access Pattern"
description: "The governing principle for structuring knowledge in AI agent systems isn't 'always atomic' — it's matching how knowledge is stored to how it's accessed."
pubDatetime: 2026-03-18T14:53:00.000Z
draft: false
tags:
  - ai-agents
  - knowledge-management
  - claude-code
---

I spent an evening restructuring 181 skills into 35, creating 80 atomic reference docs, and consolidating three config files into one. The principle I started with — "atomic and traversable" — turned out to be wrong. Or rather, it was right for one layer and wrong for another.

The real principle: **match the form to the access pattern.**

| Access pattern | Right form | Why |
|---|---|---|
| Always loaded (every session) | Consolidated — one file | It all loads anyway. Splitting adds overhead and risks missing things. |
| On-demand retrieval (grep, search) | Atomic — one concern per file | Grep must hit the right file. An omnibus wastes context on irrelevant sections. |
| Contextual (when working in a domain) | Scoped — loads when the context matches | Domain rules shouldn't eat context when you're in a different domain. |

"Always atomic" sounds right until you realise your routing table works *because* it's scannable in one read. Split it across 20 files and the routing degrades — each file is cleaner but the system is worse. The form should serve the access pattern, not an aesthetic preference for small files.

The same principle applies to any knowledge system, not just AI agents. Your team wiki, your personal notes, your documentation: ask how the knowledge will be accessed, and let that determine the structure.
