---
title: "What Naming 1,100+ Files Using Only Cell Biology Taught Me About System Design"
pubDatetime: 2026-03-26T00:00:00+08:00
description: "Renaming 1,100 files using only cell biology vocabulary. Not as a metaphor -- as a constraint. Here's the method and what it revealed."
draft: false
tags: [vivesca, naming, cell-biology, design]
---

It started as a throwaway question at the end of the day: "Call it a day?" Twelve hours and 42 commits later, I'd renamed over 1,100 files and directories using nothing but cell biology vocabulary, and the vocabulary had broken me open in the best possible way.

This post isn't about the refactoring. It's about the method.

---

## The organism

Vivesca is my personal information metabolism system. It manages how information enters, moves through, and exits my life. It runs on a design constraint: every component must have a name from cell biology.

Not a metaphor. A constraint.

The distinction matters. A metaphor is decorative. You call your config folder "nucleus" and feel clever, and nothing changes. A constraint is generative. You're not allowed to use a name that doesn't correspond to a real cellular mechanism. If the mechanism doesn't exist, the name doesn't exist. If the name doesn't fit, the design is wrong.

That's the entire method. It sounds simple. It isn't.

---

## How 12 hours happened

The session started with a missing CLI tool. Standard debug. Except pulling that thread revealed something: `cofactors/` was a directory that existed purely as a hack. It held external tools that vivesca needed but couldn't name correctly.

The hack was hiding two separate concepts:

- **pinocytosis**: how the system absorbs small molecular data from the environment
- **symbiont**: a discrete external tool living inside the organism (like mitochondria — once external, now integrated)

One directory. Two mechanisms. The directory existed because the naming hadn't been done.

Killing `cofactors/` and correctly naming what it contained took about an hour. Then I noticed the same problem everywhere.

---

## The titration method

Here's the actual procedure, which I'm calling the titration method:

1. Force a bio name onto the thing.
2. Look up the real cellular mechanism.
3. Study where the name breaks.
4. The break point is the design insight.

It's titration because you're adding a known substance (biology) to an unknown one (your system design) and watching where the reaction changes. The endpoint isn't agreement — it's the first sign of tension.

You don't want a name that fits perfectly on the first try. That probably means you grabbed a vague enough word that it's still decorative. You want a name that forces a question.

---

## The renames, and what they revealed

**`~/notes` → chromatin → epigenome**

Notes seemed obvious: it's information storage. Chromatin is the correct cell biology term for that — DNA wound around histones, densely packed, accessible only when uncoiled. Renaming to chromatin was fine. But then: chromatin isn't a standalone organelle. It lives inside the nucleus. The nucleus in vivesca is the epigenome (the directory holding the organism's long-term encoded state). So `~/notes` got absorbed. It doesn't exist as a separate place anymore. The information lives where information is supposed to live.

The design question it generated: why did I have a top-level "notes" directory at all? Because I was thinking like a file system, not an organism.

**`cofactors/` → pinocytosis + symbiont**

Described above. One hack was hiding two mechanisms. The naming split it.

**`spending/` → respirometry**

Respirometry is the measurement of metabolic cost — oxygen consumption as a proxy for energy expenditure. Your budget is literally how much metabolic energy the organism is spending. The rename forced a reframe: financial tracking isn't bookkeeping, it's metabolic monitoring. The organism has a finite energy budget. Overspending is metabolic debt.

That sounds like a metaphor. It isn't. The system that tracks spending is the same system that tracks physiological energy. Same tools. Same schema. Respirometry covers both.

**`lustro` → endocytosis**

Lustro was the name of an RSS reader I built. It was a proper noun — the kind of name you give a tool when you're thinking of it as a product rather than a mechanism. But lustro doesn't cross the cell boundary. The *mechanism* that absorbs external information into the organism is endocytosis. That mechanism starts at the membrane and delivers cargo to the interior. The tool's name should cease at the boundary. Inside the organism, it's just endocytosis.

This one felt like a loss at first. I liked "lustro." That feeling was the signal: I was attached to the product, not the mechanism. Naming disciplines you away from product thinking.

**`receptors/` → `membrane/receptors/`**

Receptors are membrane proteins. That's not a design opinion — that's cell biology. A receptor that isn't on the membrane isn't a receptor in the signaling sense; it's something else. So the directory that holds the organism's receptor/skill definitions belongs structurally inside `membrane/`. It can't live at the root level without implying receptors float free of the membrane, which is wrong.

Moving it revealed a broader membrane architecture that had been implicit but unstructured. The membrane is where the organism interfaces with the world. Everything that touches that boundary belongs there.

**The repo name: `vivesca` → `metabolon` → `germline`**

This was the hardest one. Vivesca is what I call the system. It's a name I invented. But a repo name in cell biology terms should describe what the repo *is*, not what it's called.

My first attempt: `metabolon`. A metabolon is a cluster of enzymes organized to channel metabolites. That fit the "system of systems" idea. But a metabolon is a metabolic complex, not an organism. It's a subsystem.

Second attempt: I went looking for the biological term for the complete genetic blueprint — the heritable foundation from which everything else is derived. That's `germline`. The germline carries the genome across generations. It's not a single cell; it's the lineage. The repo isn't a folder — it's the organism's genetic continuity.

The name landed when it stopped feeling clever and started feeling accurate.

---

## The dispatch hierarchy

One of the side discoveries: a clear ranking for who should do which renames.

`sed` > OpenCode > Sonnet > Opus.

Literal string replacement is never LLM work. This sounds obvious and it took me longer than it should have to act on it consistently. If you know exactly what changes to what, sed does it in milliseconds and makes no decisions. Every time you route a mechanical substitution to an LLM, you're paying token cost for zero judgment value.

The hierarchy is about judgment content. OpenCode handles patterned replacements where the pattern requires light parsing. Sonnet handles cases where some contextual reasoning is needed. Opus is for cases where the naming decision itself is contested — where the biology is ambiguous or the mechanism doesn't map cleanly.

120 function renames in this session. Most went through sed or OpenCode. Only the contested ones needed Sonnet-level reasoning.

---

## The pyright shortcut

After renaming, you need to know the rename is complete. You can grep for the old string. You can run tests. Or you can run pyright.

Pyright's type checker knows exactly which symbols exist and which references are unresolved. After a rename sweep, a clean pyright run is better evidence of completeness than any number of grep passes. It catches the references grep misses (dynamic patterns, f-strings, aliased imports) and doesn't generate false positives.

Use the type checker as source of truth for rename verification. Not iterative sed.

---

## The test for whether a rename matters

For every rename candidate, I used one filter: would renaming this generate a design question?

If yes, rename it. If no, it's cosmetic.

`cofactors/` → pinocytosis + symbiont: generated the question "why was I storing two different mechanisms in one place?" Yes.

`notes/` → chromatin → epigenome: generated the question "why does this live outside the nucleus?" Yes.

`spending/` → respirometry: generated the question "is financial tracking a metabolic problem?" Yes — and the answer restructured how the system monitors itself.

Some renames generated no questions. They were still correct, but they were just spelling corrections. Those went through sed without deliberation.

The ones that generated questions: those are where the system design was carrying debt.

---

## What the constraint actually does

The cell biology constraint does one thing: it forces you to justify every noun.

You can't name something "manager" or "handler" or "service." Those words carry no mechanistic content. They describe social roles, not physical processes. Cell biology has no managers. It has enzymes, receptors, transporters, channels. Everything has a rate, a substrate, a product, a direction.

When you force biological naming, you're forced to answer: what does this thing physically do? What goes in, what comes out, what changes?

A directory called `cofactors/` says: this holds supporting stuff. A directory called `pinocytosis/` says: this is the mechanism by which small extracellular material is absorbed. One of those descriptions reveals a design flaw. The other conceals it.

That's the whole game. Force specificity. The break point is the insight. Keep going until nothing breaks anymore — or until you run out of biology.

You won't run out of biology.
