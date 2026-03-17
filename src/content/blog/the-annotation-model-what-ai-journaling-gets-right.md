---
title: "The Annotation Model: What AI Journaling Gets Right"
description: "Most AI writing tools want to chat with you. The better model is annotation — AI that reads what you wrote and leaves margin notes."
pubDatetime: 2026-03-17T09:19:16.000Z
draft: false
tags: [ai, tools, design]
---

Most AI writing tools get the interaction model backwards. They want to be your co-author or your therapist — a conversational partner who helps you write or processes what you've written through dialogue. The better model is annotation.

Mindsera, an AI journaling app I've been watching, stumbled onto this distinction with their "Minds" feature. A Mind isn't a chatbot. It's a lens that *reads your writing and leaves inline comments*, like a colleague reviewing a Google Doc. You write first — unassisted, no prompts, no AI hovering. Then you invite perspectives to annotate what you've already produced.

The difference matters because conversation and annotation serve different cognitive functions. Conversation pulls you toward the other party's frame. Annotation preserves yours. When an AI chats with you about your journal entry, it's steering — even if gently. When it annotates, it's reflecting. Your text stays intact. The AI's observations sit alongside, not inside.

I built this pattern into [lararium](https://github.com/terry-li-hm/lararium), my vault-resident personalities tool. The `annotate` command sends a note to each resident, who reads it and leaves `> [!quote]` callout blocks — not rewrites, not suggestions, just reactions in character. The Mourner reads your project plan and notices you abandoned something similar last quarter. The observation lands differently as a margin note than it would as a chatbot message.

The design principle generalises beyond journaling: **AI that reads your output and reacts is more useful than AI that participates in producing it.** Code review over pair programming. Margin notes over tracked changes. Annotation preserves the human's cognitive ownership of the work while still surfacing what they'd miss alone.

The second insight from Mindsera is ambient retrieval — a "Past Memories" persona whose only job is surfacing related things you wrote before, while you write now. Not on-demand search. Unsolicited, contextual resurfacing. I built a simpler version of this (`propinqua`) that queries a semantic index and appends related notes as callouts. It's crude but directionally right: the value of a personal knowledge base compounds when retrieval happens automatically at the point of creation, not just when you remember to search.

Both patterns share a philosophy: the AI's job is to enrich the margins, not occupy the centre.
