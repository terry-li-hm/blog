---
title: "The Deliberation Format Is the Product"
description: "I ran an experiment to find where multi-model deliberation adds value. The answer surprised me: it's the structured format, not the model diversity."
pubDatetime: 2026-03-13T03:06:52.000Z
draft: false
tags:
  - ai-engineering
  - decision-making
  - personal-systems
---

I built a multi-model deliberation tool. You feed it a question, it dispatches to five frontier models in parallel, each model writes an independent analysis, then a synthesiser distils the disagreements and convergences into a verdict. It feels rigorous. Five models agreed! How could the answer be wrong?

I started wondering whether the value came from the model diversity, the structured format the tool enforces, or just the forced thinking time. So I ran an experiment.

Three questions I'd been genuinely wrestling with — not toy problems, but real architectural decisions. For each question, three conditions: the full five-model council, a single model using the council's structured deliberation format (prior belief, arguments for, arguments against, what would change my mind, verdict with confidence score), and the same model answering freeform with no structure at all.

Nine runs. The results were unambiguous.

The five-model council never disagreed with the single model. Not once across three questions. Every condition reached the same directional answer. The council produced more surface area — more failure modes named, more metaphors, more "here's another angle" — but the sharpest, most actionable insight in each question came from the single model. In one case, the freeform response identified a structural relationship between two systems that none of the five council models mentioned. In another, the structured solo run built a stronger counterargument than any individual council member managed.

What struck me was the nature of the council's contribution. It added breadth without adding depth. Five models saying "yes, and here's why" with slightly different vocabulary creates a feeling of thoroughness that is genuinely hard to distinguish from actual thoroughness. "Five frontier models agreed" triggers something in the brain that "I thought about it carefully" doesn't. But in my experiment, those were informationally identical.

The structured format, though — that was doing real work. Forcing an explicit prior before analysis prevents anchoring to the first argument that sounds good. The "against" section forces genuine adversarial thinking, not just a token nod to the other side. "What would change my mind" is the most underrated prompt in decision-making: it makes your uncertainty concrete and testable rather than vaguely acknowledged. The confidence score forces commitment — you can't hide behind "it depends."

This maps to something I've noticed more broadly in AI tooling: we over-index on model selection and under-index on prompt structure. The difference between a good and mediocre analysis is rarely which model you use. It's whether the prompt forces the model to think adversarially, commit to a position, and name its uncertainties. A mediocre model with a great deliberation format will outperform a frontier model with "what do you think?"

The authority theatre is the interesting part. I genuinely felt more confident in the council's output, even after seeing that it contained no unique information. The feeling of "five independent intelligences converged on this" is powerful and, in my case, entirely unjustified. It's the AI equivalent of getting a second opinion from five doctors who all trained at the same hospital and read the same textbook — the appearance of independence without the substance.

I still keep the multi-model tool. There are questions where model-specific perspectives genuinely matter — asking about a model's own capabilities, or testing whether an answer is model-dependent rather than question-dependent. But for the everyday "should we do X or Y" decisions, I've switched to the structured format alone. Same quality, fraction of the cost, and I've lost the false confidence of manufactured consensus.

The deliberation format is the product. The models are interchangeable.
