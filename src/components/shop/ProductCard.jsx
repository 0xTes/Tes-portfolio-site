// src/components/shop/ProductCard.jsx
import { motion } from "framer-motion";
import { buildAddToCartUrl, SHOP_CATEGORIES } from "../../services/woocommerce";

function formatPrice(prices) {
  if (!prices) return "";
  const minorUnit = Number(prices.currency_minor_unit ?? 2);
  const amount = Number(prices.price ?? 0) / 10 ** minorUnit;
  if (amount === 0) return "Free";
  return `${prices.currency_symbol ?? ""}${amount.toFixed(2)}`;
}

/**
 * A product's category slugs decide how its call-to-action behaves:
 * - "music"            -> external links (iTunes buy button + streaming list)
 * - everything else    -> hands off to WooCommerce's own cart/checkout
 *
 * Rounded corners live on the OUTER card only; inner text sits in its own
 * padded block so radius/clipping never touches the copy (see the note in
 * DEPLOYMENT-GUIDE.md about applying the same pattern to the homepage grids).
 */
export default function ProductCard({ product }) {
  const categorySlugs = (product.categories || []).map((c) => c.slug);
  const isMusic = categorySlugs.includes(SHOP_CATEGORIES.MUSIC);
  const isFree = Number(product.prices?.price ?? 0) === 0;
  const image = product.images?.[0];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card overflow-hidden rounded-[28px]"
    >
      {/* Image sits in its own clipped box so the radius never crops into
          the text block below it. */}
      <div className="overflow-hidden rounded-t-[28px]">
        {image ? (
          <img
            src={image.src}
            alt={image.alt || product.name}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        ) : (
          <div className="aspect-square w-full bg-slate-100" />
        )}
      </div>

      {/* Text content: padded independently of the outer radius. */}
      <div className="p-8">
        <h3 className="text-lg font-semibold text-slate-900">
          {product.name}
        </h3>

        {product.short_description && (
          <div
            className="prose prose-sm mt-2 max-w-none text-slate-600 [&_a]:text-teal-600 [&_a]:underline [&_ul]:mt-2 [&_ul]:space-y-1"
            // Admin-authored content from the WooCommerce dashboard, not
            // user input — see WOOCOMMERCE-SETUP-GUIDE.md for what belongs
            // here (streaming links for the Music category, etc).
            dangerouslySetInnerHTML={{ __html: product.short_description }}
          />
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold text-teal-600">
            {formatPrice(product.prices)}
          </span>

          {isMusic ? (
            <a
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              Buy on iTunes
            </a>
          ) : (
            <a
              href={buildAddToCartUrl(product.id)}
              className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              {isFree ? "Get it free" : "Add to cart"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
