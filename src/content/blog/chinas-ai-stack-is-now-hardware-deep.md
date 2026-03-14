---
title: "China's AI Stack Is Now Hardware-Deep"
description: "DeepSeek V4 launching on Huawei Ascend NPUs signals that China's AI ecosystem is decoupling at the silicon layer \u2014 deeper and more durable than model-level divergence."
pubDatetime: 2026-03-14T09:09:49.000Z
draft: false
tags: ["china", "ai-governance", "banking", "geopolitics", "hong-kong"]
---

Most analysis of China's AI trajectory focuses on the model layer — DeepSeek vs GPT, Ernie vs Claude. That framing is accurate but shallow. What happened in March 2026 is more structural.

DeepSeek V4 launched on Huawei Ascend NPUs and deliberately excluded Nvidia from early access. This isn't a procurement preference driven by price or availability. It's a deliberate architecture choice to build a complete AI stack — from silicon to weights — that sits outside US export control reach and US-origin supply chain risk.

For the past two years, a bank operating across HK and mainland China had one dimension of AI divergence to manage: different models in different jurisdictions. Now there are two. The hardware running those models is bifurcating in a way that creates fundamentally different risk profiles:

- Huawei Ascend infrastructure sits on the US entity list, which triggers sanctions screening implications for any institution with US operations
- Existing AI vendor due diligence frameworks assume NVIDIA/TSMC provenance — the standard chips that pass standard supply chain checks
- 'Domestic' mainland AI vendors will increasingly mean 'Ascend-native,' a hardware dependency that is currently invisible to most vendor assessment processes

The governance question isn't which model to run in mainland China. It's whether the hardware that model runs on is compatible with the bank's sanctions, supply chain, and operational resilience obligations — and whether anyone in model risk currently knows how to assess that.

Model-level divergence was always visible in the stack: you can read the model card and check the API terms. Hardware-level divergence is buried deeper. You don't see it in the inference endpoint; you see it when a compliance team discovers the underlying infrastructure has a sanctions flag.

The AI governance frameworks that banks are building right now mostly address model risk, not hardware risk. That scope needs to expand.
