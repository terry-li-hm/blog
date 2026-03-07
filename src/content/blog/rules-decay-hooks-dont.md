---
title: "Rules Decay, Hooks Don't"
description: "The difference between writing down a rule and making the system enforce it — illustrated by a 15-line hook."
pubDatetime: 2026-03-07T00:40:13.000Z
draft: false
tags: ["ai-agents", "agent-experience", "workflow", "automation", "developer-experience"]
---

I made a small mistake this week. I invoked the wrong skill — typed a task, the system pulled up a LinkedIn research skill, I read it, and immediately knew it was for researching *other people's* profiles, not managing my own. Wrong tool. A few seconds wasted, nothing catastrophic.

The instinct was to write it down somewhere. Add a line to memory: *"linkedin-research is for other people, not your own profile."* That's the usual fix — document the gap, rely on future discipline to remember it.

But I'd written [a post recently](https://terryli.hm/posts/autonomous-vs-monitored-agents/) about Karpathy's correctness signal principle: automate where the signal is verifiable cheaply, monitor where human judgment is genuinely required. And this failure was a textbook cheap signal. The moment I read the skill and it didn't match my task, I *knew*. No ambiguity, no inference required. The wrongness was immediate and obvious.

So instead of a memory entry, I wrote a hook.

```python
# PostToolUse, matcher: tool == "Skill"
def main():
    skill_name = data["tool_input"]["name"]
    print(
        f"Skill loaded: '{skill_name}'. "
        "If it turned out to be irrelevant — that's a description gap. "
        "Fix the description before continuing."
    )
```

Fifteen lines. Fires after every skill invocation. Every single time a skill loads, the system asks: was this the right one? If not, fix the description now, not later.

The practical effect is small. But the structural difference is large. A rule in a memory file requires me to remember the rule exists, remember it applies, remember to act on it. A hook requires nothing — it fires regardless of context, fatigue, or how many other things are in flight. The discipline is built into the mechanism, not into the operator.

This is what Karpathy means when he talks about programming the org. The org here is a personal AI workflow, but the principle generalises: an org whose rules live in documents is an org that depends on discipline. An org whose rules live in executable code depends only on the code running. Documents are prompts. Code is enforcement.

The recursive part is what I find most interesting: the hook is itself an application of the correctness signal principle. The principle says *encode verifiable signals as automation*. The hook encodes the verifiable signal of a mismatched skill. It's not just illustrating the idea — it's an instance of it.

There's a version of this that applies everywhere. Whenever you catch yourself writing "remember to X when Y happens" — that's a candidate for a hook, a lint rule, a test, a pre-commit check. Not everything can be automated; some judgments are genuinely human. But the first question should always be: is this signal cheap and unambiguous? If yes, the right response isn't to write it down. It's to make the system say it back to you.

Rules decay. Attention drifts, contexts shift, documents go unread. Hooks don't forget.
