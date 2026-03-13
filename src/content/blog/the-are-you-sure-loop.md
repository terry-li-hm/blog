---
title: "The 'Are You Sure?' Loop"
description: "AI's first 'I'm done' is almost never its best work. Simulated accountability pressure — just asking 'are you sure?' — surfaces blind spots that self-review misses."
pubDatetime: 2026-03-13T22:21:00.000Z
tags: [ai, workflow, self-awareness]
---

A sequel to [The Calculator Analogy](/posts/the-calculator-analogy).

I ran an experiment: let an AI agent autonomously build a complete interview presentation deck from my career notes. No check-ins. It would tell me when it was ready.

It declared itself done after the first build. The slides looked polished. The metrics were accurate. The layouts were clean. By any mechanical measure, the deck was finished.

I asked: "Are you sure you want to submit this?"

It ran a multi-model review council. Five frontier models tore it apart. Topic 2 answered the wrong question entirely — backward-looking instead of advisory. It used "agile" when there were no sprints or ceremonies. The closing slide had no connection to the target company. The AI-disclosure backup slide was a liability for a governance-focused panel.

Major rewrites. New version generated. "Ready now."

"Are you sure?"

Second council. Found that "99% accuracy" is a red flag claim for senior tech leaders. No acknowledgment of the IT/OT safety boundary. Still ready to hand a governance panel a slide admitting the AI's first draft had no domain context.

More fixes. "Done."

"Are you sure?"

This time *it* caught the remaining issues without external review. Banking jargon — RCSA, FCC, "capital-impacting models", "Three Lines" — that the target audience wouldn't recognise. Each term invisible until the pressure to look harder was applied.

Four rounds. Each one found real problems the previous round declared acceptable.

---

The interesting thing isn't that the AI made mistakes. It's that **self-review consistently missed what accountability pressure caught**. The AI checked its own work after every round — visual QA, content extraction, subagent inspection. It genuinely tried. But "checking your work" and "defending your work to someone who might reject it" activate different levels of scrutiny.

This is true for humans too. The draft you'd send to a trusted colleague is not the draft you'd send to a client who's paying for it. The difference isn't effort — it's the simulated presence of consequences.

The human contribution across four rounds was six words: "Are you sure?" three times. No domain expertise applied. No specific feedback given. Just the presence of a gate that might not open.

That's the upstream skill from [the calculator analogy](/posts/the-calculator-analogy) in its purest form: not knowing the answer, but knowing when to not accept "done."

---

**The pattern, if you want to steal it:**

Don't accept AI's first "I'm satisfied." Ask it to defend the output. Don't tell it what's wrong — just make it look again under the assumption that something is. The gap between "checked" and "defended" is where the real quality lives.
