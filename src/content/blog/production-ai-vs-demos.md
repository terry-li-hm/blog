---
title: 'Production AI vs Demos: The Intent Classification Reality Check'
description: >-
  Building AI systems that work in the real world requires thinking beyond the
  demo. What actually matters when users depend on your models.
pubDatetime: 2025-07-20T10:00:00.000Z
draft: false
tags:
  - ai
  - production
  - intent-classification
  - architecture
  - observability
---

"Can you build an intent classifier for customer support?"

I get this question quarterly, and the answer is always the same: "Sure, the demo takes 30 minutes. The production system takes three months." The gap between these timelines reveals everything wrong with how we think about AI in production. Demos optimize for wow factor. Production systems optimize for Tuesday morning when everything breaks and you're the only one who can fix it.

Most AI discourse focuses on the wrong problems: model capabilities over system reliability, accuracy improvements over production failures, academic benchmarks over real-world chaos. Users speak in fragments, switch languages mid-sentence, express the same intent seventeen different ways.

The demo version was elegant — feed input to an LLM, get JSON with intent and confidence. Ninety-seven percent accuracy on test sets. Then actual users arrived, and elegance dissolved into reality.

Real users don't speak in complete sentences. They interrupt themselves, include irrelevant context, and embed their actual request inside three paragraphs of family drama. The customer who says "My mother wants me to send money to the mainland but the app says I exceeded the limit, is it because my name doesn't match the recipient?" isn't asking about transfer limits. They're asking how to send money home without triggering compliance flags. The intent isn't in the words; it's in the underlying need that requires three layers of context to decode properly.

This is where production AI systems diverge from demos. Demos can assume clean input and controlled environments. Production systems must handle the chaos of human communication while maintaining consistent behavior across languages, cultural contexts, and emotional states. The technical challenge isn't just classification accuracy — it's building systems robust enough to operate reliably when users need them most.

Provider abstraction becomes critical when you realize that model performance varies dramatically across different types of real-world input. The system I built abstracts the AI provider completely, allowing seamless switching between different models and endpoints. Today it runs on OpenRouter, tomorrow it might be a local vLLM deployment, next month it could be whatever model handles multilingual intent classification best. The abstraction layer handles authentication, rate limiting, and failover without the application logic knowing or caring which model is processing the request.

This flexibility matters because production AI is fundamentally about hedging uncertainty. Models get updated, break backwards compatibility, or become unavailable. Pricing changes. New capabilities emerge. The abstraction layer transforms these external dependencies from architectural commitments into configuration choices. When a better model appears or costs shift, the migration becomes an environment variable change rather than a systems rewrite.

But the most profound difference between demo and production AI lies in observability. Demo systems succeed or fail in isolation. Production systems fail in context, and that context determines whether the failure cascades through your entire user experience. The intent classifier I built streams reasoning tokens separately from final answers, creating transparency into the model's decision-making process that becomes invaluable when debugging edge cases or explaining classifications to stakeholders.

The reasoning display isn't just user experience polish — it's operational necessity. When a classification feels wrong, you need to understand why the model reached that conclusion. Was the confidence artificially high? Did the reasoning reveal training bias? Is there a systematic pattern in misclassifications that suggests taxonomy improvements? The reasoning stream captures this decision context in real time, transforming AI from black box to collaborative cognitive partner whose thinking process you can examine and refine.

Structured output validation becomes the foundation everything else builds on. The system enforces response schemas using Zod validation, ensuring that model outputs always conform to expected formats regardless of temperature settings, prompt variations, or model quirks. This isn't just error handling — it's architectural defense against the fundamental unpredictability of language model behavior. When your application depends on consistent data structures, you can't trust the model to maintain formatting discipline across millions of requests.

The validation layer catches malformed responses, partially streamed outputs, and schema violations before they propagate through your system. It provides fallback behavior when models hallucinate invalid data structures. Most importantly, it creates a contract between the AI layer and the application layer that remains stable even when underlying models change. This contracts-first approach transforms AI from a source of systemic unpredictability into a reliable component with well-defined behavioral boundaries.

Taxonomy design emerges as perhaps the most underestimated aspect of production intent classification. The demo version had twelve intents. The production system has seventy-four, organized into hierarchical categories that reflect how users actually think about their needs rather than how engineers organize functionality. The taxonomy isn't just a list of possible classifications — it's a cognitive architecture that shapes how the model understands user intent and how your system responds to that understanding.

Creating effective taxonomies requires deep domain expertise, extensive user research, and iterative refinement based on production data. You discover that users express "transfer money internationally" as "send money overseas," "wire funds abroad," "remittance to family," and forty-seven other variations. The taxonomy must capture semantic equivalence while maintaining operational distinctness. Each intent needs clear boundaries, unambiguous examples, and a system response that addresses the underlying user need rather than just the surface request.

The multilingual complexity adds another dimension entirely. Users switch languages mid-sentence, use culture-specific expressions, and embed English technical terms in their native language requests. The system handles mixed-language input naturally, recognizing that "autopay 設定" and "automatic payment setup" represent identical intents despite different linguistic expressions. This requires training data that reflects actual usage patterns rather than artificially monolingual examples.

Error handling in production AI systems follows completely different patterns than traditional software. Instead of binary success/failure states, you have confidence gradients, partial results, and graceful degradation scenarios. The system I built implements progressive error handling where low-confidence classifications trigger human review, malformed responses generate retry attempts with modified prompts, and complete failures fall back to rule-based classification using keyword matching.

This layered approach acknowledges that AI reliability exists on a spectrum rather than as a boolean property. High-confidence classifications flow through automated processing. Medium-confidence results get additional validation steps. Low-confidence classifications escalate to human review with full context about why the model struggled. The system maintains operational continuity even when the AI component experiences partial failures.

Monitoring production AI requires metrics that don't exist in traditional software. Response time matters, but so does confidence distribution, reasoning quality, and classification stability across different input types. The system tracks not just whether classifications are correct, but whether they're correct for the right reasons. It monitors confidence score distributions to detect model drift. It analyzes reasoning patterns to identify systematic biases or gaps in training data.

The observability stack includes traditional APM metrics alongside AI-specific instrumentation. Request tracing follows the complete flow from user input through reasoning generation to final classification. Token usage monitoring prevents cost surprises. Classification accuracy tracking identifies degradation patterns before they impact user experience. This comprehensive observability creates the foundation for reliable AI operations at scale.

Testing production AI systems challenges conventional quality assurance approaches. Unit tests verify schema compliance and error handling, but they can't validate semantic accuracy across the infinite space of possible user inputs. Integration tests exercise the complete classification pipeline, but they struggle with non-deterministic model behavior. The testing strategy emphasizes property-based verification over exact output matching, ensuring that classifications remain within acceptable confidence ranges rather than requiring identical responses.

The most sophisticated testing happens in production through shadow deployment and A/B comparison frameworks. New models are deployed alongside existing ones, processing the same input streams while their outputs are compared for consistency and accuracy. This allows performance validation against real user data without exposing experimental models to production traffic. The comparison framework identifies cases where models disagree significantly, providing targeted test cases for further model development.

What emerges from this production experience is a fundamentally different understanding of AI system architecture. Demos optimize for individual model performance. Production systems optimize for overall system reliability in the face of model uncertainty. The model becomes just one component in a larger reliability engineering challenge that includes provider management, output validation, error recovery, observability, and graceful degradation.

This shift aligns with AI's broader transformation from magic to engineering discipline. As I explored in [LLMs as Components](/blog/llms-as-components), the real work isn't in model capabilities but in integration patterns that deliver reliability at scale. The engineering problems that matter exist not in training pipelines but in validation, monitoring, and operational patterns — the infrastructure that makes AI useful rather than impressive.

The intent classification system I built will never win benchmarks or generate conference papers. But it handles thousands of real user requests daily, provides consistent service even when underlying models change, and maintains operational transparency that enables continuous improvement. It demonstrates that production AI success isn't measured in accuracy percentages but in system uptime, user satisfaction, and operational simplicity.

This is what happens when [intelligence becomes infrastructure](/blog/intelligence-on-tap) rather than innovation theater. The focus shifts from showcasing capabilities to delivering reliability. The conversations change from "look what this model can do" to "how do we make this work when everything breaks." The architecture evolves from impressive demonstrations to boring reliability that users can depend on.

The gap between demo AI and production AI grows wider as organizations move from experimentation to deployment. Success lies not in the model layer but in everything else — the boring infrastructure work that makes systems reliable when models hallucinate on Tuesday morning.

P.S. Building production AI systems involves surprisingly little AI thinking. Most effort goes to traditional engineering: API design, error handling, monitoring. The AI becomes just another component needing proper integration patterns and failure modes. Advanced technology succeeds by being treated as ordinary engineering.
