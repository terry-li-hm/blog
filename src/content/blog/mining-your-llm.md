---
title: "Mining Your LLM"
description: "Your AI already knows things that would make it better at helping you. The trick is extracting that knowledge and making it permanent."
pubDatetime: 2026-03-15T15:36:23.000Z
draft: false
tags: [ai, workflow, claude-code, skills]
---

I asked Claude what planning is. Not because I needed a definition — because I wanted to see what it knew, distill the good parts, and save them as a reusable skill file that loads into every future session.

This is a pattern worth naming: **knowledge mining**. Your LLM has vast implicit knowledge baked into its weights. But that knowledge is unreliable — whether it surfaces depends on your prompt, the context window, and something that feels a lot like luck. The same model that gives you a brilliant breakdown of planning theory on Monday might give you a shallow summary on Tuesday.

The fix is surprisingly simple. Interview the model once, refine the output, and freeze it as a file that loads deterministically into context. You're converting implicit knowledge (in the weights, unreliable) into explicit knowledge (in a file, always there).

Think of it as ore and ingots. The model's weights are the ore deposit — rich, but you have to dig for it, and you never know exactly what you'll get. A distilled skill file is the ingot — refined, portable, consistent. You mine the ore once. You use the ingot forever.

This works because LLMs have an asymmetry that nobody talks about. They're smart but unreliable in the same way a brilliant colleague with a terrible memory is smart but unreliable. They know things about planning, debugging, writing, architecture — genuinely useful mental models. But they won't reliably surface that knowledge unless the right context is loaded. A skill file is that context. It's a prosthetic for the model's inconsistency.

The process is almost comically simple. Have a conversation about a topic where you suspect the model has depth. Push it past the first answer — the second and third layers are where the interesting structure lives. When something crystallises, capture it as a structured file. Load that file into future sessions.

What you get isn't just a reference document. It's a **behavioural anchor**. When my planning skill file loads into context, the model doesn't just have access to planning theory — it reasons differently. The failure modes table becomes a checklist it actually runs through. The human-vs-agent comparison shapes how it structures collaborative workflows. The file doesn't just inform; it steers.

There's a deeper point here about where knowledge should live in a human-AI system. The model's weights are the worst place to store knowledge you care about — you can't inspect it, can't version it, can't guarantee retrieval. Your files are the best place. They're grep-able, git-tracked, and loaded deterministically. The mining pattern moves knowledge from the worst storage medium to the best one.

A natural question: doesn't the knowledge go stale? Doesn't planning theory evolve? Here's the thing — distilled knowledge is far more stable than it appears. The fundamentals of planning haven't changed since Aristotle named it *bouleusis*. What changes is tooling and context, not the underlying cognitive structure. You update the skill file when it proves wrong in practice, not on a schedule. And when you do update it, you're refining an ingot, not re-mining ore.

But single-model mining is only the first tier. The extracted knowledge has the model's blind spots baked in — it can't catch what it doesn't know it's missing. The second tier is adversarial refinement: feed the distilled skill to a multi-model council and ask them to attack it. What's missing from this framework? What failure modes aren't listed? What distinctions are false? Multiple models debating the same extracted theory will surface gaps that no single model would notice on its own. The ore gets refined once by extraction, and again by stress-testing.

There's a third tier too, and it's the one that actually matters: field validation. Use the skill in real work and track where it helps and where it breaks. Theory mined from weights is still theory — it hasn't touched reality yet. The planning skill might list six failure modes but miss the one that actually bites you. The debugging theory might have the right taxonomy but the wrong emphasis for your domain. Tiers 1 and 2 happen in conversation. Tier 3 happens in practice, over weeks, and it's where the skill earns its keep or gets revised.

The real leverage is compounding. Each skill file you extract makes the model better at the next conversation, which surfaces more knowledge worth extracting. Your first few mining sessions produce obvious insights. But as the skill library grows, the model starts operating at a higher baseline — and the insights that emerge from that higher baseline are the ones that are genuinely hard to get any other way.

You're not just using an AI. You're building a flywheel where the model's implicit expertise becomes your explicit infrastructure, one conversation at a time.

P.S. The irony isn't lost on me that this post was itself mined from a conversation with Claude about the nature of planning, which was itself mined into a skill file called *bouleusis*. Turtles all the way down — and each turtle gets battle-tested by the ones above it.
