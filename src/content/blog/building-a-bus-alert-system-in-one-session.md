---
title: "Building a Bus Alert System in One Session"
description: "How a real need on a Hong Kong bus turned into a GPS-powered alert system in under two hours"
pubDatetime: 2026-03-15T14:40:08.000Z
draft: false
tags: [building, ai-tools, hong-kong]
---

I was on bus 671 heading to a kids' playhouse in Kwun Tong. My CLI tool `iter` tells me which stop to get off at, but it requires pressing Enter at every stop — not great when you're wrangling a toddler.

So I asked: can this be automatic?

## The wrong first answer

My first instinct was to poll KMB's real-time ETA API. The bus company publishes estimated arrival times per stop. Poll it every 30 seconds, send a Telegram alert when the ETA drops below 3 minutes. Simple.

But the ETA API tells you when the *next bus* arrives at a stop, not when *your specific bus* reaches the destination. With multiple buses on the same route, you'd get the wrong one's ETA.

## The right architecture emerged from constraints

I SSH from my phone (Blink on iOS) to my home Mac. The CLI runs on the Mac, not the phone. So "just use GPS" doesn't work directly — the Mac doesn't know where I am.

But I already had two pieces in place: Tailscale connecting my phone to my Mac, and OwnTracks (an iOS app) that can POST GPS coordinates to any HTTP endpoint. The missing piece was tiny: a 60-line Python server that receives the POST and writes a JSON file.

```
OwnTracks (iPhone) → Tailscale VPN → HTTP receiver (Mac :8924) → current.json
```

Then `iter --watch` reads that file every 5 seconds, computes distance to each stop via haversine, and fires a Telegram alert when I'm 2 stops away.

## What actually shipped

In about 90 minutes, with the code delegated to Codex while I orchestrated:

- **Substring matching** — "Ngau Tau Kok" now correctly matches "Kwun Tong Bbi - Ngau Tau Kok Station" instead of a fuzzy-match false positive
- **`--watch` mode** — passive GPS tracking, Telegram alerts, no button presses
- **Auto-boarding detection** — just say the destination, iter finds where you are
- **Stale location warning** — if GPS data is >10 minutes old, warns you to open OwnTracks
- **Location receiver** — accepts both OwnTracks and Overland formats, runs as a LaunchAgent

## The general pattern

The best personal tools start from a moment of friction, not a product roadmap. I didn't set out to build a location system. I was on a bus and couldn't press a button. Each fix revealed the next need — fuzzy matching was wrong, then manual tracking was annoying, then GPS needed a transport layer.

The location system is now available to every other tool on my Mac. Weather, commute times, context-aware reminders — all can read `~/.local/share/location/current.json`. One afternoon's annoyance became permanent infrastructure.

Build from irritation, not imagination.
