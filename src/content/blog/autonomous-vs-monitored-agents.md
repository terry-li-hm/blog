---
title: "Long-Running Agents Still Need Watching (Sometimes)"
description: >-
  Andrej Karpathy runs a multi-agent research org but keeps a tmux grid open to watch them.
  The question isn't whether to trust agents — it's whether your correctness signal is fast enough.
pubDatetime: 2026-03-06T20:00:00.000Z
draft: false
tags:
  - ai-agents
  - engineering
  - workflow
  - orchestration
---

Andrej Karpathy is running eight AI agents in parallel — four Claude instances, four Codex instances — each on its own git worktree, working through a research problem over hours. And he's watching all of them in a tmux window grid.

This surprised me when I read it. If anyone has the credibility and the setup to let agents run fully unsupervised, it's Karpathy. Yet he keeps a terminal open on each one, precisely so he can intervene. He posted about this earlier this week while describing the research org he's built around his nanochat project, and the observation he slipped in almost as an aside has been sitting with me since: the reason he watches isn't distrust. It's that the tasks don't have a fast correctness signal.

I've been running a similar setup — parallel agents on research and coding tasks, orchestrated through a hierarchy of briefing files and git worktrees — and I'd been making intuitive calls about when to fire-and-forget versus when to check in. The nanochat perf improvement loop I leave alone; it runs experiments, checks whether validation loss goes down, merges what works, discards what doesn't. The research questions I watch. I'd never quite articulated why the distinction felt right until Karpathy named the mechanism.

The perf loop has a fast, cheap, automated correctness signal: the metric either improves or it doesn't. You don't need to be present for that evaluation. It runs, it checks, it decides. A research question — which of these approaches is actually worth pursuing, is this experimental result spurious, did the agent hold the right variables constant — doesn't have that. The only evaluator is human judgment, and that judgment can't be pre-encoded into a threshold.

Getting this wrong in either direction is costly in its own way. Too much autonomy on judgment-heavy tasks and agents run confidently in the wrong direction for hours, building on a flawed premise nobody was around to catch. Karpathy's own example: one of his agents "discovered" that increasing hidden layer size improves validation loss, which is true in the trivial sense that bigger models perform better with infinite data and more training time, but isn't the result the experiment was supposed to surface. Without someone watching, that finding would have propagated into the next set of experiments as a spurious baseline. Too much monitoring on verifiable tasks and you're babysitting work that would have been fine unattended, spending cognitive overhead that could have gone elsewhere.

The practical version of the principle, for the workflow I'm running: tasks that produce an artifact that can be automatically tested or compared against a threshold — build it, run it, check the output, move on — can be fully backgrounded. Tasks that produce a recommendation, a comparison, or an assessment of tradeoffs need a human in the review loop. Not necessarily watching in real time, but reading the findings as they come in and being willing to cut a track short if the reasoning is going sideways.

What this doesn't change is the case for long-running agents generally. The trend is real and the leverage is genuine. The mistake would be to conclude from Karpathy watching his tmux grid that agents aren't ready for autonomous operation. They are, in exactly the cases where you could previously have written a script to do the same job: clear inputs, clear success criteria, testable outputs. What they're not ready for — what nothing is ready for, including humans working independently — is open-ended research without periodic review.

The framing that's stuck with me: automate where you can verify cheaply, monitor where you can't. It sounds obvious stated plainly, but the pull to fire-and-forget is strong when you've seen how much leverage background agents can generate. Karpathy's tmux grid is a reminder that the leverage compounds correctly only when the human judgment gets applied at the right points — not constantly, but at the joints in the work where the direction could go wrong.

---

*Karpathy posted about this on March 5th, describing his nanochat research org setup. The nanochat repo is at github.com/karpathy/nanochat.*
