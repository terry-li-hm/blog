---
title: Your Ground Truth Is Someone Else's Process Outcome
author: Terry Li
pubDatetime: 2026-03-18T12:10:00+08:00
modDatetime: 2026-03-18T12:20:00+08:00
slug: your-ground-truth-is-someone-elses-process-outcome
featured: false
draft: false
tags:
  - ml
  - governance
  - banking
description: When your model's labels come from human decisions rather than reality, you're not measuring what you think you're measuring.
---

In financial crime compliance, a suspicious activity report means someone decided to file. It does not mean the customer is a criminal. A report that was never filed doesn't mean the customer is clean — it means nobody looked hard enough, or the analyst had a bad day, or the case sat in a queue too long.

This sounds obvious when stated directly. But watch what happens when you build a model on these labels.

The model learns to predict filing decisions — human process outcomes — not criminal activity. When someone says "the model has a low miss rate," they mean few *filed reports* fell below the threshold. Nobody knows how many actual criminals the model scored as low-risk, because "actual criminal" isn't in the dataset. It never was.

This isn't specific to financial crime. It's everywhere supervised learning touches human institutions:

- **Credit risk:** "default" means the borrower stopped paying, not that the loan was a bad decision. Some defaults come from job loss, not creditworthiness. Some non-defaults come from family bailouts, not the borrower's ability to repay.
- **Medical diagnosis:** training labels come from what doctors diagnosed, not what patients had. Rare diseases get mislabelled as common ones. Demographic bias in diagnosis becomes demographic bias in the model.
- **Content moderation:** "harmful content" means a moderator flagged it. Moderators disagree with each other 20-30% of the time on edge cases. The model learns the average moderator's judgment, not some objective standard of harm.

The pattern: **your labels are downstream of a human process, and the process has its own error rate, incentives, and blind spots.** The model inherits all of them and adds none of its own insight about the underlying reality.

This matters most when the model's predictions feed back into the same process that generated the labels. The model scores cases, humans review the high-scoring ones, their decisions become next year's training data. The loop is closed. The model converges on predicting what humans do, which is all it was ever trained to do. Whether this has anything to do with the actual objective is an article of faith, not an empirical finding.

The uncomfortable implication: **evaluating the model against historical labels tells you how well it mimics the process, not how well it achieves the goal.** A model that perfectly predicts analyst decisions is perfectly useless if analysts are systematically missing a category of problem. And you'd never know from the metrics.

What breaks the loop? External signals — regulatory inquiries, third-party notifications, media reports. These come from outside the process and occasionally reveal that someone the process cleared was actually a problem. But these signals are rare, slow, and unsystematic. They're the only window into ground truth, and the window is tiny.

If you're building models on human-decision labels, at minimum, be honest about what you're measuring. You're predicting the process, not the world. That's useful — process consistency has value. But don't mistake it for something it isn't.
