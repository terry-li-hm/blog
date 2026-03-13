---
title: "Instructions Don't Enforce Behavior. Templates Do."
description: "Why the structure of an output matters more than the instructions that produce it."
pubDatetime: 2026-03-08T00:02:36.000Z
tags: ["ai", "systems", "tooling"]
---

I spent an afternoon auditing why a workflow I'd carefully specified kept producing hollow outputs. The instructions were clear. The model understood them. And yet, more than half the time, the most important parts simply didn't appear.

The culprit turned out to be a single line I'd added as a convenience: "If everything is clean, just write: All clear — proceeding."

That shortcut was a structural exit. Once the model decided things looked clean, it could collapse the entire output into four words and skip the questions I actually cared about — had anything surfaced worth writing about? Was there a consulting angle? A public insight worth capturing? The instructions said to answer these. The output format gave a way to not.

When I removed the shortcut and put those questions directly into the template — as named slots that always had to be filled — the behavior changed immediately. Not because the model got smarter or the instructions got clearer, but because there was no longer anywhere to hide. A slot in a template demands a value. A line in an instruction can be rationalized away.

This is the thing I keep relearning about AI systems: you cannot instruct your way to reliable behavior. You can only structure it. Instructions describe what you want. Templates make certain shapes of output impossible to produce incorrectly.

It's the same reason checklists work in surgery and aviation even though the surgeons and pilots already know the steps. The checklist isn't informing them — it's making omission structurally visible. An unchecked box is a different artifact than a forgotten thought. One exists in the world; the other doesn't.

The implication is uncomfortable if you've been investing in prompt engineering. Better instructions help, but they hit a ceiling quickly, because the model is always trading off between following your instructions and producing something coherent. A template removes that trade-off for the parts that matter most. It makes the desired output the path of least resistance.

I've started thinking of output templates as the load-bearing part of any AI workflow. The instructions are commentary. The template is structure. And structure, as anyone who's worked in architecture or code review or meeting facilitation knows, is where behavior actually lives.
