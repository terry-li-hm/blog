---
aliases: ["The Silence of Missing Skills"]
title: "The Silence of Missing Skills"
description: "The most dangerous failures in AI scaffolding are the ones that look like nothing happened."
pubDatetime: 2026-03-18T10:32:46.000Z
draft: false
tags: [ai-tools, claude-code, scaffolding]
---

I run about 180 skills in my Claude Code setup — custom workflows that fire on triggers, guide complex tasks, and encode institutional knowledge. Today I discovered that 9 of them had been silently invisible for weeks.

The cause was trivial: Claude Code discovers skills in `directory/SKILL.md` format, not as flat `.md` files at the root. I'd created 9 skills in the wrong format. They passed every manual check — valid frontmatter, correct names, proper content. They just never loaded.

**The dangerous part isn't the bug. It's the silence.**

When a tool throws an error, you fix it. When a tool is slow, you optimise it. When a tool is *absent*, the system runs fine — just slightly worse, in ways you can't attribute. You don't notice the skill that didn't fire. You don't miss the guidance you never received. The counterfactual is invisible.

This is the scaffolding equivalent of survivorship bias. We measure what breaks, not what was never there. And in a system with 180 skills, the marginal absence of any one is nearly undetectable by feel.

**The fix isn't just converting the files.** It's recognising a failure class: silent omission in additive systems. My scaffolding load test (next on the list) will test this formally — systematically disable components and measure the delta. If removing a skill doesn't degrade outcomes, either the skill is dead weight or the test suite isn't sensitive enough. Both are worth knowing.

The broader principle: any system that grows by accumulation needs a periodic audit for silent failures. Not "is everything working?" but "is everything *present*?" Those are different questions with different detection methods.
