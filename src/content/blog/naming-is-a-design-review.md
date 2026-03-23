---
title: "Naming Is a Design Review"
description: "Every biological name is a testable hypothesis about what your system should do."
pubDatetime: 2026-03-23T14:07:24.000Z
draft: false
tags: [ai-systems, design, vivesca]
---

I named my token budget tool "respirometry" — measuring metabolic consumption rate. Two minutes later I realised the tool only measures fuel level. Real respirometry measures the *respiratory quotient*: the ratio of output to input. Efficiency, not just depletion.

The name was smarter than the implementation.

This happened five times in one evening:

- **Respirometry** revealed a missing yield metric (output quality per token consumed)
- **Consolidation** (hippocampal memory processing) revealed that memory cleanup should happen after sessions, not on a weekly calendar — because consolidation happens during sleep, not on a schedule
- **Anamnesis** (medical history-taking) revealed that context loading should be selective — an experienced doctor adjusts questions based on early signals, not a uniform checklist
- **Histone marks** (epigenetic regulation) revealed that status tracking needs multiple dimensions, not just done/in-progress/queued — because histone modifications are combinatorial
- **Anabolism** (building complex molecules) revealed that supply-driven work should converge — many inputs into few high-quality outputs, not scatter

The pattern: pick a biological name that honestly maps to what your component does. Study what that biological process *actually* does — not the Wikipedia summary, but the key properties. Compare those properties to your implementation. The gap is your design insight.

Every name is a hypothesis: "this component behaves like [biological process]." The hypothesis is testable. Study the biology, check whether the implementation matches. Mismatches are design gaps hiding in plain sight.

This isn't about decoration. It's about using a mature domain (4 billion years of iteration) as a design review tool. The biology already solved your problem. The name is how you find the solution.

Most naming conventions optimise for readability. This one optimises for discovery.
