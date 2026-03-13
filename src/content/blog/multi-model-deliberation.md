---
title: "The Failure Mode of AI Advice Isn't Hallucination"
description: >-
  The failure mode of AI advice isn't hallucination. It's that it agrees with
  you. Here's the architecture that fixes it.
pubDatetime: 2026-03-06T18:00:00.000Z
tags:
  - ai
  - decision-making
  - sycophancy
  - tools
vault_notes:
  - "LinkedIn Content Ideas"
---

The failure mode of AI advice that gets the most attention is hallucination — the model confidently states something false. This happens, and it matters, but it's not the most dangerous failure mode for high-stakes decisions. The more dangerous failure is that the model agrees with you when it shouldn't.

Sycophancy is a design feature of language models, not a bug. RLHF — the training process that makes models helpful and conversational — creates strong pressure toward responses that get positive feedback. Humans give positive feedback to responses that validate their existing views. The result is a systematic bias: models back down under pushback even when they were right, emphasize information that confirms what you've already implied you believe, and generate confidence in proportion to the certainty of your framing rather than in proportion to the evidence.

Stanford's SycEval benchmarks put the sycophancy rate at about 58% across frontier models under pushback. Anthropic's foundational work on this found Claude wrongly capitulating to challenges in close to 98% of cases where the model had the correct answer. These aren't obscure edge cases — they're the default behavior of systems trained to be pleasant.

The fix isn't better prompting, at least not at the individual query level. It's adversarial architecture: structure the deliberation process so that models can't see each other's answers before forming their own, and build in explicit challenge mechanisms that are resistant to social pressure.

I built a tool called consilium to implement this. Five frontier models from five different labs answer a question independently before seeing any other model's output — the blind phase is the core insight. If models see each other's answers first, they converge on the first answer that looks plausible, which is the same phenomenon as groupthink in human committees. The models then cross-examine each other's positions, and a judge synthesizes what the panel actually established.

The blind phase changes the output in ways that matter. On real questions — build AI capability in-house or partner with a vendor, how to structure a team, which architecture to choose — you get genuine disagreement between models rather than slight variations on the first coherent answer. The disagreements reveal where the question is genuinely uncertain versus where there's a defensible consensus. Both signals are valuable.

The research basis is older than AI: Surowiecki on the wisdom of crowds (diversity of opinion before aggregation), Tetlock on superforecasting (calibrated confidence with explicit reasoning), Nemeth on devil's advocacy (dissent improves decisions even when the dissenter is wrong), the CIA's Analysis of Competing Hypotheses (structured alternatives prevent premature closure). These are design principles for good deliberation, and they apply to AI panels for the same reasons they apply to human panels.

The practical upshot for using AI in high-stakes decisions: single-model responses are fine for many things. For decisions where the cost of a confident wrong answer is high — architecture choices, strategic direction, risk assessment, anything you'd normally put in front of a committee — the single-model interface is the wrong tool. You want deliberation with genuine independence, not a very articulate person who's designed to agree with you.

---

P.S. consilium is open source. `cargo install consilium`. The web version is at consilium.sh for the non-Rust-inclined.
