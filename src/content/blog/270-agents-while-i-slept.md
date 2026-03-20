---
title: "270 Agents While I Slept"
pubDatetime: 2026-03-20T09:00:00+08:00
description: "I ran an autonomous agent loop overnight — 43 waves, ~270 dispatches, ~250 vault files produced. Here's what I learned about building systems that work while you sleep."
draft: false
tags: [ai-agents, automation, claude-code, architecture, productivity]
---

I woke up to 250 new files in my vault.

Not garbage. Consulting pre-reads, competitive intelligence briefs, financial plans, study notes, health protocols. Some of it genuinely good. Some of it a mess. All of it produced by a system that ran 43 waves of agent dispatches overnight — roughly 270 individual Claude Code sessions — while I was asleep.

Here's the architecture, the failures, and what I'd change.

## The loop

The orchestrator is a Python script, but the real orchestrator is a shell `while true` loop. Each iteration spawns a fresh Claude Code session. The session reads a manifest file — a running memory of what prior waves produced, what failed, what's queued. It scouts for work across six life priorities I call "north stars" (career, finances, health, family, learning, systems). It dispatches 6-8 subagents in parallel, waits for results, updates the manifest, and exits. The shell loop starts the next wave.

The key architectural decision: the loop is deterministic code, not a prompt. The LLM reasons about *what* to do. The script decides *that* something happens next. No agent decides whether to continue. The shell decides. This distinction matters more than anything else I'll say in this post.

## Why fresh context per wave

I could have run one long Claude Code session with a massive context window. I tried that first. It degraded.

LLMs lose instruction-following energy as context grows. By wave 15 in a single session, the agent was ignoring constraints, producing sloppier output, and drifting from the manifest priorities. Fresh context per wave means every wave starts sharp — full attention on the instructions, no accumulated confusion. The manifest carries forward what matters; the context window carries forward nothing.

Forty-three waves of focused work beat one marathon session of declining quality.

## The taste problem

This is the most interesting failure. I have a GARP FRM exam deadline approaching, and my stated stance is "if it fails, it fails" — it's a vehicle for consulting credibility, not a life goal. The system read the deadline. It did not read the stance. By morning, 67 files were GARP study materials. The model saw an upcoming date and sprinted, because that's what models do with deadlines. They can't distinguish between "this matters" and "this is soon."

Morning review caught it. One prompt tweak — adding the explicit stance to the manifest — fixed it for subsequent runs. But this is the core tension of autonomous systems: taste is the thing you can't fully specify in advance. The model will always optimise for legible signals (dates, stated priorities) over illegible ones (how much you actually care). Calibration requires a human review loop.

## The main waste: duplication

The overnight run produced four separate "Week 1 Playbook" variants. Each wave, the agent would see "career onboarding prep" in the manifest, not find an existing file that matched its mental model, and create a new one. The manifest said "produced: week-1-playbook.md" but the next wave's agent would produce "capco-first-week-guide.md" because it was reasoning from the priority, not checking the filesystem.

This is the dominant failure mode of multi-wave autonomous systems. Not bad content — redundant content. The fix is straightforward: the manifest needs to carry not just what was produced but explicit "do not recreate" constraints. I've since added a dedup section. But the waste was real — probably 30% of the 250 files were variants of something that already existed.

## What was genuinely good

An HSBC pre-read that consolidated 17 sources into a coherent brief I'd actually use in a client meeting. A competitive intelligence profile on a near-unicorn fintech competitor that surfaced a funding detail I hadn't seen. A cheat sheet where the review caught a wrong acronym — BCBS instead of BIS for a specific regulation — that would have been embarrassing to say out loud in a room full of risk consultants.

The consulting deliverables were the strongest category. The model is good at synthesis when the sources are good and the output format is well-specified. Health protocols and financial plans were more generic — useful as starting frameworks, not as finished products.

## The 6-hour stuck loop

I should mention that the system wasn't graceful about everything. Around wave 28, an agent hit a rate limit, the manifest recorded the failure, and subsequent waves kept retrying the same task with the same approach. Six hours. Same error. The loop was deterministic — it would always try again — but it had no circuit breaker for "this approach isn't working." I added a retry cap and a backoff pattern afterward. Autonomous systems need failure budgets, not just retry logic.

## The real pattern: produce, review, encode

The overnight run is one half of a loop. The morning review is the other half. I spent about 90 minutes triaging: keeping ~60% of files, merging duplicates, deleting the GARP surplus, and encoding corrections into the manifest for the next run. The corrections are the valuable part. Each review cycle makes the system's taste slightly more calibrated.

This is reinforcement learning at human speed. Produce, review, encode corrections, produce again. The system doesn't get smarter in the way a fine-tuned model does. It gets smarter in the way a well-maintained codebase does — the constraints accumulate, and the output space narrows toward what you actually want.

## What I'd tell someone building this

The overnight run hit every life priority. Career prep, financial planning, health protocols, school research for my daughter, even relationship advice I didn't ask for but wasn't wrong. The machine doesn't have the bias of "I'll do that later." It just works the list.

But the system only works because the loop is dumb and the review is human. The shell script doesn't reason. The manifest is a flat file. The agents are disposable. Every piece of intelligence lives in the correction layer — the tweaks to the manifest, the dedup rules, the stance clarifications. That layer is mine.

If you're building autonomous agent systems: make the orchestrator as stupid as possible, the context as fresh as possible, and the human review loop as fast as possible. The taste problem doesn't go away. You just get faster at catching it.

---

**Related:** [Agentic Engineering Principles](Agentic Engineering Principles) · [Exoskeleton, Not Colleague](Exoskeleton, Not Colleague) · [AI Agents Need Notebooks Not Just Memories](AI Agents Need Notebooks Not Just Memories) · [The Overnight Loop Architecture](The Overnight Loop Architecture)
