---
aliases: ["Inline Beats Reference for LLM Attention"]
title: "Inline Beats Reference for LLM Attention"
description: "When building AI scaffolding, put the knowledge where the decision happens — not in a reference the model is supposed to consult."
pubDatetime: 2026-03-18T10:33:10.000Z
draft: false
tags: [ai-tools, scaffolding, mental-models]
---

I built a centralised reference of mental models for my Claude Code setup — a skill called `topica` that other workflows were supposed to consult when making judgment calls. "Before deciding, check topica for applicable mental models." Clean architecture. Single source of truth.

It fired once in 14 days.

The instruction to consult an external reference — even when explicitly written into multiple workflows — was consistently skipped. Not deliberately ignored; just deprioritised by the model's attention against more immediate context. The reference existed. The pointer existed. The behaviour didn't.

**The fix: inline the models directly into each workflow that needs them.** Instead of "consult topica," consilium (my deliberation tool) now has a table of 7 mental models embedded in its prompt. Gnome (decisions) has 5. Kairos (priorities) has a compounding lens.

One week later, usage is clear. Sunk cost, premortem, and second-order thinking appear 12-16 times per week in actual decision contexts. But here's the interesting finding: the primary adopter isn't the model — it's me. The vocabulary from the inline tables has transferred into my own prompts. I now frame questions using the mental model language because it's right there in the tool I'm using.

**This is arguably a stronger outcome than the original design.** The goal was better decisions. Having the human internalise the framework beats having the AI mechanically apply it.

The architectural lesson is the same one that API designers learned years ago: don't make the user (or the model) go somewhere else. Put the knowledge at the point of use. Centralised references are for humans who can bookmark and navigate. LLMs operate in a stream — what's in the current context gets used; what requires a detour gets skipped.

The compliance hierarchy for LLM scaffolding: hooks (enforced) > inline instructions (attended) > centralised reference (aspirational).
