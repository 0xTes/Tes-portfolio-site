/**
 * ============================================================================
 * Teslim Digital
 * Content Domain
 * Content Block Model
 * ============================================================================
 *
 * Purpose
 * -------
 * Defines the canonical Content Block domain model.
 *
 * This module intentionally contains no business logic.
 *
 * It does NOT:
 *
 * - create blocks
 * - validate blocks
 * - render blocks
 * - parse providers
 *
 * It only documents and standardises the shape of every Content Block
 * understood by the application.
 *
 * ============================================================================
 */

import {
  BLOCK_TYPES,
  LIST_TYPES,
  EMBED_PROVIDERS,
} from "./constants.js";

/**
 * --------------------------------------------------------------------------
 * Base Content Block
 * --------------------------------------------------------------------------
 *
 * Every Content Block in the system extends this structure.
 *
 * @typedef {Object} BaseBlock
 * @property {string} id
 * @property {string} type
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.PARAGRAPH,
 *   text: string
 * }} ParagraphBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.HEADING,
 *   level: 1|2|3|4|5|6,
 *   text: string
 * }} HeadingBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.LIST,
 *   style: typeof LIST_TYPES[keyof typeof LIST_TYPES],
 *   items: string[]
 * }} ListBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.QUOTE,
 *   text: string,
 *   citation: string | null
 * }} QuoteBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.IMAGE,
 *   src: string,
 *   alt: string,
 *   caption: string | null
 * }} ImageBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.GALLERY,
 *   images: ImageBlock[]
 * }} GalleryBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.EMBED,
 *   provider: typeof EMBED_PROVIDERS[keyof typeof EMBED_PROVIDERS],
 *   url: string,
 *   title: string | null
 * }} EmbedBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.CODE,
 *   language: string,
 *   code: string
 * }} CodeBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.CALLOUT,
 *   title: string | null,
 *   text: string,
 *   tone: string
 * }} CalloutBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: typeof BLOCK_TYPES.DIVIDER
 * }} DividerBlock
 */

/**
 * Canonical Content Block.
 *
 * @typedef {
 * ParagraphBlock |
 * HeadingBlock |
 * ListBlock |
 * QuoteBlock |
 * ImageBlock |
 * GalleryBlock |
 * EmbedBlock |
 * CodeBlock |
 * CalloutBlock |
 * DividerBlock
 * } ContentBlock
 */

export {};