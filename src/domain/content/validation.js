/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * Validation
 * ============================================================================
 *
 * Purpose
 * -------
 * Validates canonical Articles and Content Blocks used throughout the
 * Content Domain.
 *
 * This module is responsible only for validation.
 *
 * It does NOT:
 *
 * - create Articles
 * - create Content Blocks
 * - transform provider data
 * - render UI
 * - perform network requests
 * *
 * Validation reports problems without mutating the supplied data.
 *
 * ============================================================================
 */

import {
  ARTICLE_STATUS,
  BLOCK_TYPES,
  CONTENT_PROVIDERS,
  CONTENT_MODEL_VERSION,
  EMBED_PROVIDERS,
  HEADING_LEVELS,
  LANGUAGE_CODES,
  LIST_TYPES,
  RESOURCE_TYPES,
} from "./constants.js";

import { ARTICLE_TEMPLATE } from "./article.model.js";

/**
 * --------------------------------------------------------------------------
 * Validation Result
 * --------------------------------------------------------------------------
 */

/**
 * Result returned by every validator in this module.
 *
 * @typedef {Object} ValidationResult
 * @property {boolean} valid
 * True when no validation errors were found.
 *
 * @property {string[]} errors
 * Collection of validation errors.
 */

/**
 * --------------------------------------------------------------------------
 * Private Helpers
 * --------------------------------------------------------------------------
 *
 * Internal utilities shared by the validators.
 * These are implementation details and are intentionally not exported.
 */

/**
 * Creates an empty validation result.
 *
 * @returns {ValidationResult}
 */
function createResult() {
  return {
    valid: true,
    errors: [],
  };
}

/**
 * Adds an error to a validation result.
 *
 * @param {ValidationResult} result
 * @param {string} message
 * @returns {void}
 */
function addError(result, message) {
  result.valid = false;
  result.errors.push(message);
}

/**
 * Returns true when the supplied value is a plain object.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return prototype === Object.prototype || prototype === null;
}

/**
 * Returns true when the supplied value is a string.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === "string";
}

/**
 * Returns true when the supplied value is an array.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

function isNonEmptyString(value) {
  return isString(value) && value.trim().length > 0;
}

function isOptionalString(value) {
  return value === null || isNonEmptyString(value);
}

function isOneOf(value, values) {
  return Object.values(values).includes(value);
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateRequiredString(result, value, field) {
  if (!isNonEmptyString(value)) {
    addError(result, `${field} must be a non-empty string.`);
  }
}

function validateOptionalString(result, value, field) {
  if (!isOptionalString(value)) {
    addError(result, `${field} must be null or a non-empty string.`);
  }
}

function validateStringArray(result, value, field, requiresItems = false) {
  if (!isArray(value)) {
    addError(result, `${field} must be an array of non-empty strings.`);
    return;
  }

  if (requiresItems && value.length === 0) {
    addError(result, `${field} must contain at least one item.`);
  }

  value.forEach((item, index) => {
    if (!isNonEmptyString(item)) {
      addError(result, `${field}[${index}] must be a non-empty string.`);
    }
  });
}

function appendErrors(result, prefix, errors) {
  errors.forEach((error) => {
    addError(result, `${prefix}${error}`);
  });
}

function validateIdentity(result, identity) {
  if (!isObject(identity)) {
    addError(result, "identity must be a plain object.");
    return;
  }

  validateRequiredString(result, identity.id, "identity.id");
  validateRequiredString(result, identity.slug, "identity.slug");
  validateRequiredString(result, identity.title, "identity.title");
  validateRequiredString(result, identity.description, "identity.description");
}

function validatePublication(result, publication) {
  if (!isObject(publication)) {
    addError(result, "publication must be a plain object.");
    return;
  }

  validateRequiredString(result, publication.publishedAt, "publication.publishedAt");
  validateOptionalString(result, publication.updatedAt, "publication.updatedAt");

  if (
    publication.readingTime !== null &&
    (!Number.isFinite(publication.readingTime) || publication.readingTime < 0)
  ) {
    addError(result, "publication.readingTime must be null or a non-negative number.");
  }

  if (!isOneOf(publication.status, ARTICLE_STATUS)) {
    addError(result, "publication.status must be a supported article status.");
  }

  if (!isOneOf(publication.language, LANGUAGE_CODES)) {
    addError(result, "publication.language must be a supported language code.");
  }
}

function validateAuthor(result, author) {
  if (!isObject(author)) {
    addError(result, "author must be a plain object.");
    return;
  }

  validateRequiredString(result, author.name, "author.name");
  validateRequiredString(result, author.slug, "author.slug");
  validateOptionalString(result, author.bio, "author.bio");
  validateOptionalString(result, author.avatar, "author.avatar");
}

function validateSeo(result, seo) {
  if (!isObject(seo)) {
    addError(result, "seo must be a plain object.");
    return;
  }

  validateOptionalString(result, seo.canonicalUrl, "seo.canonicalUrl");
  validateOptionalString(result, seo.metaTitle, "seo.metaTitle");
  validateOptionalString(result, seo.metaDescription, "seo.metaDescription");
  validateOptionalString(result, seo.openGraphImage, "seo.openGraphImage");
}

function validateTaxonomy(result, taxonomy) {
  if (!isObject(taxonomy)) {
    addError(result, "taxonomy must be a plain object.");
    return;
  }

  validateStringArray(result, taxonomy.categories, "taxonomy.categories");
  validateStringArray(result, taxonomy.tags, "taxonomy.tags");
  validateOptionalString(result, taxonomy.series, "taxonomy.series");
}

function validateMedia(result, media) {
  if (!isObject(media)) {
    addError(result, "media must be a plain object.");
    return;
  }

  validateOptionalString(result, media.featuredImage, "media.featuredImage");
  validateOptionalString(result, media.thumbnail, "media.thumbnail");
  validateOptionalString(result, media.socialImage, "media.socialImage");
}

function validateResource(result, resource, index) {
  const field = `resources[${index}]`;

  if (!isObject(resource)) {
    addError(result, `${field} must be a plain object.`);
    return;
  }

  if (!isOneOf(resource.type, RESOURCE_TYPES)) {
    addError(result, `${field}.type must be a supported resource type.`);
  }

  if (!isOneOf(resource.provider, CONTENT_PROVIDERS)) {
    addError(result, `${field}.provider must be a supported content provider.`);
  }

  validateRequiredString(result, resource.url, `${field}.url`);
  validateOptionalString(result, resource.title, `${field}.title`);
}

function validateResources(result, resources) {
  if (!isArray(resources)) {
    addError(result, "resources must be an array.");
    return;
  }

  resources.forEach((resource, index) => {
    validateResource(result, resource, index);
  });
}

function validateCta(result, cta) {
  if (cta === null) {
    return;
  }

  if (!isObject(cta)) {
    addError(result, "cta must be null or a plain object.");
    return;
  }

  validateOptionalString(result, cta.title, "cta.title");
  validateOptionalString(result, cta.description, "cta.description");
  validateOptionalString(result, cta.buttonText, "cta.buttonText");
  validateOptionalString(result, cta.url, "cta.url");
}

function validateMetadata(result, metadata) {
  if (!isObject(metadata)) {
    addError(result, "metadata must be a plain object.");
    return;
  }

  if (!isOneOf(metadata.provider, CONTENT_PROVIDERS)) {
    addError(result, "metadata.provider must be a supported content provider.");
  }

  validateOptionalString(result, metadata.sourceId, "metadata.sourceId");

  if (metadata.modelVersion !== CONTENT_MODEL_VERSION) {
    addError(result, "metadata.modelVersion must match the current content model version.");
  }

  validateOptionalString(result, metadata.importedAt, "metadata.importedAt");
}

/**
 * --------------------------------------------------------------------------
 * Public API
 * --------------------------------------------------------------------------
 */

/**
 * Validates a single Content Block.
 *
 * @param {import("./blocks.model.js").ContentBlock} block
 * @returns {ValidationResult}
 */
export function validateBlock(block) {
  const result = createResult();

  if (!isObject(block)) {
    addError(result, "Block must be a plain object.");
    return result;
  }

  validateRequiredString(result, block.id, "Block id");

  if (!isOneOf(block.type, BLOCK_TYPES)) {
    addError(result, "Block type must be a supported content block type.");
    return result;
  }

  switch (block.type) {
    case BLOCK_TYPES.PARAGRAPH:
      validateRequiredString(result, block.text, "Block text");
      break;

    case BLOCK_TYPES.HEADING:
      if (!HEADING_LEVELS.includes(block.level)) {
        addError(result, "Heading block level must be between 1 and 6.");
      }
      validateRequiredString(result, block.text, "Heading block text");
      break;

    case BLOCK_TYPES.LIST:
      if (!isOneOf(block.style, LIST_TYPES)) {
        addError(result, "List block style must be a supported list type.");
      }
      validateStringArray(result, block.items, "List block items", true);
      break;

    case BLOCK_TYPES.QUOTE:
      validateRequiredString(result, block.text, "Quote block text");
      validateOptionalString(result, block.citation, "Quote block citation");
      break;

    case BLOCK_TYPES.IMAGE:
      validateRequiredString(result, block.src, "Image block src");
      validateRequiredString(result, block.alt, "Image block alt");
      validateOptionalString(result, block.caption, "Image block caption");
      break;

    case BLOCK_TYPES.GALLERY:
      if (!isArray(block.images)) {
        addError(result, "Gallery block images must be an array.");
        break;
      }

      if (block.images.length === 0) {
        addError(result, "Gallery block images must contain at least one image block.");
      }

      block.images.forEach((image, index) => {
        if (!isObject(image) || image.type !== BLOCK_TYPES.IMAGE) {
          addError(result, `Gallery block images[${index}] must be an image block.`);
        }

        const imageResult = validateBlock(image);
        appendErrors(result, `Gallery block images[${index}]: `, imageResult.errors);
      });
      break;

    case BLOCK_TYPES.EMBED:
      if (!isOneOf(block.provider, EMBED_PROVIDERS)) {
        addError(result, "Embed block provider must be a supported embed provider.");
      }
      validateRequiredString(result, block.url, "Embed block url");
      validateOptionalString(result, block.title, "Embed block title");
      break;

    case BLOCK_TYPES.CODE:
      validateRequiredString(result, block.language, "Code block language");
      validateRequiredString(result, block.code, "Code block code");
      break;

    case BLOCK_TYPES.CALLOUT:
      validateOptionalString(result, block.title, "Callout block title");
      validateRequiredString(result, block.text, "Callout block text");
      validateRequiredString(result, block.tone, "Callout block tone");
      break;

    case BLOCK_TYPES.DIVIDER:
      break;
  }

  return result;
}

/**
 * Validates a collection of Content Blocks.
 *
 * @param {import("./blocks.model.js").ContentBlock[]} blocks
 * @returns {ValidationResult}
 */
export function validateBlocks(blocks) {
  const result = createResult();

  if (!isArray(blocks)) {
    addError(result, "Blocks must be an array.");
    return result;
  }

  blocks.forEach((block, index) => {
    const blockResult = validateBlock(block);
    appendErrors(result, `Blocks[${index}]: `, blockResult.errors);
  });

  return result;
}

/**
 * Validates a canonical Article.
 *
 * @param {import("./article.model.js").Article} article
 * @returns {ValidationResult}
 */
export function validateArticle(article) {
  const result = createResult();

  if (!isObject(article)) {
    addError(result, "Article must be a plain object.");
    return result;
  }

  Object.keys(ARTICLE_TEMPLATE).forEach((property) => {
    if (!hasOwnProperty(article, property)) {
      addError(result, `Article is missing the ${property} property.`);
    }
  });

  validateIdentity(result, article.identity);
  validatePublication(result, article.publication);
  validateAuthor(result, article.author);
  validateSeo(result, article.seo);
  validateTaxonomy(result, article.taxonomy);
  validateMedia(result, article.media);

  if (!isArray(article.content)) {
    addError(result, "content must be an array.");
  } else {
    if (article.content.length === 0) {
      addError(result, "content must contain at least one block.");
    }

    const contentResult = validateBlocks(article.content);
    appendErrors(result, "content: ", contentResult.errors);
  }

  validateResources(result, article.resources);
  validateCta(result, article.cta);
  validateMetadata(result, article.metadata);

  return result;
}
