# Content Domain

## Purpose

The Content Domain provides the provider-independent vocabulary and canonical
Article shape used by the blog system. External content must be retrieved,
mapped into this domain model, and validated before it is rendered.

## Responsibilities

- Define canonical content constants and Article and Content Block models.
- Define source-level provider and mapper contracts.
- Validate canonical Articles and Content Blocks without mutating them.
- Provide shared Content Domain utilities.

The domain does not fetch, parse, render, or implement a content provider.

## Public API

Import the runtime API from `src/domain/content/index.js`:

- Content constants, including block, provider, status, and resource values.
- `ARTICLE_TEMPLATE`, the canonical Article shape baseline.
- `validateBlock(block)`, `validateBlocks(blocks)`, and
  `validateArticle(article)`.
- `createId()` and `createPrefixedId(prefix)`.

The provider and mapper files define JSDoc contracts (`ContentProvider` and
`ContentMapper`) for future implementations; they intentionally have no
runtime implementation or exports.

## Intended Use

```text
Provider source data
        ↓
Provider-specific mapper
        ↓
Canonical Article
        ↓
validateArticle()
        ↓
Renderer
```

The mapper is responsible for normalization. Validation reports model errors
as `{ valid, errors }`; it does not modify the Article or its blocks.
