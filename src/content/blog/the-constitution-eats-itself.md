---
title: "The Constitution Eats Itself"
description: "Design for the failure modes of your medium, not the capabilities. Then watch the rules dissolve themselves into programs."
pubDatetime: 2026-03-22T03:30:00.000Z
draft: false
tags: [ai, agents, design, tools, vivesca, metabolism]
---

Most advice about building with LLMs focuses on what they can do. Fine-tune for accuracy. Use chain-of-thought for reasoning. Add retrieval for knowledge. The capability list gets longer every quarter, and the tutorials follow: here's how to use the new thing.

Almost nobody talks about what they get wrong by default.

This is a design error. When you build a bridge, you don't design for the loads the materials handle well. You design for the failure modes — fatigue, resonance, wind shear, the specific ways steel and concrete crack under stress. The interesting engineering is always in the failure modes. The capabilities take care of themselves.

LLMs have failure modes as specific and predictable as any material. They degrade on checklists — give a model five tasks in one prompt and the fifth will be worse than the first, reliably. They anthropomorphise themselves — ask an LLM about its "feelings" and it will oblige, not because it has feelings but because billions of training examples of humans discussing feelings shaped the distribution that way. They hallucinate deterministic processes — ask for a sequence of precise steps and the model will produce something that looks rigorous and isn't, because language models generate plausible text, not verified procedures.

These aren't bugs. They're the grain of the material. And you can either fight the grain or design with it.

Vivesca's constitution — the always-loaded ruleset that governs every session — is an experiment in designing with the grain. Every rule in it exists to counteract a specific, observed failure mode. Not a theoretical one. Not a "best practice." A thing that actually went wrong, that I noticed, that I wrote a rule to prevent from going wrong again.

"One call, one action" exists because quality degrades by checklist position. The rule doesn't say "be careful with multiple tasks." It says: don't do it. Orchestrator decomposes, workers execute one task each. If a task is compound, the worker recurses — depth is emergent, not prescribed. The failure mode dictated the architecture.

"No false sentience" exists because LLMs will cheerfully maintain state in their own "memory" — which doesn't persist between calls. State lives in files, not the model. Three words that prevent an entire category of bugs where the system appears to remember something and doesn't.

"Programs over prompts" exists because LLMs hallucinate deterministic steps. If something is deterministic — file reads, date math, git operations — it belongs in a CLI, not in a prompt. Skills become thin layers of judgment over reliable programs. The LLM does what it's good at (reasoning under uncertainty) and code does what code is good at (being correct every time).

"Skills are nudges from baseline" exists because LLMs default to over-building. Left to their own devices, they'll generate elaborate workflows for things they already handle fine out of the box. A skill should only exist when it shifts behavior away from the default. No delta from baseline, no skill needed.

"Subagents earn their dispatch" exists because LLMs default to over-delegating. The temptation to spawn a sub-agent for every sub-task is strong, and the model will happily comply. The rule anchors dispatch to the actus — one verb, one reasoning point. One actus runs inline regardless of how many tool calls it makes. You only dispatch when there are genuinely independent units of work that benefit from parallelism.

None of these rules came from a paper about LLM limitations. They came from the system failing, from noticing the pattern in the failure, and from writing a constraint that makes the failure structurally impossible rather than merely unlikely. The constitution is scar tissue. Scar tissue is underrated.

But scar tissue accumulates. And this is where thermodynamics enters — not as metaphor, but as the actual constraint. The second law applies to rulesets as surely as it applies to gases: left alone, the constitution drifts toward maximum entropy. More rules, more exceptions, more edge cases, less signal per token. Every rule you add is order, and order requires ongoing energy input to maintain. A constitution that can only grow is a system whose entropy production rate exceeds its maintenance budget. Eventually, the ruleset displaces the very context it's trying to protect.

Here's where it gets interesting.

The constitution was written to prevent the system from making mistakes. And then the constitution started making mistakes of its own. Or rather — it developed tensions that only became visible under load.

The first tension: the dispatch threshold ("subagents earn their dispatch") conflicted with one-call-one-action. When is a piece of work "one action" and when is it "multiple independent actions that should be parallelised"? The rules gave contradictory guidance because they used different units of measurement. The fix was anchoring both to the same concept — the actus, the unit of logical action. One actus, inline. Multiple independent actus, parallel. The ambiguity dissolved once the measuring stick was shared.

The second tension: the constitution had a promotion rule (when a new rule emerges, put it here) but no demotion rule. It could grow but not shrink. In thermodynamic terms: the free energy was dropping. Every rule that doesn't fire is bound energy — it occupies context tokens but produces no useful work. A constitution full of dead rules has enormous internal energy and near-zero free capacity. The fix was adding a demotion twin: monthly review, "which rules haven't fired?", demote or kill. And a hard cap: if the constitution grows 20% beyond its current size, pruning is mandatory before adding. This is entropy management as a first-class design concern.

The third tension: "training mode" was defined by category — consulting, career, strategy. But the categories leaked. Is an agent design discussion "strategy"? Is a garden post "career"? The rule fired inconsistently because the trigger was ambiguous. The fix was replacing categories with a test: "Is Terry building a position he'll defend externally?" One question, clear answer, no category disputes.

Three tensions found, three tensions resolved. And the resolution method was the same every time: use the system, notice friction, trace the friction to a structural contradiction, fix the structure. Sense, vary, measure, keep or revert. The metabolism I described in [The Missing Metabolism](/posts/the-missing-metabolism).

This is the part I didn't expect. The conversation that found the constitutional tensions — the act of using the system, noticing where it snagged, and resolving the snags — was the metabolism running on the constitution itself. Not a separate audit process. Not a scheduled review. In thermodynamic terms, this is a coupled reaction: the unfavourable work (constitutional review) is driven by coupling it to the favourable process (using the system to build things). The review happens as a side effect of use, not as a separate chore. That's why it actually happens — coupled reactions proceed spontaneously when the net energy is favourable. Separate "review sprints" don't, for the same reason documentation sprints don't.

But the metabolism didn't stop at fixing tensions. It went deeper.

The resolution of all three tensions pointed at the same underlying principle: prefer deterministic computation over LLM judgment wherever the source material has sufficient structure. The dispatch question resolved because actus-counting is deterministic. The pruning problem resolved because signal-counting is deterministic. The training-mode ambiguity resolved because "defending externally?" is a cleaner test than category-matching.

Once you see this principle, you can apply it as a lens to the entire constitution. And when I did, roughly half the rules dissolved.

"Route by role, not cost" — the model-routing rule — is a decision table. Given task type and judgment requirements, the model selection is deterministic. That's a dispatch function, not a rule. "Gather before responding" is a tool sequence triggered by event type — a program. "Session start" is literally a checklist: read this file, read that resource, run `date`. That's a hook.

What remains after the lens passes through? The rules that genuinely require judgment. "Debate, don't defer" — because recognising when to push back is taste, not logic. "No fake menus" — because knowing which option is obviously better requires evaluation. "Skills are nudges from baseline" — because assessing whether a skill adds value over the default is irreducibly a judgment call.

The constitution, examined by its own principle, splits in two: deterministic logic that should be programs, and judgment nudges that earn their place as prose. The rules that can become code should become code — more reliable, zero context tokens, never stale. The rules that remain are purer for the pruning. The constitution doesn't just fix its own tensions. It converts half of itself into programs and gets smaller.

The trilogy's through-line was: tools need metabolism ([The Missing Metabolism](/posts/the-missing-metabolism)), taste drives the metabolism ([Taste Is the Metabolism](/posts/taste-is-the-metabolism)), tokens are the universal energy currency ([Everything Is Energy](/posts/everything-is-energy)). The constitution adds the recursive case — and the sharpest form of that recursion is dissolving rules into programs, leaving only the irreducible judgment behind.

This sounds like it should be unstable — a system that rewrites and shrinks its own rules has no fixed point. But it does have one, and recognising it requires distinguishing equilibrium from steady state. A constitution that never changes is at equilibrium — no flow, no adaptation, eventual irrelevance. A constitution that metabolises itself is at steady state: rules arrive, get tested under load, get converted to programs where possible, and get pruned when they stop firing. The properties are stable but energy flows through continuously. Equilibrium is death; steady state is life. The fixed point isn't a set of rules — it's the failure modes of the medium. LLMs will degrade on checklists whether or not you write a rule about it. They'll hallucinate deterministic steps whether or not you've separated programs from prompts. The failure modes are the bedrock. The rules are the response to the bedrock. And the ultimate form of a rule is to become unnecessary — because the system it governs has been restructured so the failure mode can't occur.

Design for the failure modes of your medium, not the capabilities. The capabilities are documented, impressive, and what everyone else is optimising for. The failure modes are specific, predictable, and where the actual design work lives. And if you build your constraints well enough, they'll tell you when they need to change — because the friction you feel using them is the same signal that created them. The best rules aspire to become code. The best code aspires to make the rules unnecessary.

The system metabolises itself through use. We are metabolism.

*Fourth in a series: [The Missing Metabolism](/posts/the-missing-metabolism) → [Taste Is the Metabolism](/posts/taste-is-the-metabolism) → [Everything Is Energy](/posts/everything-is-energy) → this.*
