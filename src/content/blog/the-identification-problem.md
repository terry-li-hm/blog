---
title: "The Identification Problem"
description: "Having great AI delegation tools and not using them isn't a tool problem — it's a pattern recognition problem, and that distinction changes everything."
pubDatetime: 2026-03-13T03:28:00.000Z
draft: false
tags: ["ai-engineering", "personal-systems"]
---

Here is the thing that bothered me for weeks: I have three powerful AI coding agents — Codex, Gemini, OpenCode — each with generous quota, each capable of writing production-quality code on its own, each sitting largely idle while I chip away at tasks myself. The bottleneck, I told myself, was routing. I needed better documentation. A clearer decision tree. Maybe a skill that surfaces the right tool for the right job.

That diagnosis was wrong, and the real one is more uncomfortable.

The problem isn't knowing *how* to delegate. I know how to delegate. The tools are good. The setup is solid. The problem is that I'm not *recognising the moment when delegation is warranted* in the first place. Most tasks don't announce themselves as "delegation opportunities." They just arrive, and my hands are already moving toward the keyboard before my brain has had a chance to ask whether they needed to be.

This is the identification problem: the reflex hasn't fired.

Think about how this plays out in practice. "I need to update the frontmatter parser to handle a new field" feels like a five-minute fix. It probably is. So I do it. What I don't notice is that it's also exactly the kind of self-contained, well-specified, test-friendly task that an agent would handle cleanly while I'm doing something else entirely. The cost isn't the five minutes. The cost is the five minutes of *my attention* — the planning, the context-switching, the "let me just check this works" loop. Multiply that by a dozen tasks a day and you've spent your scarcest resource on work that didn't require it.

The standard framing for AI delegation is about coding. You have a coding task, you think about whether to use an agent. But that framing is already too narrow. It misses the enormous category of tasks that don't *feel* like coding: writing a one-off data transformation, setting up a config file, wiring together two APIs that have obvious documentation, adding instrumentation to a script. These tasks sit in a perceptual blind spot — they feel small, familiar, vaguely beneath the threshold of "delegatable." So they don't trigger the reflex.

There's a useful analogy in how surgeons think about their operating time versus everything else. The OR is where the surgeon's specific expertise is irreplaceable. Everything that doesn't require that expertise — scheduling, prep, follow-up paperwork — is a candidate for delegation not because it's unimportant but because it draws from a different reservoir. The surgeon's scarce resource is operative attention. Spending it on intake forms is a category error.

In the agentic era, execution is abundant. Attention is scarce. The question isn't "can I do this faster than an agent?" It's "does this require *my* attention, specifically, or just competent execution?" Those are different questions with different answers, and most productivity frameworks aren't built to ask the second one.

The solution isn't better documentation. Documentation solves a knowledge problem, not a habit problem. What I actually need is a behavioral trigger — something that intercepts the moment between "task arrives" and "hands on keyboard" and inserts a single-second question: *does this need me, or does it need execution?* That's it. The routing logic, the tool selection, the prompt structure — those are all downstream. The upstream failure is that the question never gets asked.

This is, I think, a wider pattern than people realise. We are all several months or years into having access to genuinely capable AI tools, and most of us are still operating on pre-agent instincts. The instinct is: I see a problem, I solve it. The agentic instinct should be: I see a problem, I identify whether I am the right entity to solve it, then I either solve it or route it. One extra beat. That beat is worth training for, because the cost of skipping it compounds silently.

Where does this lead? If the bottleneck is genuinely attention-for-identification rather than execution capacity, then the leverage point for AI-augmented productivity isn't better tools — we already have those. It's better perception: learning to see the world as a stream of tasks with different attention requirements, and developing the reflex to sort them before defaulting to doing. The person who develops that reflex first doesn't just save time. They're operating in a fundamentally different mode, with a different effective output ceiling. I'm not sure we've fully reckoned with what that divergence looks like over a year or two.
