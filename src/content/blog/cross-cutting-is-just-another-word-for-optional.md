---
title: "Cross-Cutting Is Just Another Word for Optional"
description: "In AI agent architecture, calling something a 'cross-cutting concern' without naming an owner and a gate is just a polite way of saying nobody owns it."
pubDatetime: 2026-03-12T09:14:32.000Z
draft: false
tags: [ai, architecture, engineering]
---

The four-layer model for AI agent systems is clean: interface, inference, orchestration, tooling. Clean enough that when someone asks where compliance logic lives, or where memory state gets managed, or who owns PII handling, the honest answer sounds reasonable — "it's cross-cutting, it applies across layers." And everyone nods, because it sounds like an answer.

It isn't.

"Cross-cutting" is the architectural equivalent of "someone will figure it out." When you tell a team that memory state is a cross-cutting concern without naming an owner and a gate, what you've actually told them is that nobody owns it until something breaks. In regulated environments, this is how audit findings get written. In unregulated ones, it's how you end up with a system that works in demos and fails quietly in production.

The fix isn't to add a fifth layer. That's the tempting move — compliance layer, governance layer, memory layer — but adding a layer makes compliance feel like a sequential step in a pipeline, something you pass through after inference and before tooling. That's wrong both architecturally and conceptually. Compliance isn't a stage. It's a condition of execution.

The right move is to name the gate at every boundary. Not a principle — a gate. At the seam between orchestration and tooling: who checks capability before the tool fires? At the seam between orchestration and inference: who catches prompt injections before the reasoning chain gets corrupted? At the seam between interface and orchestration: who validates the incoming request?

These gates aren't a fifth layer. Layers represent processing stages — inference is a stage, tooling is a stage. Gates represent constraints on transitions between stages. They're a different abstraction, and conflating them inflates the architecture diagram without clarifying the design. But here's the thing: the gate exists in production whether you name it or not. The choice isn't "layer or no layer." It's "named owner or nobody."

I ran this framing through a multi-model deliberation recently, mostly to stress-test whether the four-layer model actually held. The sharpest insight came from the first model to push back, before the others had weighed in. The argument was simple: if the orchestration layer can call a payment API without passing through a non-bypassable authorization check, eventually it will. Not by design — by deadline, by developer shortcut, by "we'll add that later." The architecture doesn't prevent it. Only a hard gate prevents it.

Four layers is still the right mental model. But the seams between them need to be designed, not inherited. "Cross-cutting" is not a design decision. It's a design deferral.
