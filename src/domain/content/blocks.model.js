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
 *   type: "paragraph",
 *   text: string
 * }} ParagraphBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "heading",
 *   level: 1|2|3|4|5|6,
 *   text: string
 * }} HeadingBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "list",
 *   style: "ordered" | "unordered" | "checklist",
 *   items: string[]
 * }} ListBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "quote",
 *   text: string,
 *   citation: string | null
 * }} QuoteBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "image",
 *   src: string,
 *   alt: string,
 *   caption: string | null
 * }} ImageBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "gallery",
 *   images: ImageBlock[]
 * }} GalleryBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "embed",
 *   provider:
       | "substack"
       | "tiktok"
       | "youtube"
       | "vimeo"
       | "spotify"
       | "generic",
 *   url: string,
 *   title: string | null
 * }} EmbedBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "code",
 *   language: string,
 *   code: string
 * }} CodeBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "callout",
 *   title: string | null,
 *   text: string,
 *   tone: string
 * }} CalloutBlock
 */

/**
 * @typedef {BaseBlock & {
 *   type: "divider",
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
