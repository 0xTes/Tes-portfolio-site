import {
  ARTICLE_STATUS,
  BLOCK_TYPES,
  CONTENT_MODEL_VERSION,
  CONTENT_PROVIDERS,
  DEFAULTS,
  EMBED_PROVIDERS,
  LIST_TYPES,
  createPrefixedId,
} from "../domain/content/index.js";

const WORDS_PER_MINUTE = 220;

function cleanText(value) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function parseHtml(html) {
  if (typeof DOMParser === "undefined") {
    return null;
  }

  return new DOMParser().parseFromString(html, "text/html");
}

function htmlToText(html) {
  const document = parseHtml(html);

  if (document) {
    return cleanText(document.body.textContent);
  }

  return cleanText(html.replace(/<[^>]*>/g, " "));
}

function createBlock(type, properties = {}) {
  return {
    id: createPrefixedId("block"),
    type,
    ...properties,
  };
}

function createParagraph(text) {
  const normalizedText = cleanText(text);
  return normalizedText
    ? createBlock(BLOCK_TYPES.PARAGRAPH, { text: normalizedText })
    : null;
}

function getEmbedProvider(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();

    if (hostname.includes("substack.com")) return EMBED_PROVIDERS.SUBSTACK;
    if (hostname.includes("tiktok.com")) return EMBED_PROVIDERS.TIKTOK;
    if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
      return EMBED_PROVIDERS.YOUTUBE;
    }
    if (hostname.includes("vimeo.com")) return EMBED_PROVIDERS.VIMEO;
    if (hostname.includes("spotify.com")) return EMBED_PROVIDERS.SPOTIFY;
  } catch {
    return EMBED_PROVIDERS.GENERIC;
  }

  return EMBED_PROVIDERS.GENERIC;
}

function mapImage(image, caption = null) {
  const src = image.getAttribute("src")?.trim() || "";
  const alt = cleanText(image.getAttribute("alt")) || cleanText(caption);

  if (!src || !alt) {
    return null;
  }

  return createBlock(BLOCK_TYPES.IMAGE, {
    src,
    alt,
    caption: cleanText(caption) || null,
  });
}

function mapList(element) {
  const items = Array.from(element.children)
    .filter((child) => child.tagName === "LI")
    .map((item) => cleanText(item.textContent))
    .filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return createBlock(BLOCK_TYPES.LIST, {
    style: element.tagName === "OL" ? LIST_TYPES.ORDERED : LIST_TYPES.UNORDERED,
    items,
  });
}

function mapCode(element) {
  const codeElement = element.querySelector("code");
  const code = (codeElement || element).textContent?.trim() || "";
  const className = codeElement?.className || "";
  const languageMatch = className.match(/language-([\w+-]+)/i);

  if (!code) {
    return null;
  }

  return createBlock(BLOCK_TYPES.CODE, {
    language: languageMatch?.[1] || "text",
    code,
  });
}

function mapNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const paragraph = createParagraph(node.textContent);
    return paragraph ? [paragraph] : [];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return [];
  }

  const element = /** @type {HTMLElement} */ (node);
  const tagName = element.tagName;

  if (tagName === "P") {
    const paragraph = createParagraph(element.textContent);
    return paragraph ? [paragraph] : [];
  }

  if (/^H[1-6]$/.test(tagName)) {
    const text = cleanText(element.textContent);
    return text
      ? [createBlock(BLOCK_TYPES.HEADING, { level: Number(tagName.slice(1)), text })]
      : [];
  }

  if (tagName === "UL" || tagName === "OL") {
    const list = mapList(element);
    return list ? [list] : [];
  }

  if (tagName === "BLOCKQUOTE") {
    const text = cleanText(element.textContent);
    const citation = cleanText(element.getAttribute("cite")) || null;

    return text ? [createBlock(BLOCK_TYPES.QUOTE, { text, citation })] : [];
  }

  if (tagName === "FIGURE") {
    const caption = cleanText(element.querySelector("figcaption")?.textContent);
    const image = element.querySelector("img");
    const mappedImage = image ? mapImage(image, caption) : null;

    return mappedImage ? [mappedImage] : [];
  }

  if (tagName === "IMG") {
    const image = mapImage(element);
    return image ? [image] : [];
  }

  if (tagName === "HR") {
    return [createBlock(BLOCK_TYPES.DIVIDER)];
  }

  if (tagName === "PRE") {
    const code = mapCode(element);
    return code ? [code] : [];
  }

  if (tagName === "IFRAME") {
    const url = element.getAttribute("src")?.trim() || "";
    const title = cleanText(element.getAttribute("title")) || null;

    return url
      ? [
          createBlock(BLOCK_TYPES.EMBED, {
            provider: getEmbedProvider(url),
            url,
            title,
          }),
        ]
      : [];
  }

  const childBlocks = Array.from(element.childNodes).flatMap(mapNode);

  if (childBlocks.length > 0) {
    return childBlocks;
  }

  const paragraph = createParagraph(element.textContent);
  return paragraph ? [paragraph] : [];
}

function mapHtmlToBlocks(html) {
  if (!cleanText(html)) {
    return [];
  }

  const document = parseHtml(html);

  if (!document) {
    const paragraph = createParagraph(htmlToText(html));
    return paragraph ? [paragraph] : [];
  }

  return Array.from(document.body.childNodes).flatMap(mapNode);
}

function createSlug(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toIsoDate(value) {
  const normalizedValue = cleanText(value);
  const timestamp = Date.parse(normalizedValue);

  return Number.isNaN(timestamp) ? normalizedValue : new Date(timestamp).toISOString();
}

function getReadingTime(blocks) {
  const text = blocks
    .flatMap((block) => {
      if (block.type === BLOCK_TYPES.LIST) return block.items;
      if (block.type === BLOCK_TYPES.CODE) return [block.code];
      return [block.text || ""];
    })
    .join(" ");
  const words = cleanText(text).split(" ").filter(Boolean).length;

  return words > 0 ? Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)) : null;
}

/**
 * Maps a provider-owned Substack RSS article into the canonical Article model.
 * It intentionally does not retrieve source data or validate the result.
 *
 * @param {unknown} providerArticle
 * @returns {import("../domain/content/article.model.js").Article}
 */
export function mapSubstackRssArticle(providerArticle) {
  const source =
    providerArticle && typeof providerArticle === "object" ? providerArticle : {};
  const sourceId = cleanText(source.sourceId);
  const title = cleanText(source.title);
  const slug = createSlug(source.slug || title);
  const content = mapHtmlToBlocks(source.contentHtml || source.descriptionHtml || "");
  const description = htmlToText(source.descriptionHtml);
  const authorName = cleanText(source.author) || DEFAULTS.AUTHOR_NAME;
  const imageUrl = cleanText(source.imageUrl) || null;
  const categories = Array.isArray(source.categories)
    ? source.categories.map(cleanText).filter(Boolean)
    : [];

  return {
    identity: {
      id: sourceId ? `${CONTENT_PROVIDERS.SUBSTACK}:${sourceId}` : slug,
      slug,
      title,
      description,
    },
    publication: {
      publishedAt: toIsoDate(source.publishedAt),
      updatedAt: null,
      readingTime: getReadingTime(content),
      status: ARTICLE_STATUS.PUBLISHED,
      language: DEFAULTS.LANGUAGE,
    },
    author: {
      name: authorName,
      slug: createSlug(authorName) || DEFAULTS.AUTHOR_SLUG,
      bio: null,
      avatar: null,
    },
    seo: {
      canonicalUrl: null,
      metaTitle: null,
      metaDescription: null,
      openGraphImage: imageUrl,
    },
    taxonomy: {
      categories,
      tags: [],
      series: null,
    },
    media: {
      featuredImage: imageUrl,
      thumbnail: null,
      socialImage: null,
    },
    content,
    resources: [],
    cta: null,
    metadata: {
      provider: CONTENT_PROVIDERS.SUBSTACK,
      sourceId: sourceId || null,
      modelVersion: CONTENT_MODEL_VERSION,
      importedAt: null,
    },
  };
}

/**
 * Creates the Substack implementation of the ContentMapper contract.
 *
 * @returns {import("../domain/content/mapper.interface.js").ContentMapper}
 */
export function createSubstackRssMapper() {
  return Object.freeze({ mapArticle: mapSubstackRssArticle });
}
