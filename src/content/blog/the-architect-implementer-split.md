---
title: "The Architect-Implementer Split"
pubDatetime: 2026-03-31T00:30:00+08:00
tags: [ai-architecture, agents, consulting]
draft: false
description: "Your most expensive model should design, not implement. The pattern that turned 14 parallel coding tasks into a Tuesday evening."
---

I spent an evening consolidating skills in my personal AI system. Ten skills needed merging, archiving, or absorbing into other skills. Three hooks needed writing. Cross-references needed sweeping. Recipe files needed syncing.

None of it was hard. All of it was tedious. And for the first hour, I let my most capable model -- Claude Opus, the one that costs real money -- do everything itself. Read files, write edits, search for references, update configs. The expensive model doing cheap work.

Then I stopped and asked: what here actually requires judgment?

The answer was surprisingly little. The *decisions* required judgment -- which skills to merge, what the consolidated pipeline should look like, what the new hook should enforce. But the *implementation* -- moving files, editing YAML, inserting sections, running tests -- was mechanical.

So I split the work. The expensive model designs and reviews. The cheap model implements.

---

The pattern is simple. Three steps, repeated:

**Design.** The architect model reads the current state, makes the structural decision, and writes a specification. Not code -- a spec. Exact file paths, exact before/after content, explicit passing criteria. The spec is the complete instruction set for someone who has never seen the codebase.

**Dispatch.** The spec goes to a cheaper model via a task runner. The cheap model reads the spec, makes the changes, runs the tests. It doesn't need to understand *why* -- the spec already encodes the why as the what.

**Review.** The architect reads what the implementer actually produced. Not a summary. Not a grep for expected keywords. The actual files. Then checks: did goose do something worth teaching it not to do next time?

That last step -- the coaching check -- is what makes this a flywheel instead of a pipeline. Every review is a chance to improve the implementer's next run. Not through fine-tuning. Through a coaching file that gets prepended to every future spec. Structured feedback that compounds without gradient descent.

---

In one session, I dispatched 14 tasks in parallel. The architect model wrote specs and reviewed results. The implementer model -- running on a flat-rate plan, effectively free -- did all the file editing, testing, and archiving.

The ratio matters. If architect time is 10x the cost of implementer time, every minute you save the architect by delegating mechanical work pays for itself immediately. But the real savings aren't in cost -- they're in attention. The architect model's context window stays clean. It's thinking about structure, not wrestling with YAML indentation.

The mistakes were instructive. In the first round, the architect did everything itself -- read files, wrote edits, even searched for cross-references. Each of those burned premium tokens on work the free model handles fine. The correction came from noticing the pattern: if a task has no judgment component, it shouldn't be using the judgment model.

There was a subtler mistake too. The architect grepped for keywords in the implementer's output and called it "reviewed." Three times, it had to be told: grep is sampling, not reviewing. Read the actual files. This became a checklist item in the spec template. The system learned from its own failure mode.

---

The split maps to something I see in every enterprise AI deployment. There's always a model that's too expensive to use for everything, and a set of tasks that don't need it. The instinct is to use the best model everywhere "just to be safe." But safety isn't about model quality -- it's about verification quality. A cheap model with good specs and rigorous review outperforms an expensive model running unsupervised.

The question for any AI system: where is your expensive model doing cheap work? That's where the split pays off.
