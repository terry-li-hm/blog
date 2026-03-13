---
title: "When to Build vs. When to Wait: The Recurrence Rule for AI Tooling"
description: >-
  Most AI tooling debates are actually recurrence debates. The question
  isn't whether to build — it's how many times you'll need it.
pubDatetime: 2026-03-06T16:00:00.000Z
tags:
  - ai
  - engineering
  - productivity
  - decision-making
---

Most debates about whether to build an AI tool are actually debates about recurrence, and they'd resolve faster if everyone said that explicitly.

The intuition underlying "don't build it" is usually: this is a one-time thing, or the platform will get here soon, or the cost of building and maintaining this exceeds the value over its likely lifespan. The intuition underlying "build it" is usually: I'll use this dozens of times, the platform won't get here for six months, and the daily friction of not having it compounds into something significant.

Both intuitions are sometimes right. The recurrence question is the one that determines which.

If you encounter a problem once, build nothing. Work around it, document how, move on. The overhead of building a solution to a one-time problem — designing, implementing, testing, documenting, maintaining — reliably exceeds the overhead of the problem itself. This is the failure mode of engineering teams that accumulate internal tooling for edge cases: each individual tool made sense when it was built; the aggregate is a maintenance burden that slows down everything else.

If you encounter a problem twice, build nothing, but document the workaround carefully. You now have evidence that the problem recurs. You don't yet have enough evidence to justify the investment of a proper solution versus a lightweight patch. Write down what the problem was, what you did about it, and whether it worked. This documentation costs almost nothing and gives the third occurrence the context it needs.

If you encounter a problem three times, build it. The recurrence pattern is established. The problem is real and will keep appearing. The cost of a solution, amortised across future occurrences, is probably justified. More importantly, the three occurrences have given you enough information to build the right solution rather than the first solution that comes to mind.

This rule is more useful than it first appears because it changes how you think about investment decisions during the fast-moving period of AI tooling. The platforms are improving rapidly. Something that seems like it warrants a custom build today might be handled natively by the platform in three months. The recurrence rule provides a natural delay: by the time a problem has appeared three times, you have evidence both that it's genuinely worth solving and that the platform hasn't solved it yet.

The rule also has a useful second half: build minimally, iterate toward complexity rather than away from it. The first version should solve exactly the problem you've seen three times, with no additional capability. Every feature added beyond that is a bet that the problem is broader than your three data points suggest. Sometimes that bet is right. More often, the minimum solution handles eighty percent of the cases, and the remaining twenty percent are different enough that they'd have required a different design anyway.

There's a specific failure mode in AI tooling that the recurrence rule helps prevent: building infrastructure for anticipated pain rather than observed pain. The pain of not having a proper vector database, or a structured logging system, or a monitoring dashboard, is very easy to anticipate and very often fails to materialise in the form expected. The pain of waiting until you've encountered the problem three times, and then building exactly what those three occurrences require, is real but finite.

The organisations and individuals building the most useful AI tooling tend to be the ones that have high tolerance for temporary friction — the willingness to live with workarounds while the recurrence pattern becomes clear — and low tolerance for premature generalisation. Build the specific thing the three occurrences require. Wait until you've seen the fourth variant before making it more general.

---

P.S. The recurrence rule has a useful exception: infrastructure that's genuinely expensive to retrofit is worth building before you've seen three occurrences. Observability, audit trails, and access controls are examples — the cost of adding them after the fact is high enough that building them in from the start is usually justified even before the need is fully established. But these are the exception rather than the rule, and they're worth being explicit about so they don't become the excuse for every premature build.
