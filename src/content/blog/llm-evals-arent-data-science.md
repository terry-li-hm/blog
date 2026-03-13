---
title: "LLM evals aren't data science"
description: "Evaluating LLM systems requires judgment, not statistics. That shifts who's qualified to do it — and where the gap is in most organisations."
pubDatetime: 2026-03-11T14:00:00.000Z
tags: ["ai-engineering", "evals", "consulting"]
---

Banks deploying AI think they need a data scientist to evaluate it. For the models they've historically built — the kind that output a credit score, a fraud probability, a risk classification — that's right. Precision, recall, ROC-AUC: these require labeled datasets, statistical literacy, and familiarity with model risk frameworks that treat accuracy as a mathematical property to be measured.

LLM systems don't work that way. And the evals don't either.

When you're evaluating whether a loan decline explanation is clear, legally compliant, and unlikely to confuse a customer, there's no ground-truth label sitting in a database. There's no curve to plot. What you have is a rubric — does this explanation reference the specific factor that caused the decline, avoid language that could imply discrimination, and include the applicant's right to appeal? — and a judge, human or LLM, that applies it.

Writing that rubric is prompt engineering, not statistics. Running it at scale is an API call, not a model training job. Reviewing the failures is reading comprehension, not mathematics.

The tooling has followed the shift. LLM-as-judge frameworks let you specify evaluation criteria in natural language and score responses automatically. Synthetic test generation replaces the labeled dataset problem — describe the scenario you want to probe in plain English and produce hundreds of variants without touching real customer data. Human review interfaces look more like content annotation tools than ML dashboards.

What this means for organisations is that the people best positioned to write good evals aren't necessarily the data scientists. They're the domain experts — credit analysts who know what a good lending decision looks like, compliance officers who can spot regulatory exposure in a model output, underwriters who can tell when an AI explanation would mislead a customer in ways that matter. These people have always had the judgment. What they lacked was a workflow that let them operationalise it without writing Python.

That workflow now exists. The hard part isn't technical.

Most AI teams in regulated industries haven't caught up to this yet. Data science groups are organised around the statistical model validation workflow and apply it to LLM systems by instinct, even when the metrics don't map cleanly. Compliance and risk functions assume evals are someone else's problem — too technical for them, not statistical enough to trigger existing model risk processes. The result is a gap where the systems go to production with informal testing at best.

The gap is the opportunity. An eval framework for an LLM system in a regulated context looks less like a machine learning experiment and more like an audit protocol: defined criteria, documented test cases, reproducible scoring, and a clear chain from results to deployment decision. That framing is legible to risk functions. It satisfies the spirit of model governance requirements even when the letter was written for a different kind of model. And it can be built, maintained, and interrogated by people who understand the domain, not just the technology.

The statistical era of AI evals isn't over — it's just no longer the whole story.
