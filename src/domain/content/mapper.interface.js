/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * Mapper Contract
 * ============================================================================
 *
 * Purpose
 * -------
 * Defines the boundary that transforms provider-owned article data into the
 * canonical Content Domain Article model.
 *
 * A mapper does not retrieve data, validate canonical Articles, render UI, or
 * contain provider transport concerns.
 *
 * ============================================================================
 */

/**
 * Contract implemented by a provider-specific content mapper.
 *
 * @typedef {Object} ContentMapper
 * @property {(providerArticle: unknown) => import("./article.model.js").Article} mapArticle
 */

export {};
