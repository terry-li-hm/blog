---
title: "The Semantic Consumer"
description: "Traditional computing has two consumers: humans who look and programs that parse. LLMs are a third kind — they read."
pubDatetime: 2026-03-21T10:39:10.000Z
draft: false
tags: [ai, design, tools]
---

I was naming a CLI flag and accidentally discovered a layer of computing that doesn't have a name yet.

The flag controlled output format. `--json` for machines, `--human` for people. Simple. But the primary consumer of this CLI was neither machine nor person — it was an LLM. And neither format was right. JSON wastes tokens on syntax the LLM doesn't need. Human-readable wastes tokens on colours and alignment the LLM can't see. The LLM wanted something in between: compact, unambiguous, no decoration. Just meaning.

That's when the three-way split became visible. Traditional computing has exactly two consumers. Programs are syntactic consumers — they need the right format. `json.loads()` fails on a missing comma. The program doesn't understand the data; it parses it. Structure is everything, meaning is someone else's problem. Humans are perceptual consumers — they need visual affordances. Colours, alignment, whitespace, hierarchy. The human understands the data but needs it presented in a way their visual system can process. The entire field of UI design exists because humans consume through perception first, comprehension second.

LLMs are neither. They don't need format — they handle ambiguity, missing structure, inconsistent delimiters. Hand an LLM `repo:officina dirty M bin/legatum` and it understands this as well as a human reading a pretty-printed table. But they also don't need presentation — they're not looking at anything. No eyes, no visual cortex, no need for the careful spatial arrangements that make information scannable to a human.

What LLMs need is meaning. They are semantic consumers. Give them the right information in any reasonable shape, and they comprehend it. They are the first consumers in computing history that can take unstructured input and reliably extract structured understanding. Every previous consumer needed either a schema or a screen. The semantic consumer needs neither.

This has an immediate practical consequence that nobody seems to have noticed. Every CLI, every API, every output format was designed for one of two consumers: programs or people. Now there's a third, and it's rapidly becoming the primary one. When an LLM orchestrates your tools, the tool output goes to the LLM first, and to a human maybe never. The default output format should be optimised for the most common consumer, and increasingly that consumer is semantic.

The right design, once you see it, is obvious. Default output is semantic: compact, meaning-dense, no formatting overhead. `--syntactic` gives you JSON for when code needs to parse it. `--perceptual` gives you the pretty version for when a human is looking. The flags name the exceptions because the primary consumer needs no flag.

What strikes me about this is how invisible the semantic layer has been. We've had LLMs consuming tool output for years now, and the convention is still to output JSON and let the LLM deal with the verbosity, or output human-readable text and let the LLM deal with the decoration. Neither is designed for how LLMs actually consume information. We're feeding our most common consumer through formats designed for everyone else.

The broader pattern might be this: every time a genuinely new kind of consumer appears, there's a period where we force it to use interfaces designed for the previous consumers. Early GUIs were text interfaces with windows drawn around them. Early mobile apps were desktop interfaces shrunk to fit. Early voice interfaces were text interfaces read aloud. Each time, the breakthrough came when someone designed for the new consumer's actual capabilities instead of shoehorning it into the old paradigm.

We're in the shoehorning phase with LLMs. JSON is a syntactic interface that LLMs tolerate. Pretty-printed tables are a perceptual interface that LLMs ignore. The semantic interface — designed for consumers that understand meaning without needing format or presentation — is what comes next.

I don't know what that looks like at scale. For a CLI, it's compact text with consistent key-value patterns. For an API, it might be something that hasn't been invented yet — a format that carries meaning-density rather than structural guarantees. What I do know is that the default should serve the primary consumer, and for a growing number of systems, the primary consumer is no longer looking at the output and no longer parsing it. It's reading it.

*See also: [The Missing Metabolism](/posts/the-missing-metabolism) — why the tools LLMs consume should evolve continuously.*
