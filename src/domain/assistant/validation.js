import {
  APPROVAL_STATES, CONSENT_STATES, ESCALATION_REASONS, KNOWLEDGE_TOPICS,
  LEAD_INTENTS, MESSAGE_ROLES, RESPONSE_OUTCOMES, SOURCE_AUTHORITY_LEVELS,
  SOURCE_KINDS,
} from "./constants.js";

/** @typedef {{ valid: boolean, errors: string[] }} ValidationResult */
const result = () => ({ valid: true, errors: [] });
function error(output, field, problem) {
  output.valid = false;
  output.errors.push(`${field} ${problem}`);
}
function object(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || Object.getPrototypeOf(prototype) === null;
}
const nonblank = (value) => typeof value === "string" && value.trim().length > 0;
const member = (value, choices) => Object.values(choices).includes(value);
function requiredText(out, value, field) {
  if (!nonblank(value)) error(out, field, "must be a nonblank string.");
}
function optionalText(out, value, field) {
  if (value !== undefined && !nonblank(value)) error(out, field, "must be a nonblank string if present.");
}
function choice(out, value, field, choices) {
  if (!member(value, choices)) error(out, field, "must be a supported value.");
}
function append(out, prefix, nested, root = "") {
  if (nested.valid) return;
  out.valid = false;
  for (const message of nested.errors) {
    out.errors.push(`${prefix}${message.slice(root.length)}`);
  }
}
function unique(out, values, field) {
  if (new Set(values).size !== values.length) error(out, field, "must contain unique values.");
}
function isoTimestamp(value) {
  if (typeof value !== "string") return false;
  const match = /^(\d{4}-\d{2}-\d{2})T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/.exec(value);
  if (!match || match[0] !== value || !Number.isFinite(Date.parse(value))) return false;
  const day = new Date(`${match[1]}T00:00:00Z`);
  return Number.isFinite(day.getTime()) && day.toISOString().startsWith(match[1]);
}
function httpUrl(value) {
  if (typeof value !== "string" || !/^https?:\/\/[^/?#\\\s][^\\\s]*$/i.test(value)) {
    return false;
  }
  if (value !== value.trim()) return false;
  try {
    return Boolean(new URL(value).hostname);
  } catch {
    return false;
  }
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateMessage(value) {
  const out = result();
  if (!object(value)) { error(out, "message", "must be a plain object."); return out; }
  requiredText(out, value.id, "message.id");
  choice(out, value.role, "message.role", MESSAGE_ROLES);
  requiredText(out, value.content, "message.content");
  if (value.createdAt !== undefined && !isoTimestamp(value.createdAt)) {
    error(out, "message.createdAt", "must be an ISO timestamp with a time zone if present.");
  }
  return out;
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateRequest(value) {
  const out = result();
  if (!object(value)) { error(out, "request", "must be a plain object."); return out; }
  requiredText(out, value.id, "request.id");
  append(out, "request.", validateMessage(value.message));
  if (object(value.message) && value.message.role !== MESSAGE_ROLES.VISITOR) {
    error(out, "request.message.role", "must be visitor for the current message.");
  }
  if (!Array.isArray(value.conversation)) error(out, "request.conversation", "must be an array.");
  else {
    for (const [index, message] of value.conversation.entries()) {
      append(out, `request.conversation[${index}]`, validateMessage(message), "message");
    }
    const ids = value.conversation.filter(object).map((message) => message.id);
    unique(out, ids, "request.conversation message IDs");
    if (object(value.message) && ids.includes(value.message.id))
      error(out, "request.message.id", "must differ from conversation message IDs.");
  }
  optionalText(out, value.pagePath, "request.pagePath");
  if (nonblank(value.pagePath) && !value.pagePath.startsWith("/"))
    error(out, "request.pagePath", "must start with /.");
  return out;
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateKnowledgeRecord(value) {
  const out = result();
  if (!object(value)) { error(out, "record", "must be a plain object."); return out; }
  requiredText(out, value.id, "record.id");
  choice(out, value.topic, "record.topic", KNOWLEDGE_TOPICS);
  choice(out, value.approvalState, "record.approvalState", APPROVAL_STATES);
  if (!object(value.source)) error(out, "record.source", "must be a plain object.");
  else {
    choice(out, value.source.kind, "record.source.kind", SOURCE_KINDS);
    requiredText(out, value.source.itemId, "record.source.itemId");
    if (value.source.kind === SOURCE_KINDS.BLOG_RSS) {
      if (!httpUrl(value.source.locator))
        error(out, "record.source.locator", "must be an absolute HTTP(S) feed URL for RSS items.");
    } else {
      requiredText(out, value.source.locator, "record.source.locator");
    }
    if (value.source.articleUrl !== undefined && !httpUrl(value.source.articleUrl)) {
      error(out, "record.source.articleUrl", "must be an absolute HTTP(S) URL if present.");
    }
    if (member(value.source.kind, SOURCE_KINDS) &&
        value.authorityLevel !== SOURCE_AUTHORITY_LEVELS[value.source.kind])
      error(out, "record.authorityLevel", "must match the source kind.");
  }
  if (!Array.isArray(value.statements) || value.statements.length === 0)
    error(out, "record.statements", "must be a nonempty array.");
  else {
    for (const [index, statement] of value.statements.entries()) {
      if (!object(statement)) error(out, `record.statements[${index}]`, "must be a plain object.");
      else {
        requiredText(out, statement.id, `record.statements[${index}].id`);
        requiredText(out, statement.text, `record.statements[${index}].text`);
      }
    }
    unique(out, value.statements.filter(object).map((statement) => statement.id), "record.statement IDs");
  }
  return out;
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateKnowledgeResult(value) {
  const out = result();
  if (!object(value)) { error(out, "knowledge", "must be a plain object."); return out; }
  if (!Array.isArray(value.records)) error(out, "knowledge.records", "must be an array.");
  else {
    for (const [index, record] of value.records.entries()) {
      append(out, `knowledge.records[${index}]`, validateKnowledgeRecord(record), "record");
    }
    unique(out, value.records.filter(object).map((record) => record.id), "knowledge.record IDs");
  }
  if (!Array.isArray(value.evidence)) error(out, "knowledge.evidence", "must be an array.");
  else {
    const records = new Map(Array.isArray(value.records)
      ? value.records.filter(object).map((record) => [record.id, record]) : []);
    for (const [index, entry] of value.evidence.entries()) {
      const field = `knowledge.evidence[${index}]`;
      if (!object(entry)) {
        error(out, field, "must be a plain object.");
        continue;
      }
      requiredText(out, entry.recordId, `${field}.recordId`);
      const record = records.get(entry.recordId);
      if (!record || record.approvalState !== APPROVAL_STATES.APPROVED)
        error(out, `${field}.recordId`, "must resolve to an approved record.");
      if (!Array.isArray(entry.statementIds) || entry.statementIds.length === 0)
        error(out, `${field}.statementIds`, "must be a nonempty array.");
      else {
        for (const [statementIndex, id] of entry.statementIds.entries()) {
          requiredText(out, id, `${field}.statementIds[${statementIndex}]`);
          if (record && (!Array.isArray(record.statements) ||
              !record.statements.some((statement) => statement?.id === id)))
            error(out, `${field}.statementIds[${statementIndex}]`, "must resolve to a record statement.");
        }
        unique(out, entry.statementIds, `${field}.statementIds`);
      }
    }
    unique(out, value.evidence.filter(object).map((entry) => entry.recordId), "knowledge.evidence record IDs");
  }
  return out;
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateHandoffRequest(value) {
  const out = result();
  if (!object(value)) { error(out, "handoff", "must be a plain object."); return out; }
  if (typeof value.required !== "boolean") error(out, "handoff.required", "must be boolean.");
  choice(out, value.consent, "handoff.consent", CONSENT_STATES);
  if (value.required === false && (value.reason !== null || value.consent !== CONSENT_STATES.NOT_REQUIRED))
    error(out, "handoff", "without handoff, reason must be null and consent not-required.");
  if (value.required === true) choice(out, value.reason, "handoff.reason", ESCALATION_REASONS);
  // not-required on a required handoff means navigation only; pending grants no consent.
  return out;
}

/** @param {unknown} value @returns {ValidationResult} */
export function validateResponse(value) {
  const out = result();
  if (!object(value)) { error(out, "response", "must be a plain object."); return out; }
  requiredText(out, value.requestId, "response.requestId");
  choice(out, value.outcome, "response.outcome", RESPONSE_OUTCOMES);
  requiredText(out, value.message, "response.message");
  append(out, "response.", validateKnowledgeResult(value.knowledge));
  if (!object(value.leadIntent)) error(out, "response.leadIntent", "must be a plain object.");
  else choice(out, value.leadIntent.kind, "response.leadIntent.kind", LEAD_INTENTS);
  append(out, "response.", validateHandoffRequest(value.handoff));
  const evidenceCount = Array.isArray(value.knowledge?.evidence) ? value.knowledge.evidence.length : 0;
  if (value.outcome === RESPONSE_OUTCOMES.ANSWERED && evidenceCount === 0)
    error(out, "response.knowledge.evidence", "answered responses require evidence.");
  if (value.outcome === RESPONSE_OUTCOMES.HANDOFF_REQUIRED && value.handoff?.required !== true)
    error(out, "response.handoff.required", "handoff-required responses require handoff.");
  if (value.outcome !== RESPONSE_OUTCOMES.HANDOFF_REQUIRED && value.handoff?.required !== false)
    error(out, "response.handoff.required", "must be false for this outcome.");
  if (value.outcome === RESPONSE_OUTCOMES.CLARIFICATION_REQUIRED)
    requiredText(out, value.clarificationQuestion, "response.clarificationQuestion");
  else if (value.clarificationQuestion !== undefined)
    error(out, "response.clarificationQuestion", "is only allowed for clarification-required.");
  if (value.outcome === RESPONSE_OUTCOMES.UNAVAILABLE &&
      (value.knowledge?.records?.length || evidenceCount))
    error(out, "response.knowledge", "unavailable responses cannot contain records or evidence.");
  return out;
}

/** @param {unknown} request @param {unknown} response @returns {ValidationResult} */
export function validateExchange(request, response) {
  const out = result();
  append(out, "", validateRequest(request));
  append(out, "", validateResponse(response));
  if (object(request) && object(response) && request.id !== response.requestId)
    error(out, "exchange", "request and response IDs must match.");
  return out;
}