# High-Level Architecture

## Purpose

Shows the major components of the Blog System.

---

```text
          Publish Article
                 │
                 ▼
            Substack
                 │
             RSS Feed
                 │
                 ▼
         Content Pipeline
                 │
                 ▼
      Internal Content Model
                 │
        ┌────────┴────────┐
        ▼                 ▼
   Blog Listing      Article Pages
        │                 │
        └────────┬────────┘
                 ▼
            Design System
                 │
                 ▼
             Website UI
```

---

## Key Points

- Content flows in one direction.
- Internal Content Model separates data from presentation.
- All pages use the shared Design System.
- Rendering is native.