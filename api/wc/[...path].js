// api/wc/[...path].js
//
// Same-origin proxy to the WooCommerce Store API.
//
// Why this exists: the portfolio is a static Vite/React app on Vercel, the
// shop data lives on a separate WordPress/WooCommerce install. Calling the
// WordPress domain directly from the browser means fighting CORS forever and
// exposing the WordPress URL in every network request. This function runs on
// Vercel's servers, forwards read-only requests to WooCommerce, and returns
// the JSON as if it came from your own domain (/api/wc/...).
//
// It ONLY proxies the public, read-only Store API (products, categories,
// products/collection-data). It never forwards write requests, and it never
// touches the wc/v3 admin REST API or exposes consumer keys/secrets — none
// are needed for browsing.
//
// Required environment variable (set in Vercel Project Settings -> Environment
// Variables, NOT in a client-side .env that gets bundled):
//   WC_STORE_URL = https://shop.yourdomain.com   (your WordPress site root, no trailing slash)

export const config = { runtime: "edge" };

const ALLOWED_PREFIXES = [
  "products",
  "products/categories",
  "products/collection-data",
];

export default async function handler(req) {
  if (req.method !== "GET") {
    return json({ message: "Method not allowed" }, 405);
  }

  const storeUrl = process.env.WC_STORE_URL;
  if (!storeUrl) {
    return json(
      { message: "Server misconfigured: WC_STORE_URL is not set." },
      500
    );
  }

  const url = new URL(req.url);
  // Strip the leading /api/wc/ segment to get the Store API path.
  const path = url.pathname.replace(/^\/api\/wc\/?/, "");

  const isAllowed = ALLOWED_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(prefix + "/")
  );
  if (!isAllowed) {
    return json({ message: "Not found" }, 404);
  }

  const upstream = new URL(`/wp-json/wc/store/v1/${path}`, storeUrl);
  upstream.search = url.search;

  try {
    const res = await fetch(upstream.toString(), {
      headers: { Accept: "application/json" },
      // Cache product/category reads at the edge for 60s, serve stale for a
      // minute while revalidating so shop pages stay fast even under load.
      cf: { cacheTtl: 60 },
    });

    const body = await res.text();

    return new Response(body, {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (err) {
    return json({ message: "Upstream WooCommerce request failed." }, 502);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
