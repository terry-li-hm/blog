---
title: "Software Engineering Principles for AI Instruction Files"
description: >-
  LLM instruction files are code. They have the same failure modes — with
  one interesting twist that changes everything.
pubDatetime: 2026-03-06T20:00:00.000Z
draft: false
tags:
  - prompt-engineering
  - ai-agents
  - software-engineering
  - architecture
---

LLM instruction files are code. They have the same failure modes as code, and they respond to the same design principles. The only engineers who don't notice this are the ones who haven't stared at a three-thousand-word CLAUDE.md long enough to see the god function hiding inside it.

The single responsibility principle applies directly. An instruction file that tries to define personality, establish workflow, specify output format, enumerate edge cases, and handle error recovery in a single document is doing too many things. Each responsibility creates its own failure mode; when something breaks, the all-in-one document makes it hard to isolate which responsibility is misbehaving. Decomposing into separate skill files — one for each class of behavior — makes the failure surface smaller and the fix obvious.

Don't repeat yourself. Prompt engineering is full of drift: the same rule stated in three different places, evolving slightly each time the author revisits one copy but not the others. When an instruction and an example contradict each other, the language model follows the example. This is the interesting twist: in prose instruction files, the example is the specification. You can write "always use ISO date format" in the rules section and "2026-3-6" in the example section and the model will use the example format. DRY in prompt engineering means keeping examples and rules consistent, and treating the example as the authoritative version.

Fail states need specification. Traditional code fails with exceptions, error codes, or explicit return values that the caller can handle. LLM instruction files fail silently — the model produces something, just not the something you wanted, with no error to catch. Good instruction files specify what the model should do in the cases the happy path doesn't cover: ambiguous input, missing information, conflicting constraints. "If the user's request is ambiguous between X and Y, ask one clarifying question before proceeding" is a fail-state specification. Without it, the model resolves the ambiguity on its own, usually inconsistently.

Abstraction and composition work, but without typed interfaces. You can write a skill that calls another skill — "follow the judex skill to validate this before continuing" — and the model will do it without the need for the calling skill to specify the other skill's signature. This is powerful but fragile in ways that typed function calls aren't: the called skill needs to be present, the calling context needs to be sufficient for the called skill to work, and there's no compiler catching the mismatches. Composition in prompt engineering requires careful testing of the composed behavior, not just the components individually.

The most consistent failure mode I've seen in mature instruction file systems is what you'd call the god function in code: one massive file that's grown organically over months, containing everything, with rules that contradict each other in edge cases that nobody anticipated when they were added. The solution is the same as in code: periodic refactoring, decomposition into smaller units, and ruthless deletion of rules that are never triggered. Instruction files that aren't exercised don't maintain themselves — they accumulate as debt.

One design principle that doesn't have a clean analog in traditional software: the instruction file is read by the model before each interaction, not compiled and deployed. This means changes take effect immediately, and it means the model's interpretation of the file is the runtime behavior. Two instruction files that look similar to a human can produce very different behaviors depending on how the model parses ambiguous phrases. The testing methodology for instruction files is therefore behavioral — observe the output across a range of inputs — not static analysis.

The craft is young. Most teams who've built substantial LLM systems have arrived at some version of these principles empirically, usually after enough painful debugging to make the principles obvious in retrospect. Prompt engineering is growing up into prompt architecture. The engineers who recognise the software engineering parallels will build more maintainable systems than the ones who treat instruction files as pure natural language, exempt from the disciplines that apply to code.

---

P.S. The most reliable way to find the god function in your instruction file: count how many distinct things would break if you deleted it entirely. If the answer is "everything," it's doing too many things. Good instruction files are composable — each one handles its scope, and the combination handles the full system.
