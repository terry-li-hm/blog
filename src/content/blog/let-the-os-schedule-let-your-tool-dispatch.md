---
title: "Let the OS Schedule, Let Your Tool Dispatch"
description: "The moment I stopped building scheduling into my tools, everything got simpler."
pubDatetime: 2026-03-10T01:05:59.000Z
tags: ["systems", "tools", "ai"]
---

I spent an afternoon building a scheduling system into a tool that already had a perfectly good scheduler sitting one layer above it: the operating system.

The tool was a background job runner for AI agents — the kind of thing that fires off a research task or a codebase audit overnight and writes results somewhere you can read in the morning. It had grown a polling loop, cadence guards (daily, weekly), time windows, elapsed-time checks. All of it was code I'd written to answer one question: *when should this run?*

The answer to that question already existed. macOS has had it since the beginning. Every Unix system has had it since the 1970s. It's called cron, or on macOS, LaunchAgent with a CalendarInterval. You say "run at 02:00 daily" and it runs at 02:00 daily. It doesn't need your help.

What I had built was a second scheduler underneath the first one — and a worse one. Mine had bugs. The OS's didn't.

The insight that untangled it was distinguishing between two responsibilities that I'd collapsed into one. *Scheduling* is deciding when to run something. *Dispatching* is actually running it. These sound similar but they're completely different problems. Scheduling is about time and state — has this run today? is it the right hour? Dispatching is about process management — start a subprocess, detach it from the current session, capture its output, handle timeout.

Once I separated them, the design became obvious. The OS handles scheduling — one plist file per task, CalendarInterval, done. The tool handles dispatching — takes a task name, spawns a process, returns immediately, task runs independently of whatever session started it. The tool got shorter. The scheduling got more reliable. The mental model got cleaner.

There's a general pattern here that I keep rediscovering. Every time I'm tempted to build something, there's a prior question: what layer does this actually belong to? Scheduling belongs to the OS. Authentication belongs to the platform. Storage belongs to the filesystem. The interesting work — the part worth building — is the thin layer in between that knows your domain: what to run, with what arguments, writing output where you can find it.

The failure mode is when tools try to eat adjacent layers. A job runner that also schedules. A database ORM that also handles caching. A CI system that also manages secrets. Each addition seems reasonable in isolation — it's convenient, it reduces dependencies — but the resulting system is harder to understand, harder to debug, and slower to change than two focused tools cooperating at a well-defined boundary.

The better question is always: what is this tool uniquely good at, and what is some other layer already handling better than I ever will? Delegating scheduling to launchd didn't make the system more fragile. It made it more reliable — because now the part responsible for scheduling is a piece of software that ships with the operating system, has been tested by millions of machines, and hasn't had a bug in longer than most of my tools have existed.

Your tool should do one thing well. Let everything else be someone else's problem.
