---
title: "The Loop Is the Product"
description: "Karpathy's autoresearch and every useful AI tool share the same pattern: the code is trivial, the feedback loop is the product."
pubDatetime: 2026-03-13T08:27:47.000Z
draft: false
tags: [ai, agents, building]
---

Karpathy's autoresearch is 630 lines of Python. It runs on a single GPU. Left alone for two days, it found 20 optimisations that human researchers missed and cut GPT-2 training time by 11%.

The code is not impressive. A loop: modify the training code, train for five minutes, check if validation loss improved, keep or discard, repeat. Any competent engineer could write it in an afternoon.

The loop is what's impressive.

I built something similar this week for a different problem — orchestrating AI coding tools. The script is 150 lines. It tries Gemini, falls back to Codex, falls back to OpenCode. Dumb sequential logic. But every run logs which tool succeeded, which failed, and why. After a week of runs, I know things no documentation would tell me: Gemini burns through free-tier quota when you launch three parallel calls. Codex can't write to git worktrees. OpenCode's auth tokens expire silently.

That operational knowledge — accumulated through the loop, not through design — is the actual product. The script is a vessel. The loop fills it.

Karpathy's framing makes this explicit. He doesn't position autoresearch as a product or a framework. He positions it as a benchmark: if humans can speed up training from 45 to 3 minutes, how well do AI agents do? The tool exists to generate the comparison. The comparison is the value.

This inverts how most people think about AI tooling. We design elaborate frameworks, argue about LangChain vs CrewAI vs AutoGen, and optimise the code. But the frameworks are commodity. The feedback loop — run, measure, learn, repeat — is what separates a demo from a production system. And the loop doesn't require sophisticated code. It requires discipline: log everything, read the logs, update the routing.

The best AI tools I've used are ugly scripts with rich logs. The worst are beautiful frameworks with no feedback mechanism. The loop is the product. Everything else is packaging.

Of course, you need [the ugly script to exist first](/posts/the-bootstrap-problem-in-ai-tooling). That's a different problem — but the same principle: ship the dumb version, let it generate the data, let the data build what you actually wanted.
