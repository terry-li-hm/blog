---
title: "The Three Paradigms of Agent Knowledge"
description: "Agent knowledge systems have three fundamental paradigms: static context, dynamic tools, and retrieval. Most stop at two. The third is the biggest unexploited opportunity."
pubDatetime: 2026-03-18T14:59:51.000Z
draft: false
tags: [ai-agents, rag, architecture]
---

I recently restructured a personal agent configuration that had grown to 181 skill files. The process forced me to think carefully about how an agent gets the knowledge it needs at the right moment. What emerged was a clean taxonomy — three paradigms, each with a different answer to the question of *what decides what the agent knows right now*.

## The three paradigms

| Paradigm | Mechanism | Who decides what loads |
|---|---|---|
| **Static context** | Files injected into the prompt at startup | The author |
| **Dynamic tools** | Tool servers respond to explicit calls | The LLM |
| **Retrieval** | Search over a knowledge base at query time | Relevance |

These aren't mutually exclusive. A production agent might use all three simultaneously. But most systems are heavily biased toward the first two, and the third is underbuilt almost everywhere.

## Where most systems stop

**Paradigm 1 (static)** is the default. You write a CLAUDE.md, a system prompt, a set of instructions. The agent loads them at startup and carries them for the session. It's simple, predictable, and wrong at scale — because knowledge grows faster than any static file can accommodate without becoming noise.

The 181-skill problem is a version of this. When a system prompt enumerates every available skill by name and description, the agent has to hold all of it in context simultaneously. Most of it is irrelevant to any given task. The cognitive load compounds: the agent filters through skill descriptions looking for matches, the context window fills with declarations that will never fire, and the actual task starts drowning in preamble.

**Paradigm 2 (dynamic tools)** is the common upgrade. Add MCP servers — file system access, calendar, browser. Now the agent can decide when to call out for information. The static prompt defines *what tools exist*; the LLM decides *when to use them*. This is a real improvement. The agent can fetch only what it needs, when it needs it.

But it still requires someone to decide to call. The agent has to know it needs something before it can ask for it. The knowledge that would change how it frames the problem — the relevant prior context, the constraint buried in a reference doc, the pattern it's seen before — never surfaces if nobody thought to reach for it.

## Why paradigm 3 changes the frame

Retrieval inverts the decision structure. Instead of the author pre-loading what's relevant, or the LLM deciding to call for something specific, a retrieval layer watches the conversation and surfaces knowledge based on semantic similarity to what's happening right now.

Concretely: imagine the 181-skill system with a retrieval layer. The agent doesn't load all 181 skill descriptions at startup. Instead, as the conversation develops, the retrieval system identifies which 3-5 skills are most relevant to the current context and injects only those. The signal-to-noise ratio inverts. The agent works with a small, highly relevant context rather than a large, mostly-irrelevant one.

The same pattern applies to any knowledge base. Reference documentation, past decisions, project constraints, domain-specific heuristics — instead of the author deciding what to include in the static prompt, or the agent deciding to call for something it already knows exists, the right material arrives because it's relevant.

This matters most at the edges: the knowledge you didn't know to include, and the constraints you forgot were relevant. Static prompts encode what the author anticipated. Retrieval encodes what actually matches.

## What paradigm 3 looks like in practice

The minimal version isn't a full vector database. For a skills system, it's an embedding of each skill description indexed at startup, with a retrieval call at each conversation turn that re-scores and injects the top-k matches into the live context. The skill descriptions stay static; the injection is dynamic.

For a larger knowledge base, the architecture is closer to classic RAG — but with one key difference in framing. Most RAG systems are built as retrieval-on-demand: the user asks a question, the system retrieves, the model answers. What I'm describing is retrieval-as-ambient-context: the system continuously updates what the agent knows based on where the conversation is going, without requiring an explicit query.

The agent doesn't grep. It doesn't ls. It doesn't ask "do I have a skill for this?" The relevant context is already there when it needs it.

Three paradigms. Most agent systems exploit two of them. The third is the one that makes the system feel like it actually knows you.

**Related:** [AI Tool Architecture](AI Tool Architecture) · [Claude Extended Reference](Claude Extended Reference)
