---
title: "When Better Is Worse"
description: "Upgrading to a more capable model made my tool sixty times slower. The lesson isn't about models — it's about the difference between capability and fit."
pubDatetime: 2026-03-08T13:40:35.000Z
draft: false
tags: ["ai", "tooling", "engineering"]
---

I upgraded a model in one of my tools this week, and the tool became sixty times slower.

Not sixty percent. Sixty times. A session that used to complete in fifteen seconds took fifteen minutes. The model I swapped in was objectively more capable — higher benchmark scores, extended reasoning, the latest architecture. And it made the tool nearly unusable.

The model was designed for a different job. OpenAI's newest flagship uses what they call a Responses API — an interface built for multi-step agentic tasks, where the model reasons through a problem over multiple calls rather than answering once and moving on. For that job, it's excellent. For a tool that needs to query six models in parallel and synthesize responses in under a minute, it's catastrophic. The model sits there thinking, elaborating, building chains of reasoning that nobody asked for. Nine hundred seconds later, it produces an answer that "Blue" would have served just as well.

The mistake is easy to make because we conflate two separate axes. Capability is what a model can do at the ceiling — the hardest problems it can solve, the reasoning depth it can reach. Fit is whether that ceiling is anywhere near the task you're actually asking it to do. A Formula 1 car is more capable than a delivery van. You still don't want to use it for last-mile logistics.

What made this failure mode invisible was that everything looked right in the documentation. The model was available on the same API endpoint, accepted the same parameters, returned the same format. Nothing in the integration layer warned me that I'd just introduced a fifteen-minute blocking call into what was supposed to be a sixty-second session. The first signal was the silence — watching a progress bar hang while five other models had already finished.

After the rollback, I added a vetting step: before adding any model to a parallel workflow, run it on a trivial prompt and check the actual response time. Not the benchmark. Not the latency figure in the provider's docs. The real wall-clock time, under the actual call pattern the tool will use. For this model, that test would have returned nine hundred seconds and the decision would have been obvious.

The deeper lesson is about what benchmarks measure. Model leaderboards rank capability at ceiling. They don't measure suitability for your specific call pattern, timeout budget, or use case. A model that ranks first on reasoning benchmarks might be the worst possible choice for a tool that needs a fast, parallel response — not because it's bad, but because it's optimised for something orthogonal to your needs.

Fit is a constraint that capability can't override. Knowing which axis matters for your tool is the work that happens before you ever look at a benchmark.

---

*P.S. The monitoring system I built afterward now watches for the day that model shows up in benchmark data with reasonable latency figures. Capability without fit is just potential waiting for the right context.*
