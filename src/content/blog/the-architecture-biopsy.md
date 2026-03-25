---
title: "The Architecture Biopsy"
description: "A method for finding gaps in AI systems that architecture reviews miss. Force a naming constraint, and the breaks reveal what's missing."
pubDatetime: 2026-03-25T03:35:00.000Z
draft: false
tags: [consulting, ai, design]
---

Most AI architecture reviews ask: "Does the system do what it should?" The better question: "What is the system missing that it doesn't know it's missing?"

Traditional reviews check requirements against implementation. They find what's wrong. They don't find what's absent. The gaps that hurt most are the ones nobody thought to look for.

Here's a method that finds them mechanically.

Take every component in your AI system and force a biological name onto it from one level of biology -- cell biology. Not metaphorically. Literally force it. Your auth layer is a membrane. Your data pipeline is a metabolic pathway. Your LLM dependency is a symbiont. Your output API is exocytosis.

Some mappings fit easily. Those aren't interesting. The interesting ones are the mappings that break.

When I forced "secretory pathway" onto my output module, it broke. In cell biology, the secretory pathway has chaperones -- quality control proteins that check every protein before it leaves the cell. Misfolded proteins get rejected. My output module had no quality checks. Nothing verified what was being sent before it shipped. That's a gap no requirements doc would have caught, because nobody thought to require "check output before sending."

When I forced "proprioception" onto my monitoring tool, it broke. Cells sense gradients -- is tension increasing? Is shape changing? -- not static states. My monitoring dumped status reports. It told me what things were, not which direction they were moving. Now it logs readings over time and surfaces trends. "Token usage growing 15% per week" is more useful than "token usage is 847."

When I forced "germination" onto my batch processing check, it broke. Spores germinate when conditions are right -- nutrients, moisture, temperature -- not on a schedule. My overnight results sat in a queue until someone checked them in the morning. Now they surface when they're flagged as needing attention.

Three forced names. Three gaps found. Three features built. None of them were in any requirements document.

The method works because of a property of cell biology specifically: cells are the lowest level of biological organization where multiple information-processing solutions are coordinated into a self-maintaining system. Below cells, you get specialists (a ribosome translates, a proteasome degrades). Above cells, you get different problems (navigation, social coordination). Cells solve the exact problems AI systems solve: boundaries, adaptation, energy regulation, quality control, import, export, self-repair.

The practical version takes two hours. Whiteboard every component. Force cell-level names. Find the breaks. Rank the gaps. Build a roadmap.

The method also provides a maturity model for free. Every AI-powered component sits somewhere on a spectrum:

- Symbiont: depends on an external model or API. Vendor risk. Hard to audit.
- Reflex: crystallised into a deterministic rule. Testable. Auditable. Predictable.
- Unnecessary: the system restructured so the trigger can't occur. Risk eliminated.

Most AI systems have components stuck at "symbiont" that should be "reflex." The model is calling GPT-4 to classify emails that a regex could handle. The pipeline is using an LLM to format dates. The review step is asking a model to check something a unit test could verify.

Each transition from symbiont to reflex is a cost reduction, an audit improvement, and a resilience gain. The cell biology naming doesn't just find gaps -- it shows you which gaps are architectural debt versus genuine complexity that requires reasoning.

The uncomfortable finding: most AI systems use reasoning where reflexes would do. Not because reasoning is needed, but because nobody mapped which components actually require judgment and which are just habits from the prototype phase.

A cell runs thousands of simultaneous reactions without a brain. The brain only appears at a much higher level of biological complexity, when the problems genuinely demand it. The question for your AI system: which components actually need the brain, and which should have been reflexes all along?
