/**
 * ============================================================================
 * Teslim Digital
 * Content Domain Constants
 * ============================================================================
 *
 * Purpose
 * -------
 * Defines the canonical vocabulary used throughout the Content Domain.
 *
 * Every provider, mapper, validator, service and renderer should import these
 * constants rather than hard-coding string values.
 *
 * This file intentionally contains no business logic.
 *
 * ============================================================================
 */

/**
 * Supported content block types.
 *
 * These values define every block the renderer is capable of displaying.
 * New block types should be added here before they are introduced elsewhere.
 */
export const BLOCK_TYPES = Object.freeze({
  PARAGRAPH: "paragraph",
  HEADING: "heading",
  LIST: "list",
  QUOTE: "quote",
  IMAGE: "image",
  GALLERY: "gallery",
  EMBED: "embed",
  CALLOUT: "callout",
  CODE: "code",
  DIVIDER: "divider",
});

/**
 * Supported list styles.
 */
export const LIST_TYPES = Object.freeze({
  UNORDERED: "unordered",
  ORDERED: "ordered",
  CHECKLIST: "checklist",
});

/**
 * Supported embed providers.
 *
 * The renderer can decide how to display each provider.
 */
export const EMBED_PROVIDERS = Object.freeze({
  SUBSTACK: "substack",
  TIKTOK: "tiktok",
  YOUTUBE: "youtube",
  VIMEO: "vimeo",
  SPOTIFY: "spotify",
  GENERIC: "generic",
});

/**
 * Content providers.
 *
 * These identify where an article originated.
 */
export const CONTENT_PROVIDERS = Object.freeze({
  SUBSTACK: "substack",
  BEEHIIV: "beehiiv",
  GHOST: "ghost",
  MARKDOWN: "markdown",
  MANUAL: "manual",
});

/**
 * Publication lifecycle.
 */
export const ARTICLE_STATUS = Object.freeze({
  DRAFT: "draft",
  SCHEDULED: "scheduled",
  PUBLISHED: "published",
  ARCHIVED: "archived",
});

/**
 * Supported languages.
 *
 * Future internationalisation can extend this list.
 */
export const LANGUAGE_CODES = Object.freeze({
  EN: "en",
});

/**
 * External resources attached to an article.
 */
export const RESOURCE_TYPES = Object.freeze({
  ARTICLE: "article",
  VIDEO: "video",
  PODCAST: "podcast",
  DOWNLOAD: "download",
  WEBSITE: "website",
});

/**
 * Default metadata used when a provider does not supply values.
 */
export const DEFAULTS = Object.freeze({
  LANGUAGE: LANGUAGE_CODES.EN,
  AUTHOR_NAME: "Teslim Digital",
  AUTHOR_SLUG: "teslim-digital",
  PROVIDER: CONTENT_PROVIDERS.SUBSTACK,
  STATUS: ARTICLE_STATUS.PUBLISHED,
});

/**
 * Supported heading levels.
 *
 * The renderer should reject unsupported heading levels.
 */
export const HEADING_LEVELS = Object.freeze([1, 2, 3, 4, 5, 6]);

/**
 * Version identifier for the internal content model.
 *
 * Increment only when making breaking changes to the domain model.
 */
export const CONTENT_MODEL_VERSION = "1.0.0";