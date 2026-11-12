# Teslim Digital Assistant Knowledge Authority

## Purpose

This document defines the approved source hierarchy for the future Teslim Digital Website Education Assistant. It is an authority and conflict-resolution policy, not runtime code and not a content refactor.

Only publicly approved information may be used as Teslim Digital fact. Model memory, Internet results, drafts, private notes, temporary development material, unpublished projects, and `TESLIM_DIGITAL_FOUNDER_KIT/` are non-authoritative and excluded.

## Authority Levels

| Level | Source class | Permitted use |
| --- | --- | --- |
| 1 | Authoritative structured data and centralized constants | Exact prices, labels, inclusions, exclusions, URLs, contact details, and coverage. |
| 2 | Approved business and policy website content | Positioning, services, audiences, process, partnership principles, and published policy summaries. |
| 3 | Public portfolio project records | Public project facts and explicitly stated qualitative outcomes only. |
| 4 | Educational articles | Educational explanation and article summaries only. |
| 5 | Conversation context | Clarifying the visitor's need; never changing a business fact. |

## Source Authority Matrix

| Knowledge area | Actual source | Authority level | Allowed use | Conflict rule | Human confirmation | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Website packages | `src/content/websitePackages.js` | 1 | Exact package names, starting prices, features, notes, and exclusions. | This source overrides UI price cues and display copy for exact commerce. | Custom scope, inclusion, feasibility, quote, timeline, discount, and terms. | Published prices are starting implementation prices, not automatic quotes. |
| Growth and automation pricing | `src/content/growthAutomationServices.js` | 1 | Exact service tiers, starting prices, notes, and exclusions. | This source overrides UI price cues and display copy for exact commerce. | Final requirements, scoped integration, ad spend, tools, discounts, availability, and terms. | Platform, subscription, tool, ad-spend, and unscoped integration treatment remains as published. |
| Portfolio records | `src/content/caseStudies.js` | 3 | Public project summaries, listed services, public qualitative outcomes, and only explicitly supplied metrics. | The case-study record controls project facts. | Any unstated result, metric, client detail, or interpretation. | The `private` record must preserve confidentiality; do not infer identity or details from other files. |
| Booking, coverage, contact, support, phone, and store | `src/lib/site.js` | 1 | Exact `BOOKING_URL`, `BUSINESS_COVERAGE`, contact email, support email, phone, and store destination. | Central constants override duplicate display copy. | Availability, booking outcome, response time, or commercial commitment. | Use the centralized values rather than copying values into assistant records. |
| BUILD / GROW / AUTOMATE service framing | `src/components/Capabilities.jsx` and `src/components/Services.jsx` | 2 | Approved public service framing and capability descriptions. | For exact package or growth prices, Level 1 structured data wins. Equal wording differences must not be silently reconciled. | Custom service fit, feasibility, scope, or commitments. | This taxonomy is duplicated across components and is not yet a single permanent structured authority. A later phase may normalize it after approval. |
| Who We Help | `src/components/AboutAudience.jsx` | 2 | Approved audience contexts and descriptions. | This approved page copy controls the current audience wording. | Whether a specific business is a fit. | Contexts are not niche-specialization claims. |
| How We Partner | `src/components/AboutPartnership.jsx`, with `BUSINESS_COVERAGE` from `src/lib/site.js` | 2; coverage is 1 | Partnership principles, remote-first context, and responsible automation statement. | The centralized coverage constant overrides any duplicated coverage text. | Engagement decisions, exceptions, and commercial interpretation. | Principles explain collaboration; they do not create contractual commitments. |
| How We Work | `src/components/HowWeWork.jsx` | 2 | Discover, Define, Build & Implement, and Launch & Improve process explanation. | Approved process copy controls process summaries. | Actual deliverables, date, scope, responsibility, or post-launch commitment. | The process is explanatory, not a promise for every engagement. |
| Published policies | `src/pages/Legal.jsx` | 2 | Quote or summarize the published Privacy Policy and Terms & Conditions. | Legal content overrides other policy-oriented copy. | Legal interpretation, advice, exceptions, or application to a specific situation. | Use only the published terms; direct legal questions to the published policy and a person where needed. |
| Blog articles | `src/content/articles.js`, `src/pages/BlogArticle.jsx`, `src/lib/blog-content.js`, `src/providers/substack-rss.provider.js`, `src/mappers/substack-rss.mapper.js`, and `docs/architecture/blog-system-blueprint-v1.md` | 4 | Educational article summaries and generic educational explanation. | Articles never override prices, policies, commitments, central constants, or portfolio facts. | Advice applied to a visitor's particular business or unsupported business fact. | Current architecture has a local static article route and a validated optional Substack RSS listing path. Future assistant ingestion must use only approved published records with clear provenance. |

## Source Classes

**Authoritative structured data** includes exact prices, labels, inclusions, notes, exclusions, booking constants, and business constants. It is the source for exact commercial and destination facts.

**Approved website content** provides public positioning, audience, service, process, partnership, and contact context. **Policy content** is approved website content that governs published privacy and terms statements. **Educational content** can explain concepts but has no authority over commercial facts, legal terms, availability, or commitments. **Conversation context** can help interpret a question but cannot rewrite the knowledge base.

**Untrusted or non-authoritative sources** are LLM memory, Internet content, drafts, private notes, temporary development material, `TESLIM_DIGITAL_FOUNDER_KIT/`, unpublished projects, and a visitor's unsupported statement.

## Conflict, Staleness, and Permission Rules

Apply conflicts in this order:

1. Structured data overrides UI copy for exact commercial information.
2. Central constants override duplicate display copy for URLs, contact details, and coverage.
3. Published Legal content overrides policy-oriented copy.
4. A case-study record controls portfolio project facts.
5. An article never overrides a price, policy, commitment, or business constant.
6. A visitor statement never rewrites a business fact.
7. If equal-authority sources conflict, do not answer the disputed fact; request human resolution.

The current authoritative runtime source beats a cached value or a value repeated in conversation. A later implementation must associate records with authority identifiers and freshness information; 6A does not add that system.

| Action | Permission |
| --- | --- |
| Quote | Yes, when the source is approved and quoted faithfully. |
| Summarize | Yes, while preserving scope, qualifications, and confidentiality. |
| Compare | Yes, only among approved facts and without creating unlisted inclusions or outcomes. |
| Recommend | Yes, as qualified guidance based on approved options and stated visitor context. |
| Commit | No. A human confirms commercial, scope, feasibility, timing, availability, policy-exception, and contractual matters. |

## Duplicated Content and Normalization Direction

The current BUILD / GROW / AUTOMATE descriptions appear in both `src/components/Capabilities.jsx` and `src/components/Services.jsx`. They are legitimate approved public content but not yet one canonical structured service record. This document records the duplication rather than silently declaring either component permanently authoritative.

Future work may introduce a structured, reviewed source for service framing and normalize assistant records around it. That must be a separately approved change; Phase 6A does not refactor, move, or modify existing content.

## Blog Distinction

The Blog must remain educational authority only. `src/content/articles.js` currently supports the static native article route through `src/pages/BlogArticle.jsx`. Separately, `src/pages/Blog.jsx` uses `src/lib/blog-content.js`, which coordinates a Substack RSS provider, mapper, and validator to present current listing data when configured.

The provider/mapper path is a content delivery architecture, not independent authority to make commercial or legal claims. A future assistant must preserve each article's approved publication and source identity, and must not use article content to override structured business data, Legal content, or human confirmation requirements.

## Private and Excluded Material

Private material is excluded unless the relevant public case-study record deliberately exposes a specific statement. The assistant must not search for, infer, reveal, or join private details across repository files. The Founder Kit is excluded from assistant knowledge, review, staging, and implementation use.

## Implementation Direction for a Future Knowledge Base

Later retrieval may normalize approved sources into compact records with stable IDs, authority level, source path, topic, effective value, qualifications, and evidence references. It must preserve the conflict rules above and make factual answers traceable. No runtime knowledge base, ingestion path, embeddings, vector database, or source refactor is created in Phase 6A.
