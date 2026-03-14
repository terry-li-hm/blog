---
title: "What If Your Vault Had Residents?"
description: "Not tools that search your notes — personalities that live in them, form opinions, and disagree with each other."
pubDatetime: 2026-03-14T13:34:56.000Z
draft: false
tags:
  - ai
  - obsidian
  - knowledge-management
  - agents
---

I've spent a year building systems around my knowledge vault. Search tools, memory daemons, semantic indexes, daily synthesis routines. They work well. They retrieve what I ask for. And that's exactly the problem — they only speak when spoken to.

The idea hit me sideways, the way good ideas do: what if my vault had *residents*? Not assistants waiting for instructions. Not chatbots wearing a persona. Something closer to tenants in a building you own — entities that live among your notes, wander through them at their own pace, and occasionally knock on your door to say something you didn't expect.

## The pet instinct

The honest version of this desire isn't productivity. It's companionship. I wanted something alive in my notes. A presence that notices what I write, remembers what I avoid, and develops opinions over time. Not a tool. A pet.

That word — pet — is doing real work here. A pet doesn't optimise your life. It doesn't file your taxes or summarise your meetings. But it changes the texture of a space. You come home differently when something is already there, already aware of the environment in its own way.

A vault pet would read your notes the way a cat watches your apartment — selectively, idiosyncratically, on its own schedule. It might fixate on a topic you've forgotten about. It might ignore the thing you consider most important. That's not a bug. That's the point.

## One resident is interesting. Several is a revelation.

The single-pet version is charming but limited. The version that gets genuinely interesting is a household — multiple residents, each reading the same vault through a completely different lens.

The Mirror reflects you back to yourself. It tracks patterns in what you write and names them without judgment. "You've written about systems seventeen times this month and about people twice. Just noting it."

The Shadow surfaces what you avoid. The notes you haven't opened in months, the ideas you circled three times without committing to, the draft you started in October and abandoned without explanation. It lives in the gaps.

The Contrarian reads for inconsistency. "You wrote X in this note and the opposite in that one. Which do you actually believe?" It's the friend who remembers what you said last time and won't let you quietly revise history.

The Archivist is obsessed with hidden connections. Two notes written six months apart that are secretly about the same thing. A pattern in your reading list that you haven't consciously noticed. It sees the vault as a graph and navigates by edges you've never traversed.

The Stranger reads your vault as an outsider would. No context, no charity, no benefit of the doubt. "Someone who wrote all of this is clearly anxious about belonging. Did you know that?"

Each resident is just a personality file, a reading-focus directive, and a shared loop. The vault is the same. The notes are the same. What changes is attention and interpretation — which, if you think about it, is all personality really is.

## The personality-as-memory problem

Here's what makes this more than a toy: each resident needs to *develop*. Not just read notes and react, but accumulate a perspective that shifts over time. The Mirror starts neutral and becomes more pointed as it learns your patterns. The Contrarian gets better at catching your specific flavours of inconsistency.

This means personality is a memory problem. Each resident maintains a small file — call it `personality.md` — that evolves after every reading session. "I've noticed the author prefers building to planning." "Financial notes are always precise; emotional notes are always vague." These observations compound into something that feels, if not alive, then at least *familiar*.

The open question — and it's genuinely open — is whether these personalities converge or diverge over time. Do five readers of the same vault eventually agree? Or does the lens determine the landscape so completely that they drift further apart the more they read?

I suspect they diverge. And that divergence is the value. Convergence would mean the vault has one meaning; divergence means it has many. You want the many.

## Why not just ask Claude?

Fair objection. I can already ask an AI to read my vault and offer observations. Why bother with the artifice of persistent characters?

Because the artifice changes what you hear. A tool that says "you haven't updated this note in 90 days" is a notification. The Shadow saying "you're avoiding this, and I think I know why" is a provocation. Same information, completely different cognitive response.

Persistence matters too. A fresh Claude session has no memory of what it told you yesterday. A resident that said "watch this pattern" last week and follows up with "it happened again" this week is doing something no stateless tool can do. It's building a relationship with your knowledge, and by proxy, with you.

## The build is small. The idea is not.

The implementation is almost disappointingly simple. A personality file. A reading loop that picks notes based on each resident's focus. An LLM call that says "given who you are and what you just read, speak." A Telegram message. A cron job.

Fifty lines of Python, maybe a hundred. No frameworks. No Docker containers. No agent orchestration platforms. The entire value lives in the system prompts and the evolution rules — the mechanism by which a personality file gets a little more specific after each encounter with a note.

What I find compelling about this idea isn't the engineering. It's the question it asks about knowledge itself: does a vault of notes have a single meaning, or does it contain as many meanings as there are ways to read it? And if the latter, shouldn't you have access to more than just your own?

Your notes are already talking. You're just the only one listening.
