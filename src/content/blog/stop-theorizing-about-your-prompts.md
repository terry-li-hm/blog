---
title: "Stop Theorizing About Your Prompts"
description: "LLMs are the cheapest experimental subjects in history. Why aren't you testing?"
pubDatetime: 2026-03-20T02:52:38.000Z
modDatetime: 2026-03-20T03:07:58.000Z
revisionNote: "Added v2 and v3 experiment results — floor effect, seductive near-miss mechanism"
draft: false
tags: [ai, experimentation, llm, practice]
---

I spent an hour this morning mining three different language models for their knowledge about experiment design. I built a reference document with failure modes, design patterns, and cross-model insights. It was thorough. It was well-structured. It was almost entirely useless.

Then I ran six trials. Cost: about fifty cents. Time: ten minutes. And I learned more from those six trials than from the entire theoretical exercise.

Here's what happened. I wanted to test whether reducing the amount of always-loaded context in a system prompt would make the model more likely to follow the remaining instructions. Reasonable hypothesis — less noise, more signal. I had three language models tell me about experimental pitfalls. I catalogued failure modes. I designed controls.

Then I actually ran the experiment. Three trials with a large system prompt, three with a lean one. Same task, same model, interleaved to avoid ordering effects. The result? Both conditions triggered the target behaviour every single time. Perfect ceiling effect. The instruction I was testing was too strong to miss regardless of context size.

The entire theoretical edifice I'd built — the failure mode catalogue, the cross-model mining, the design patterns — none of it predicted this. A fifty-cent pilot did what an hour of theorizing couldn't: it told me my experiment was wrong.

This is the thing nobody talks about when they discuss prompt engineering. We have access to the cheapest, fastest, most controllable experimental subjects in human history. A clinical trial costs thousands per participant and takes months. An A/B test on users requires traffic, ethics review, and patience. But testing a hypothesis about LLM behaviour? You can run thirty trials for less than a cup of coffee, in the time it takes to drink one.

Think about what that inverts. The traditional scientific workflow exists because experiments are expensive: theorize carefully, design meticulously, then run the minimum viable experiment to test your theory. When experiments cost thousands of dollars and weeks of time, that's rational. You want to be very sure before you spend.

But when experiments cost cents and take seconds, the calculus flips entirely. Theorizing first becomes the expensive part — not in money, but in time spent not learning. Every minute you spend reasoning about what a prompt change *might* do is a minute you could have spent *finding out*. The model is right there. Ask it.

I redesigned my experiment in five minutes based on what the pilot taught me. Removed the explicit instruction from both conditions to test whether context density affects *spontaneous* behaviour rather than instruction-following. A new design that would have taken me hours to reach through pure reasoning, arrived at in minutes through contact with reality.

This isn't just about prompt engineering. It's about a fundamental shift in how practitioners should work with AI systems. The old mental model — I am the engineer, the LLM is the tool, I must understand it theoretically before I use it — is a holdover from a world where understanding preceded interaction. In that world, reading the manual before touching the machine was wise because mistakes were costly.

We're not in that world anymore. The machine is patient, cheap, and endlessly re-runnable. The best way to understand it is to interact with it, systematically. Not randomly — you still need hypotheses, controls, and pre-registered metrics. But the emphasis shifts from "think, then test" to "test, then think." Let reality calibrate your intuitions rather than the other way around.

The practitioners I see struggling most are the ones who treat prompt design as a reasoning exercise. They debate system prompt structures in meetings. They share "best practices" that nobody has tested. They build elaborate prompt templates based on what *should* work, informed by analogies to human communication that may not apply to transformer architectures at all.

Meanwhile, the practitioners who are quietly getting ahead are the ones who test everything. They don't argue about whether chain-of-thought helps — they run twenty trials with and without it, on their actual task, with their actual model. They don't debate prompt length — they measure it. They treat every design decision as a hypothesis and every deployment as an experiment.

The barrier isn't technical. You don't need a lab, a framework, or a PhD in experimental design. You need a loop: hypothesis, test, observe, update. The cheapest version is literally running the same prompt six times and counting outcomes. If the effect isn't visible in six trials, it's either not there or too small to matter for your use case.

There's a deeper principle here that goes beyond AI. Experimentation is calibration to reality. Each trial updates your mental model. The first few trials are the most valuable — they produce the biggest shifts in understanding. Repeated identical experiments hit diminishing returns fast, not because reality changes, but because your model of it converges. The art is knowing when to stop replicating and start redesigning — when to ask a different question rather than seek more precision on the current one.

My fifty-cent pilot taught me this: the ceiling effect wasn't a failure. It was the most informative possible result. It told me my question was wrong, which is worth more than a precise answer to the right question. It redirected the entire line of inquiry in five minutes, for less than the cost of a vending machine coffee.

So I redesigned again. The second experiment removed the explicit instruction entirely — did the model spontaneously use the technique without being told? Zero out of six. Clean floor. The instruction was the active ingredient, not the context density. Two experiments, two clear results, total cost under a dollar: the instruction works when present, doesn't happen when absent, and the amount of surrounding context doesn't matter.

But the third experiment — that's where it got genuinely interesting. I made the task ambiguous. Instead of a problem that obviously matched one instruction, I chose one that could plausibly match several. Both conditions had the right instruction available. The question was whether the model would *select* it when other reasonable options competed for attention.

The lean condition picked the right instruction 75% of the time. The fat condition picked it 50%. Small sample, not conclusive — but the mechanism it revealed was worth more than the numbers. In the fat condition, the model kept grabbing a "seductive near-miss" — an instruction that sort of fit the task, that caught its attention first because there were so many options to scan. Think of it like a crowded toolbox: you need a screwdriver, but a wrench catches your eye first because it's right on top and it kind of works. So you use the wrench. You never even look for the screwdriver.

In the lean condition, something different happened. The model would pick up one instruction, realize it wasn't quite right, and that *led* it to the correct one. With fewer tools, it composed them into a sequence rather than grabbing the first plausible match. Fewer options produced better navigation, not because there was less noise, but because there were fewer seductive dead ends.

Three experiments, three different results, one morning, less than two dollars. Each one taught me something no amount of theorizing would have: the ceiling told me my design was wrong, the floor told me the mechanism was the instruction itself, and the ambiguous task told me the real problem isn't noise — it's competition between plausible-but-suboptimal options.

If you work with LLMs and you're not running experiments, you're leaving the cheapest insights in history on the table. Stop theorizing. Start testing. The model is right there.
