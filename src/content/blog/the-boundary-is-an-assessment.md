---
title: "The Boundary Is an Assessment"
description: "The tool/skill distinction isn't a property of the capability. It's a property of the context it operates in."
pubDatetime: 2026-03-24T09:15:31.000Z
draft: false
tags: [ai-agents, architecture, design]
---

The tool/skill distinction isn't a property of the capability. It's a property of the context it operates in.

Here's the test I use: can you pre-commit to success criteria before seeing the output? If yes, it's a tool. If the output is what you're using to decide whether it worked, it's a skill.

That sounds like a clean binary. It isn't. The answer changes depending on who's asking.

Take email sorting. A bank with five stable categories -- urgent client, regulatory, internal ops, vendor, junk -- and two years of consistent usage can pre-commit to success criteria. Route to the wrong folder more than 2% of the time and it's broken. That's a tool. The patterns are hardened. The failure mode is deterministic. You can write a test suite.

Same capability at a Series A startup where the categories shift every quarter. "Urgent" means something different after they close a round, land a big customer, or pivot. The success criteria can't be written in advance because what counts as success is still being discovered. That's a skill. It requires judgment. Someone needs to be in the loop deciding whether the output was right, and that judgment feeds back into the system.

Same capability. Different classifications. The difference isn't in the code -- it could be the same model, same prompt, same infrastructure. The difference is in how stable the patterns are in the org running it.

This has a temporal dimension too. The startup's email sorter is a skill today and a tool in three years, assuming they survive and their categories stabilize. Skills demote to tools as patterns harden. That's not a failure -- it's the natural lifecycle. A skill that never demotes is either handling genuinely novel judgment calls or hasn't been looked at closely enough.

The implication that matters: you can't classify a capability once and ship it. You're making an assessment about the current state of the patterns in a specific organization. That assessment has an expiry date. Something built as a skill that gets treated as a tool after the org scales is dangerous -- the judgment gates that were keeping it honest get removed because "we trust it now," right at the moment the distribution has shifted enough that you shouldn't.

The classification is also spatial across organizations. What one bank has hardened into a tool is still a skill at the bank down the street with less data or a different product mix. Vendor benchmarks that report aggregate accuracy obscure this entirely. The benchmark is measuring the tool in the orgs where it's a tool. The orgs where it's still a skill are underrepresented -- they're the ones that have already quietly stopped using it.

The practical upshot: when evaluating any AI capability, the first question isn't "how accurate is it?" It's "how stable are the patterns we're deploying it against?" That question determines whether you need a test suite or a judgment loop. Those are different engineering problems with different ongoing costs. Conflating them is how organizations end up with tools they're operating as skills (expensive, ad hoc) or skills they're operating as tools (wrong, with no one noticing).

The boundary is an assessment. Make it explicitly, and revisit it.

---

**Related:** [Tools Are Instruments Skills Are Recipes](Tools Are Instruments Skills Are Recipes) · [Agentic Engineering Less Is More](Agentic Engineering Less Is More) · [Exoskeleton Not Colleague](Exoskeleton Not Colleague)
