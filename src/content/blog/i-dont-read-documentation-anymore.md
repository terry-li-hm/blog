---
title: I Don't Read Documentation Anymore
description: >-
  When AI can execute complex setups through conversation, learning shifts from
  reading documentation to observing execution.
pubDatetime: 2025-08-20T10:00:00.000Z
draft: false
tags:
  - learning
  - documentation
  - ai
  - claude-code
  - observation
---

I haven't read documentation in three weeks. Not because I stopped building things, but because I stopped needing to read about building things.

This realization hit me yesterday when I needed to integrate a payment system. My muscle memory reached for Stripe's documentation, then stopped. Instead, I opened Claude Code and described what I needed: "Set up Stripe for subscription payments with webhook handling and tax calculation." Forty minutes later, I had a complete integration including error handling, webhook validation, and tax compliance. I never visited docs.stripe.com.

The cognitive shift is subtle but fundamental. Traditional learning follows a read-understand-implement pattern: absorb documentation, internalize concepts, then translate knowledge into working code. But when AI can translate intent directly into implementation, this linear progression becomes unnecessary friction. Learning happens through observation rather than absorption, through pattern recognition rather than information retention.

Watch Claude Code configure a complex system and you learn more about architecture in twenty minutes than you would from reading documentation for two hours. You see the actual decisions being made in real-time: which configuration options matter, how services connect, where error handling fits, what security considerations apply. It's like having an expert narrate their thought process while implementing, except the narration happens through executable code rather than spoken words.

This observational learning is surprisingly effective because it captures something documentation rarely conveys: the decision-making process behind implementation choices. Documentation tells you what each API endpoint does, but watching Claude Code use those endpoints shows you why you'd call them in a specific sequence, how they relate to your broader application architecture, what happens when they fail. The difference between knowing facts about a system and understanding how to use that system effectively.

Consider the traditional debugging process when learning a new framework: encounter error, search documentation, find relevant section, read explanation, understand concept, apply fix. Now: encounter error, ask Claude Code to analyze and fix it, watch the solution emerge, understand the pattern through seeing it resolved. The learning happens at a higher level of abstraction — you absorb the problem-solving approach rather than memorizing specific error codes.

This shift raises interesting questions about what we actually need to know versus what we need to be able to direct. Do I need to memorize Stripe's webhook signature validation process, or do I just need to know that payment webhooks require signature validation for security? Do I need to understand Redis configuration syntax, or do I just need to know when caching improves application performance? The boundary between essential knowledge and queryable information keeps shifting. This reflects a broader transformation in [how we prioritize what and why over how](/posts/what-and-why-beat-how/)— implementation details become less cognitively important than strategic understanding.

The professionals who adapt to this shift become better at articulating requirements and recognizing patterns than at memorizing implementations. They develop intuition for what problems need solving rather than expertise in specific solution methodologies. They get good at steering systems they don't fully understand toward outcomes they can clearly envision.

But there's something lost in this transition too. The deep satisfaction of reading comprehensive documentation, building mental models of how complex systems work, feeling confident about understanding implementation details from first principles. That kind of knowledge creates a different relationship with technology — more intimate, more proprietary. When you've read the PostgreSQL documentation cover to cover, you feel like you own some piece of that knowledge in a way that's different from having successfully directed its configuration.

The question isn't whether this shift is good or bad, but how to adapt learning strategies to match new realities. Traditional technical education emphasized information acquisition: learn the concepts, understand the APIs, memorize the patterns. Emerging technical education needs to emphasize judgment development: recognize good problems, articulate clear requirements, evaluate implementation trade-offs, adapt to changing contexts.

The irony is that the less I read documentation, the more I understand about the systems I'm using. When learning happens through observation and direction rather than study and memorization, you develop different kinds of expertise. Less procedural fluency, more strategic insight. Less implementation knowledge, more architectural intuition. Less ability to build from scratch, more ability to adapt and integrate.

P.S. I wrote this article without once consulting writing guides or documentation about essay structure. Instead, I described my thinking to Claude Code, observed how it organized similar ideas, and adapted those patterns to my own voice and perspective. The meta-recursion is almost too perfect: learning about not reading documentation by not reading documentation about writing about not reading documentation. Sometimes the most effective way to understand a paradigm shift is to live it rather than study it.
