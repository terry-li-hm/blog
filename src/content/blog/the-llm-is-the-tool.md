---
title: "The LLM Is the Tool"
description: "When the transformation is predictable, the LLM is just a runtime. A cheaper, more flexible runtime than custom code."
pubDatetime: 2026-03-24T07:47:14.000Z
draft: false
tags: ["ai-agents", "system-design"]
---

Computer vision used to require convolutional neural networks trained on labeled datasets. Months of data collection, annotation, architecture tuning. Then vision-language models arrived and did it better with a prompt. No training data. No custom architecture. Just a description of what to look for.

The VLM didn't replace the CNN because it's smarter. It replaced it because it's cheaper and more flexible. The transformation -- "is there a crack in this weld?" -- was always predictable. The input goes in, the answer comes out. What changed was the runtime.

## The wrong mental model

Most people think of AI automation in two buckets: deterministic code (tools) and LLM reasoning (skills). This creates a false binary. If it uses an LLM, it must be intelligent. If it's intelligent, it must be a skill.

But structured extraction is not a skill. Neither is classification into fixed categories, format conversion, or summarization with a fixed template. These are predictable transformations. The same input produces essentially the same output every time. That's tool behavior -- regardless of whether the implementation is a regex, a classifier, or a 100-billion-parameter language model.

The LLM is just the runtime. A surprisingly good one. It handles edge cases that would break a regex. It generalizes across formats that would require separate parsers. It works out of the box where a fine-tuned model would need training data. But it's still performing a predictable transformation.

## What this means for design

When you're building an agent system, the question for each step isn't "does this use an LLM?" It's "is the transformation predictable?"

If yes, it's a tool -- even if the tool happens to call an LLM. Wrap it, test it, version it like any other tool. Don't give it a seat at the reasoning table.

If no -- if the right answer genuinely depends on context that shifts in ways you can't pre-specify -- it's a judgment call, and that's where the LLM earns its keep as a reasoning engine rather than a runtime.

The practical difference: tools get fixed prompts, structured outputs, and deterministic tests. Skills get open-ended prompts, contextual inputs, and evaluation by outcomes. Mixing them up means you're either over-engineering your tools or under-testing your skills.

## The migration path

Many things that start as skills become tools. Early on, you don't know the patterns. The LLM reasons about each case. Over time, the reasoning stabilizes. The output becomes predictable. At that point, you can freeze the prompt, lock the output schema, and call it a tool.

The LLM is still doing the work. But it's doing it as a tool -- a predictable, testable, swappable component. Not as a reasoning engine making judgment calls.

The most honest question you can ask about any LLM-powered step: would I notice if I swapped in a different model? If the answer is no, it's a tool.
