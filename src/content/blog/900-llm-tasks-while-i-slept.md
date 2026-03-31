---
title: 900 LLM Tasks While I Slept
description: 'Running an autonomous coding factory on Chinese LLM providers for $5/day'
pubDatetime: '2026-03-31T22:32:18.000Z'
draft: false
tags: [ai, engineering, automation]
---

Last night I queued 900 coding tasks and went to sleep. By morning: 424 git commits, 7000+ tests, 36 new tools. Total compute cost: about five US dollars.

## The setup

A single Fly.io machine in Tokyo -- 8 cores, 32GB RAM, $11/day (I need to optimise this). On it runs a Python daemon that reads a Markdown task queue and dispatches headless Claude Code instances across three Chinese LLM providers: ZhiPu (GLM-5.1), Infini (deepseek-v3.2), and Volcano (ark-code). All three offer Anthropic-compatible API endpoints on flat-rate coding plans. Unlimited tokens for about 200 RMB/month each.

32 concurrent instances. 8 on ZhiPu, 8 on Infini, 16 on Volcano. Each picks up a task, runs Claude Code in `--print --bare` mode, writes code, runs tests, commits, moves on. The daemon tracks per-provider concurrency limits and auto-retries failures once.

## The bug that broke everything

For the first two hours, 90% of tasks failed instantly. Exit code 2 -- the bash script was dying before Claude even started.

The cause: I prepend a coaching file to every prompt. That file contains backticks and dollar signs (it's Markdown with code examples). When bash does `echo "$prompt"`, those characters trigger command substitution. The fix was embarrassingly simple: write to a temp file with `printf`, cat it back.

One character class in one line of bash was responsible for burning hundreds of task-slots. The system logged the failures, I spotted the pattern, fixed it, and the pass rate jumped from 10% to 72% within minutes.

## What it actually produced

Mostly test files and effector fixes. The LLMs are good at: reading a module, writing tests for it, running pytest, fixing failures. They are bad at: creating new files in the right directories (bare mode has no file-write tools), and anything requiring judgment about what to build next.

The overnight batch also built a complete Playwright browser stack, a consulting card generator, a golem dashboard, and about 30 other small utilities. Quality is roughly 7/10 -- functional but with rough edges. Some tests have hardcoded paths. Some effectors import the wrong libraries. These become tomorrow's fix queue.

## The auto-requeue loop

The most useful thing I built was making the daemon self-sustaining. When pending tasks drop below 50, it auto-generates more: scan for untested modules, find broken effectors, create fix tasks. The queue never empties. The daemon ran for 8.5 hours unattended, from 7pm to 3:30am, then spent another two hours churning through retries.

## What I learned

The bottleneck is not compute or tokens -- it is task specification quality. A well-specified task ("read this file, write tests, run pytest, fix failures, commit") passes 80% of the time. A vague task ("health check these effectors") passes 30%. The coaching file helps, but the real leverage is in how you write the queue.

The other lesson: read your own system before building new things. I spent an hour building a crude auto-dispatch loop, only to discover my codebase already had a LangGraph-based autonomous work loop called `circulation.py` that does exactly this, but better. Check the map before you start digging.
