# System Context

## Purpose

Shows the systems that interact with the Teslim Digital Blog System.

---

```text
                    Content Author
                          │
                          ▼
                  ┌─────────────────┐
                  │    Substack     │
                  │ (Source of Truth)
                  └────────┬────────┘
                           │
                        RSS Feed
                           │
                           ▼
          ┌────────────────────────────────┐
          │ Teslim Digital Blog System     │
          └──────────────┬─────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Visitors     Search Engines   Newsletter
                                      Interface
                                           │
                                           ▼
                              Sendy/SES (V1)
                         Beehiiv / Mailcoach
                               (Future)
```

---

## Key Points

- Substack is the single source of truth.
- The Blog System consumes published content.
- Visitors never leave the website.
- Newsletter providers remain independent of the Blog System.