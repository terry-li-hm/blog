---
title: "The Test Before the Output"
description: "The line between tool and skill is whether you can write the test before seeing the result."
pubDatetime: 2026-03-24T08:34:07.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

I spent an hour trying to draw a sharp line between "tool" and "skill" in an AI agent system. Every definition collapsed.

"Tool uses code, skill uses LLM" -- collapsed because an LLM doing image classification is a tool. The VLM replaced the CNN not because it reasons better, but because it's cheaper. Same predictable transformation, different runtime.

"Tool has predictable output" -- collapsed because "predictable to whom?" is fuzzy. A weather API is predictable. Is a sentiment classifier? Depends on your tolerance.

"Tool output is specifiable" -- collapsed because you can always write some spec. "Improve my life" is a specification. It's just a bad one.

"Sufficient conditions for correctness" -- collapsed because defining "sufficient" requires defining "correct," which is circular for the cases you're trying to classify.

"It's a spectrum" -- true but useless. Doesn't help you decide what to build.

Then I asked four different LLMs the same question. They converged on the same answer from different angles.

## The line

Can you write the test before seeing the output?

Not "can you describe what you want." Not "can you specify the format." Can you write an actual check -- a mechanical verification -- that you commit to before execution? If the output passes the check, you accept it unseen.

If yes, it's a tool. If no, it's a skill.

Every success criterion ultimately reduces to "I like it." The question is whether you can operationalize "I like it" into a mechanical check before the thing runs.

Date extraction: "I like it" becomes `assert output == actual_date`. You can write that before running anything. Tool.

"Write a compelling opening": "I like it" stays as "I like it." You have to see the output, then decide. No mechanical check captures "compelling." Skill.

Email classification: "I like it" becomes `assert output in categories AND matches labeled ground truth`. You can pre-commit to an accuracy threshold against a test set. Tool -- even if an LLM does the classifying.

"What should I prioritize today?": "I like it" can't be operationalized. The right answer depends on energy, deadlines, what happened yesterday, factors you can't enumerate. You'll know the right priority list when you see it. Skill.

## Why this works

It's binary. Either you can write the check before execution or you can't.

It's architectural, not philosophical. "Who can verify?" is a question about your system, not about the nature of intelligence.

It's implementation-agnostic. An LLM can be a tool (when verification is mechanical). Code can fail to be a tool (when it handles the common case but silently drops edge cases that need judgment).

It predicts what to build. Tools get fixed prompts, structured outputs, and assertions. Skills get open-ended prompts and evaluation by outcomes. Mixing them up means you're either over-engineering your tools or under-testing your skills.

## The corollary

If you're unsure which side you're on, you're building a skill.

The uncertainty itself is the signal. If you could write the test, you'd know it. The fact that you're debating means the success criteria aren't clear enough to pre-commit to. Build accordingly -- open-ended prompt, outcome evaluation, human in the loop.

And check again in three months. The test you can't write today might become obvious once the patterns stabilize.
