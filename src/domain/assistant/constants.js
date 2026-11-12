export const ASSISTANT_MODEL_VERSION = "1.0.0";

export const MESSAGE_ROLES = Object.freeze({ VISITOR: "visitor", ASSISTANT: "assistant" });
export const RESPONSE_OUTCOMES = Object.freeze({
  ANSWERED: "answered",
  CLARIFICATION_REQUIRED: "clarification-required",
  HANDOFF_REQUIRED: "handoff-required",
  INSUFFICIENT_EVIDENCE: "insufficient-evidence",
  UNAVAILABLE: "unavailable",
});
export const APPROVAL_STATES = Object.freeze({
  UNAPPROVED: "unapproved", APPROVED: "approved", REVOKED: "revoked",
});
export const SOURCE_KINDS = Object.freeze({
  STRUCTURED_DATA: "structured-data", SITE_CONSTANT: "site-constant",
  SITE_CONTENT: "site-content", POLICY: "policy", CASE_STUDY: "case-study",
  BLOG_STATIC: "blog-static", BLOG_RSS: "blog-rss",
});
export const SOURCE_AUTHORITY_LEVELS = Object.freeze({
  [SOURCE_KINDS.STRUCTURED_DATA]: 1, [SOURCE_KINDS.SITE_CONSTANT]: 1,
  [SOURCE_KINDS.SITE_CONTENT]: 2, [SOURCE_KINDS.POLICY]: 2,
  [SOURCE_KINDS.CASE_STUDY]: 3,
  [SOURCE_KINDS.BLOG_STATIC]: 4, [SOURCE_KINDS.BLOG_RSS]: 4,
});
export const KNOWLEDGE_TOPICS = Object.freeze({
  WEBSITE_PACKAGES: "website-packages", GROWTH_AUTOMATION: "growth-automation",
  BUSINESS: "business", SERVICES: "services", AUDIENCE: "audience",
  PARTNERSHIP: "partnership", PROCESS: "process", PORTFOLIO: "portfolio",
  POLICY: "policy", BLOG: "blog",
});
export const LEAD_INTENTS = Object.freeze({
  NONE: "none", PROBLEM: "problem", SERVICE_FIT: "service-fit",
  PACKAGE_INTEREST: "package-interest", CUSTOM_REQUEST: "custom-request",
  CONTACT_REQUEST: "contact-request", AVAILABILITY_QUESTION: "availability-question",
  QUOTE_REQUEST: "quote-request",
});
export const ESCALATION_REASONS = Object.freeze({
  COMMERCIAL_CONFIRMATION: "commercial-confirmation",
  CUSTOM_TECHNICAL_SCOPING: "custom-technical-scoping",
  POLICY_CLARIFICATION: "policy-clarification",
  PRIVATE_SUPPORT_ISSUE: "private-support-issue",
  UNKNOWN_BUSINESS_FACT: "unknown-business-fact",
  SENSITIVE_RISK: "sensitive-risk",
});
export const CONSENT_STATES = Object.freeze({
  NOT_REQUIRED: "not-required", PENDING: "pending",
  GRANTED: "granted", DECLINED: "declined",
});
