---
title: "Not Every Cron Job Is a Feedback Loop"
description: "Automation that collects without learning is just a cron job. The difference is a feedback signal — a number that goes up or down."
pubDatetime: 2026-03-13T08:30:32.000Z
draft: false
tags: [ai, systems, building]
---

I have fourteen scheduled tasks running on my machine. AI news scrapers, job alert digesters, health check runners, memory hygiene sweepers. They fire on schedule, produce output, and wait for next time.

Most of them are cron jobs pretending to be feedback loops.

The difference is simple: does the output change the input? A job alert scraper that uses the same keywords every day is a cron job. A job alert scraper that tracks which postings you actually clicked, learns what matters, and adjusts its filters — that's a feedback loop.

Karpathy's autoresearch is a feedback loop. It modifies training code, measures validation loss, keeps improvements, discards regressions. The signal — validation loss — is what makes it compound. Without the signal, it's just a script that randomly modifies code.

The test for any automated system: what number goes up or down? If you can't name one, you have a cron job. Useful, maybe. But it won't get smarter.

My AI news scraper runs daily and surfaces the same volume of noise regardless of whether I read any of it. My tool orchestrator logs which AI coding tool succeeded on which type of task, and updates its routing table from the data. One has been running for months and delivers exactly the same value as day one. The other has been running for a day and is already better than when it started.

The fix isn't complicated. Take any cron job and add three things: a log of what happened, a metric of what mattered, and a rule that updates from the metric. The scraper becomes a recommender. The health check becomes an anomaly detector. The digest becomes a curator.

Most automation stops at "it runs." The leverage is in "it learns."
