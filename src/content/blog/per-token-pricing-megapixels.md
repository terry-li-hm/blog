---
title: "Per-Token Pricing Is the 'Megapixels' of AI"
description: >-
  We're optimising for the wrong number — and the history of consumer
  electronics suggests we'll figure this out eventually.
pubDatetime: 2026-03-06T14:00:00.000Z
tags:
  - ai
  - pricing
  - infrastructure
  - value
---

Per-token pricing is to AI what megapixels were to cameras. A number that's technically meaningful, easy to compare, and mostly the wrong thing to optimise for.

The megapixel race ran for most of the 2000s and 2010s. Camera manufacturers competed on sensor resolution, consumers used resolution as a proxy for quality, and the market allocated accordingly. It wasn't irrational — resolution mattered, and more was genuinely better up to a point. But past that point, the comparison became misleading. A twelve-megapixel phone camera with good optics and processing outperformed a forty-megapixel sensor with a smaller aperture. The number that was easy to compare turned out not to be the number that determined the outcome.

Per-token pricing is doing the same thing to AI purchasing decisions.

The proxy makes sense on the surface. Tokens are the unit of consumption; price per token is the unit cost; lower is better. Benchmarks compare models on tokens per second and dollars per million tokens. Procurement teams use token pricing to estimate costs and compare vendors. None of this is wrong. Token pricing is real information, and it's easy to compare.

But it obscures the dimensions that actually determine value for most enterprise use cases.

The first is task completion rate per dollar, not token cost per dollar. A cheaper model that requires more turns to complete a task, or that requires more human correction, can easily be more expensive in total than a more capable model that completes the same task in fewer tokens with less intervention. The cost of human time — reviewing, correcting, rerunning — is invisible in token pricing comparisons but dominant in total cost of ownership for many workflows.

The second is the value of latency, which is not captured in token pricing at all. For some use cases, speed is incidental. For others — real-time customer interactions, time-sensitive risk assessments, anything on the critical path of a workflow — latency determines whether the model is useful. Two models at the same token price but different latencies are not equivalent, and the difference in value can be large.

The third is capability at the tail, which is where most of the interesting enterprise AI work actually lives. Headline benchmark performance measures average-case capability on well-defined tasks. The cases that determine whether a deployment succeeds or fails are usually the edge cases — the ambiguous query, the cross-referential reasoning requirement, the situation that doesn't fit the training distribution cleanly. Token pricing tells you nothing about tail performance, and tail performance is often what matters.

There's also the question of what "a token" means across different models and providers. Context windows, tokenisation schemes, and input/output token ratios vary enough that per-token comparisons across models require careful normalisation to be meaningful. The comparison that looks like an apples-to-apples cost comparison often isn't.

The megapixel race resolved when consumers stopped buying cameras based on sensor resolution and started buying based on actual image quality in the conditions they cared about. The metric didn't disappear — resolution still matters — but it stopped being the primary comparison axis. The market converged on a more complete understanding of what determined value.

Something similar is happening in AI pricing, on a faster timescale because enterprise buyers tend to learn from deployment experience more rapidly than consumers learn from camera purchases. The organisations that are moving past token pricing are the ones that have built enough deployment experience to know what actually determines whether their AI investments produce value. They're optimising for task completion rate, workflow integration quality, and reliability under production conditions — and accepting that these things cost more to measure than per-token price.

The ones still primarily optimising for token cost are optimising for the easy comparison. That's a reasonable starting point. It's a poor final answer.

---

P.S. The question worth adding to any AI vendor evaluation: "Can you show us your performance on the specific task distribution we care about, not the standard benchmark?" The vendor's reaction to that question is informative. The ones who can answer it are usually the ones worth buying from.
