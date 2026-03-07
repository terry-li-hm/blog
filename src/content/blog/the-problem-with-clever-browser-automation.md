---
title: "The Problem With Clever Browser Automation"
description: "The most sophisticated solution to a problem is usually a sign you haven't found the right abstraction yet."
pubDatetime: 2026-03-07T03:46:52.000Z
draft: false
tags: ["tools", "engineering", "automation"]
---

There is a particular trap in software engineering where you build something impressively clever to solve a problem that shouldn't have required cleverness at all. The solution works, which is the dangerous part. It works well enough that you stop questioning whether you were solving the right problem.

I had a CLI tool for searching Chinese content platforms. The WeChat backend was the clever part: it connected to a real Chrome browser via the DevTools Protocol, opened tabs, injected JavaScript, extracted results, and closed tabs. About 150 lines of async websocket code managing browser state. It was sophisticated. It worked. It also required a dedicated Chrome instance running as a permanent background process, crashed on network changes, and broke whenever the target site's DOM updated.

The cleverness was necessary because WeChat search requires a real authenticated Chrome session — a standard headless browser gets detected and blocked by anti-bot systems, which is exactly the kind of sentence that should have been a warning sign. When the solution to "I need to search for content" becomes "I need to operate a real browser session that mimics a human," you have almost certainly missed a simpler path.

The simpler path was just asking a search API. Not the search engine I was trying to automate around — a different one entirely. A neural search API indexes WeChat public account articles directly. One subprocess call. No browser. No authentication. No session management.

The 36kr backend told the same story with an extra twist. The original code used the same Chrome protocol to load 36kr's JavaScript-rendered search results — a heavy single-page app that needed twelve seconds of wait time before the DOM was ready to scrape. When I tried to replace this with a lighter Playwright approach, I discovered that 36kr now blocks headless browsers entirely. The page loads but returns an empty DOM. So the clever original was fragile by design, and the simpler Playwright replacement didn't work at all. The actually simple solution — same neural search API, restrict to the domain — returned twenty results instantly.

The lesson isn't that browser automation is bad. Sometimes you genuinely need it: filling forms that require authentication, interacting with interfaces that have no API, accessing content that's truly session-gated. But browser automation has a seductive quality where it feels like a universal solution because it's how humans access the web, so it should work for anything a human can access. This reasoning tends to produce the most brittle, over-engineered code in any system.

Before reaching for a browser, it's worth asking whether the content you need is indexable by something that was built to index it. The answer is surprisingly often yes — even for content that's supposed to be walled off.

The Chrome daemon is off. The websocket code is deleted. The tool is faster and simpler. The only expensive part was the time spent being impressed by the clever version.

