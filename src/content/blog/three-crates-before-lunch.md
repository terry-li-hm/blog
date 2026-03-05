---
title: "Three Crates Before Lunch"
description: >-
  I published three Rust CLI tools to crates.io before noon — none existed at
  breakfast. The interesting part isn't the speed. It's that the bottleneck moved.
pubDatetime: 2026-03-06T17:00:00.000Z
draft: false
tags:
  - ai
  - engineering
  - rust
  - claude-code
  - building
vault_notes:
  - "LinkedIn Content Ideas"
---

A few weeks ago I published two Rust CLI tools to crates.io before lunch. Neither existed when I woke up. A few days later, a third. I'm not leading with this as a productivity brag — the interesting part isn't the speed. It's that the bottleneck moved.

The three tools: an Oura Ring health data CLI that surfaces sleep, readiness, and HRV from the terminal; a Perplexity API wrapper with cost tracking and usage logging; and a search tool for AI chat history. Different problems, different APIs, different Rust crates involved. Each required actual debugging — Oura's API has inconsistent date semantics across different endpoints; Perplexity's reasoning model wraps output in thinking tags that have to be stripped; the chat history search required handling JSONL formats I hadn't seen before.

The AI didn't just generate code. It chose Rust — not because I asked for it, but because single-binary distribution was the right answer for CLI tools that need to run on multiple machines without dependency management. That's a design decision, not a typing decision. It also debugged the Oura date semantics by actually reading the API documentation and comparing endpoint behaviors, which is what a careful junior developer would do, not what "autocomplete on steroids" would do.

The thing that's changed is that writing code used to be the constraint. I had ideas for these tools before AI-assisted coding was viable. The ideas weren't the bottleneck — execution was. Now execution isn't the bottleneck either. What remains is: knowing what to build, making good design decisions, and being able to recognize when the output is wrong.

That last one is worth dwelling on. The Oura date bug took real debugging. Without understanding what the code was supposed to do and being able to read the API response, I wouldn't have caught it. The AI didn't hallucinate — it implemented correctly against the documentation, and the documentation was inconsistent with itself. Catching that required someone who understood the domain well enough to notice the data looked wrong. The human became product owner and QA, not typist.

The implication for how we think about AI engineering isn't "you'll be replaced by AI." It's that the skills that remain valuable are shifting. Understanding domains deeply enough to know when output is wrong. Making design decisions that shape what gets built and why. Evaluating tradeoffs between approaches when the AI presents three options. These are judgment skills, not execution skills — and they've always been the more interesting part of engineering.

The bottleneck moved. That's the thing worth paying attention to.

---

P.S. The tools are at crates.io/crates/oura-cli, crates.io/crates/pplx, and crates.io/crates/resurface if you want to poke at the code. All open source.
