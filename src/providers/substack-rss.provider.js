import { CONTENT_PROVIDERS } from "../domain/content/index.js";

/**
 * Error raised when the Substack RSS feed cannot be retrieved or parsed.
 * The code is intended for the application boundary; visitors never receive
 * this error directly.
 */
export class SubstackProviderError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "SubstackProviderError";
    this.code = code;
  }
}

function getFirstElementByLocalName(parent, localName) {
  return Array.from(parent.getElementsByTagName("*")).find(
    (element) => element.localName === localName,
  );
}

function getElementText(parent, localName) {
  return getFirstElementByLocalName(parent, localName)?.textContent?.trim() || "";
}

function getImageUrl(item) {
  const image = getFirstElementByLocalName(item, "content");
  const enclosure = getFirstElementByLocalName(item, "enclosure");

  if (image?.getAttribute("url")) {
    return image.getAttribute("url");
  }

  if (enclosure?.getAttribute("type")?.startsWith("image/")) {
    return enclosure.getAttribute("url");
  }

  return null;
}

function getSlugFromUrl(url) {
  try {
    const pathname = new URL(url).pathname.replace(/\/+$/, "");
    const slug = pathname.split("/").filter(Boolean).pop();

    return slug || "";
  } catch {
    return "";
  }
}

/**
 * Parses an RSS document into the source-specific shape owned by this
 * provider. It intentionally does not map or validate canonical Articles.
 *
 * @param {string} xml
 * @returns {Array<{
 *   sourceId: string,
 *   slug: string,
 *   title: string,
 *   link: string,
 *   descriptionHtml: string,
 *   contentHtml: string,
 *   publishedAt: string,
 *   author: string,
 *   categories: string[],
 *   imageUrl: string|null
 * }>}
 */
export function parseSubstackRss(xml) {
  if (typeof DOMParser === "undefined") {
    throw new SubstackProviderError(
      "unsupported-runtime",
      "The current runtime cannot parse RSS content.",
    );
  }

  const document = new DOMParser().parseFromString(xml, "application/xml");

  if (document.querySelector("parsererror")) {
    throw new SubstackProviderError("invalid-feed", "The RSS feed is not valid XML.");
  }

  return Array.from(document.querySelectorAll("item")).map((item) => {
    const link = getElementText(item, "link");
    const sourceId = getElementText(item, "guid") || link;

    return {
      sourceId,
      slug: getSlugFromUrl(link),
      title: getElementText(item, "title"),
      link,
      descriptionHtml: getElementText(item, "description"),
      contentHtml: getElementText(item, "encoded"),
      publishedAt: getElementText(item, "pubDate"),
      author: getElementText(item, "creator") || getElementText(item, "author"),
      categories: Array.from(item.getElementsByTagName("category"))
        .map((category) => category.textContent?.trim() || "")
        .filter(Boolean),
      imageUrl: getImageUrl(item),
    };
  });
}

/**
 * Creates the Substack implementation of the ContentProvider contract.
 *
 * @param {{ feedUrl?: string, fetcher?: typeof fetch }} options
 * @returns {import("../domain/content/provider.interface.js").ContentProvider}
 */
export function createSubstackRssProvider({ feedUrl = "", fetcher = fetch } = {}) {
  const normalizedFeedUrl = feedUrl.trim();

  async function fetchArticles() {
    if (!normalizedFeedUrl) {
      throw new SubstackProviderError(
        "configuration",
        "The Substack RSS feed URL is not configured.",
      );
    }

    let response;

    try {
      response = await fetcher(normalizedFeedUrl, {
        headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      });
    } catch {
      throw new SubstackProviderError(
        "unavailable",
        "The Substack RSS feed could not be reached.",
      );
    }

    if (!response.ok) {
      throw new SubstackProviderError(
        "unavailable",
        "The Substack RSS feed returned an unsuccessful response.",
      );
    }

    return parseSubstackRss(await response.text());
  }

  return Object.freeze({
    name: CONTENT_PROVIDERS.SUBSTACK,
    fetchArticles,
    async fetchArticleBySlug(slug) {
      const articles = await fetchArticles();
      return articles.find((article) => article.slug === slug) || null;
    },
  });
}
