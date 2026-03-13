---
title: "The CLI Boundary"
description: "Which parts of an AI dev workflow can be wrapped in a CLI, and which can't — learned the hard way by building the wrong thing and measuring it."
pubDatetime: 2026-03-14T05:39:07.000Z
draft: false
tags:
  - ai-engineering
  - cli
  - workflow
  - agents
---

I spent a week building a planning pipeline as a CLI. Three passes of Opus, each calling `claude --print`: research the codebase, write implementation plans, review them. Clean, automated, no human in the loop. I tested it against a real project that had six known design issues. It caught zero.

Not one or two. Zero.

The same planning logic, run in-session with full tool access — file reads, vault search, web lookups — caught two and a half out of six. Still not great, but categorically different from nothing.

So I killed the CLI planner. The execution side of the same tool — routing tasks to Codex or Gemini, validating outputs, logging results — works perfectly and I kept it. That asymmetry is the interesting part.

## What the CLI could see

Nothing. That's the problem.

`claude --print` strips all tool access. No file reads, no web search, no subagents, no vault context. The planner received the spec as a string and had to reason about the codebase from memory. It couldn't check what the existing code actually did. It couldn't look up framework documentation. It couldn't grep for patterns.

So it hallucinated. It claimed the project had "correct schedules and roll-up architecture" — it was actually reading the already-fixed code and rubber-stamping it. The research pass, designed to surface framework gotchas, found nothing because WebSearch is unavailable inside nested `claude --print`. The writing pass timed out because the prompt was too large. The review pass never ran.

The planner itself had the same class of bugs it was supposed to catch in the deliverable. The timeout was too short. The tool access was missing. You can't plan if you can't see.

## The line

Here's what I've landed on after measuring this:

**CLI-able** (takes input, produces output, no mid-task reasoning needed):
- Execution and delegation — route a fully-specified task to a tool
- Validation — run tests, check dependencies, lint
- Logging and reporting — structured output from structured input
- Mechanical orchestration — retry logic, fallback chains, file management

**Not CLI-able** (needs the agent loop — tool access plus iterative reasoning about current state):
- Planning — must compare a spec against codebase reality
- Review — needs judgment applied to context the reviewer discovers mid-task
- Research — the whole point is discovering things you didn't know to ask for

The pattern: if the task can be fully specified before it starts, it's a CLI. If the task requires discovering information mid-execution and adjusting course, it needs the agent loop.

## This isn't new

This is the same boundary that's always existed in software: batch processing versus interactive systems. A cron job that transforms CSV files is batch. A user session that responds to what the user does next is interactive. The batch job doesn't need to see; the interactive session does.

A prompt without tools is just a fancy batch job. You compose the input, fire it, and get output. The model reasons, but only about what you gave it. It can't reach out for more. It can't check its assumptions. It can't discover that the thing it's planning around has already changed.

The agent loop — tool access plus iterative reasoning — is what makes AI assistants useful for judgment tasks. The model reads a file, notices something unexpected, greps for related patterns, reads documentation, revises its understanding, and then produces output informed by what it found. That's not a batch job. That's an interactive session.

Wrapping an agent task in a CLI strips the agent part. You get the prompt but not the loop. For planning, that's fatal. The six design issues my human review caught were all "purpose" questions: what is each component *for*? What's the relationship between data sources? What timezone matters? These require looking at the system and reasoning about what you see. No amount of prompt engineering fixes "can't look."

## The execution side works

The same tool's execution pipeline — `opifex exec` — works fine as a CLI. It takes a fully-specified plan, routes each task to the right coding tool, manages worktrees, validates output, logs everything. No mid-task discovery needed. The plan says "implement this function with this signature in this file." The executor does it or fails. Binary.

This is why the CLI boundary matters practically, not just theoretically. The temptation is to wrap everything in a CLI because CLIs are composable, scriptable, automatable. But the wrapper strips the capability that makes certain tasks possible. Execution is self-contained; planning is not. Validation is deterministic; review is not. Logging is mechanical; research is not.

## The lesson

Build CLIs for the batch parts. Keep the interactive parts interactive. The test isn't "can I write a prompt for this?" — you can write a prompt for anything. The test is "does this task require the model to discover information mid-execution and change course?" If yes, it needs the loop. If no, ship the CLI.

I spent a week learning this by building the wrong thing and measuring the failure. The measurement — 0/6 versus 2.5/6 — is what made the lesson stick. Without it, I'd still be tuning prompts for a tool that was architecturally broken.

---

*The irony of a planning tool that can't see its own bugs is the kind of thing you only notice after you've measured the output against reality. Which, incidentally, is the same lesson the tool was supposed to teach.*
