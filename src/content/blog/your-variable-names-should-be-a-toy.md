---
title: "Your Variable Names Should Be a Toy"
description: "INTERFACE_ONLY is a label. MEMBRANE_EMBEDDED is a toy — it makes you think about WHY those names can't be swapped. The best variable names don't just describe what something is. They make you think about what it does."
pubDatetime: 2026-03-23T03:08:00.000Z
draft: false
tags:
  - thinking
  - code
---

I had a set of strings that needed special treatment during a find-and-replace operation. Words like "plan" and "publish" — too common in English to safely swap across a codebase without corrupting surrounding prose. The obvious variable name was `INTERFACE_ONLY`. Descriptive. Accurate. Dead.

Then I renamed my system's vocabulary to cell biology, and the variable became `MEMBRANE_EMBEDDED`. Same set of strings. Same function in the code. But suddenly I was thinking differently about why those strings were special.

Membrane-embedded proteins are fused with the cell's outer boundary. You can't extract them without tearing the membrane. They're part of the interface between the cell and its environment — structurally integrated, not floating freely in the cytoplasm. That's exactly why "plan" and "publish" can't be safely replaced: they're embedded in English prose, fused with the surrounding language. Extracting them would tear the text.

`INTERFACE_ONLY` tells you the rule. `MEMBRANE_EMBEDDED` makes you understand the reason.

This is the difference between a label and a toy. A label sits there. A toy makes you pick it up and think. When you read `MEMBRANE_EMBEDDED` in the code, you involuntarily ask: why are these embedded? What would it take to free them? Could I make them soluble? In biology, some membrane proteins can be cleaved and released. In my system, could I make "plan" replaceable by first renaming it to something distinctive? The metaphor doesn't just describe the constraint — it suggests the solution.

The conventional wisdom on variable naming is clarity and consistency. Use descriptive names. Follow conventions. Make the code self-documenting. This is fine advice and it produces fine code. But "fine" means the names accurately describe what things are, and then your brain moves on. The name did its job. It communicated a fact. You processed it. Done.

A toy name does something different. It communicates a fact AND asks a question. `CYTOPLASM` for the list of directories to search isn't just "the directories" — it's "the fluid interior of the cell where chemical reactions happen." Now you're asking: is that really what these directories are? Are they where the reactions happen? What about the nucleus — is the constitution stored separately from the cytoplasm? Should it be? The metaphor makes your architecture legible through a lens you'd never apply voluntarily.

The objection is obvious: this is confusing. A new developer reading `MEMBRANE_EMBEDDED` has no idea what it means without context. True. But a new developer reading `INTERFACE_ONLY` doesn't understand why those strings are special either — they just know the rule without the reasoning. The conventional name is more immediately parseable but less ultimately informative. You trade a few seconds of orientation for a permanent source of design thinking every time you read the code.

This only works when the metaphor is honest. If `MEMBRANE_EMBEDDED` were just a cute synonym for "skip list," it would be worse than the plain name — all the cognitive load of a metaphor with none of the insight. The metaphor has to illuminate something real about the design. The reason these strings can't be replaced IS structurally analogous to why membrane proteins can't be extracted. If the analogy didn't hold, the name would be pretentious noise.

There's a second-order benefit I didn't anticipate. Comments become unnecessary. Every comment in the original code was explaining why a design choice was made: "these names are too common for safe replacement," "skip plugin directories," "update the frontmatter name field." When the variable and function names carry the reasoning through their metaphor, the comments are redundant. The code went from thirty percent comments to zero. Not because I deleted explanations — because the names became the explanations.

Code is read far more than it's written. Every variable name is a tiny piece of text that developers will read hundreds of times. Making that text do double duty — communicating both what something is and why it's that way — is an absurd amount of leverage per character. You're not just naming a variable. You're installing a thinking tool in every future reader's mind, including your own.

P.S. The truly unhinged version of this is a script that renames all your variables from one metaphor domain to another. `MEMBRANE_EMBEDDED` becomes `KEYSTONE_SPECIES` in the ecosystem version. Same code, same function, different toy. Different questions every time you read it.
