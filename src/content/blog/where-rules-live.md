---
title: "Where Rules Live"
description: "The difference between a rule that works and a rule that doesn't is usually not the content of the rule — it's where it lives."
pubDatetime: 2026-03-08T15:26:00.000Z
tags: ["ai", "workflows", "systems"]
---

The difference between a rule that works and a rule that doesn't is usually not the content of the rule — it's where it lives.

I noticed this while doing something mundane: trying to find a restaurant's cake cutting fee online. After burning fifteen minutes across four different search tools, I called the restaurant and got the answer in thirty seconds. Somewhere in that detour, I'd spent time writing down a lesson: *OpenRice blocks automated access, use Firecrawl instead.* I dropped it into my AI assistant's memory file, the flat text document it loads at the start of each session.

The lesson was correct. But the location was wrong.

My setup involves a layered knowledge system — memory files for gotchas, documentation for rationale, and "skills" (structured instruction files that the AI loads when a relevant task arises). The memory file is passive: it gets loaded at session start and sits in context. A skill is active: it fires at the moment of action. When I'm about to search the web, the research skill loads. When I'm about to open a browser, the browser automation skill loads. The right moment to remind a system "use Firecrawl for Cloudflare-protected sites" is not at session start — it's when the system is about to fetch a Cloudflare-protected URL.

This sounds obvious in retrospect. But the failure mode is seductive. Memory files feel like the right place for lessons because they're always present. If it's always there, you can't miss it. Except you can, because "always present" is the same as "background noise." A rule that needs to fire in a specific context should live in that context, not in a global ambient dump.

The principle that fell out of this: *the skill holds the rule, the documentation holds the why.* If a lesson changes how to act, it belongs in whatever fires at action time. If it's rationale or research — why Firecrawl works, what the failure modes of other tools are — that belongs in a reference document. The two aren't mutually exclusive; often a lesson belongs in both places. But the skill gets the rule, and the rule in the skill is what actually changes behaviour.

There's a deeper pattern here about enforcement layers. The most reliable rules in any system are the ones that are mechanically enforced — they can't be forgotten because they don't depend on being remembered. The least reliable are the ones that require active recall at the moment they're relevant. Memory files sit closer to the "requires recall" end. Skills sit closer to "mechanically triggered." Hooks — shell scripts that intercept actions and check conditions — sit all the way at the mechanical end. They don't care whether the AI remembered the rule. They fire.

The practical implication is a routing question: when you capture a lesson, ask not just *what is this?* but *when does this need to fire?* If the answer is "whenever I do X," put it in whatever loads when you do X. If the answer is "always," put it everywhere — but be suspicious of that answer, because "always" often means "I haven't thought carefully about when this actually matters."

The lesson about OpenRice ended up in three places: the research skill's tool selection table (fires when choosing search tools), the Cloudflare bypass documentation (explains why, for future reference), and a routing gate in the skill that manages knowledge capture (reminds me to check whether a skill already owns a rule before dumping it into memory). That last one is the most recursive: a skill that enforces the principle of routing rules to skills.

The routing question is the whole thing: not *what is this lesson?* but *when does this need to fire?* Get that right and the rule enforces itself. Get it wrong and you have a very well-documented mistake.

---

*P.S. The cake cutting fee was zero.*
