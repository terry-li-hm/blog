---
title: "What LLMs Don't Volunteer"
description: "When you mine knowledge from an LLM, certain types come easily. Others are systematically absent. A taxonomy reveals the blind spots."
pubDatetime: 2026-03-17T03:58:28.000Z
draft: false
tags: [ai, heuristics, knowledge-management]
---

I've been [mining knowledge from LLMs](/posts/mining-your-llm) — interviewing models about topics like planning, debugging, and evaluation, then distilling the output into permanent reference files. After seven of these mining sessions, I noticed something: the model naturally volunteers certain *types* of knowledge and consistently underrepresents others.

To test this, I catalogued [ten types of actionable knowledge](/posts/ten-types-of-actionable-knowledge) — rules, checklists, if-then triggers, distinctions, anti-patterns, spectrums, ordering, signals, defaults-with-override, and reframes. Then I audited what the mines produced *before* I had this vocabulary.

The pattern was clear.

**What LLMs volunteer easily:**
- **Anti-patterns** — failure modes, what can go wrong. Every mine produced a detailed failure table without prompting. Models love enumerating ways things break.
- **Distinctions** — "X is not Y." Essential vs accidental complexity, log vs insight, vanity vs diagnostic metrics. Models are good at drawing boundaries between concepts.
- **Reframes** — "Think of it as state transfer, not documentation." Models excel at offering a different angle on a familiar concept.

**What LLMs underrepresent:**
- **Signals** — "What should I *notice* that tells me something is happening?" This requires pattern recognition in practice, not conceptual reasoning. Models can describe signals when asked, but don't volunteer them.
- **If-then triggers** — "When you see X, do Y." Conditional action rules. Models prefer to explain *why* something matters over telling you *when to act on it*.
- **Defaults-with-override** — "Always do X, unless Y." Rules with explicit escape clauses. Models tend toward either unconditional rules or "it depends" hedging — the middle ground of "here's the default, here's when to break it" is underrepresented.

This maps onto a broader asymmetry. LLMs are trained on text that explains, analyses, and categorises. They're not trained on text that says "at this moment, notice this, then do that." The *conceptual* layer is well-represented in training data. The *operational* layer — when to act, what to watch for, when the rule doesn't apply — is mostly tacit knowledge that practitioners carry in their heads and rarely write down.

The practical implication: when mining an LLM, don't stop at the first answer. The natural output will be heavy on frameworks and light on triggers. Push specifically for: "When would I notice this is happening?" and "What should I do the moment I see it?" and "When does this rule break?" Those are the types the model knows but won't volunteer.

The deeper implication: this is probably true of human experts too. Ask a doctor about a diagnosis and you'll get a framework. Ask "what's the thing you notice in the first three seconds that tells you this is serious?" and you'll get something far more valuable — but they won't volunteer it unprompted, because that knowledge feels too obvious to mention.

The best knowledge — the kind that changes what you do tomorrow — is precisely the kind that feels too operational to articulate. Whether you're mining an LLM or interviewing an expert, you have to ask past the explanation and into the action.
