---
title: "Split on Access Control, Not Abstraction"
description: "Repo boundaries enforce access control, not abstraction. Directories handle abstraction. If two things have the same visibility requirement, they belong in the same repo."
pubDatetime: 2026-03-25T09:30:00.000Z
draft: false
tags: [organism, design, engineering]
---

I had four repos for one system.

metabolon was the MCP server. reticulum was hooks and infrastructure. skills was Claude Code plugins. lustro was the RSS reader. Every change touched multiple repos. One logical commit became four. One revert required four coordinated undos.

I knew something was wrong. I didn't know what.

---

I started asking "why?" at each boundary.

Why is metabolon separate from reticulum? Because MCP server vs. general infrastructure. But I'm the only developer. "Interface discipline" only matters when someone else is consuming your interface. When you're both producer and consumer, a separate repo just adds friction.

Merged.

Why is skills separate from that? Because plugins live in a different runtime -- Claude Code reads them from a directory, not from Python imports. True. But a directory inside the repo handles that. A directory is an abstraction boundary. A repo is not.

Merged.

Why is lustro separate? Because it's an RSS reader -- a different product, a different concern. But what data does lustro produce? Notes. Where do those notes go? Into the same vault that every other component reads. Where does the transduction pipeline live that processes them? In the same codebase. Separate repo, same system.

Merged.

I went from four repos to two. I tried to get to one. That's where the boundary held.

---

The boundary that held: public vs. private.

PII can't be in a public repo. Credentials, bank statement parsers, contact lists -- these require private hosting. The public repo can contain the organism; it cannot contain the instance. Two things that share the same access control requirement belong in the same repo. Two things with different access control requirements must be in different repos.

That's the only boundary that survives the question "why?".

vivesca is public -- the organism, the architecture, the tools. epigenome is private -- the instance data, the PII, the credentials. One clone for each. Everything lives in one of the two.

---

Here are the arguments that didn't survive.

"More repos = more atomic commits." The opposite is true. A change that spans repos can't be reverted as a unit. A cross-repo operation isn't atomic; it's four separate operations dressed up as one. Monorepo commits are actually more atomic.

"You can always merge later." Technically yes. But merging repos interleaves two histories. The resulting log is a mess. "You can always split later" is the cleaner version -- git filter-branch can carve out a subdirectory with clean history. Start merged, split only when forced.

"Separate repos enforce interface discipline." True for teams. Irrelevant for one developer. Interface discipline without a second consumer is just ceremony. When you have a second user who wants the package independently, split. Not before.

"Different release cadences." Directories change at different rates inside every monorepo. The Linux kernel manages a mix of components with radically different change rates in one repo. Change rate doesn't require a repo boundary.

---

The principle: repo boundaries enforce access control, not abstraction.

Abstraction is what directories, modules, and namespaces are for. They're cheap -- you can add them anywhere, rename them freely, nest them without ceremony. They carry no operational cost.

Repo boundaries carry operational cost. Separate clone, separate CI, separate deploy, separate issue tracker, separate contribution graph. Every cross-repo change multiplies that cost. The question isn't "are these different enough to separate?" It's "do these have different access requirements?"

If the answer is no, keep them together.

---

The meta-lesson: every "framework vs. application" split is premature until you have users who want one without the other.

I see this constantly in personal projects. Someone builds a thing, factors out the "general" part into a separate library, publishes it, then spends 30% of their time maintaining the library abstraction instead of the thing. The split was real -- the code genuinely was general. But no one wanted the general part without the specific part. The boundary was designed for a user who never showed up.

Split on demonstrated need, not anticipated need. The anticipation is almost always wrong.

Two repos. One git log per repo. One test suite per repo. The organism is public and the instance is private. Every other boundary dissolved when I asked why it existed.
