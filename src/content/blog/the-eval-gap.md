---
title: "The Eval Gap"
description: "The scarce AI skill isn't building — it's knowing if what you built actually works."
pubDatetime: 2026-03-14T08:14:46.000Z
draft: false
tags: [ai, evals, consulting]
---

The market is full of people who can build AI pipelines. The scarce skill is knowing whether they work.

I built an automated AI landscape intelligence pipeline. It extracts structured insights from 20+ articles daily, tags regulatory exposure, flags vendor lock-in, synthesises weekly briefings with quality gates. It works. The output reads well. A multi-model council independently praised the extraction quality.

And I have no idea if it's actually useful.

That's the eval gap. Not "we need benchmarks" — everyone says that. The gap is between *building something that looks right* and *knowing it works in practice*. LLM output is fluent by default. A well-prompted extraction card will always sound consulting-grade. The question is whether it changes what you say in a meeting.

## Most practitioners stop at "it runs"

The typical AI project lifecycle: build the pipeline, demo it, ship it, move on. Nobody asks "but did anyone use the output?" because the output *reads* well. LLMs don't produce obviously broken text. They produce plausible, well-structured, confidently-worded text that may or may not be grounded in reality.

I caught myself doing exactly this. I shipped ten features in a day — daily extraction, parallel research, junk filtering, source analytics, trend tracking. Each one felt productive. Then I asked: "does this extract things useful for my actual job?" And I couldn't answer, because I'd never used the output in a real conversation.

The moment I stopped building and asked that question was worth more than all ten features combined.

## The flywheel that closes the gap

The fix isn't more features. It's a feedback loop.

**Week 1: Use it.** Run the pipeline. Read the output. Do your actual work. At the end of the week, name the 2-3 cards you actually referenced — in a meeting, a draft, a conversation. Everything else is noise, regardless of how well-written it is.

**Week 2: Categorise failures.** With ~100 traces accumulated, read 20-30 and mark pass/fail. Don't start with a theory of what's wrong — let the failure modes emerge from what you actually see. "Regulatory references were hallucinated" is different from "the framing was generic" is different from "this article wasn't relevant to my domain."

**Week 3: Automate judgment.** Write an LLM-as-judge prompt calibrated against your human labels. Not to replace your judgment — to scale it. The judge should agree with you 80%+ of the time before you trust it on new output.

**Week 4: Optimise.** Now you have a dataset, a judge, and a metric. Use DSPy or manual prompt iteration to improve extraction against your actual ratings. This is the first time "prompt engineering" becomes a real engineering activity rather than vibes-driven tweaking.

## Why this matters for banks

When a bank asks "how do we know our AI works?" most consultants say "evals" and mean benchmarks. They cite MMLU scores and MT-Bench rankings. That's not what the bank is asking.

The bank is asking: "If we deploy this and it gets something wrong, will we know?" That's an eval design question, not a benchmark question. It requires defining what "wrong" means for their specific use case, building the feedback loop to detect it, and demonstrating that the loop actually catches real failures.

If you can show you run this flywheel on your own tools — with receipts — that's credibility that can't be faked.

The eval gap is the consulting gap.
