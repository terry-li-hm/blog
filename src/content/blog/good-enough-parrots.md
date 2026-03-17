---
title: "Good Enough Parrots"
description: "The philosophical debate about whether LLMs understand is orthogonal to whether they're useful for knowledge extraction."
pubDatetime: 2026-03-17T06:16:04.000Z
draft: false
tags:
  - ai
  - llm
  - knowledge-mining
---

My son's been refusing to go to school for three days. He's two and a half. I don't know enough developmental psychology to know whether to worry.

So I ran a [knowledge mine](/posts/mining-your-llm) — a structured extraction of what Claude knows about toddler school refusal. In two minutes, I had: five distinct mechanisms that look identical from outside but need different responses, a drop-off protocol backed by attachment theory, a table distinguishing normal phases from warning signs, and a developmental timeline for separation comfort by age.

Could the model be hallucinating? Sure. Some of the specific thresholds ("settles within 15 minutes") are approximate. The age ranges are synthesised across studies, not cited from one definitive source.

But here's the thing: the *structure* is reliable. The distinction between autonomy assertion and separation anxiety. The operant conditioning argument against returning after you've left. The overjustification effect on bribing. These aren't invented — they're well-replicated developmental psychology, compressed into the model's weights from thousands of papers and textbooks.

The question isn't whether the model "understands" developmental psychology. It's whether the output is consistently good enough to act on. And for parenting decisions — not medical prescriptions, not journal submissions, but "should I linger at drop-off tomorrow?" — it is.

Ten blue links would have given me one article's perspective, probably from a parenting blog with an affiliate link to a children's therapist. The mine gave me a synthesised decision framework across the literature in one pass.

You couldn't have done this on GPT-2. Or GPT-3. The shift happened somewhere around the point where models crossed from producing plausible prose to producing *structured frameworks* — where they could hold five mechanisms in working memory, distinguish them on signal rather than vibes, and flag their own uncertainty at the right points.

A calculator doesn't understand arithmetic. I still use it over mental math. The interesting question isn't "does it understand?" It's "when did the output get good enough that the understanding question stopped mattering?"

For knowledge extraction from well-studied domains, we're past that threshold. Not for everything — volatile facts, niche subfields, anything post-training-cutoff still needs verification. But for stable cognitive operations across established fields? The parrot is good enough. And getting better.
