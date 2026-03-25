---
title: "Enzyme, Receptor, Cell Type"
description: "Three components of a living system map cleanly to tool, skill, and agent. The biology isn't decoration -- it's the test."
pubDatetime: 2026-03-25T08:33:25.000Z
draft: false
tags: [ai, systems, organism, design]
---

A living system has enzymes, receptors, and cell types. These are not interchangeable. Each has a distinct function, a distinct relationship to information, and a distinct mode of action. The same structure maps exactly onto tools, skills, and agents. Not as metaphor. As a classification test.

---

**Enzyme = Tool**

An enzyme catalyzes one specific reaction. It doesn't think. It doesn't decide. You can run an enzyme without a nervous system -- without any intelligence anywhere in the chain. The intelligence is in who designed the pathway, not in the enzyme itself.

A tool is the same: can it run without the LLM? If yes, it's a tool. It executes deterministically. It returns a result. The model decides when to call it and with what -- but the tool itself doesn't think. `read_file`, `send_request`, `parse_json`. One reaction. No judgment.

If your "tool" needs to decide what to do mid-execution, it's not a tool. Rename it before the architecture confusion sets in.

---

**Receptor = Skill**

A receptor doesn't act. It binds a signal and changes the cell's response to everything that follows. The receptor is not doing the work -- it's shaping how the work gets done.

A skill is loaded into context and changes how the LLM responds to a prompt. It doesn't execute actions. It changes the execution pattern. "When you see this kind of request, here's the workflow, here are the decision criteria, here are the edge cases." The LLM reads the skill the way a cell reads a bound receptor -- and then responds differently than it would have otherwise.

The test: does it change the response to one prompt, and only work while the user is in the loop? Skill. Receptors don't fire autonomously. Neither do skills.

---

**Cell Type = Agent**

A neuron doesn't ask the organism for permission to fire. A macrophage doesn't wait for approval before engulfing a pathogen. Cell types are autonomous -- they have a defined function, they run it, and they report back through the system's normal signaling channels.

An agent is spawned with a goal and runs to completion without the user in the loop. Multiple steps. Tool calls, decisions, subagents if needed. The mission completes and the results surface. Not interactive. Not dependent on a human turn-by-turn.

The test: does it run autonomously across multiple steps? Agent. If it needs the user to approve each move, it's not an agent -- it's a very slow skill.

---

**Edge cases that prove the heuristic**

Tool calling another tool: still a tool. No LLM anywhere in the chain. The reaction stays deterministic regardless of how many enzymatic steps it takes.

Skill that generates a plan for agents: still a skill. The user sees the plan and approves. The user is in the loop. The skill shapes what gets spawned -- it doesn't spawn autonomously.

Agent loading a skill: still an agent. The skill shapes the agent's behavior mid-mission, but the agent is running autonomously. The skill is just a receptor the agent carries with it.

These aren't edge cases that break the taxonomy. They're edge cases that confirm it.

---

**The design consequence**

If you can't classify a component into one of these three, your architecture is muddled. The component is trying to be two things. An agent that requires user approval at every step is a skill with extra complexity. A skill that spawns subagents without user oversight is an agent pretending to be safe. A tool that calls an LLM internally is a disguised agent.

Split it. One component, one role.

The clarity isn't aesthetic. It's functional. Enzymes, receptors, and cell types fail in different ways. Diagnosing a broken agent as a broken tool means you're looking in the wrong place. The biology gives you the failure modes before you build, not after.

---

**The spectrum is not a hierarchy**

Enzymes are not "lower" than cell types. A well-designed enzyme -- fast, specific, reliable -- is more valuable than a poorly-designed agent that requires human oversight at every turn. The question is not where a component ranks. The question is what it IS.

A neuron is not better than lactase. They do different things. Lactase breaks down lactose -- that's its entire existence, and it's indispensable. Calling lactase "primitive" because it doesn't fire action potentials is a category error.

The same applies here. Tools are not primitive agents. Agents are not advanced tools. They're different components doing different jobs in the same system. Design each for what it is, not for what sounds more impressive.

---

The heuristic is a one-pass test. Can it run without the LLM? Tool. Does it shape one prompt while the user is present? Skill. Does it run autonomously to completion? Agent.

If none of those fit cleanly, you have a naming problem and an architecture problem. Fix the name first. The architecture usually follows.
