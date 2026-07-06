// src/services/woocommerce.js
//
// Thin client for the WooCommerce Store API, called through our own
// /api/wc/* proxy (see api/wc/[...path].js) so there's no CORS to manage and
// the WordPress URL is never exposed in the browser's network tab.
//
// This talks to the *Store API* (public, read-only, no keys required) —
// never the wc/v3 admin REST API. That's a deliberate choice: the shop only
// needs to browse and hand off to WooCommerce's own checkout, so there is no
// reason to put admin credentials anywhere near client code.

const BASE = "/api/wc";

class WooCommerceError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "WooCommerceError";
    this.status = status;
  }
}

async function request(path, params = {}) {
  const url = new URL(path, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  const res = await fetch(url.pathname + url.search);

  if (!res.ok) {
    let message = `WooCommerce request failed (${res.status})`;
    try {
      const errBody = await res.json();
      if (errBody?.message) message = errBody.message;
    } catch {
      /* ignore parse errors on error bodies */
    }
    throw new WooCommerceError(message, res.status);
  }

  return res.json();
}

/**
 * Canonical category slugs used throughout the shop. Keeping these in one
 * place means the WooCommerce admin setup guide, the nav filters, and the
 * SEO metadata all agree on the same strings.
 */
export const SHOP_CATEGORIES = {
  MERCH: "merch",
  MERCH_TSHIRTS: "merch-tshirts",
  MERCH_BEANIES: "merch-beanies",
  MERCH_HOODIES: "merch-hoodies",
  MERCH_CAPS: "merch-caps",
  MERCH_FREE_BLANKETS: "free-blankets",
  DIGITAL_COURSES: "digital-courses",
  PHYSICAL_BOOKS: "books",
  MUSIC: "music",
};

/**
 * Fetch a page of products, optionally scoped to a category slug and/or a
 * text search term.
 */
export async function fetchProducts({
  category,
  search,
  page = 1,
  perPage = 12,
  orderby = "date",
  order = "desc",
  featured,
} = {}) {
  const data = await request(`${BASE}/products`, {
    category,
    search,
    page,
    per_page: perPage,
    orderby,
    order,
    featured: featured ? 1 : undefined,
  });
  return data;
}

/** Fetch a single product by its numeric WooCommerce ID. */
export async function fetchProductById(id) {
  const data = await request(`${BASE}/products`, { include: id });
  return Array.isArray(data) ? data[0] ?? null : null;
}

/** Fetch all product categories (used for the shop's filter bar). */
export async function fetchCategories() {
  return request(`${BASE}/products/categories`, { per_page: 50 });
}

/**
 * Builds the URL that hands the shopper off to WooCommerce's own cart /
 * checkout for the actual purchase. WooCommerce (not this React app) owns
 * payment processing, tax, shipping, and downloadable-file delivery — this
 * app's job is discovery and merchandising, not reimplementing checkout.
 *
 * Requires the public site URL (not the proxy) because the shopper's browser
 * needs to land on WordPress to get a real session/cart cookie.
 */
export function buildAddToCartUrl(productId, { qty = 1 } = {}) {
  const shopOrigin = import.meta.env.VITE_WC_SHOP_ORIGIN;
  if (!shopOrigin) {
    console.warn(
      "VITE_WC_SHOP_ORIGIN is not set — cart links will be relative and likely broken."
    );
  }
  const base = shopOrigin || "";
  return `${base}/cart/?add-to-cart=${productId}&quantity=${qty}`;
}

export { WooCommerceError };
