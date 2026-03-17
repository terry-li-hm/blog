---
title: "The Confidence Stack"
description: "Not all knowledge is equally trustworthy. Three tiers of validation — from 'a model said it' to 'it survived reality' — and why tracking the difference matters."
pubDatetime: 2026-03-17T01:41:00.000Z
draft: false
tags: [ai, workflow, epistemology]
---

After mining several reference skills from Claude's weights — planning, debugging, simplification, delegation, evaluation — a question surfaced that was more interesting than any single extraction: how confident should I be in any of this?

The answer isn't binary. It's a stack.

**Tier 1: A smart model said it.** You interview the model, push past the first answer, distill the structure. The output synthesises thousands of sources from training data. It's above average by construction — but it carries the model's blind spots, and you can't see what's missing because the model can't either. Confidence: moderate. Hold lightly.

**Tier 2: Multiple models couldn't break it.** You feed the Tier 1 output to a multi-model council and ask them to attack it. What's missing? What distinctions are false? What failure modes aren't listed? If the knowledge survives adversarial debate across different model architectures, the blind spots narrow. Confidence: higher. But still theoretical — smart models agreeing doesn't mean reality agrees.

**Tier 3: It survived contact with reality.** You use the skill in actual work, track where it helps and where it breaks, and revise based on evidence. A planning framework that looks elegant in a skill file might miss the failure mode that actually bites you. A debugging heuristic might have the right categories but the wrong emphasis for your domain. Only practice reveals this. Confidence: earned.

This is the scientific method applied to knowledge management. Not the decorative version taught in school — hypothesis, experiment, conclusion — but the real version: propose, stress-test, use, revise. Each tier is a stronger evidence threshold for the same claim.

The insight that made this click: these tiers track the same thing a research pipeline tracks. A literature review (Tier 1) gives you the field's current understanding. Peer review (Tier 2) filters for internal consistency. Replication in the wild (Tier 3) is where knowledge either earns its keep or gets revised.

But here's the boundary that matters: the scientific approach only works where reality can provide feedback. For questions like "does this debugging heuristic actually help me find bugs faster?" — yes, measure it. For questions like "should I prioritise this project over that one?" — no amount of measurement helps. That's a values question, and values questions need judgment frameworks, not experiments.

Knowing which kind of question you're facing is arguably more important than having the right method for either. The most common epistemological error isn't using the wrong method — it's applying the right method to the wrong kind of question. Treating a judgment call as a measurement problem produces false precision. Treating a measurable outcome as a judgment call produces unnecessary uncertainty.

Track the tier. Know what kind of question you're asking. And remember that knowledge extracted from a model is a starting point, not a conclusion — no matter how cleanly it's formatted.

P.S. The irony of extracting a framework about confidence in extracted knowledge, from the same model whose extractions the framework is meant to evaluate, is not lost on me. Turtles again. But this particular turtle has a testable prediction: these tiers should produce measurably different revision rates over time. Tier 1 skills should need more updates than Tier 3. If they don't, the framework is wrong.
