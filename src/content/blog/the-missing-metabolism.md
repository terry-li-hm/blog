---
title: "The Missing Metabolism"
description: "We build agent tools the way medieval farmers bred crops — by hand, by instinct, one season at a time. There's a better loop."
pubDatetime: 2026-03-21T09:53:00.000Z
draft: false
tags: [ai, agents, design, tools]
---

Every tool you build for an LLM agent starts dying the moment you ship it. The description drifts out of sync with what the tool actually does. The prompt template accumulates clauses that made sense three months ago and now just waste tokens. The output schema returns fields nobody reads. You don't notice because the tool still *works* — it just works a little worse each week, the way a garden you stop weeding still grows, just not what you planted.

The usual response is manual tuning. You notice a tool is underperforming, you rewrite its description, you tighten the prompt, you prune the schema. This works. It also doesn't scale. If you have five tools, you can keep them sharp by hand. If you have fifty, you're spending more time maintaining tools than using them. And the tuning is always reactive — you fix what you've already noticed is broken, which means everything you haven't noticed is quietly degrading.

DSPy changed how I think about this. The Stanford team showed that LLMs can optimise their own prompts — automatically varying wording, few-shot examples, chain-of-thought strategies, then selecting the variants that score highest against a metric. The results consistently outperform hand-tuned prompts. Not because the optimiser is smarter than the human, but because it tries more variants and measures more carefully. It's not thinking harder. It's iterating faster.

But DSPy is a gym workout. You run it offline, against a dataset, for one pipeline. It optimises and stops. What if the optimisation never stopped? What if it ran continuously, against the live stream of how your tools are actually being used, and adapted in real time?

This is where the biological metaphor stops being decorative and starts being architectural. Your agent tools already live in a selection environment, whether you've noticed or not. The context window is finite — every description, every schema field, every prompt clause competes for inclusion. Token budgets create scarcity. Scarcity drives selection. The tools that deliver value per token survive in your workflow. The ones that don't get replaced, or worse, linger as dead weight you're too busy to remove.

The difference between your tool ecosystem and a biological one is that biological systems have a metabolism. They don't wait for a gardener. They sense their own state — hunger, waste, damage, opportunity. They respond automatically — grow, prune, repair, adapt. The sensing and responding happens on two timescales: fast reactions in the moment, slow adaptation over generations. The organism doesn't need to understand evolution for evolution to work. It just needs a fitness signal and a variation mechanism.

Agent tool ecosystems have neither. They have a human in the loop doing everything metabolism should do: noticing drift, proposing changes, testing variants, reverting failures. The human is the metabolism, and the human doesn't scale.

The minimum viable metabolism is smaller than you'd think. Three components. First, instrument your tools to emit signals — every call logs what happened, how long it took, how many tokens it cost, whether the caller used the result or immediately tried something else. This is sensing. You probably have some of this already in your logs; the missing piece is treating it as a fitness signal rather than debugging telemetry.

Second, store your tool definitions as data, not code. Descriptions, prompts, schemas — anything you'd want to evolve — lives in files the system can read and modify. Markdown with frontmatter works. Version control gives you rollback for free. The tool's executable logic stays in code (that's the body plan, conserved). The language around it — how it presents itself, what it asks for, how it frames its output — lives in evolvable files. That's the genome.

Third, close the loop. A process that reads fitness signals, identifies underperforming tools, generates a variant (tighten this description, restructure that prompt), deploys it, and measures whether fitness improved. If yes, keep. If no, revert. This is where the LLM earns its place — not as the tool itself, but as the mutation engine, proposing variations no human would think to try because no human has time to try a hundred variations of a tool description.

The interesting part is taste. Pure metrics — tokens per call, success rate, latency — optimise for efficiency. But efficiency isn't the only thing that matters. A tool can be efficient and still feel wrong. It returns the right answer in a format that takes cognitive effort to parse. It's terse when you want context, or verbose when you want a number. This is taste, and it seems subjective until you notice that it's also a signal. When you rephrase a tool's output before using it, that's a negative taste signal. When you pass the result straight through without editing, that's a positive one. When you correct the system — "don't do it that way" — that's the strongest signal of all.

A metabolism that captures taste alongside efficiency produces tools that aren't just fast and cheap. They fit the way you work. They become yours in a way that hand-tuned tools never quite manage, because the tuning is continuous and the signal is richer than what conscious attention can track.

None of this requires a framework. It requires a loop. Sense, vary, measure, keep or revert. The biology is just a way of seeing what's already there — a finite environment, scarce resources, and artefacts competing for space. Add a variation mechanism and a fitness signal, and evolution is not a metaphor. It's an inevitability.

The question isn't whether your tools will evolve. It's whether you'll still be the one doing it by hand.

*See also: [Design Actions, Not Actors](/posts/design-actions-not-actors) — the verb-first methodology that pairs with metabolic evolution.*
