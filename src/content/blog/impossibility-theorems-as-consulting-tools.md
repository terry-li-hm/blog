---
title: "Impossibility Theorems as Consulting Tools"
pubDatetime: 2026-03-18T00:00:00+08:00
tags: [consulting, ai-governance, frameworks]
draft: false
description: "Mathematical impossibility results are the best meeting-room weapons I know."
---

There is a class of client problem that looks like a decision but is actually a proof. The room is stuck not because the stakeholders disagree, but because they are collectively attempting to satisfy a wish-list that cannot be satisfied. No vendor can deliver it. No team can build it. The constraints are mutually exclusive by construction.

The best thing you can do in that room is name the theorem.

---

I encountered this most sharply while studying AI fairness for a risk certification. The context was credit models, but the pattern generalises. A lending institution wants its model to be fair. Reasonable. So it specifies what fair means: equal approval rates across demographic groups (demographic parity), equal accuracy for the people it approves (predictive rate parity), and equal detection rates for qualified applicants (equal opportunity). Three conditions. All sensible. All politically defensible.

Except they cannot all hold simultaneously when the underlying default rates differ between groups.

This is not an implementation problem. Chouldechova proved it in 2017. The three quantities — precision, false positive rate, and false negative rate — are linked by base rate through Bayes' theorem. Fix two of them and the third is determined. When base rates differ across groups, the only way to satisfy all three fairness conditions is a model with perfect accuracy. No real model achieves this. The wish-list is not ambitious; it is incoherent.

Kleinberg and colleagues proved the same thing from a different angle: a model that is well-calibrated (a score of 0.7 really does mean 70% default probability, for every group) cannot simultaneously equalise true positive rates and false positive rates across groups when base rates differ. Again, perfect accuracy is the only escape hatch.

What the theorems say, in plain language: the client is not failing to find the right fairness measure. They are asking for something that cannot exist.

---

This reframes the conversation entirely.

Before: which vendor can deliver all three? Which team is skilled enough to make it work? What is blocking us?

After: which trade-off matches your values?

That second conversation is harder and more productive. Equalising approval rates regardless of underlying risk is one defensible choice — it prioritises access over accuracy, which may be exactly right for a historically excluded group. Equalising precision is a different choice — it says every approval should carry the same default risk regardless of group, which is the actuarial standard and the lender's natural preference. Equalising detection rates for truly qualified applicants is a third choice — it says qualified people should not be disproportionately rejected, which is where employment law tends to land.

None of these is objectively correct. Each reflects a values position about who bears which errors. The impossibility theorem does not answer that question. It clarifies that the question exists, that it cannot be avoided, and that someone in the room must own the answer. That someone is not the data science team.

---

The fairness impossibility is the one I know most concretely, but it is not an isolated result. The same structure appears repeatedly.

Arrow's impossibility theorem (1951) says there is no voting system that simultaneously satisfies a small set of apparently reasonable criteria for aggregating individual preferences into a social ranking. The criteria are: if everyone prefers A to B, the system should rank A above B; the ranking between A and B should not depend on attitudes toward C; and the system should not be dictatorial. Impossibility. The political conversation that looked like "which voting system is fairest?" is actually "which criterion do you sacrifice?" The answer is a values choice, not a technical one.

The CAP theorem in distributed systems says a networked data store cannot simultaneously guarantee consistency (every read returns the latest write), availability (every request gets a response), and partition tolerance (the system continues operating when network links fail). Partition tolerance is non-negotiable in practice — networks fail. So the real decision is consistency versus availability. High-stakes financial systems tend to choose consistency and accept that some requests fail when the network degrades. Consumer-facing systems often choose availability and accept that different nodes may temporarily return stale data. This is a design values choice. Framing it as a CAP tradeoff ends circular debates about why the system cannot have both.

The pattern: a set of individually reasonable requirements turns out to be jointly unsatisfiable. The impossibility proof is the tool that surfaces this. It moves the conversation from "why can't we get this working?" to "which property do we care about most?"

---

In practice, knowing these results gives you a specific move in a stuck conversation.

When a client is circling — same objections, no convergence, the sense that every option has a fatal flaw — the question to ask is: are these constraints actually compatible? Sometimes they are compatible and the blockage is political. But sometimes the committee has collectively written down a logically impossible requirement, and nobody has said so because saying so feels like giving up.

Naming the theorem is not giving up. It is the prerequisite for making a decision. Once the impossibility is on the table, the conversation shifts from "how do we get all of this?" to "given that we cannot have all of this, which of these matters most, and who decides?" That second conversation has an answer. The first one does not.

The client is not failing. They are asking for something that cannot exist. That distinction matters — both for the relationship and for what comes next.
