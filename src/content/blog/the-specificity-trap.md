---
title: "The Specificity Trap"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [consulting, ai-governance, review]
draft: false
description: "Adding detail to a deliverable doesn't fix credibility — it creates new interrogation targets."
---

There's a pattern I've noticed when red-teaming AI deliverables — decks, model documentation, governance submissions — that runs counter to the instinct of most reviewers.

The second review pass on the *edited* version almost always finds more problems than the first.

This isn't because the initial review was lazy. It's because edits expose structure. And structure invites scrutiny.

---

Here's what it looks like in practice. A client submits a model risk document. The first review flags that their accuracy metric lacks context — no denominator, no description of what's being measured. The client adds one: "agent-rated accuracy: 99%."

Now the document is more specific. It's also more attackable.

"Agent-rated" is doing a lot of work in that phrase. Rated by which agent? On what corpus? Under what conditions? Did the agent rate its own outputs? The label that was meant to add rigour instead illuminated a construct validity problem that was invisible while the number floated unsupported. The original vague claim was, paradoxically, harder to challenge.

Same thing happens with hardware. A proposal mentions deploying on "existing infrastructure." That's vague, but it's survivable vagueness. The client edits it to "existing voicebot server." Now a technical reviewer can ask whether that server has the inference specs to run the model at production load. The specificity created an interrogation target that didn't exist before.

---

The underlying dynamic is this: a draft is a sketch. Reviewers engage with it at the level of a sketch. An edited document looks finished, which signals to reviewers that it should be evaluated as finished work. Every added label is an implicit claim that the underlying concept has been thought through. Every added detail is an invitation to verify it.

AI tools default to "more information = better." When I ask a council of models to red-team a deliverable, the first-pass suggestions often add — labelling, sourcing, quantifying. This is usually correct advice. The problem comes in the second pass, when the same adversarial reviewers read the document again after those additions have been incorporated. The new specifics are now the weakest points, because they were added to patch gaps rather than grown from a coherent underlying analysis.

The edits didn't make the document more robust. They made its weaknesses more legible.

---

There's a version of this that's benign, even useful. If you're working through a genuinely complex piece of analysis — a risk tiering framework, an AML model validation — the process of labelling things forces you to confront whether you actually understand them. Trying to write the denominator for your accuracy metric is the thing that reveals you haven't agreed on one internally. The second-pass scrutiny is doing real work.

But if you're in a situation where the underlying analysis is solid and the document is the communication artefact, the specificity trap becomes a real risk. Adding detail to a deliverable you haven't fully stress-tested isn't strengthening it — it's handing reviewers a better set of tools.

The question I've started asking before any edit pass: does the information I'm adding survive scrutiny? Not "does it sound right?" or "is it technically accurate?" — but "can I defend it against a regulator or a well-prepared adversarial reviewer who has read the full document?"

If the answer is uncertain, the cleaner move is often to report the raw count rather than the rate, describe the methodology qualitatively rather than assert a number, or leave the infrastructure vague until the spec is actually confirmed.

---

For AI governance documents specifically, this matters more than in most contexts. Regulators are trained to read these documents at exactly the level of specificity they're written at. A vague document gets a vague challenge. A specific document gets a precise one.

The practical habit I've built: run two review passes — first on the draft, then again on the revised version. The second pass is often more valuable, because it's where the client's own edits become the new attack surface. The goal isn't to add detail. It's to add detail that can hold weight.

More information isn't better. More information that survives scrutiny is better. The difference is everything.
