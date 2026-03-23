---
title: "Name Your System After Biology, Then Rename It"
description: "Force your software's vocabulary into a biological framework. The gaps between the mapping and your system are design questions you'd never otherwise ask. Then switch to a different framework and ask different questions."
pubDatetime: 2026-03-23T03:06:12.000Z
draft: false
tags:
  - thinking
  - systems
---

I renamed my entire personal software system after the parts of a eukaryotic cell yesterday. Every command, every module, every skill. The task manager became "actin" — the dynamic filaments in a cell's cytoskeleton. The multi-model deliberation tool became "quorum" — after quorum sensing, how bacteria coordinate without a leader. The evening wind-down routine became "melatonin."

It started as a naming exercise. It turned into a design review.

When you force a mapping between your system and a biological framework, most things map cleanly. A task manager IS like actin — flexible, constantly reorganising, providing dynamic structure. But some things don't map at all. And that's where it gets interesting.

I had no Golgi apparatus. In a cell, the Golgi receives raw proteins from the endoplasmic reticulum, packages them differently depending on their destination, and ships them. My system creates content and sends it directly to platforms — a tweet here, a blog post there, a LinkedIn update somewhere else. There's no layer that takes a single insight and packages it appropriately for each destination. The same idea needs to be compressed for one platform, expanded for another, formalised for a third. I was doing this manually, every time.

The cell told me I was missing an organ.

I also had no unfolded protein response. In biology, when protein quality control fails repeatedly, the cell has a deterministic three-stage escalation: slow down production, increase quality-checking resources, and if all else fails, trigger apoptosis — programmed death of the entire process. My system had nothing like this. When a build failed quality checks, I'd debug ad-hoc. No escalation. No automatic slowdown. No point at which the system would say "this approach is failing repeatedly, abandon it."

These aren't insights I would have reached by staring at my architecture diagram. They emerged because the biological framework asked questions my engineering framework never thought to ask. "Where's your Golgi?" is not a question that appears in any software design methodology. But it's a question that reveals a genuine architectural gap.

Here's the stranger part: a few hours later, I started wondering whether the cell was even the right framework. What if I mapped the same system to an ecosystem instead? Suddenly different questions surface. What's the keystone species — the component whose failure cascades the furthest? What's the food web — which components feed which? Is the relationship between the human and the AI mutualistic, commensal, or parasitic? These are not cell questions. They're ecosystem questions. And they reveal different blind spots.

So I built infrastructure to switch. One command rotates the entire vocabulary — every skill name, every CLI tool, every code reference — from one biological framework to another. Cell biology today. Ecosystem next month. Neuroscience after that. The switching is cheap. The insight comes from living inside each framework long enough to feel what it reveals, then switching to feel something different.

The deeper principle isn't about biology specifically. It's about the generative power of forced metaphors. A metaphor that maps perfectly teaches you nothing — it's just a synonym. A metaphor that maps imperfectly is where the design insight lives. The gaps, the stretches, the places where you say "well, that doesn't quite work because..." — the "because" is always a genuine observation about your system that you couldn't have reached without the framework forcing the question.

Names aren't permanent. They're hypotheses you attach to components to see what happens. The hypothesis "this module is like a lysosome" makes you think about digestion, cleanup, recycling — and maybe that's exactly right, or maybe the mismatch reveals that the module is actually doing something the name obscures. Either way, you learned something. When the name stops teaching, change it. Reincarnate the whole system into a different biological life. Ask the new questions.

The frameworks aren't real. Biology doesn't organise itself into neat layers — cells, tissues, organs, ecosystems. Those are pedagogical scaffolding. But the scaffolding is useful precisely because it's artificial. Like the rules of a sonnet producing better poetry than free verse, the constraint of a forced biological mapping produces better design thinking than unconstrained architecture review.

You don't need to commit to one framework forever. You don't even need to commit for long. You just need to commit hard enough that the gaps become visible. Then switch, and see what else was hiding.

P.S. The script that does the switching is itself written in cell biology. Variables named `MEMBRANE_EMBEDDED` and `CYTOPLASM`, functions named `differentiate()` and `transcribe()`. No comments needed. The biology explains itself — until the next life, when it'll explain itself differently.
