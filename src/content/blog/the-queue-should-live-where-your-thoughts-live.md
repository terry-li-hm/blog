---
title: "The Queue Should Live Where Your Thoughts Live"
description: "AI agent results should be push, not pull. The feedback loop should close on mobile. Most tools miss all three — not from ignorance, but because dashboards photograph better."
pubDatetime: 2026-03-09T19:00:00+08:00
draft: false
tags:
  - ai-tools
  - workflow
  - personal-infrastructure
  - agents
---

The most popular personal AI agent framework in the world has 163,000 GitHub stars, a community of thousands, and a component called Heartbeat that schedules tasks and monitors your inboxes. It is, by most measures, the state of the art. And yet: to see what ran last night, you open the app and go look.

I find this more interesting than the star count.

The gap isn't in the AI. The reasoning is good, the skills marketplace is vast, the memory system is clever. The gap is in the feedback loop — in who does the travelling. The framework runs while you sleep and writes results to a directory, and in the morning you remember to check, or you don't. This is the same pattern as every cron job, every scheduled report, every overnight batch process that has existed for forty years. The AI is new; the pull model is ancient.

An agent that requires you to go looking for its output is not really an agent — it's automation with better reasoning. Closing the loop is forty lines of code and a Telegram message: "3/4 succeeded, one timed out." You find out without trying. That shift matters more than it sounds: it's the difference between infrastructure you trust and infrastructure you maintain at arm's length. But the loop can only close well if the queue lives where your thoughts live. I keep mine in a YAML file in the same folder as my notes, not a database or a separate app. When a thought occurs — *I should audit those docs*, *that code needs a second pass* — the friction between that thought and a queued task should be zero. Cognitive distance is where tasks go to die. And once the queue is close and the loop closes automatically, the last piece becomes obvious: it should reach you on your phone, wherever you are when the work finishes, not in a dashboard you open when you remember to. A tool requires your attention; an agent extends it.

None of this is technically difficult. Which raises the question of why the category leader, with all its sophistication, still has users opening the app to find out what ran. The answer, I think, is that push systems are invisible when they work. A Telegram message that says "done, 3/4 clean" is easy to miss on a demo slide. A dashboard with run history and filter controls and a latency graph looks like serious software; it signals craft and investment. Forty lines that text you results look like a script a junior engineer wrote on a Friday. The incentives in AI tooling point consistently toward the visible, which is why the pull model persists not from inertia but from something more stubborn: it photographs better. The moment you understand this, you see it everywhere — in enterprise AI platforms, in agent frameworks, in personal productivity tools. The execution layer gets obsessed over; the feedback loop ships as an afterthought, if at all, because the feedback loop is the part you never see in the demo.

The question worth sitting with is what else changes when you take these three principles seriously — not just in personal tooling but in how AI capabilities get delivered at scale. The overnight runner and the enterprise AI platform have the same structural problem: results accumulate somewhere, humans remember to look, most of the value leaks out in the gap between completion and action. The feedback loop is the product. Everything else is infrastructure for it.

I don't have a clean ending for this. It feels like a principle still being worked out, which is why I'm writing it down now rather than after it's fully formed.
