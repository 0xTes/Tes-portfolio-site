import { validateArticle } from "../domain/content/index.js";
import { createSubstackRssMapper } from "../mappers/substack-rss.mapper.js";
import { createSubstackRssProvider } from "../providers/substack-rss.provider.js";

export const BLOG_CONTENT_STATUS = Object.freeze({
  READY: "ready",
  EMPTY: "empty",
  UNAVAILABLE: "unavailable",
  INVALID: "invalid",
});

function createResult(status, articles = []) {
  return Object.freeze({ status, articles: Object.freeze(articles) });
}

function sortByPublicationDate(articles) {
  return [...articles].sort(
    (first, second) =>
      Date.parse(second.publication.publishedAt) -
      Date.parse(first.publication.publishedAt),
  );
}

/**
 * Coordinates the provider, mapper, and canonical validator for the Blog UI.
 * React receives only the resulting status and valid canonical Articles.
 *
 * @param {{
 *   provider: import("../domain/content/provider.interface.js").ContentProvider,
 *   mapper: import("../domain/content/mapper.interface.js").ContentMapper,
 *   validate?: typeof validateArticle
 * }} dependencies
 */
export function createBlogContentAccess({
  provider,
  mapper,
  validate = validateArticle,
}) {
  return Object.freeze({
    async getArticles() {
      let providerArticles;

      try {
        providerArticles = await provider.fetchArticles();
      } catch (error) {
        return createResult(
          error?.code === "invalid-feed" ? BLOG_CONTENT_STATUS.INVALID : BLOG_CONTENT_STATUS.UNAVAILABLE,
        );
      }

      if (!Array.isArray(providerArticles)) {
        return createResult(BLOG_CONTENT_STATUS.INVALID);
      }

      if (providerArticles.length === 0) {
        return createResult(BLOG_CONTENT_STATUS.EMPTY);
      }

      const articles = providerArticles.flatMap((providerArticle) => {
        try {
          const article = mapper.mapArticle(providerArticle);
          return validate(article).valid ? [article] : [];
        } catch {
          return [];
        }
      });

      return articles.length > 0
        ? createResult(BLOG_CONTENT_STATUS.READY, sortByPublicationDate(articles))
        : createResult(BLOG_CONTENT_STATUS.INVALID);
    },
  });
}

const provider = createSubstackRssProvider({
  feedUrl: import.meta.env.VITE_SUBSTACK_RSS_URL || "",
});
const mapper = createSubstackRssMapper();
const blogContentAccess = createBlogContentAccess({ provider, mapper });

let articlesRequest;

/**
 * Gets the current blog listing data. The in-flight/result promise is shared
 * so development Strict Mode and route revisits do not refetch the RSS feed.
 */
export function getBlogArticles() {
  articlesRequest ||= blogContentAccess.getArticles();
  return articlesRequest;
}
