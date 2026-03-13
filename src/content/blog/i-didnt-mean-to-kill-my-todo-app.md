---
title: "I Didn't Mean to Kill My Todo App"
description: "A coding assistant quietly made three productivity apps redundant. Not by replacing them — by making context collapse the boundaries between them."
pubDatetime: 2026-03-07T08:05:20.000Z
tags: ["ai", "tools", "productivity"]
---

I deleted my last Things 3 task last week. A coding assistant killed my todo app.

Not a todo app killer. Not a Notion template. Not a "second brain" framework. A coding assistant.

Here's what happened. I'd been using Claude Code for engineering work — writing code, debugging, deploying. But over a few weeks, something shifted. The agent already had access to my notes, my career transition timeline, my calendar — all local markdown files it reads at the start of each session. When I mentioned an upcoming job change, it cross-referenced my notice period against healthcare timelines, onboarding logistics, and administrative deadlines, then surfaced conflicts I hadn't spotted and suggested a sequencing plan across all of them.

Things 3 never did that. It couldn't. It only knew my tasks.

Three apps died quietly over the following month.

Things 3 first: six years of repeating templates — weekly reviews, recurring reminders, project checklists — migrated to a plain TODO.md file. The agent reads it, reasons across it, and connects it to everything else it knows about my situation. Things 3 had beautiful design and zero context.

Readwise Reader went next: articles used to travel the familiar route of save → inbox → read later → never read. Now they go URL to extracted insights to vault note. The "save for later" pattern collapses when the agent can process something right now.

Last was Obsidian as an interface. The vault still exists — thousands of notes, fully interlinked. But I rarely open the app. The agent searches, reads, writes, and interlinks notes faster than I can navigate a sidebar. Obsidian became a filesystem with good git backup.

The interesting question isn't whether AI can manage todos. Anyone can build that.

It's what happens when your agent has enough context to collapse the boundaries between productivity, planning, and knowledge management into one reasoning surface. A todo app knows your tasks. A read-later app knows your articles. A note app knows your notes. None of them talk to each other. The moment one system holds all three — and can reason across them — the specialised tools become overhead, not value.

---

The obvious question: so you handed your entire life to Anthropic?

Fair. Here's the architecture: everything lives in local markdown files on my machine. During a session, the agent sends file contents to the API for processing. Between sessions, the model retains nothing — each conversation starts cold, re-reading the files. I traded several apps with persistent cloud sync for one API with session-scoped access.

Personal setup and enterprise deployment are different trust boundaries. I wouldn't architect a bank's workflow this way. But for personal use, I'm comfortable with the tradeoff.

The cost is roughly an order of magnitude more than the apps it replaced combined. I've treated this as a personal research lab during a career transition — deliberately investing in learning how these tools actually work by living inside them daily. And yes, I now check my todos from a terminal. No mobile app, no quick-glance widgets. The tradeoff is real.

But this only makes sense if you invest in the context layer — the configuration files, the structured notes, the rules that teach the agent how you work. Without that, it's an expensive chatbot. With it, the boundaries between your tools dissolve.

I didn't set out to kill these apps. I just stopped opening them.

