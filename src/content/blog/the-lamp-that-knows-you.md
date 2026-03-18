---
title: "The Lamp That Knows You"
description: "Disaster recovery for an AI-native workflow isn't about servers — it's about restoring a relationship."
pubDatetime: 2026-03-18T05:29:47.000Z
draft: false
tags: [ai-tools, infrastructure, workflows]
---

I spent an afternoon building disaster recovery for my Claude Code setup. The question was simple: what if my iMac dies?

The obvious answer is backups. Git repos, API tokens in 1Password, a Brewfile for Homebrew. Standard stuff. But when I actually tested recovering on a fresh server, I realised the hard part wasn't the code or the credentials. It was the *context*.

My Claude Code environment carries 12,000 vault notes, 137 skills, 44 memory files, 39 hooks, and 219 solution documents. It knows my preferences, my projects, my mistakes, my career transition timeline. When I SSH in and type `claude`, I'm not starting a tool — I'm resuming a conversation that's been running for months.

Disaster recovery for this isn't like backing up a laptop. It's more like: if your office burned down, could you reconstruct not just the furniture, but the way you think when you sit at that desk?

The answer I landed on: a small always-on server called *lucerna* — Latin for oil lamp. A small steady light kept burning. It syncs credentials every five minutes, holds a full clone of the vault, and runs Claude Code with the same skills and memory. From my phone, anywhere: `ssh terry@lucerna`, then `claude`. Same context, same conversation, same thinking partner.

The non-obvious insight: the server was the easy part. The hard part was auditing what "context" actually means — which files, which configs, which symlinks, which shell aliases make the environment feel like *yours*. The `.zshrc` matters more than the CPU count. The memory files matter more than the RAM.

We're entering an era where AI tools carry institutional knowledge about how you work. Losing access to the tool isn't like losing a hammer — it's like losing a colleague who's been sitting next to you for a year. Plan accordingly.
