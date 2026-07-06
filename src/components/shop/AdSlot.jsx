// src/components/shop/AdSlot.jsx

/**
 * A reserved, fixed-size container for ad units. Reserving the exact space
 * up front (rather than letting an ad script inject its own size later) is
 * what keeps Cumulative Layout Shift low — CLS is both a Core Web Vital
 * search ranking factor and something ad networks themselves penalize.
 *
 * Usage once you're approved for a network (e.g. AdSense):
 *   1. Replace the placeholder <div> below with the network's <ins>/<script>
 *      snippet.
 *   2. Keep the wrapping div and its min-height — don't let the ad script
 *      control the outer box's size.
 *   3. Only render <AdSlot> on pages with substantial original content
 *      around it (the shop's category and product pages qualify; don't wrap
 *      every corner of the homepage in ads — that hurts both UX and AdSense
 *      policy compliance).
 *
 * `slot="in-feed"` sizes for a card-width unit to sit inside the product
 * grid; `slot="leaderboard"` sizes for a full-width banner between sections.
 */
export default function AdSlot({ slot = "in-feed", className = "" }) {
  const sizes = {
    "in-feed": "min-h-[280px]",
    leaderboard: "min-h-[100px] md:min-h-[90px]",
    sidebar: "min-h-[600px]",
  };

  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`glass-card flex items-center justify-center rounded-[28px] text-xs uppercase tracking-wide text-slate-400 ${sizes[slot] || sizes["in-feed"]} ${className}`}
    >
      {/* Ad network snippet goes here */}
      Ad space
    </div>
  );
}
