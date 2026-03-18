---
title: "Show Up with the Machine, Not the Idea"
description: "The highest-leverage consulting prep is building the tool before you need it"
pubDatetime: 2026-03-18T06:53:44.000Z
draft: false
tags: [consulting, ai-governance, tools]
---

The most impressive thing you can do on Day 1 of a consulting engagement is not a slide deck. It's producing in two hours what the client expected to take two weeks.

I'm about to start at a bank where one workstream is regulatory gap analysis — comparing new AI regulations against the bank's existing internal policies. The client's team does this manually: read the regulation, read the internal standard, identify gaps, write up findings. It takes weeks per regulation, across multiple jurisdictions.

Before I start, I'm building the machine. Not a prototype. Not a concept. A working tool that:

1. Accepts any regulation (HKMA, MAS, EU AI Act — already loaded)
2. Accepts any internal policy document (upload via API)
3. Decomposes the regulation into discrete requirements with citations
4. Compares each requirement against the policy baseline
5. Classifies as Full / Partial / Gap with paragraph-level evidence
6. Runs a completeness audit to catch missed requirements

The tool exists. The corpus is loaded. The prompts are tuned for AI governance specifically.

On Day 1, I won't pitch this. I'll listen, diagnose, understand what they actually have. But when the moment comes — "we need to assess against MAS AIRM Guidelines" — I'll ask for their internal standard and deliver results the same afternoon.

The prep investment is small. The signal it sends is large: this person doesn't just understand the problem, they've already solved part of it.

The general principle: if you know what a client needs before you arrive, build the tool, not the presentation. Ideas are cheap. Working systems that produce results are not.
