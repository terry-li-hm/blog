---
title: "Your AI Tools Should Watch You Fumble"
description: "The best time to improve a CLI isn't when it breaks — it's when you review the breakage log at the end of a work session."
pubDatetime: 2026-03-16T01:51:36.000Z
draft: false
tags:
  - ai-tools
  - developer-experience
---

I built a CLI tool for managing reminders. This morning, my AI assistant tried to use it and got the syntax wrong three times in a row — guessing `--due` instead of `--at`, `delete` instead of `rm`, positional arguments where flags were required.

Each guess was reasonable. Each failed. The tool was technically correct but ergonomically hostile to its most frequent user — an AI agent.

The interesting question isn't "how do I fix these three things?" It's: **how do I make sure every future fumble automatically becomes a fix?**

## The friction loop

The pattern I landed on is simple:

1. A **hook** watches every CLI invocation. When a personal tool exits non-zero, it logs the command and error to a file.
2. At session end (or any natural checkpoint), a **review step** scans the log, groups errors by tool, and either implements fixes directly or creates tickets.

That's it. No real-time monitoring, no AI agent watching over your shoulder. Just a log and a review cadence.

The insight that surprised me: **real-time correction is over-engineered.** I initially thought about building a live agent that watches the conversation and chips in with "hey, that CLI could be better." But batch review at natural breakpoints captures the same improvements with far less complexity. The fumbles aren't urgent — they're just data points that should eventually become fixes.

## Why batch beats real-time

When you fumble a CLI mid-task, you don't want a design review. You want the task done. The fix can wait for a quiet moment — session end, gear shift, weekly review. By then, you might have three examples of the same friction, which is much better signal than one.

This is the same principle behind incident postmortems over real-time blame. Collect the data in the moment, analyse it when you have perspective.

## The meta-lesson

If you're building tools that AI agents use (and increasingly, you are), instrument the failure path. Not to fix bugs — the tools work fine. To fix the gap between what a reasonable caller guesses and what the tool actually accepts. That gap is your UX debt, and it compounds silently until you start measuring it.
