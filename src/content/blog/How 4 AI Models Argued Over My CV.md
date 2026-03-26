---
title: "How 4 AI Models Argued Over My CV"
description: >-
  I gave the same CV to Claude, Gemini, Codex, and a red team simulator.
  They disagreed on almost everything except the one thing that mattered most.
pubDatetime: 2026-03-20T20:00:00.000Z
draft: true
tags:
  - ai
  - practice
  - tools
  - career
---

<!-- DRAFT — not yet reviewed by Terry. Needs voice pass, fact-check against cv-consensus-rga.md, and privacy scrub. -->

A friend referred me to a role at a reinsurer — hands-on AI POC builder, greenfield team, report to the CEO. The kind of job where the CV isn't a formality. It has to land in the first three sentences or the conversation never happens.

I had a CV. It was fine. It listed the right things in the right order. The problem was that "fine" is exactly the failure mode for a senior person applying sideways into a new industry. Fine means forgettable. I needed the document to do work.

So I did something I'd been wanting to test: I gave the same CV, the same role description, and the same evaluation rubric to four different AI models and asked each one to tear it apart independently. Claude (via three prompted personas), Gemini 3.1 Pro, and Codex running GPT-5.4. Then I had a synthesizer merge their verdicts into a consensus document.

The results were not what I expected.

**Where they agreed was obvious in hindsight.** All four reviewers — every single one — said the same thing: the profile paragraph was wrong. Not wrong in content, wrong in framing. It read like a governance lead who happens to build things. It needed to read like a builder who happens to understand governance. The edit was surgical: lead with "builds AI proofs of concept, delivers to production-ready handoff," push the risk credentials into a subordinate clause that reframes compliance as a prototyping speed advantage. "Risk and audit credentials mean POCs are built governance-ready from day one." Four models, four different architectures, identical diagnosis.

That kind of unanimous agreement is the clearest signal the process produces. If four independently prompted models all flag the same issue, you're not hearing opinions. You're hearing the document talk back.

**Where they disagreed was where it got interesting.**

Codex zeroed in on seniority mismatch. My job title — Assistant General Manager — screams "manager" to anyone skimming CVs. "Will he be happy as a hands-on individual contributor?" was the simulated hiring manager's version of the same concern. Codex wanted functional context added: "Assistant General Manager (Head of Data Science)." A small parenthetical that completely changes what the eye snags on.

Gemini caught something nobody else did: the CV had no IT handoff language. For a POC builder role, the ability to take something from prototype to a state where an engineering team can pick it up is table stakes. Gemini flagged its absence. Claude, across all three personas, never mentioned it. Neither did Codex. Different training data, different blind spots.

The red team persona — a Claude agent prompted to be adversarial — was the most theatrical and, unexpectedly, the most useful on one specific call. It rated the AGM job title as a "DEAL-BREAKER," severity level the highest in its rubric. The other reviewers flagged it as a concern. The red team flagged it as the reason the CV gets rejected before anyone reads the bullets. Sometimes the most valuable thing a reviewer does is refuse to be polite about something everyone else softened.

Then there was the agentic AI bullet — a line in my profile about building a personal AI system. The strategist said keep a lighter reference. The red team said be transparent that it's personal work. Codex said only keep it if you can show business relevance. All reasonable positions. All contradictory. This was the kind of disagreement that doesn't resolve through another round of scoring. It resolves through a human making a judgment call about how much risk they want to take with a one-page document. I moved it out of the profile into its own section. Gave it a proper home instead of forcing it to masquerade as professional experience.

The reinsurance question was the subtlest disagreement. Should the CV explicitly mention insurance use cases? The red team and the hiring manager simulation both wanted it — "even a single sentence showing awareness." Codex didn't raise it at all. My own judgment was that adding insurance buzzwords with zero insurance experience is exactly the kind of transparent keyword stuffing that makes a hiring manager's eye narrow. Instead, I rewrote the regulatory sandbox project description so that the workflow — document extraction, anomaly flagging, decision drafting — parallels automated underwriting without ever using the word. Let the reader make the connection. If they're smart enough to be worth working for, they will.

**What each model was actually good at** became clearer after the synthesis.

Codex excelled at structural critique — seniority framing, narrative coherence, whether claims had evidence behind them. It read the CV the way a skeptical senior person reads it: quickly, looking for reasons to say no. Its weakness was that it over-indexed on what was missing from the text and under-indexed on what could be inferred from context.

Gemini caught gaps in domain language — the handoff terminology, the transferable framing of banking-specific competencies. It read like someone who'd seen a lot of job descriptions and knew which vocabulary signals "this person gets it." Its weakness was that its review didn't complete on the first pass (sandbox constraints ate its file access), and when it did produce output, it was less structured than Codex's.

The Claude personas — strategist, hiring manager, red team — produced the most readable feedback. Well-organized, clearly reasoned, prioritized. The problem was overlap. The strategist's top three concerns and the hiring manager's top three concerns were the same three concerns wearing different analytical frameworks. I wrote about this elsewhere as the core lesson: persona diversity is theater. The costume changes; the mind doesn't. The red team prompt was the exception, because adversarial framing genuinely changes what a model is willing to say, not just how it says it.

**The finding I didn't expect:** the consensus document was more useful than any individual review. Not because the synthesizer was smarter than the reviewers — it wasn't. Because mapping agreement and disagreement across independent judges is a different kind of information than any single judge produces. Unanimous agreement means "this is real." Split decisions mean "this requires human judgment." Lone flags mean "one model sees something the others don't — investigate." The topology of agreement is the signal. The individual reviews are just inputs.

The CV scored 8.5 from Codex and 9.5 from Gemini after the edits. More importantly, it reads like a different person wrote it. Same facts, completely different framing. The governance credentials that used to sit at the end of the profile like an afterthought now function as evidence that the POCs come governance-ready. The three-week sprint that was buried in a bullet now leads its section. The job title that screamed "manager" now has functional context that screams "data science."

I've since built this into a reusable skill called litura — Latin for the visible marks of revision on a wax tablet. The process is simple: give the same artifact and rubric to multiple models independently, have them cross-judge each other's output, synthesize the consensus, and iterate until all models score the artifact above a threshold. The architecture matters less than the principle: genuine diversity of judgment requires genuine diversity of training, not genuine diversity of prompts.

Four models argued over my CV for an evening. They disagreed on reinsurance language, agentic AI positioning, and how much to compress my consulting history. They agreed unanimously on the five changes that actually mattered. The human in the loop — me — broke the ties, overruled the insurance keyword suggestion, and made the final call on every edit.

That division of labor felt right. The models did the seeing. I did the deciding.

---

P.S. The most recursive moment was realizing that the process itself is the best answer to the interview question "How do you approach building AI POCs?" I needed a CV. So I built a multi-model refinement pipeline over a Friday evening and used it to produce the CV. The document is the deliverable. The system is the proof of competence. If that's not what a POC builder role is looking for, we were never going to work out anyway.
