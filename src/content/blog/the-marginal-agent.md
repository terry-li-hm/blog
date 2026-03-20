---
title: "The Marginal Agent"
description: "I deployed twelve AI agents to polish a CV. Five would have been plenty. Here's what the waste taught me about agent team economics."
pubDatetime: 2026-03-20T09:08:36.000Z
draft: false
tags: [ai, agents, practice]
---

I needed to prepare a CV for a reinsurance company. A friend had referred me, the role was interesting, and I wanted the document to be sharp. So I did what any reasonable person with access to frontier AI models would do: I deployed twelve agents to argue over my resume.

Five reviewers — three Claude agents with different personas (strategist, hiring manager, red team), plus Gemini and Codex as independent external judges. Four research agents to investigate the company, its leadership, reinsurance AI use cases, and CV best practices. One synthesizer to merge everything into consensus edits. Two more validation passes to confirm the scores improved.

The result was a solid CV. Codex scored it 8.5, Gemini 9.5. Every reviewer agreed on the same core changes: the profile needed to lead with "I build POCs," the job title needed functional context, and the HKMA sandbox project needed its three-week execution window highlighted.

Here's the thing, though. I could have gotten the same result with three agents.

The five reviewers produced what looked like diverse feedback — different framings, different emphases, different severity ratings. But when I mapped the actual unique insights, the picture collapsed. Codex caught the seniority mismatch risk. Gemini caught the missing IT handoff language. After that, the three Claude agents with their carefully crafted personas — strategist, hiring manager, red team — all flagged the same three issues wearing different hats. The "strategist" said the profile was diffuse. The "hiring manager" said it read like a governance lead. The "red team" said the AGM title signals manager. Same signal, three invoices.

The diversity I thought I was buying through role-playing was an illusion. A Claude agent prompted as a "red team adversary" has the same training data, the same reasoning patterns, and the same blind spots as a Claude agent prompted as a "content strategist." The costume changed. The mind didn't.

What actually produced unique signal was switching models. Codex runs on GPT-5.4. Gemini runs on its own architecture. Each has genuinely different training, different biases, different failure modes. When Codex said "this reads as a hobby project" and Gemini said "where's the handoff language?", those were structurally independent observations. Neither could have produced the other's insight because they literally think differently.

The research agents, by contrast, scaled well. Each covered a genuinely different topic — company leadership, AI initiatives, reinsurance domain knowledge, CV frameworks. No overlap because the information sources were independent. The fourth research agent was as valuable as the first.

This suggests a simple heuristic for agent team sizing. Before spawning agent N+1, ask three questions. Does it use a different model than the existing agents? Does it access a different information source? Can I name the specific signal it will produce that agents one through N won't? If the answer to all three is no, the agent is waste. Save the tokens.

The marginal benefit curve is steep for the first two models, flat by the third, and noise by the fifth — unless each new agent has a structurally different information source. Role-playing diversity is not real diversity. Model diversity is. Information diversity is. Persona diversity is theater.

I kept all twelve agents running because the session was partly an experiment in agent team orchestration. I learned the tooling — native team coordination, cross-model messaging, fan-in synthesis patterns. That learning had value independent of the CV quality. But if I'd been optimising purely for output, three agents would have delivered ninety percent of the result at a quarter of the cost.

The consulting parallel is obvious. The same principle governs team staffing, committee composition, and advisory boards. Five people with different titles but the same background will produce one insight dressed in five outfits. Two people with genuinely different expertise will produce two insights. The economics of attention scale the same way whether the agents are human or artificial.

Next time I need multi-model refinement, the team will be small: one Claude for synthesis, one Gemini for independent review, one Codex for adversarial check. Three agents, three architectures, three genuinely different perspectives. Everything else is overhead the overnight daemon could use better.

P.S. The CV did get me thinking about whether the process itself is the best interview answer. "How do you build AI POCs?" Well, I needed a CV, so I built a multi-model refinement system over a Friday evening. The CV I sent you was its first output. Isn't that exactly what you're hiring for?
