---
title: "Backtest vs Operational Validation: The Control You Think You Have"
description: >-
  We presented a model control to a regulator. It had never actually fired.
  The gap between validated-by-backtest and validated-in-production is invisible
  until someone asks.
pubDatetime: 2026-03-06T19:30:00.000Z
draft: false
tags:
  - model-risk
  - banking
  - ai
  - validation
  - production
---

We presented a model control to a regulator. It had never actually fired.

The control was real. The logic was sound. The backtest showed it working correctly on historical data. What the backtest couldn't show — what no backtest can show — is whether the control works in the operational environment it was actually deployed into. Because the operational environment is different from the historical data in ways that matter.

The specific case: a suppression mechanism for a customer population that had been dormant for an extended period. The model's logic was correct — when the customer met the re-engagement criteria, the control would trigger a review. On historical data, it triggered reliably. In production, the population it was designed to protect had never actually entered the dormant state during the deployment window. The control had never been exercised. Its logic remained untested by anything other than simulation.

When the regulator asked about reactivation latency — how long from trigger condition to actual review — nobody could answer from production experience. The answer existed in the design documentation. It didn't exist in the operational record.

This gap between "validated by backtest" and "validated in production" is common, underappreciated, and matters specifically in the contexts where controls are most critical. Model monitoring, anomaly detection, circuit breakers, fallback logic, suppression mechanisms — all of these tend to be designed for failure conditions that, in a healthy system, don't occur during the validation window. You're building controls for the situation you're not in. The backtest validates the logic on data where the situation has occurred. The production system operates, undisturbed, in conditions where the control has never fired.

The implication for model risk governance is specific: proving that a control works on historical data proves it works in the world you no longer live in. It's a necessary condition, not a sufficient one. A model risk framework that treats backtest validation as equivalent to operational validation is systematically blind to this gap.

What operational validation actually requires is more demanding. End-to-end testing in a controlled production environment — not simulation, not shadow mode, but actual firing of the control with the monitoring infrastructure active and the resulting workflow tracked through to completion. For suppression mechanisms: actually suppressing a test case and verifying that the review process activates correctly. For circuit breakers: actually triggering the circuit and verifying the fallback behavior. For anomaly detection: actually injecting an anomalous signal and verifying the alert reaches the right person.

This is expensive. Some controls can only be tested in ways that are operationally disruptive or that require the production team to deliberately induce a failure condition. But the alternative — discovering at a regulatory examination that a key control has never been exercised — is more expensive in a different way.

The practical minimum is documentation of what "operational validation" means for each control, with an honest accounting of which controls have been exercised in production and which have only been validated on historical data. That honesty changes the risk profile. A control that works correctly on backtests but has never fired in production carries a different residual risk than one that has been exercised and worked as designed. Treating them identically in a risk assessment is a category error.

The question regulators are increasingly likely to ask — and that model risk committees should be asking before regulators do — is not "did you validate the model?" but "which controls have you actually tested in the operational environment, and how?" The gap between those two questions is where most model risk frameworks are currently under-prepared.

---

P.S. The hardest part of this problem isn't the testing itself — it's the organizational willingness to create conditions where controls fire in production. In a well-functioning system, nothing goes wrong, and controls never trigger. Deliberately triggering them feels like creating a problem. But a control that's never been exercised in production is a theoretical protection, not a real one.
