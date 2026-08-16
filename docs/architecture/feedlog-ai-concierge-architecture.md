# FeedLog AI Concierge Architecture

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2026-08-16  
**Owner:** Teslim Digital

---

# Purpose

This document defines the future AI Concierge boundary for `feedback.teslim.digital`. The AI Concierge is an optional guidance layer around FeedLog; it is not part of the FeedLog core and must never become a prerequisite for feedback portal use.

# Architectural Boundary

FeedLog owns the feedback portal's core functions: feedback submission, voting, comments, roadmap visibility, and administration. These functions must continue to work independently of the AI Concierge.

```text
FeedLog Core                              AI Concierge
feedback · voting · comments · roadmap    optional guidance · suggestions
                \                         /
                 \                       /
                     PostgreSQL
```

The future integration boundary is:

```text
Browser
├── FeedLog UI
└── Optional AI Assistant UI
        ↓
   AI Application Layer
        ↓
   AI Provider Interface
        ↓
   AI Provider
```

The provider interface is a future abstraction. It prevents the application layer from being permanently coupled to a particular AI provider. No provider, SDK, credentials, database schema, or AI UI is introduced by this milestone.

# Non-Blocking Requirement

The AI Concierge is progressive enhancement. If it is unavailable, misconfigured, slow, timed out, rate limited, out of credits, offline, or returns a provider error, AI functionality may be unavailable but FeedLog must continue normally.

The core portal must not wait for AI to render, submit feedback, vote, comment, view the roadmap, or access administration. AI errors must be isolated from the FeedLog core rather than propagated as portal failures.

# Capability and Safety Contract

## Allowed capabilities

When supported by approved information, the future AI Concierge may:

- Answer approved Teslim Digital questions and explain approved services.
- Explain the feedback portal, feedback submission, voting, and roadmap statuses.
- Suggest an appropriate feedback category and help a visitor formulate feedback.
- Proactively suggest relevant actions or Teslim Digital services.
- Suggest a discovery call and direct a visitor to the approved booking destination.

## Prohibited capabilities

The future AI Concierge must not:

- Invent services, policies, prices, delivery timelines, or contractual commitments.
- Promise that a request will be built or present guesses as facts.
- Pretend to be a human employee.
- Delete feedback or votes, or autonomously modify critical FeedLog records.
- Prevent use of the site or make feedback submission or booking dependent on AI.
- Present information outside the approved knowledge boundary as authoritative Teslim Digital information.

When it has no approved answer, the intended future behavior is a controlled fallback, such as: “I don't have an approved answer for that yet. You can submit it as feedback or book a discovery call.” This response system is not implemented in this milestone.

# Approved Knowledge Boundary

The future AI Concierge may answer Teslim Digital questions only from approved information in these domains:

```text
Approved Knowledge
├── Company
├── Services
│   ├── Website Design
│   ├── SEO
│   ├── TikTok Marketing
│   ├── AI Services
│   └── Marketing Automation
├── Discovery Calls
├── Feedback Portal
└── Approved FAQs
```

This boundary does not define a storage system or content-management workflow. Information must be explicitly approved before the future AI can use it; absence of information is not permission to infer an answer.

# Core Interaction Boundaries

## Feedback submission

Feedback submission remains a direct FeedLog flow:

```text
Visitor → Submit Feedback → FeedLog → Database → Success
```

Future AI assistance may prepare a draft or suggest a category, but the visitor must review and explicitly confirm before FeedLog receives a submission. The AI must never silently submit feedback.

## Discovery calls

The future AI may help a visitor decide whether a discovery call is appropriate, then direct the visitor to the approved booking destination. It does not own booking, choose a booking provider, or make booking availability a dependency of the feedback portal.

# Future Milestones

Before implementation, review this architecture with the actual FeedLog design and define the approved-knowledge governance process. Subsequent milestones may then define the provider-neutral contract and failure behavior, add an optional accessible UI, and add reviewed draft assistance. Each milestone must preserve the non-blocking and explicit-confirmation requirements.

# Out of Scope for This Milestone

- AI chatbot UI or assistant behavior
- AI provider connection, SDK, credentials, or API keys
- RAG, embeddings, vector search, or AI database tables
- AI analytics
- Booking integration
- AI-powered feedback submission or autonomous FeedLog actions
