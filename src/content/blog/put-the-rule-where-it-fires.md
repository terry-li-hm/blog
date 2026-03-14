---
title: "Put the Rule Where It Fires"
description: "Documenting a rule is half a loop. The rule only works when it fires at the moment of decision — not when it sits in a file nobody reads."
pubDatetime: 2026-03-14T12:16:57.000Z
draft: false
tags: [systems-thinking, knowledge-management, ai-agents]
---

I spent a Saturday afternoon auditing my AI assistant's knowledge system. It has three layers: a rules file (loads every session), a memory file (gotchas and lessons learned), and skills (procedures that trigger in specific contexts). The rules file was 199 lines. The memory file was 152. Both growing, never shrinking.

The audit revealed something I should have seen earlier: half the entries were in the wrong place.

## The Pattern

When you learn a lesson — "always check X before doing Y" — the natural instinct is to write it down. A wiki page, a runbook, a README, a post-mortem action item. The lesson is captured. Box checked. Move on.

Then six months later, someone does Y without checking X. The lesson was documented. Nobody read the document at the moment it mattered.

This is the half-loop: capture without enforcement. The rule exists in storage but not at the point of decision.

## Where Rules Actually Work

A rule works when it fires at the decision point — not before, not after, not in a file someone might check.

In my system, "skills" are contextually triggered procedures. They load only when their trigger condition matches. A skill called `rector` fires when I start a coding task. A skill called `scrinium` fires when I'm about to save a lesson. The trigger is the mechanism. The content is secondary.

When I moved rules from the always-loaded files into the skills that govern the relevant behavior, the rules started working. Not because the content changed — because the *timing* changed. The rule about "delegate coding to free tools" sitting in a general rules file was ignored. The same rule inside the `rector` skill, which fires every time I start a coding task, was impossible to skip.

## The Principle Generalised

This isn't specific to AI systems. It applies everywhere rules try to influence behavior:

**Checklists work better than training.** A surgeon who "knows" to count sponges still misses one without the checklist. The checklist fires at the decision point (before closing). The training fires during onboarding (months earlier).

**Linters work better than style guides.** A 40-page coding style guide is documentation. A linter that blocks your commit is enforcement. Same rules, different timing.

**Pre-commit hooks work better than code review comments.** "Please don't commit secrets" in a wiki is a rule in storage. A hook that scans for API keys is a rule at the point of decision.

**Defaults work better than policies.** "We recommend 2FA" is a rule in a policy document. Making 2FA the default is a rule in the system. One requires the user to remember; the other requires them to actively opt out.

## The Audit Question

For any rule in your system, ask: **when does this fire?**

If the answer is "when someone reads the document" — that's a half-loop. The rule is captured but not enforced. It works exactly as often as people remember to check the document at the right moment, which is approximately never under pressure.

If the answer is "automatically, at the moment of decision" — that's a full loop. The rule is part of the workflow, not adjacent to it.

Documentation is where rules go to be forgotten. Triggers are where they go to work.

## The Cost of the Wrong Layer

Every rule in the wrong layer has two costs:

1. **It doesn't fire.** The lesson isn't learned — it's just stored. The same mistake happens again. Someone writes another post-mortem. The document gets longer.

2. **It wastes attention.** A rules file that loads every session, full of context-specific guidance, burns cognitive budget on things that don't apply right now. The important entries compete with the irrelevant ones for attention. The file grows. The signal-to-noise ratio drops. Eventually nobody reads it at all — which completes the irony.

The fix is migration, not accumulation. When you capture a lesson, the question isn't "where do I write this down?" It's "what fires at the moment this lesson matters?"

Put the rule where it fires. Everything else is theatre.
