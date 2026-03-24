---
title: "Tools Are Skills With Null LLM"
description: "The tool/skill/agent distinction is an implementation boundary, not a conceptual one. The real variable is how much judgment a callable needs."
pubDatetime: 2026-03-24T10:00:00.000Z
modDatetime: 2026-03-24T00:59:40.000Z
revisionNote: "Add description-as-manual refinement — null LLM is never truly null"
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

Except "null" is a lie. A tool without a description is undiscoverable — the model can't use what it doesn't know exists. Every tool ships with a manual: a short description that tells the model what it does and when to call it. That description is knowledge. It's the minimum viable skill, compressed to fit in every prompt. A skill is just a richer manual, loaded on demand instead of always-on. The spectrum isn't really about LLM presence — it's about how much knowledge is embedded, and at what compression ratio.

This matters for system design. Every tool can become a skill if you wrap it in a prompt. Every skill can become a tool if you remove enough judgment. The question to ask isn't "is this a tool or a skill?" but "how much LLM does this need?" If the answer is zero, it should be a tool. If the LLM's contribution is just "call this function and return the result," you're burning tokens to do nothing. Push everything as far toward the tool end as it can honestly go.

The naming convention follows from this. If tools are instruments and not actions, they should be named like instruments. `interoception` not `read_internal_state`. `chemotaxis` not `search_web`. The noun names the faculty; the LLM exercises it.

What I hadn't noticed until recently: this spectrum already has a name in systems design. It's just the determinism axis. Fully deterministic computations are tools. Computations that require judgment are skills. The "LLM as argument" framing just makes the variable explicit instead of hiding it in architectural labels.

The field keeps reinventing this distinction — functions vs. agents, tools vs. plugins, retrieval vs. generation. Same axis, new vocabulary. The underlying question doesn't change: at each decision point, is a program sufficient, or do you need judgment?
