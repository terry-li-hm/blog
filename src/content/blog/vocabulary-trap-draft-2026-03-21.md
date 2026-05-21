---
title: "The Vocabulary Trap"
pubDatetime: 2026-03-21T00:00:00+08:00
description: "Framework nouns colonise your thinking within a week. The discipline is naming what you're building in the problem's language before touching the framework's vocabulary."
tags: [design, frameworks, abstraction]
status: draft
---

# The Vocabulary Trap

Every framework you adopt comes with a free gift: a set of nouns. React gives you components, hooks, and effects. Kubernetes gives you pods, services, and deployments. AI frameworks give you agents, skills, and tools. These are implementation containers — ways the framework organises its own internals. They are not your design vocabulary. But they will become your design vocabulary, quietly, within about a week.

The mechanism is simple. You pick a platform because it solves a real problem. You read the documentation, which is written entirely in the platform's terms. You start building. Within days, your design conversations have shifted from "what does this system need to do?" to "is this a component or a hook?" or "should this be a pod or a sidecar?" The framework's taxonomy has colonised your thinking, and you didn't notice the border crossing.

This is insidious precisely because it feels like expertise. Knowing that something should be a custom hook rather than a component feels like a design decision. It is — but it's a design decision within constraints you never consciously chose. You're rearranging furniture inside a room whose walls were drawn by someone else, and the rearrangement feels creative because you can't see the walls anymore.

The tell is consistent. If you're struggling to decide which framework category something belongs in — "is this an agent or a tool? A service or a middleware?" — the framework is thinking for you. The difficulty isn't classification. It's that the concept you're trying to express doesn't naturally fit any of the framework's categories, and rather than noticing this, you're trying to reshape the concept until it does. The framework is winning. It's reshaping your problem to match its solution space, and the cognitive effort of the reshaping feels like the cognitive effort of design.

I've watched this happen to myself repeatedly. I spent a week recently refactoring a system of CLI tools into what an AI framework would call "agents" and "skills." The framework gave me those nouns, and I dutifully tried to sort everything into them. The sorting was difficult because some things were clearly actions, not actors — but the framework had no noun for "action that doesn't belong to an agent." So I squinted, invented a thin wrapper, and made the actions look like agents. The design got worse, and I couldn't see why until I stepped back and asked: what does this system actually *do*? The answer had nothing to do with agents or skills. It had to do with verbs — gather, decide, route, present — that cut across every category the framework offered.

The counter-move fits in a sentence: design the abstraction first, pick the container second. But a sentence is not a practice. The discipline is to name what you're building in your own terms — in the problem's language — before touching the framework's vocabulary. What is this thing *for*? What does it need to *do*? What would you call it if you'd never heard of the framework? Only after you have those answers do you ask which framework construct is the least-bad container for the concept.

The mapping will often be imperfect. That's fine. A concept that maps cleanly to a framework primitive was probably a concept the framework was designed for. A concept that doesn't map cleanly is usually where the interesting design work lives. The imperfection is information: it tells you where your problem exceeds the framework's model of the world. Papering over that imperfection — reshaping the concept to fit — is where design debt accumulates.

This pattern isn't limited to software. Org charts do the same thing. You have a box labelled "Engineering" and a box labelled "Product," and when a new function emerges that spans both, the instinct is to squeeze it into one box rather than redesign the chart. The boxes were drawn for a previous version of the organisation, but they've become load-bearing walls in how people think about roles and responsibilities. Academic disciplines do it too — problems that span biology and economics get claimed by one department and studied with one department's tools, not because the problem is disciplinary but because the institution is.

Even natural language does this, arguably. The Sapir-Whorf hypothesis — the idea that the structure of your language shapes what you can think — is contested in linguistics but almost trivially true in engineering. The structure of your framework shapes what you can design. Not because it prevents you from building things outside its categories, but because things outside its categories are harder to *think of*. They have no name. They feel unnatural. You have to fight the vocabulary to conceive of them, and most people don't fight their vocabulary because they don't realise they're in a fight.

To be clear: the problem is not frameworks. Frameworks encode hard-won patterns and save enormous amounts of time. The practitioners who are most effective with a framework are usually the ones who understand its categories deeply. But they understand the categories as *containers* — as an implementation layer — not as the design itself. They are bilingual. They think in the problem's language and translate to the framework's language, and they know the translation is lossy. The translation step is where design actually happens. Skip it, and the framework designs your system for you.

This is, in the end, a specific case of a principle so well-known it's almost not worth stating: your tools shape your perception. Maslow's hammer. The map is not the territory. When you have Kubernetes, everything looks decomposable into services. When you have React, everything looks like a component tree. When you have an agent framework, everything looks like a multi-agent system.

Knowing this doesn't prevent it. That's the uncomfortable part. Awareness buys you maybe a half-second delay before the vocabulary takes hold — enough time to catch yourself, if you're paying attention. The discipline isn't in knowing the trap exists. It's in the habit of pausing, every time you reach for a framework noun, and asking: is this my word, or theirs?
