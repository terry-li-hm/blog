---
title: "Hooks Are Life Infrastructure"
description: "Event-driven hooks in AI coding tools aren't just for linting — they're programmable triggers for life routines, habits, and systems."
pubDatetime: 2026-03-16T06:02:40.000Z
draft: false
tags:
  - ai-tools
  - systems-thinking
  - automation
---

I use Claude Code's hook system for the usual things — format on save, lint on edit, guard against dangerous commands. But the real unlock came when I stopped thinking of hooks as developer tooling and started treating them as life infrastructure.

A hook is just: **when X happens, do Y**. The "X" doesn't have to be a code event. It can be "it's Saturday and I haven't done my weekly review." It can be "I'm about to send a message and haven't checked if the recipient replied first." It can be "I've been flailing at the same broken tool for ten minutes."

Today I added a hook that nudges me to run my weekly review on Saturday mornings. It checks whether a weekly note exists for the current ISO week. If not, it prints a one-liner. That's it — maybe fifteen lines of Python. But it means the weekly review can never silently slip. The system remembers so I don't have to.

This is the same principle behind every good operational system: **anxiety should flow into automation, not into your head.** If you're worried about forgetting something, the answer isn't "try harder to remember" — it's to build the trigger that makes forgetting impossible.

The pattern generalises. Any recurring concern that follows "when [context], I should [action]" is a hook candidate. Not every hook needs to be code — some are calendar events, some are checklists. But when you already live inside a tool that supports event-driven triggers, you might as well wire them up.

The cost of a hook is fifteen minutes and fifteen lines. The cost of the thing it prevents is unbounded.
