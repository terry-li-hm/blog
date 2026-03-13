---
title: "Most Banks Don't Need an AI Strategy"
description: >-
  The real project isn't artificial intelligence. It's the data infrastructure
  that AI exposes as broken.
pubDatetime: 2026-03-06T08:00:00.000Z
tags:
  - ai
  - banking
  - data
  - strategy
  - financial-services
---

Most banks don't need an AI strategy. They need a data strategy that they're actually willing to fund.

This is the thing nobody says in the first meeting, because it immediately sounds like a dodge — like telling someone who asked for directions that they shouldn't have started from here. But after years of building ML in production at a bank, I've watched the same pattern play out enough times that it's no longer surprising. A GenAI pilot gets approved. Enthusiasm is genuine. The team starts building. Three weeks in, they discover the data lives in four systems — two requiring a change request to query, one being sunset, and none reconciled against each other in eighteen months.

The model isn't the problem. It never was.

Banks have been running data quality programmes for fifteen years. The reason they haven't finished isn't lack of ambition — it's that clean data is invisible when it works and easy to deprioritise when there are revenue problems to solve. Data governance projects compete poorly against product launches. They have no visible launch date, no user testimonials, and their primary value is preventing bad outcomes that nobody can demonstrate didn't happen.

So the work keeps getting deferred. And then AI arrives, and suddenly the same work gets renamed.

The AI urgency has changed the political economy in one genuinely useful way. The CTO can now get the data infrastructure project funded because it's framed as an AI dependency. That's real progress. AI mandates create political cover for technical debt that was otherwise impossible to prioritise. Use it. Absolutely use it.

But calling it an "AI strategy" creates the wrong accountability structure downstream. When the pilot delays because of data problems — and it will — everyone acts surprised. The data team feels blamed for an AI failure. The AI team feels blocked by legacy infrastructure. Leadership wonders why the vendor's demo worked perfectly. Nobody wanted to be the person who said, in the first meeting, that the actual project was going to be a data project.

There's a deeper conceptual error here too. An AI strategy, in most organisations, is about model selection, use case prioritisation, governance frameworks, procurement decisions. These are real questions. But they exist downstream of a more fundamental question: do you have the data to make the model worth running? The answer in most banks is "partially, in some systems, with caveats." That's not a reason to stop — it's a reason to sequence correctly.

The banks that are making genuine progress on AI deployment aren't the ones with the most sophisticated AI strategies. They're the ones that treated their AI initiative as an accelerant for platform investment — where the AI use case created the business case for fixing the data pipelines that the use case depended on. The AI roadmap and the data roadmap run in parallel, with explicit dependencies tracked between them.

The ones still running pilots a year later are the ones that treated data as a pre-condition to be satisfied later.

The question worth asking at the start of any AI programme in financial services isn't "what can we build?" It's "what data do we actually have, and what condition is it in?" That question is less exciting. It tends to generate a spreadsheet rather than a strategy deck. But it's the question whose answer determines whether anything gets deployed.

AI is the business case. Data governance is the actual project.

This isn't pessimism about AI in financial services — I think the applications are real and the trajectory is clear. It's a request for sequencing honesty. The organisations that will have the most capable AI deployments in five years are the ones that used the current moment of urgency to fix the infrastructure that should have been fixed already, rather than building impressive demonstrations on top of foundations that weren't ready.

The thing your organisation keeps renaming without actually changing is usually not the strategy. It's the data.

---

P.S. The most useful reframe I've found: think of AI as a quality test for your data organisation. If you can't build the use case you want because of data problems, those problems existed before AI — you just didn't have a fast enough feedback loop to see them this clearly. AI is a mirror. What it shows you about your infrastructure is worth more than any single model.
