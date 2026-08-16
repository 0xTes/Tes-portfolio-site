/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * ID Utility
 * ============================================================================
 *
 * Purpose
 * -------
 * Generates unique identifiers for Content Domain objects.
 *
 * This utility provides a single, canonical way to create IDs for
 * Articles, Content Blocks, Resources and future domain entities.
 *
 * Design Goals
 * ------------
 * - Environment agnostic
 * - Dependency free
 * - Secure when available
 * - Stable API
 * - Easy to replace in the future
 *
 * Notes
 * -----
 * IDs generated here are intended for internal application use.
 *
 * They are NOT database primary keys.
 * They are NOT cryptographic secrets.
 * They are NOT intended for authentication.
 *
 * ============================================================================
 */

/**
 * Generates a unique identifier.
 *
 * Uses the Web Crypto API when available, with a safe fallback for
 * environments where `crypto.randomUUID()` is unavailable.
 *
 * @returns {string}
 */
export function createId() {
  if (
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  const timestamp = Date.now().toString(36);

  const random = Math.random()
    .toString(36)
    .slice(2, 12);

  return `${timestamp}-${random}`;
}

/**
 * Generates a prefixed identifier.
 *
 * Useful when debugging domain objects.
 *
 * Examples:
 *
 * article_xxxxx
 * block_xxxxx
 * resource_xxxxx
 *
 * @param {string} prefix
 * @returns {string}
 */
export function createPrefixedId(prefix) {
  if (!prefix || typeof prefix !== "string") {
    throw new TypeError(
      "createPrefixedId() requires a non-empty string prefix."
    );
  }

  return `${prefix}_${createId()}`;
}