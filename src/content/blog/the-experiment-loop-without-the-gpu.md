---
title: "The Experiment Loop Without the GPU"
description: "Andrej Karpathy's autoresearch project is being read as a demo of what H100s can do overnight. It's actually a discipline for doing rigorous work on anything measurable."
pubDatetime: 2026-03-08T06:54:45.000Z
draft: false
tags: ["ai", "tools", "systems"]
---

When Andrej Karpathy published autoresearch, most people read it as a GPU story. An H100 running a hundred experiments while you sleep, autonomously modifying a training loop, chasing a lower validation loss. The headline writes itself: AI doing AI research.

But there's a quieter idea underneath, and it doesn't require any particular hardware.

The repo has three files. `prepare.py` is fixed — it downloads data and trains a tokenizer and you never touch it again. `train.py` is what the agent edits: the model architecture, the optimizer settings, the batch size, anything. And `program.md` is a Markdown file you write to tell the agent how to think about the problem — what to try, what to avoid, what the goal actually is. The agent proposes a change to `train.py`, runs it for exactly five minutes, checks whether the validation metric improved, keeps the change if it did, discards it if it didn't, then repeats.

What makes this work isn't the agent's ability to write PyTorch. It's four constraints Karpathy imposed before the loop even starts.

Every run gets exactly five minutes of wall clock time, regardless of what the agent tried. This makes results comparable — you can't game the metric by spending longer on a promising run. The metric is a single number, bits per byte, chosen because it stays meaningful across architectural changes that would make other metrics incompatible. Changes are isolated: one variable per experiment, never two simultaneously, so you always know what caused an improvement. And the budget is fixed before you start — roughly a hundred experiments overnight — so you stop when the budget runs out, not when you feel like you've found something good enough.

These constraints exist to solve a specific failure mode: the feeling of rigour without its substance. Anyone who has done prompt engineering or A/B testing has experienced its opposite — trying a few things, keeping the one that seemed better, calling it done. The loop formalises what should have been happening anyway.

The GPU is load-bearing for the ML training part. The discipline is not.

I've been thinking about where else this loop applies cleanly. Prompt engineering is the obvious one — take a classifier, hold out an evaluation set, lock the metric before you start, run experiments that vary one thing at a time (the system prompt, the few-shot examples, the output format), keep the version that improves F1, discard everything else, stop at ten experiments or three dollars of API cost. The only thing that changes from Karpathy's setup is that the five-minute wall clock becomes a dollar cap, and `train.py` becomes a prompt file.

But the loop doesn't care about the domain. Sleep schedule experiments work the same way if you're willing to measure something real — readiness score, average deep sleep, whatever the device tracks — and commit to running each variant for a full week before deciding. The fixed budget here is the number of weeks you'll spend, chosen before you start. The single metric is chosen before you start. The one-variable discipline means you don't change both your bedtime and your dinner timing in the same week, because then you won't know which one moved the needle.

What breaks the loop is always the same thing: the temptation to add a second metric when the first one looks bad, or to extend the budget because the current best doesn't feel good enough, or to blame noise and rerun an experiment without diagnosing why it failed. Karpathy's fixed five-minute window exists precisely to close off the first two escape hatches. If you're running the loop without an H100, you have to close them yourself.

The `program.md` file is the part I find most interesting to steal. It's not a config file or a prompt — it's a living brief that the human iterates on between experiments. It carries the hypothesis backlog (ideas not yet tried), the list of what's been ruled out, the constraints the agent should respect. Karpathy describes it as the "research org code": the thing you're actually building when you run this loop isn't a better model, it's a better understanding of the problem expressed as text. The model weights are a side effect.

That framing transfers. In any domain where you're running experiments, the most durable output isn't the winning configuration — it's the brief that got refined through trying and failing and noting what failed and why. The winning prompt today will drift. The brief that describes why certain approaches don't work on this particular classification problem, for this particular data distribution, in this particular regulatory context, is still useful when the underlying model changes.

I built a small skill called `peira` — Greek for trial or experiment — that tries to capture this discipline as a reusable workflow. The machinery is lighter than autoresearch: a brief file, a log file, a hard budget set before starting, a locked metric that doesn't change mid-campaign. But the loop is the same. Propose one change. Run it. Measure. Keep or discard. Note what you learned. Repeat until budget is exhausted.

The insight from Karpathy's project isn't that you can do AI research without a human in the loop. It's that rigorous iteration requires structure that most people don't impose on themselves, and that structure can be written down and reused. The H100 just makes the feedback loop fast enough to see results before breakfast.

Without the GPU, you just set your alarm for later.
