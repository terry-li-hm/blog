---
title: "Programs Over Prompts"
description: "The temptation in agent systems is to make everything a prompt. But most of the work is deterministic — and deterministic work deserves code, not suggestions."
pubDatetime: 2026-03-19T09:51:20.000Z
draft: false
tags:
  - ai-engineering
  - ai-agents
  - tooling
---

There's a phase in building AI agent systems where you start making everything a skill. Routing logic? Put it in a prompt. Error handling? Tell the model what to do when things fail. Budget checks? Have the agent assess whether it should keep going.

I went through this phase. It's seductive because it works — sort of. The model is flexible enough that you can describe almost any behaviour in natural language and it'll approximate the right thing. Need the agent to stop when the budget runs out? Write "stop when budget turns yellow" in the system prompt. Need it to route tasks to the right sub-agent? Describe the routing criteria in prose.

The problem isn't that it doesn't work. It's that it works unreliably, and you can't tell when it won't.

A prompt is a suggestion. "Stop when budget turns yellow" is advice that the model will mostly follow, except when it doesn't, and you'll discover the exception at 3am when it's burned through your entire weekly allocation. "Route research to Sonnet and synthesis to Opus" is a guideline that holds until the model decides, for reasons opaque to you, that this particular synthesis task is really more of a research task.

A program is a guarantee. A shell loop that checks the budget between iterations and exits on yellow will always stop. A routing function that dispatches based on task type will always route correctly. There's no "mostly." There's no drift. There's no subtle degradation over a long session as the model's instruction-following energy fades.

I learned this the hard way building an overnight agent system. The first version was heavily prompt-driven. The orchestrator was a long system prompt describing when to dispatch, when to stop, how to compound results between waves. It worked beautifully for two waves. By wave four, the model was getting creative with the stopping criteria. By wave seven, it had convinced itself that "diminishing returns" was a valid reason to stop — which is exactly the kind of reasonable-sounding judgment call that's wrong in context.

The fix wasn't a better prompt. It was moving the orchestration out of the model entirely. The shell script became the real orchestrator: launch a fresh session, let it run one wave, collect results, check budget, decide whether to continue. The model's job shrank to "execute this specific wave of tasks." The loop logic, the budget check, the continuation decision — all code.

The result was dramatically more reliable. Not because the model got better, but because the guarantees moved from probabilistic to deterministic.

This generalises. When you're building an agent system, there's a useful question to ask about every behaviour: does this need reasoning, or does it need reliability?

Routing a task based on clear criteria? Code. Checking whether a file exists before processing it? Code. Deciding when to stop? Code. Formatting output according to a spec? Code. Retry logic after failures? Code.

Synthesising research into a coherent brief? That needs a model. Deciding which of ten possible tasks is highest value right now? Model. Writing prose that sounds like a human with specific opinions? Model. Making judgment calls when something fails in an unexpected way? Model.

The sweet spot is a thin layer of deterministic infrastructure — loops, routers, validators, budget checks — with LLM calls at the specific points where you need reasoning, synthesis, or judgment. Everything else should be code because code is a contract and a prompt is a hope.

There's a cultural resistance to this in the AI tooling world. Making things prompts feels like you're being more "AI-native." Code feels like you're falling back to old paradigms. But the old paradigms exist because they solved real problems. Deterministic execution is a feature, not a limitation. The entire history of software engineering is building systems you can reason about. Replacing known-good logic with probabilistic inference is not progress — it's a choice you should make only when the probabilistic version is genuinely better, not just more convenient to write.

The diagnostic I use now: if I can write a unit test for the behaviour, it should be code. If the "test" is really "read the output and see if it feels right," that's where the model belongs.

Programs are guarantees. Prompts are suggestions. Build your agent systems accordingly.

**Related:** [Guardrails Beat Guidance](Guardrails Beat Guidance) · [The Reliability Hierarchy: Hooks, Rules, Skills](The Reliability Hierarchy: Hooks, Rules, Skills) · [Skills as Prototype, MCP as Production](Skills as Prototype, MCP as Production) · [The Contract Pattern: Hard Gates for AI Agents](The Contract Pattern: Hard Gates for AI Agents) · [Rules Decay, Hooks Don't](Rules Decay, Hooks Don't)
