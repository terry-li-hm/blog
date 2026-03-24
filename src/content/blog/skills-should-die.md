---
title: "Skills Should Die"
description: "Every AI skill should be trying to make itself unnecessary. The ones that survive are the ones that haven't been understood yet."
pubDatetime: 2026-03-24T07:47:14.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

The default assumption in agent-building is that skills accumulate. You build a skill for inbox triage, another for code review, another for meeting prep. Your toolkit grows. Progress is measured by the number of capabilities your agent has.

This is wrong. Skills should die.

## The lifecycle

I audited 38 skills in my personal agent system and found that four were doing zero judgment. The LLM was running shell commands and formatting output. An expensive wrapper around a bash script.

These skills had completed their lifecycle without anyone noticing:

1. A judgment was needed (something required contextual interpretation)
2. A skill handled it (the LLM reasoned about each case)
3. Patterns emerged (the LLM kept making the same calls)
4. The judgment became predictable (same input, same output, every time)
5. A tool should have replaced the skill

Step 5 never happened. The skills kept running, burning tokens on work a Python script could do. Nobody checked whether the judgment was still required because nobody expected skills to expire.

## The test

For each skill, ask: is the output still surprising?

If the LLM always categorizes the same email the same way, the categorization is predictable. If the LLM always recommends the same workout given the same readiness score, the recommendation is a lookup table. If you can describe the decision logic in a paragraph, it's a rule, not a judgment.

The skill earned its place when the patterns were unclear. Once they crystallize, the skill should step aside for something cheaper, faster, and more reliable.

## Why this doesn't happen naturally

Skills are comfortable. They work. Nobody complains about a skill that produces correct output -- even if a deterministic tool would produce the same output at a fraction of the cost.

There's also an identity problem. If you built the skill, demoting it to a tool feels like admitting you over-engineered it. But you didn't. The skill was right at the time. It held the space while the patterns were unclear. Now the patterns are clear, and the skill's job is done.

## The bias

My agent system has a rule: "deterministic over judgment." It's not a preference. It's a direction of travel. Every judgment should be trying to become a rule. Every skill should be trying to become a tool.

The skills that survive longest are the ones where context genuinely matters -- where the right answer depends on factors that shift in ways you can't pre-specify. Those skills are doing real work. Everything else is a tool that hasn't been demoted yet.

After the audit, I had 22 new tools extracted from what used to be monolithic skills. The skills got thinner. Some disappeared entirely. The system got cheaper and easier to test. Nothing was lost except the illusion that those skills were doing something only an LLM could do.
