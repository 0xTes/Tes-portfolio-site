/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * Article Model
 * ============================================================================
 *
 * Purpose
 * -------
 * Defines the canonical Article domain model.
 *
 * Every content provider must transform its source data into this model
 * before the rest of the application consumes it.
 *
 * This file intentionally contains:
 *
 * - No React
 * - No rendering logic
 * - No provider logic
 * - No validation
 * - No network code
 *
 * ============================================================================
 */

import {
  ARTICLE_STATUS,
  CONTENT_PROVIDERS,
  DEFAULTS,
  CONTENT_MODEL_VERSION,
} from "./constants.js";

/**
 * --------------------------------------------------------------------------
 * Identity
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleIdentity
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 */

/**
 * --------------------------------------------------------------------------
 * Publication
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticlePublication
 * @property {string} publishedAt
 * @property {string|null} updatedAt
 * @property {number|null} readingTime
 * @property {string} status
 * @property {string} language
 */

/**
 * --------------------------------------------------------------------------
 * Author
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleAuthor
 * @property {string} name
 * @property {string} slug
 * @property {string|null} bio
 * @property {string|null} avatar
 */

/**
 * --------------------------------------------------------------------------
 * SEO
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleSEO
 * @property {string|null} canonicalUrl
 * @property {string|null} metaTitle
 * @property {string|null} metaDescription
 * @property {string|null} openGraphImage
 */

/**
 * --------------------------------------------------------------------------
 * Taxonomy
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleTaxonomy
 * @property {string[]} categories
 * @property {string[]} tags
 * @property {string|null} series
 */

/**
 * --------------------------------------------------------------------------
 * Media
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleMedia
 * @property {string|null} featuredImage
 * @property {string|null} thumbnail
 * @property {string|null} socialImage
 */

/**
 * --------------------------------------------------------------------------
 * External Resource
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleResource
 * @property {string} type
 * @property {string} provider
 * @property {string} url
 * @property {string|null} title
 */

/**
 * --------------------------------------------------------------------------
 * Call To Action
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleCTA
 * @property {string|null} title
 * @property {string|null} description
 * @property {string|null} buttonText
 * @property {string|null} url
 */

/**
 * --------------------------------------------------------------------------
 * Metadata
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} ArticleMetadata
 * @property {string} provider
 * @property {string|null} sourceId
 * @property {string} modelVersion
 * @property {string|null} importedAt
 */

/**
 * --------------------------------------------------------------------------
 * Canonical Article
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} Article
 *
 * @property {ArticleIdentity} identity
 * @property {ArticlePublication} publication
 * @property {ArticleAuthor} author
 * @property {ArticleSEO} seo
 * @property {ArticleTaxonomy} taxonomy
 * @property {ArticleMedia} media
 * @property {import("./blocks.model.js").ContentBlock[]} content
 * @property {ArticleResource[]} resources
 * @property {ArticleCTA|null} cta
 * @property {ArticleMetadata} metadata
 */

/**
 * --------------------------------------------------------------------------
 * Default Article Blueprint
 * --------------------------------------------------------------------------
 *
 * This object serves as the canonical shape for every Article in the
 * Content Domain. It is intentionally immutable and can be used as the
 * baseline for mappers, validators and tests.
 */

export const ARTICLE_TEMPLATE = Object.freeze({
  identity: {
    id: "",
    slug: "",
    title: "",
    description: "",
  },

  publication: {
    publishedAt: "",
    updatedAt: null,
    readingTime: null,
    status: ARTICLE_STATUS.PUBLISHED,
    language: DEFAULTS.LANGUAGE,
  },

  author: {
    name: DEFAULTS.AUTHOR_NAME,
    slug: DEFAULTS.AUTHOR_SLUG,
    bio: null,
    avatar: null,
  },

  seo: {
    canonicalUrl: null,
    metaTitle: null,
    metaDescription: null,
    openGraphImage: null,
  },

  taxonomy: {
    categories: [],
    tags: [],
    series: null,
  },

  media: {
    featuredImage: null,
    thumbnail: null,
    socialImage: null,
  },

  content: [],

  resources: [],

  cta: null,

  metadata: {
    provider: CONTENT_PROVIDERS.SUBSTACK,
    sourceId: null,
    modelVersion: CONTENT_MODEL_VERSION,
    importedAt: null,
  },
});

export {};