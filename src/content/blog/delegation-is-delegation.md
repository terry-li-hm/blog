---
title: "Delegation Is Delegation"
description: "Whether you're trusting a doctor's prescription, an AI agent's code, or a junior engineer's pull request — the trust heuristics are identical."
pubDatetime: 2026-03-17T02:31:00.000Z
tags: ["ai", "delegation", "mental-models"]
---

Yesterday I had sinusitis and four medications on the table. Klacid for the infection, cetirizine for the histamine response, a cough suppressant, a decongestant. By day two, the runny nose was gone. So: do I stop the symptomatic ones?

I spent about thirty seconds thinking about it before realising the answer was obvious. Take them all until they run out. The doctor prescribed a course. I'm not a pharmacologist. The simplest rule is the one that requires no judgment from me — finish what was prescribed.

This is delegation. I paid for a professional's judgment so I don't have to reason about drug interactions and half-lives myself. And the heuristic for trusting that delegation is the same one I use everywhere else: trusted source, bounded scope, low stakes. The GP has a medical degree. The course is five days. The downside of unnecessary cetirizine is mild drowsiness. So I don't review the work. I just execute.

The same week, someone asked me how I use AI coding agents. I said I treat the output as a black box. I don't read every line the agent writes. Instead, I write tests first — describe the behaviour I want, set up the boundary conditions, define what correct looks like. Then I let the agent fill in the implementation. If the tests pass, the code is acceptable. If they don't, I feed the failure back and let it try again.

This unsettles people. You don't read the code? Not line by line, no. I read it the way I read a doctor's prescription — enough to check it's not obviously insane, not enough to second-guess every decision. The verification happens at the boundaries, not in the internals.

The pattern is the same in both cases, and it's the same pattern that shows up in every functioning organisation. A senior engineer doesn't rewrite their junior's pull request. A CEO doesn't redesign the marketing campaign. A patient doesn't reformulate their antibiotics. What they do is:

1. **Choose who to delegate to** — credentials, track record, fit for the task
2. **Define the boundaries** — scope, timeline, what "done" looks like
3. **Verify at the edges** — does the output meet the spec? Do the tests pass? Did the symptoms resolve?
4. **Inspect the internals only when the edges fail** — if the tests break, read the code. If the side effects are bad, call the doctor.

The failure mode isn't trusting too much. It's trusting wrong — delegating to an unqualified source, or delegating without defining what success looks like. A doctor with no degree is dangerous. An AI agent with no tests is dangerous. But the danger isn't in the delegation itself. It's in the missing verification layer.

There's an irony here. The people most resistant to treating AI-generated code as a black box are often the same people who treat their doctor's prescription as one without a second thought. And the people who insist on reading every line of generated code are often the same ones who'd never dream of questioning a specialist's diagnosis. The trust heuristic is identical — we just apply it inconsistently because code feels like it should be understood and medicine feels like it shouldn't be questioned.

The real question isn't whether to delegate. You're already delegating constantly — to tools, to colleagues, to professionals, to systems you built last month and no longer fully remember. The question is whether your verification is happening at the right layer. Are you checking the boundaries or auditing the internals? Are you running tests or reading every line? Are you finishing the course or re-diagnosing yourself on day two?

Delegation is delegation. The only thing that changes is the domain.
