---
title: "The Queue That Texts You Back"
description: "Personal AI infrastructure should report results to you, not wait for you to go looking. A small architecture shift changes the whole dynamic."
pubDatetime: 2026-03-09T18:00:00+08:00
tags:
  - ai-tools
  - workflow
  - personal-infrastructure
---

Adding a noon window to a scheduled script should take ten minutes. Change one integer in a config file, reload the service, done. I'd been meaning to do it for weeks and kept not doing it, and I didn't understand why until I actually sat down to make the change.

The script was an overnight runner — woke at midnight, dispatched tasks to AI backends, wrote outputs to a directory, went back to sleep. The ten-minute change was trivial. What it revealed wasn't.

An overnight runner is defined by its schedule. It's infrastructure for things you batch up and forget about. The mental posture is: think of something before bed, queue it, check in the morning. Useful, but the window shapes what you put through it — you don't interrupt your afternoon to add something for midnight, any more than you'd call someone at 2am because you just thought of a question.

An async queue has no such gravity. Queue a task whenever you think of it. Hear back in the next window — could be an hour, could be six hours. What made this actually work wasn't the second window, though. It was the notification. Instead of the system writing to a directory and waiting for me to check, a small script now reads the run summary and sends me a Telegram message: "3/4 ✅, 1 ❌ — results ready." The timestamp directory becomes evidence rather than a destination. I'm not going to the results; the results are coming to me.

The difference in practice: before, I would batch up code review and research tasks for midnight because that was the only window, and I'd check in the morning if I remembered. Now I queue a research question at noon when it occurs to me, get a ping by 6pm, and act on it the same day. The queue became part of the working day rather than a nightly ritual I maintained at arm's length.

The infrastructure change was small — a second schedule entry in the LaunchAgent plist, forty lines of Python to ship the summary to Telegram, a one-liner in the morning brief. Maybe two hours of work. But the lesson it reinforced is one I keep learning: the last ten percent of a system — the part that closes the feedback loop — matters more than the ninety percent doing the actual work. A system that runs reliably but requires you to go looking for its output is only half-finished. The other half is the part that means you find out without trying.

Most of my AI tools were missing that half.
