import { useEffect } from "react";

import { absoluteUrl } from "../lib/site";

const DEFAULT_TITLE =
  "Teslim Digital | Websites, Growth & Automation";
const DEFAULT_DESCRIPTION =
  "Teslim Digital helps businesses build stronger digital foundations, grow customer acquisition, and improve operations through practical automation.";
const DEFAULT_IMAGE_ALT =
  "Teslim Digital \u2014 websites, digital growth, and automation";

const organizationId = absoluteUrl("/#organization");
const homepageUrl = absoluteUrl("/");
const STRUCTURED_DATA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "Teslim Digital",
    url: homepageUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/td-mark.png"),
    },
    description: DEFAULT_DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: "Teslim Digital",
    url: homepageUrl,
    publisher: { "@id": organizationId },
  },
]);

function syncHeadNode(key, selector, tagName, attributes, textContent) {
  const matches = Array.from(document.head.querySelectorAll(selector));
  const node =
    matches.find((candidate) => candidate.dataset.seo === key) ||
    matches[0] ||
    document.createElement(tagName);

  node.dataset.seo = key;
  for (const [name, value] of Object.entries(attributes)) {
    node.setAttribute(name, value);
  }
  if (textContent !== undefined) node.textContent = textContent;
  if (!node.isConnected) document.head.appendChild(node);
  for (const duplicate of matches) {
    if (duplicate !== node) duplicate.remove();
  }
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = "/og-image.png",
  imageAlt = DEFAULT_IMAGE_ALT,
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  useEffect(() => {
    syncHeadNode("title", "title", "title", {}, title);
    syncHeadNode("canonical", 'link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });

    const metaTags = [
      ["description", "name", "description", description],
      ["og-title", "property", "og:title", title],
      ["og-description", "property", "og:description", description],
      ["og-image", "property", "og:image", imageUrl],
      ["og-image-alt", "property", "og:image:alt", imageAlt],
      ["og-url", "property", "og:url", canonicalUrl],
      ["og-type", "property", "og:type", type],
      ["og-site-name", "property", "og:site_name", "Teslim Digital"],
      ["twitter-card", "name", "twitter:card", "summary_large_image"],
      ["twitter-title", "name", "twitter:title", title],
      ["twitter-description", "name", "twitter:description", description],
      ["twitter-image", "name", "twitter:image", imageUrl],
      ["twitter-image-alt", "name", "twitter:image:alt", imageAlt],
    ];

    for (const [key, attribute, name, content] of metaTags) {
      syncHeadNode(key, `meta[${attribute}="${name}"]`, "meta", {
        [attribute]: name,
        content,
      });
    }

    syncHeadNode(
      "structured-data",
      'script[data-seo="structured-data"]',
      "script",
      { type: "application/ld+json" },
      STRUCTURED_DATA,
    );
  }, [canonicalUrl, description, imageAlt, imageUrl, title, type]);

  return null;
}
