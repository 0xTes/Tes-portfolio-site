/**
 * Provider-neutral conversation message. createdAt is an optional ISO timestamp with a time zone.
 * @typedef {{ id: string, role: string, content: string, createdAt?: string }} AssistantMessage
 */
/** @typedef {{ id: string, message: AssistantMessage, conversation: AssistantMessage[], pagePath?: string }} Request */
/**
 * locator is a repository path for local content or a feed URL for RSS.
 * An RSS itemId is its GUID, falling back to its link. articleUrl is an optional
 * absolute HTTP(S) URL.
 * Source identity does not grant approval or Blog runtime eligibility.
 * @typedef {{ kind: string, locator: string, itemId: string, articleUrl?: string }} KnowledgeSource
 */
/** @typedef {{ id: string, text: string }} KnowledgeStatement */
/** Unapproved and revoked records can be represented but cannot be cited. */
/** @typedef {{ id: string, authorityLevel: number, topic: string, source: KnowledgeSource, approvalState: string, statements: KnowledgeStatement[] }} KnowledgeRecord */
/** @typedef {{ recordId: string, statementIds: string[] }} KnowledgeEvidence */
/** @typedef {{ records: KnowledgeRecord[], evidence: KnowledgeEvidence[] }} KnowledgeResult */
/** @typedef {{ kind: string }} LeadIntent */
/** @typedef {string} EscalationReason */
/**
 * On a required handoff, not-required consent means navigation only; pending
 * means consent has not yet been given. This contract carries no lead data.
 * @typedef {{ required: boolean, reason: EscalationReason|null, consent: string }} HandoffRequest
 */
/** @typedef {{ requestId: string, outcome: string, message: string, clarificationQuestion?: string, knowledge: KnowledgeResult, leadIntent: LeadIntent, handoff: HandoffRequest }} Response */

// Baseline shapes document required fields; validators never fill defaults.
export const REQUEST_TEMPLATE = Object.freeze({
  id: "", message: Object.freeze({ id: "", role: "visitor", content: "" }),
  conversation: Object.freeze([]),
});
export const RESPONSE_TEMPLATE = Object.freeze({
  requestId: "", outcome: "", message: "",
  knowledge: Object.freeze({ records: Object.freeze([]), evidence: Object.freeze([]) }),
  leadIntent: Object.freeze({ kind: "none" }),
  handoff: Object.freeze({ required: false, reason: null, consent: "not-required" }),
});

export {};