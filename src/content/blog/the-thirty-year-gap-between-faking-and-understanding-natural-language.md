---
title: "The Thirty-Year Gap Between Faking and Understanding Natural Language"
description: "From AppleScript's rigid English-like syntax to LLM tool-calling — what changes when the computer actually understands you."
pubDatetime: 2026-03-13T08:55:40.000Z
draft: false
tags: [ai, programming]
---

In 1993, Apple shipped AppleScript — a programming language designed to look like English:

```
tell application "Microsoft PowerPoint" to close every presentation saving no
```

The idea was radical: if code reads like natural language, anyone can write it. In practice, the opposite happened. The English-like syntax created an illusion of flexibility. You'd write something perfectly reasonable — `tell PowerPoint to shut down` — and get a cryptic error. The grammar was rigid; it just didn't look rigid. People expected to *talk* to their computer and instead got a programming language wearing a natural language costume.

This tension — between looking natural and being natural — haunted computing for thirty years. Siri (2011) understood real speech but could only do a narrow set of things. Alexa, Google Assistant, Cortana — same pattern. Natural language in, but a fixed command set underneath.

Then LLMs arrived and quietly closed the gap.

When I asked Claude to close my PowerPoint file today, I didn't use AppleScript. I described what I wanted, and the agent wrote the AppleScript for me. The interface was genuinely natural language; the execution was still the rigid 1993 grammar underneath. But I never had to see it.

This is the pattern that matters: LLMs don't replace structured interfaces — they sit above them. AppleScript still works exactly as it did in 1993. SQL still needs exact syntax. APIs still need precise parameters. What changed is that there's now a translation layer that actually understands what you mean.

The irony is sharp. Apple spent years trying to make code feel like English. The solution turned out to be: keep the code exactly as it is, and put something that genuinely understands English in front of it.

The thirty-year lesson: don't make the machine language more human. Make a translator that's fluent in both.
