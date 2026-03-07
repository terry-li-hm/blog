---
title: "Your Tool Shouldn't Know What to Ignore"
description: "Configuration that belongs to the data shouldn't live in the tool. .gitignore figured this out thirty years ago."
pubDatetime: 2026-03-07T03:08:27.000Z
draft: false
tags: ["developer-experience", "workflow", "tooling", "automation"]
---

I ran a vault health check this week and got 8,113 orphaned notes.

The problem wasn't the vault.

`nexis` is a CLI tool I wrote for analysing link health in an Obsidian vault — broken links, orphaned notes, asymmetric backlinks. Running it without options, it reported 8,113 orphans out of roughly 12,000 notes. A 68% orphan rate sounds catastrophic.

But one directory — `dedao-courses` — contained 6,471 Chinese course transcripts. Terminal by design. Nothing would ever link to them; they exist as reference material, not as connected knowledge. The same was true for daily journals, archived notes, auto-generated content digests, and a dozen other structural directories that are legitimately standalone.

My first fix: pass the right `--exclude` flags every time.

```bash
nexis ~/notes \
  --exclude Archive \
  --exclude Daily \
  --exclude dedao-courses \
  --exclude Councils \
  --exclude Clippings \
  --exclude Readwise \
  # ... nine more
```

That's not a fix. That's a tax on every invocation, paid in full, forever. And the moment I forget one flag — or someone else runs the tool — the false alert returns.

---

The right fix is obvious in retrospect: the vault should declare its own structure, not have it re-encoded into CLI flags.

`.gitignore` solved this problem for code repositories thirty years ago. You put a file in the repository that describes what *the repository* considers irrelevant. The tool reads it. You write it once. You never think about it again.

So I added `.nexisignore` support to nexis. One file at vault root:

```
# Structural noise — terminal by design
Archive
Daily
dedao-courses
Councils
Clippings
Readwise
Waking Up
```

Now `nexis ~/notes` just works. Real orphan count: 161.

---

The principle behind this is worth naming: **configuration that describes the data should live with the data**.

When it lives in the tool instead — as flags, as wrapper scripts, as environment variables someone has to remember — it becomes orphaned knowledge. It works until it doesn't. It breaks silently when the person who knew about it isn't the one running the command.

This pattern shows up everywhere once you start looking for it. AI teams encoding data context into prompts ("ignore records from before 2020", "this field is unreliable on weekends") instead of into data schemas or pipeline metadata. The prompt becomes load-bearing infrastructure, invisible to anyone downstream who doesn't know to include it.

The tell is always the same: someone has to *remember* something about the data in order to use the tool correctly. If the data could speak for itself and isn't, that's the bug.

**Related:** [nexis](nexis) · [Skills as Files](Skills as Files) · [Rules Decay, Hooks Don't](Rules Decay, Hooks Don't)
