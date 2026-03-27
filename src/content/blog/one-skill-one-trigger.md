---
title: One Skill, One Triggering Context
description: The right decomposition boundary for LLM agent skills is the trigger,
  not the action.
pubDatetime: '2026-03-28T03:41:09.000Z'
draft: false
tags:
- agents
- design
- vivesca
---

I had four skills in my agent system for daily rhythms. A morning brief that pulled sleep scores. A "what now?" snapshot for mid-day routing. An evening routine for inbox triage and tomorrow prep. An overnight results checker.

Four skills, four SKILL.md files, four entries in the tool list the LLM sees at session start. Each one cleanly scoped to a single action. Textbook decomposition.

The problem: the LLM kept picking the wrong one. Ask "what should I do?" at 7am and it might fire the anytime snapshot instead of the morning brief. Ask "anything from overnight?" and it has to choose between the morning brief (which includes overnight context) and the dedicated overnight checker. The skills were atomic by action, but the trigger was ambiguous -- they all answered variations of "what's happening in my day?"

The fix was embarrassingly simple. One skill, four phases, a time-based router:

```
06:00-10:00  dawn     (was: entrainment + germination)
10:00-17:00  day      (was: ultradian)
17:00-21:00  dusk     (was: interphase)
on-demand    day      (regardless of time)
```

Run `date`, pick the phase, execute. The LLM never has to choose between four competing skills again. All the old trigger words still work -- they just route to the same skill now.

The insight is about decomposition boundaries. When you're building agent skills, the natural instinct is to decompose by action: one skill per thing the agent does. This feels clean. Each skill has a single responsibility. You can describe it in one sentence without "and."

But the LLM doesn't experience your skills as a well-organized library. It sees a flat list of descriptions and has to pattern-match the user's intent to the right one. Every additional skill in that list is noise competing for the match. Four skills that fire on similar triggers is four chances to pick wrong.

The right boundary is the triggering context, not the action. Things that fire on the same cue belong in one skill with internal routing. The routing can be deterministic (time of day, file type, keyword match) -- it doesn't need LLM judgment. The judgment is in recognizing the trigger; the routing is mechanical.

This maps to a principle I keep rediscovering: deterministic logic belongs in code, not in the LLM's decision space. Every routing decision you can make mechanically is one fewer decision the LLM can get wrong. Push the LLM up to the one judgment call that actually needs it -- "is this a daily rhythm question?" -- and handle everything downstream in code.

The updated rule: split by action, consolidate by trigger context.
