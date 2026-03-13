---
title: "The Last 10% Is the Feedback Loop"
description: "The execution layer of an AI system is only half the infrastructure — the reporting layer is what determines whether anyone acts on the results."
pubDatetime: 2026-03-13T03:28:00.000Z
tags: ["ai-engineering", "personal-systems"]
---

Here is the thing that bothered me: I had built a system that worked, and I almost never used it.

The overnight runner had been humming along for weeks. Batch jobs dispatched at midnight, models ran, output files landed in the right directories. By any reasonable measure the execution layer was solid — properly queued, logged, retried on failure, the whole thing. And yet most mornings I would open my laptop, forget the runner had done anything, and only remember to check the output files sometime around noon, if at all. A system that reliably produced results I reliably ignored.

It took me longer than it should have to name the problem. The runner was finished. The infrastructure was not.

What I was missing was forty lines of Python and a Telegram bot. Every time a batch completed, fire a message: job name, runtime, summary of what came back. That is it. Two hours of work, most of which was reading the Telegram API docs. And almost immediately the runner went from something I had built to something I actually used. The same jobs, the same outputs, the same cron schedule — but now the results came to me instead of waiting silently in a directory I had to remember to visit.

This is the thing that nobody talks about when they discuss AI tooling: the feedback loop is not a nice-to-have. It is the difference between infrastructure and a science experiment.

Think about where most of the engineering effort goes in any AI system. Prompt engineering, model selection, the dispatch layer, output parsing, error handling, retry logic — all of it aimed at making the execution more reliable and the outputs more accurate. That work is real and it matters. But there is an asymmetry baked into how we think about these systems: we treat execution as the product and reporting as the wrapper. Get the execution right and the rest will sort itself out.

It does not sort itself out. A cron job that runs perfectly and writes results to a file you never open has a zero percent adoption rate, including with its own author. The friction of going to look for output — even trivial friction, a tab-switch, a directory browse — is enough to break the habit. You build the muscle of checking when something goes wrong and you need to diagnose it, not as a daily practice.

The notification flips the model. Instead of you going to the system, the system comes to you. This sounds obvious when stated plainly, but the engineering culture around AI tooling has not fully absorbed it. Demos end at the output file. Blog posts about agent infrastructure spend twelve paragraphs on the orchestration layer and one sentence on "then you can review the results." The gap between "runs correctly" and "gets used" lives entirely in that sentence.

There is a subtler point underneath this. The overnight runner and an async job queue are the same infrastructure with different mental models. When I think "overnight runner," I think: set it, check it in the morning, batch cadence. When I think "async queue," I think: fire and get notified, results surface when ready, any latency is fine. The second mental model is more useful and more honest about what the system actually does — but I only arrived at it after adding the notification layer. The feedback loop did not just change the usability, it changed how I think about what I built and, consequently, what I put through it. Things that felt unsuited for "the runner" suddenly felt natural for "the queue."

Infrastructure you do not use is not infrastructure. It is a prototype that stayed in production. The question is how much of what we call AI tooling is actually in that category — execution layers that technically work, surrounded by reporting layers that were never finished, used sporadically by the people who built them and by almost nobody else.

If the last ten percent is always the feedback loop, and the feedback loop is always the afterthought, what does it mean to treat it as load-bearing from the start? And how different would the tooling landscape look if every AI system were required, before shipping, to answer the question: when this runs, how does the person who needs to act on it find out?
