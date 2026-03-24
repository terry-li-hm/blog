---
title: "Tools Are Instruments, Skills Are Recipes"
description: "The tool/skill/agent distinction isn't just compression ratio — tools are instruments, skills compose them with judgment. Same thing only at the leaf."
pubDatetime: 2026-03-24T10:00:00.000Z
modDatetime: 2026-03-24T01:16:02.000Z
revisionNote: "Correct overclaim: tools=instruments, skills=recipes, same only at leaf"
draft: false
tags: ["ai", "systems", "tools"]
---

Here's something that bothered me until it clicked: why do we call them "tools" in LLM systems? In the real world, tools are nouns — hammer, microscope, thermometer. Nobody names a hammer "hit_nail" or a stethoscope "measure_heartbeat". Yet when we expose functions to language models, instinct pushes us toward verb-first naming: `get_constitution`, `read_anatomy`, `fetch_calendar`. We're naming instruments like actions.

The naming confusion reveals a deeper confusion about what these things actually are.

A tool, in the LLM sense, executes without judgment. You call it with arguments, it returns a result. The model decides *when* to call it and *with what*, but the tool itself doesn't think. A hammer doesn't decide when or where to swing — the person wielding it does. The faculty is separate from the instrument.

A skill is different. It loads knowledge, workflow steps, and judgment guidance into the LLM's context. The model does the work; the skill shapes how. When a carpenter follows a technique, the hands are instruments but the learned pattern is the skill. The stethoscope is inert; medical training is the skill.

Once you see this, a clean spectrum emerges:

```
tool ←————————————————→ skill
pure execution          pure judgment
no LLM needed          LLM is the work
```

And then the obvious extension: a subagent is just a callable where the LLM is passed as an argument. Same spectrum, fresh context window, isolated judgment. Tool, skill, and agent aren't three separate concepts — they're three points on one axis. The variable is how much judgment the callable needs.

Except "null" is a lie. A tool without a description is undiscoverable — the model can't use what it doesn't know exists. Every tool ships with a manual: a short description that tells the model what it does and when to call it. That description is knowledge. It's the minimum viable skill, compressed to fit in every prompt. A skill is just a richer manual, loaded on demand instead of always-on.

I almost stopped here and wrote "tools and skills are the same thing." It felt clean. The spectrum, the compression ratio, the deployment-decision framing — it all pointed that way. But examples break it.

A skill like "structured development onboarding" uses Read, Write, Edit, Bash, Agent, Grep. A skill like "evening routine" uses Gmail, calendar, Telegram, and vault tools. Meanwhile, Read is used by nearly every skill. The relationship is many-to-many.

Tools are instruments. Skills are recipes that compose instruments with judgment about sequencing and decisions. You can't compress a recipe into a tool description because the composition IS the value. A recipe that says "use a knife" is not the same thing as a knife.

Where the spectrum holds is at the leaf level — a single capability that does one thing. "Sense the organism's internal state" works as either an eighty-character tool description or a full manual. Same thing, different compression. But the moment you compose multiple tools with judgment about when and how to combine them, you've crossed into something genuinely different. That's a skill, and it's not reducible to a compressed tool.

The naming convention still follows: tools are instruments (nouns, not verbs). Skills are recipes (process nouns — the action of combining). The LLM is the cook who reads the recipe and wields the instruments. Three roles, not one spectrum.

What the field keeps reinventing isn't one distinction — it's two. First: tools should be named as instruments, not actions. Second: composition with judgment is categorically different from execution without it. Functions versus agents, tools versus plugins, retrieval versus generation — each rediscovery conflates these two insights, and each new framework has to separate them again.
