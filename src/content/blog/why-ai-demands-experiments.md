---
title: "Why AI Demands Experiments"
description: "Most technology decisions can be reasoned through. AI solution design can't — the domain is too empirical, too fast-moving, and too non-linear for theory alone."
pubDatetime: 2026-03-17T01:52:58.000Z
draft: false
tags: [ai, consulting, methodology]
---

In most technology domains, theory predicts practice reasonably well. You can reason about database schema design, predict the performance characteristics of a caching layer, evaluate whether a microservice split makes sense — all before writing a line of code. The gap between design and outcome is manageable.

AI is different, and the difference is structural, not superficial.

You cannot derive from first principles whether GPT-4 or Claude will be better at extracting regulatory clauses from banking circulars. You cannot predict whether a RAG pipeline with 512-token chunks will outperform one with 1024-token chunks on your specific corpus. You cannot reason your way to the right prompt for a classification task by thinking really hard about it. You have to try it. The theory doesn't predict the practice because the systems are too complex for analytical solutions — the only reliable way to know what works is to run it against your data and measure.

This isn't a temporary state of affairs that better understanding will fix. It's inherent to how these systems work. Neural networks are, by construction, functions too complex to reason about analytically. Their behavior emerges from billions of parameter interactions that no human can trace. This is what makes them powerful — they learn patterns we can't specify — and it's also what makes them impossible to evaluate theoretically. The complexity that gives them capability is the same complexity that demands empirical validation.

The fast-moving nature of the field makes this worse. Techniques that were best practice six months ago may be obsolete today. A model that was state-of-the-art when you started your project may be outperformed by something released while you were building. The only knowledge with a reliable shelf life is empirical knowledge about your specific use case — and even that needs periodic re-validation as the underlying models change. Everything else decays.

Then there's the non-linearity problem. In traditional software, small changes produce proportionally small effects. Change a database index, get a predictable performance improvement. In AI systems, small changes in prompts, chunking strategies, model versions, or temperature settings produce unpredictably large differences in output quality. A single word change in a system prompt can flip a classifier's accuracy by twenty percentage points. You cannot debug this through reasoning. You can only debug it through measurement.

All of this points in one direction: AI solution design decisions should be made empirically, not theoretically. When someone asks "should we use AI for this use case?" the honest answer is "let's test it and find out," not "based on my experience, yes." When choosing between architectures — RAG vs fine-tuning, single-agent vs multi-agent, proprietary vs open-source — the correct methodology is to build cheap prototypes, define evaluation criteria, measure against real data, and let the evidence decide.

This is not how most AI consulting works. Most AI consulting works like this: an expert with experience forms an opinion, presents it with conviction and a well-designed slide deck, and the client trusts the expert's judgment. This worked tolerably well in traditional technology consulting because theory predicted practice well enough that expert intuition was a reliable shortcut. In AI, expert intuition is unreliable for the reasons above — the systems are too complex, too fast-moving, and too non-linear for anyone's intuition to consistently predict what will work.

The uncomfortable implication is that AI consulting should look less like strategy consulting and more like clinical trials. Not in the bureaucratic sense — nobody needs a twelve-month double-blind study to choose a chunking strategy. But in the epistemological sense: form a hypothesis, design a test, run it, measure the outcome, update your belief. The test doesn't need to be expensive or slow. A two-day spike with a clear evaluation metric often produces more reliable insight than a two-week analysis.

There are boundaries to this, and they matter. Not every AI decision is empirical. "Should we invest in AI at all?" is a strategy question. "Which cloud provider should we use?" is a procurement question. "How do we govern AI risk?" is a policy question. The empirical approach fits specifically where you're asking "does this AI system actually work for our data and our users?" That's the sweet spot — and it's also the question where getting it wrong is most expensive.

In regulated industries like banking, the case is even stronger. Regulators increasingly want evidence that AI systems work as claimed — not assertions, not vendor benchmarks, but evidence from your data, your context, your edge cases. The empirical approach isn't just methodologically better; it produces the documentation that compliance needs. The experiment log is the audit trail.

P.S. There's a irony in writing this post from a conversation with an AI that I can't fully predict or explain. I asked Claude about planning, ended up mining five reference skills about meta-cognition, and the thread that connected them all was: you have to test things, because reasoning about complex systems from the outside doesn't work. The medium is the message.
