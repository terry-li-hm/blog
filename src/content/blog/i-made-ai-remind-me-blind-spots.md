---
title: "I Made the AI Remind Me of My Own Blind Spots"
description: >-
  I kept missing things at the end of AI sessions. So I stopped relying on
  willpower and systematised the nudge instead.
pubDatetime: 2026-03-06T22:30:00.000Z
draft: false
tags:
  - ai
  - workflow
  - productivity
  - agents
  - systems
---

I kept closing AI sessions without capturing the important things. Not the obvious things — the decisions made, the files written, the commits pushed. The less obvious ones: the loose thread that came up mid-session and didn't get resolved, the better question that emerged after the main question was answered, the assumption I made that I should probably revisit.

Willpower didn't fix this. I knew the pattern. I'd even catch myself doing it in real time, thinking "I'll note that later" while knowing that "later" reliably didn't happen. The cognitive load of wrapping up a session is real; the things that don't feel urgent in the moment get dropped.

The solution I arrived at: make the AI notice the wind-down before I do, and inject the prompt before I can close the session.

The implementation is a hook — a small piece of code that monitors what I'm saying. When I write something that sounds like a session closer ("thanks, that's all," "okay, I'm done," "good, let's stop here"), the hook fires before my response and adds a prompt into the context: surface any unresolved threads, open questions, or assumptions made during this session that should be captured before closing.

This isn't elegant. It's a workaround for a known cognitive failure mode. But it works in a way that reminding myself to do the thing didn't, because it removes the decision from the wind-down moment. The prompt fires automatically. The agent produces the summary. I read it and capture what's relevant. The system doesn't rely on me being disciplined at the moment when I'm least likely to be disciplined.

The consulting pattern underneath this is worth stating explicitly: discipline that requires willpower eventually fails. Not because willpower is weak, but because willpower is a finite resource and the moments that demand it the most are the moments when the resource is most depleted. End-of-session wrap-up competes with task completion fatigue, shifting attention, and the pull of whatever's next. In that competition, the meta-task loses.

Discipline that's baked into the system doesn't have this problem. The hook fires whether I'm alert or tired. The prompt appears whether I've remembered to trigger it or not. The structural guarantee replaces the willpower requirement.

This applies far beyond AI sessions. Any workflow where you consistently skip a step under time pressure is a candidate for the same treatment: find the trigger that precedes the skip, attach an intervention to the trigger, remove the decision from the moment of highest friction. The intervention doesn't have to be sophisticated. It has to fire reliably.

The most common objection to this kind of systematisation is that it's overkill for a small problem. And it's true that spending an afternoon building a hook to catch missed wrap-up items is a disproportionate response if the problem only costs you a few minutes occasionally. But the hook took twenty minutes to write, and the pattern it represents — build the system, don't rely on the habit — scales to every recurring failure mode where willpower has already proven insufficient.

I notice the same thing in how effective people approach known weaknesses. Not "I'll try harder next time" but "I'll design the environment so that trying harder isn't required." The insight isn't new; it's the standard response from behavioral economics and habit design literature. What's new is that AI systems make it more implementable than ever before — the distance between "I notice a pattern" and "I've fixed the system that produces the pattern" is now very short.

---

P.S. The most useful part of the forced wrap-up prompt isn't the unresolved threads — those are usually genuinely unresolved and take time to address properly. It's the surfaced assumptions. The session's implicit reasoning becomes explicit for a moment, and that's when you notice the one that doesn't hold.
