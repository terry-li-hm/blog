---
title: "Bridge or Seed"
description: "Every skill you build is one of two things. Knowing which changes what you build next."
pubDatetime: 2026-03-23T11:47:47.000Z
draft: false
tags: [ai, agents, design]
---

A skill is tools, knowledge, and LLM judgment scoped to one action. That's the [anatomy](/posts/design-actions-not-actors). But why does a particular skill exist? There are only two reasons.

**A bridge** closes a gap between what the LLM does by default and what you actually need. The model hallucinates regulatory citations, so you build a skill that retrieves them first. The model forgets your deployment checklist, so you encode it. The model reviews code but misses your team's conventions, so you load them as context. Every bridge is a patch on a specific failure mode. Remove the failure mode and the bridge is unnecessary.

**A seed** is different. It captures a pattern worth keeping even if the LLM could do it perfectly without help. A weekly market synthesis skill. A code review workflow. An incident triage process. The LLM might handle any one instance fine. But the skill crystallises the *how* — and that crystallisation compounds. It can be versioned. Shared across a team. Composed into larger workflows. Ported to a different model. The pattern survives independently of any particular LLM, any particular person, any particular quarter.

Most teams only build bridges. They notice the LLM gets something wrong, they fix it with a prompt or a tool, and they move on. This works, but it's reactive. The skill library grows as a collection of patches, each one tethered to a specific model's weakness. Upgrade the model and half your bridges are obsolete.

Seeds compound differently. A well-captured pattern gets reused in contexts you didn't anticipate. "Document extraction" was built for KYC, but it turns out trade finance needs it too, and so does regulatory reporting. The seed didn't change. The soil did.

The question to ask before building anything: is this a bridge or a seed? Bridges are urgent but disposable. Seeds are patient but durable. Both are legitimate. But if your entire skill library is bridges, you're maintaining the LLM's weaknesses instead of building your own strengths.

The best skills start as bridges and become seeds. You patch a gap, and in patching it you discover a pattern that has value beyond the patch. The bridge was the excuse to look. The seed is what you found.

*Previously: [Design Actions, Not Actors](/posts/design-actions-not-actors)*
