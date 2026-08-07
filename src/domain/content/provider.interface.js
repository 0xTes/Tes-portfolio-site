/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * Provider Contract
 * ============================================================================
 *
 * Purpose
 * -------
 * Defines the boundary for retrieving provider-owned content.
 *
 * A provider returns source data only. It does not map source data into the
 * canonical Article model, validate it, render it, or expose UI concerns.
 *
 * ============================================================================
 */

/**
 * Raw article data returned by a content provider.
 *
 * The shape remains provider-owned until a ContentMapper transforms it.
 *
 * @typedef {unknown} ProviderArticle
 */

/**
 * Contract implemented by an external content provider adapter.
 *
 * @typedef {Object} ContentProvider
 * @property {string} name
 * @property {() => Promise<ProviderArticle[]>} fetchArticles
 * @property {(slug: string) => Promise<ProviderArticle|null>} fetchArticleBySlug
 */

export {};
