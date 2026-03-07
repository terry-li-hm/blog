---
title: "The Trust Spectrum"
description: "Peter Steinberger stopped reviewing AI-generated code entirely. That works for indie software. In regulated environments, it can't. Here's how to think about where you sit."
pubDatetime: 2026-03-07T00:46:57.000Z
draft: false
tags: ["engineering", "production", "financial-services", "responsible-ai", "ai-agents"]
---

Peter Steinberger has stopped reading code. He runs several projects simultaneously, dispatches tasks across parallel AI agents, and monitors output streams instead of reviewing source files. The bottleneck, in his framing, is no longer whether the model can produce correct code — it's inference time. So he optimises for dispatch throughput rather than review depth.

This is a coherent position. For the projects he's building — personal tools, indie software, single-user products — the failure mode of an unreviewed subtle bug is mostly self-contained. He's the one who notices, he's the one who fixes it. The feedback loop is short and cheap.

It can't transfer directly to regulated environments, and I think it's worth being explicit about why.

The issue isn't trust in the model. It's that in a bank, "I monitored the output stream" is not a defensible audit trail. The risk isn't just that a bug exists — it's that a bug exists and you can't demonstrate you exercised appropriate oversight when the code was deployed. Regulatory frameworks in finance don't just require correct outputs. They require evidence of a process. Model risk management guidelines, HKMA GenAI sandbox guidance, the FCA's expectations for algorithmic systems — all of them ask the same question: how did you know it was right before you ran it?

So the trust spectrum question isn't "do I trust AI enough to stop reviewing?" It's a per-project question: what does failure look like here, and who notices?

For a personal CLI tool: failure is a wrong output. I notice immediately. Trust high, review light.

For an internal analysis prototype: failure is a wrong conclusion. A colleague might catch it. Trust moderate, spot-check review.

For a production model that feeds credit decisions: failure is a systematic bias embedded in a live system affecting real customers. The regulator notices eighteen months later. Trust irrelevant — the process is mandatory regardless of confidence.

Most organisations working with AI are operating somewhere in the middle of this spectrum without having explicitly mapped where they sit. The Steinberger approach is seductive because it's fast and it works — for his context. The skill is recognising your context isn't his. Not because AI is less capable, but because the accountability structure around your output is different.

The useful question to ask on any AI-assisted project: if this produces a wrong output, who finds out, how quickly, and what are the consequences? Let that answer calibrate how much process you layer around the model. Not less than necessary. Not more than warranted.

When agents are involved in that process, the oversight question extends further — you need the execution record, not just the output. That's the argument in [Traces Are the New Debugger](/posts/traces-are-the-new-debugger/).
