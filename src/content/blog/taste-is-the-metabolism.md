---
title: "Taste Is the Metabolism"
description: "Tool descriptions were just the first thing to evolve. Everything in an agent's context window is a genome under selection pressure — and taste decides what counts."
pubDatetime: 2026-03-21T13:56:16.000Z
draft: false
tags: [ai, agents, design, tools]
---

In [The Missing Metabolism](/posts/the-missing-metabolism), I argued that agent tools need a biological loop — sense, vary, measure, keep or revert. Tool descriptions drift, token budgets create scarcity, and the human doing all the tuning by hand is the bottleneck. Build a metabolism and the tools evolve themselves.

I was thinking too small.

Tool descriptions are text that an LLM reads before deciding what to do. But they're not the only text. Prompt templates shape how the agent frames its work. Memory files carry context from past sessions. Reference documents get loaded on demand to inform decisions. System rules constrain behaviour. Skills define workflows. Every one of these consumes tokens — the universal energy currency of an LLM system — and every one of them either earns those tokens or wastes them.

The metabolism I described was for one organ. The organism has many.

Once you see it this way, the question isn't which text fragments to evolve. It's which ones to exempt. And the answer, unsettlingly, might be none. Every piece of text that enters an agent's context window is competing for finite space against every other piece. A reference document that gets loaded but never influences the output is metabolic waste — it consumed energy without producing work. A memory file that carries stale context from three months ago isn't just unhelpful; it's actively displacing something that might be.

The biology maps cleanly because the constraints are the same. Finite energy. Scarce resources. Variation and selection. But there's a subtlety the first manifesto glossed over, and it turns out to be the whole game.

Not all genes express the same way.

Some genes are constitutive — always on, always working, never "called." Your system rules operate like this. They're loaded into every session, shaping every response, and you can't measure their fitness by tracking when they fire because they're always firing. You can only measure what they do by removing them and watching what breaks. That's a knockout experiment, and biologists have been running them for decades. The ones that matter break everything when they're gone. The ones that don't matter change nothing.

Other genes are inducible — dormant until a specific trigger activates them. Your reference documents work this way. The exercise readiness protocol sits unread for weeks, then saves you from overtraining on the one morning your recovery score is low. If you measured its fitness by invocation frequency, you'd kill it. But the value isn't in frequency. It's in the conditional: when this fires, what happens? A rarely-used gene with high conditional value is not waste. It's an immune response.

A metabolism that can't tell these apart — that treats infrequent use as low fitness regardless of context — will optimise itself into fragility. It will strip away every safety net, every edge-case handler, every piece of wisdom that only matters twice a year but matters enormously when it does. The system will get faster, leaner, more efficient, and then one day it will encounter the situation it pruned its defences for and fail in a way it can no longer recover from. This is autoimmune disease in reverse: not the body attacking itself, but the body disarming itself.

So the fitness function can't just be success rate times token efficiency. It has to account for conditional value, for the difference between "never needed" and "not needed yet." Information theory offers one handle — entropy reduction per token consumed. An artifact that reduces uncertainty cheaply is fit. An artifact that costs tokens without reducing uncertainty is waste. But even this misses something.

Two descriptions can carry identical information and produce completely different outcomes. One is clear, the other is ambiguous. One maps to how the agent already thinks, the other fights the grain. The information content is the same. The *experience* of processing it is not. This is what taste captures — not the what, but the how. The shape of the text, the rhythm of the prompt, the way a well-written description makes the right action feel obvious and a poorly-written one makes the agent hesitate.

Taste seemed like a nice-to-have when I was thinking about tool descriptions. A secondary signal alongside the hard metrics. But the further you push the metabolism — from tools to prompts to knowledge to rules — the more taste becomes the primary signal. Because at the edges, where you're deciding what counts as knowledge worth metabolising in the first place, there is no hard metric. There's only judgment. Is this memory file still relevant? Is this reference document earning its tokens? Is this rule still serving its purpose or has the world moved past it?

Those are taste questions. And they can't be delegated to a formula.

This is the inversion I didn't expect. I started by building a metabolism and adding taste as a fitness dimension. But taste isn't a dimension of the metabolism. Taste *is* the metabolism. The signals, the fitness functions, the mutation operators, the promotion gates — those are implementation machinery. The thing that drives all of it, the thing that decides what to sense and how to score and when to keep and when to revert, is taste.

The immune system doesn't have a list of every pathogen it might encounter. It has a generative mechanism — one that can recognise threats it's never seen before, based on a deep structural sense of what belongs and what doesn't. That sense of self-versus-other is not a database lookup. It's taste, operating at the molecular level.

An agent's metabolism needs the same thing. Not a rule for every artifact. A sense of what fits — what earns its tokens, what reduces uncertainty, what makes the next action feel obvious instead of ambiguous. That sense emerges from the same place taste always emerges: accumulated experience, continuously refined, never fully articulable.

The first manifesto asked whether your tools would evolve. This one asks a harder question: what decides which direction they evolve in?

The answer is taste. And taste is not a feature you add. It's the thing you've been doing all along, every time you rewrite a prompt because it "felt off," every time you keep a tool description that the metrics say should be shorter, every time you refuse to delete a memory file because you know — without being able to prove — that you'll need it again.

The metabolism just makes it continuous.

*Sequel to [The Missing Metabolism](/posts/the-missing-metabolism). See also: [Design Actions, Not Actors](/posts/design-actions-not-actors).*
