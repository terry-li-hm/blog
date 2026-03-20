---
aliases: ["When to Think and When to Count"]
title: "When to Think and When to Count"
description: "Machine learning says let the model find the signal. Heuristics research says use one variable and ignore the rest. They're both right — the dividing line is how much data you have."
pubDatetime: 2026-03-17T02:55:00.000Z
tags: ["ai", "mental-models", "decision-making"]
---

There's a tension that bothered me once I noticed it. Two fields I respect are giving opposite advice.

Machine learning says: don't hand-pick features. Don't impose your assumptions. Give the model all the data and let it find the signal. XGBoost with fifty variables will outperform your intuition about which three matter. The whole point is that the algorithm sees patterns you can't.

Heuristics research — Gigerenzer, specifically — says the opposite. Simple rules using one or two variables often outperform complex models. Doctors using a single-variable decision tree for heart attack triage outperformed colleagues using multi-factor regression. Bail judges using one question did better than those using twenty. Less information, better decisions.

Both have strong evidence. Both have smart people behind them. So which is right?

Both. The dividing line is sample size relative to the number of variables.

When you have ten million transactions and fifty features, let XGBoost work. It has enough data to find real patterns without fitting noise. Regularisation handles the rest. This is why my AML model at the bank worked — millions of alerts, clear labels, stable feature space. The algorithm genuinely saw things I couldn't.

When you have fifty cases and fifty features — which is most human decisions — the complex model is fitting noise. Every variable it picks up is more likely to be a coincidence than a signal. A one-variable rule wins not because it's smarter, but because it's too simple to overfit.

This is the bias-variance tradeoff, which is a core concept in machine learning itself. High-variance models (many parameters, flexible) need lots of data to converge. High-bias models (few parameters, rigid) work with less. The heuristics researchers aren't disagreeing with ML. They're applying ML's own principle to domains where data is scarce.

Most of life is scarce-data. How many career decisions do you make? Ten, maybe twenty across a lifetime. How many times do you choose a partner, a city, a field? You are running a single-digit sample through a problem with hundreds of variables — your skills, the market, the team, the timing, your energy, your family situation. No algorithm can find the signal in that. A simple rule like "optimise for learning rate early, leverage late" isn't a shortcut. It's the statistically correct approach given the sample size.

The irony is that the people most likely to over-analyse personal decisions are the people who work with data professionally. We know that models beat intuition in data-rich domains, so we assume the same applies everywhere. But the reason models beat intuition is that they have enough data to be less biased than us. Take away the data and the model is just a more complex way of being wrong.

The practical test is simple. Ask: how many examples do I have? If thousands or more, build a model. If dozens or fewer, use a rule. If somewhere in between, use a simple model — logistic regression, a decision tree with three splits, a scoring rubric with five criteria. Match the complexity of your method to the richness of your data.

The machine learning people and the heuristics people aren't in tension. They're drawing the same curve. They're just pointing at different parts of it.
