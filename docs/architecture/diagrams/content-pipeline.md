# Content Pipeline

## Purpose

Shows how published content is processed before rendering.

---

```text
Substack
    │
    ▼
 RSS Feed
    │
    ▼
 Fetch
    │
    ▼
 Parse
    │
    ▼
Transform
    │
    ▼
Validate
    │
    ▼
Internal Content Model
    │
    ▼
Render
    │
    ▼
Generate SEO
    │
    ▼
Website
```

---

## Key Points

- Pipeline is linear and deterministic.
- Transformation creates a provider-independent content model.
- Validation prevents incomplete content from rendering.
- SEO generation is part of the publishing pipeline.