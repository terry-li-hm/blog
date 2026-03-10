---
title: "The Nag Tax"
description: "When building automation around a third-party app, the first question to answer is: what's the one thing this app does that nothing else can replicate? That feature becomes the tax you pay on everything else."
pubDatetime: 2026-03-10T00:00:00.000Z
draft: false
tags: ["tooling", "automation", "systems-thinking"]
---

There's a question I've started asking before writing a single line of automation around any third-party app: what does this app do that nothing else can?

Not what it does well. Not what makes it convenient. The thing that, if you removed it, would make the whole exercise pointless.

For Due — the iOS reminder app I use as the backbone of `moneo`, my reminder CLI — the answer is the nag loop. Due fires a reminder, and if you don't dismiss it, it fires again. And again. Every few minutes, with a configurable snooze, until you deal with it. It's annoying in exactly the right way. It's the reason I use it.

Apple's Reminders.app is a significantly better automation target. Full AppleScript dictionary. Native CloudKit sync. A proper deletion API. Everything you'd want if you were designing a tool programmatically. Due, by contrast, is a Catalyst app — ported from iOS, no AppleScript support, no delete URL scheme, an opaque SQLite database that I'm poking around in without any documentation. When I need to delete a reminder, I'm doing DB surgery. When I need to create one reliably from the command line, I'm working around AppleScript gaps with timing hacks. The sync to iPhone is plausible but not guaranteed. Every part of the integration is slightly fragile.

I knew all this and kept Due anyway. Because Reminders.app fires once. One notification, no follow-up. You can dismiss it and forget it, which is precisely the failure mode I'm trying to prevent. The nag is the feature. Everything else is table stakes.

This is the irreplaceable feature test, and it changes how you build. Once I knew the nag loop was non-negotiable, I stopped trying to fix Due's other limitations. I stopped looking for a cleaner automation path. I accepted the DB hacks as load-bearing, added a layer of abstraction over the fragile bits, and designed the rest of `moneo` around the constraint rather than against it. The architecture is worse in several measurable ways — more brittle, less transparent — and it's the right architecture, because it preserves the thing that actually matters.

Without the test, you end up in a different failure mode: you keep trying to improve the integration surface, switching apps, rewriting wrappers, chasing a cleanliness that doesn't exist. The constraint looks like a problem to be solved rather than a fact to be accepted.

The test also tells you when to walk away. If Due ever removes the snooze loop — if the nag becomes a standard once-and-done notification — the calculus reverses immediately. There's no longer a tax worth paying. Reminders.app becomes the obvious choice, and the brittle DB layer becomes technical debt rather than a deliberate trade-off.

Most tool decisions that feel messy are really just tax questions in disguise. You're paying some cost to access something you can't get elsewhere. The question isn't whether to pay — you've already decided it's worth it. The question is whether you've been honest about what you're paying for.
