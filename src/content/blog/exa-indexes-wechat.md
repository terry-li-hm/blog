---
title: "Exa Indexes WeChat"
description: "WeChat is supposed to be a walled garden. Exa didn't get the memo."
pubDatetime: 2026-03-07T03:46:52.000Z
draft: false
tags: ["tools", "search", "chinese-internet"]
---

WeChat is supposed to be a walled garden. The articles published on its public account platform — 公众号 — live inside Tencent's ecosystem, indexed by Sogou under an exclusive data partnership, and largely invisible to Google or any Western search crawler. If you want to search WeChat content programmatically, the conventional answer is: use Sogou, authenticate, and pray the anti-bot detection doesn't catch you.

I was refactoring a CLI tool that searched Chinese content platforms. The WeChat backend connected to a dedicated Chrome instance via the DevTools Protocol, opening real browser tabs to run Sogou searches headlessly. It worked because it was an actual browser with an actual session — indistinguishable from a human, because it essentially was one. But it required keeping that Chrome process running as a permanent daemon, and it was the most fragile part of the system.

Before committing to a rewrite that would replace the Chrome dependency with a proper Playwright session, I ran one test on a whim: `exauro search "AI 银行 大模型 site:mp.weixin.qq.com"`.

Five results came back. All of them real mp.weixin.qq.com URLs. All of them on-topic.

Exa — a US-based neural search API — is indexing WeChat public account articles. Not mirrors or aggregators. The actual `mp.weixin.qq.com` URLs, with Chinese-language summaries, semantically ranked. The "walled garden" turns out to be walled for humans navigating through WeChat's app, not for crawlers that approach from the open web.

The implication is more interesting than the implementation. Sogou's exclusive Tencent partnership gives it theoretical completeness — it should have more WeChat content than anything else. But Exa's neural search gives it practical usefulness: results ranked by semantic relevance rather than recency, surfacing the articles that actually relate to your query rather than the most recent ones containing your keywords. For research purposes, this is often the better trade.

The Chrome daemon is gone now. The Sogou integration is gone. The new backend is a single subprocess call to a CLI that wraps an API. The code got shorter, the results got better, and WeChat stopped being a special case that required its own infrastructure.

It's a small thing. But it's the kind of small thing that makes you wonder what else is indexable that you assumed wasn't.

*[Factual check before publishing: confirm Exa's WeChat indexing is still returning real mp.weixin.qq.com URLs, not mirrors.]*

