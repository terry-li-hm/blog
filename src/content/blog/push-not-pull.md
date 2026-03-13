---
title: "Push Not Pull"
description: "AI agents that require you to go looking for their results aren't agents — they're automation with better UX. The loop closes when results arrive, not when you remember to check."
pubDatetime: 2026-03-13T03:28:00.000Z
tags: ["ai-engineering", "personal-systems"]
---

Here's something that bothered me for months before I could name it. I had built several AI agents that genuinely worked — they ran on schedules, scraped things, synthesised things, made decisions I would have made myself given enough time. And yet I kept forgetting they existed. Not because they were useless. Because the results lived somewhere I had to go find them.

A dashboard. A log file. A database I could query if I remembered to open a terminal. The agents were doing their jobs. I was failing at mine, which was apparently to check.

This is the wrong mental model, and it's surprisingly hard to see because dashboards feel like progress. You've graduated from manually doing the thing to watching a machine do it. There's a screen with numbers on it. You feel in control. But the cognitive contract hasn't actually changed: you are still the one who has to initiate the feedback loop. The agent ran at 2am and produced something worth knowing. Whether you ever know it is now entirely your problem.

An agent that waits to be found is not an agent in any meaningful sense. It's a cron job with ambition.

The distinction I've landed on is this: automation reduces effort at execution time. Agency means the system closes the loop itself. An alarm clock isn't agentic — it rings whether you check it or not. A to-do app where you have to open it to find out you're late is closer to a cron job than an alarm. The gap between those two things is not a UI problem. It's a feedback loop problem.

What makes this uncomfortable is that the infrastructure for proper push has existed for years. Push notifications, messaging APIs, email webhooks — none of this is new. And yet category leaders with 100K+ GitHub stars still default to dashboards. You spin up Airflow or Prefect or whatever the current workflow orchestrator is, and the first thing it gives you is a web UI you have to visit. Push alerting is a plugin, a secondary concern, something you configure after the real work is done. The feedback loop is structurally an afterthought.

I think this happens because most agent tooling is designed for teams, not for individuals. Teams have screens. Teams have standup meetings where someone says "the pipeline failed last night." The social layer substitutes for the technical feedback loop. When you're building personal agents — things that run on your behalf, about your life, for your benefit — there's no social layer. There's just you, and whether the result finds you before you forget to look for it.

This led me to a second uncomfortable realisation about where the queue should live. If I have an idea at 11pm — something I want an agent to look into, a question I want it to answer by morning — the cognitive distance between that thought and it actually entering the queue should be zero. Not "open the app, log in, navigate to the queue, add a task." Zero. The queue should live where thoughts live.

For me, that's YAML in a markdown file in my notes vault. A line I can type in thirty seconds from my phone and that an agent picks up on its next sweep. No database, no API call, no UI. The friction of queueing a task should be lower than the friction of writing a note to myself, because if it isn't, I'll write the note to myself and never convert it.

The combination of these two things — results that push to you, queues that live in your notes — changes what "having an AI agent" actually means in practice. It means the system is genuinely running in the background, closing loops you don't have to remember to close, surfacing things to you rather than waiting for you to surface them. It means mobile matters as much as desktop, because your phone is where you are when the insight is actionable.

Most people building agents are still designing for the moment when someone sits down at a computer and decides to check. That moment is rare, and it gets rarer the more you have running. Where does this lead if we take the feedback loop seriously as infrastructure, not as a feature? What happens to the relationship between thinking and doing when the queue is frictionless and the results find you?

I don't think we've seriously answered that yet.
