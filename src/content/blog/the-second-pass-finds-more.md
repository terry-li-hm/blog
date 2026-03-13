---
title: "The second pass finds more"
description: "When red-teaming a document with multiple AI models, the second review — run on the edited version — consistently finds more than the first. Here's why, and what it means for how many rounds to run."
pubDatetime: 2026-03-12T05:37:55.000Z
tags: ["ai", "consilium", "workflow"]
---

I ran three rounds of multi-model red-teaming on the same document this week, as a deliberate experiment. Same mode each time, same question framing, incrementally updated document. The yield surprised me.

Round one found four structural issues the single-model review had missed entirely. Round two — run on the edited version — found four more. Round three found two real things buried in a sea of overcorrection.

The expected pattern would be geometric decay: each round catches less because there's less to catch. What actually happened was different. Round two was nearly as productive as round one, even though the document had already been improved. Sometimes it was more productive on specific dimensions.

The reason, I think, is that edits expose structure. When you label a metric's provenance ("agent-rated"), you're not just adding information — you're inviting the question "is that provenance valid?" When you add a hardware detail, you're inviting "can you defend the specs?" The original document had vague claims that nobody could audit. The edited document had specific claims that the models could now attack. Round one couldn't find what wasn't visible yet.

There's a name for this pattern in security: the attack surface expands when you add features. The same principle applies to documents. Specificity is a gift to reviewers.

The practical upshot: if you're going to run two rounds, run the second one on the edited artifact, not the original. The sequence is: first pass → implement fixes → second pass on the revised version. This is the opposite of what feels natural — the temptation is to run multiple passes on the original before touching it, then edit once at the end. But that's leaving yield on the table.

Round three confirmed what an older experiment with CVs had already suggested: diminishing returns set in hard after round two. The findings were real but minor, and most of the output was overcorrection — the models flagging things that were fine, proposing changes that would have made the document worse, hallucinating risks that didn't exist. At some point the signal-to-noise ratio inverts.

Two rounds is the sweet spot. First pass on the original, second pass on the edited version. After that, you're mostly paying for noise.
