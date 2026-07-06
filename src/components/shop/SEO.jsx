// src/components/shop/SEO.jsx
import { Helmet } from "react-helmet-async";

/**
 * Drop this into any page/route to control title, meta description,
 * canonical URL, Open Graph tags, and (optionally) JSON-LD structured data.
 *
 * Requires react-helmet-async:
 *   npm install react-helmet-async
 * and wrapping the app once in <HelmetProvider> (see App.jsx in the setup
 * guide) — because this is a client-rendered SPA, tags update on route
 * change but a search engine that doesn't execute JS won't see them. See
 * DEPLOYMENT-GUIDE.md's "SEO for an SPA" section for the prerendering note.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image,
  jsonLd,
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const canonical = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

/** Builds Product structured data (schema.org) for a WooCommerce product. */
export function buildProductJsonLd(product, siteUrl) {
  if (!product) return null;
  const price = Number(product.prices?.price ?? 0) / 10 ** Number(product.prices?.currency_minor_unit ?? 2);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images?.map((img) => img.src),
    description: product.short_description?.replace(/<[^>]+>/g, ""),
    offers: {
      "@type": "Offer",
      priceCurrency: product.prices?.currency_code || "USD",
      price: price.toFixed(2),
      availability: product.is_in_stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${siteUrl}${product.permalink || ""}`,
    },
  };
}
