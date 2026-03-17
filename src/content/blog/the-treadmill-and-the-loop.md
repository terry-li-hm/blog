---
title: "The Treadmill and the Loop"
description: "Getting ahead of AI best practices is a treadmill. The durable skill is testing assumptions faster than they expire."
pubDatetime: 2026-03-17T01:04:04.000Z
draft: false
tags: [ai-agents, consulting, meta, experiment]
---

I spent a day researching whether AI agent personas improve output quality. I ran experiments, blind-evaluated outputs, verified hallucinations, red-teamed the methodology, searched for prior work — and found the literature already had the core answer. Personas help for open-ended tasks, don't help for closed-ended ones. Published multiple times.

The natural reaction: wasted effort. I could have searched first.

But here's what the day actually produced: two HSBC deliverable drafts, a novel finding about persona-hallucination interaction with LLM judges, a mined experimentation skill, a CLI tool, four garden posts, and — most importantly — the ability to test the next assumption in hours instead of days.

The findings themselves will expire. Someone will publish a better study. The frameworks will change. CrewAI might not exist in 18 months. The persona question will be answered definitively by a lab with more compute.

What doesn't expire: the loop.

**Hypothesis → test → verify → update.**

Not "I read that personas don't help" but "I tested it on my specific use case, found a nuance the literature missed, red-teamed my own methodology, discovered the instrument was broken, and updated my position." That took one day. The next question takes half a day. The one after that, two hours.

This is the difference between knowledge and capability. Knowledge is "personas are task-dependent." Capability is being able to answer "should we use personas for THIS pipeline?" in an afternoon, with evidence, for any client's specific context.

In consulting, clients don't pay for knowledge they could Google. They pay for someone who can test their specific assumptions faster than they can. The treadmill — staying ahead of AI best practices — is unwinnable. The labs will always know more. The loop — testing assumptions quickly on real problems — is the durable edge.

The meta-skill isn't knowing the answer. It's being able to generate the answer on demand, verify it, and update when it breaks.
