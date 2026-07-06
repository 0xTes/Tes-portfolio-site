// src/components/shop/ProductGrid.jsx
import ProductCard from "./ProductCard";

function SkeletonCard() {
  return (
    <div className="glass-card animate-pulse overflow-hidden rounded-[28px]">
      <div className="aspect-square w-full bg-slate-200/70" />
      <div className="space-y-3 p-6">
        <div className="h-4 w-2/3 rounded bg-slate-200/70" />
        <div className="h-3 w-full rounded bg-slate-200/70" />
        <div className="h-8 w-24 rounded-full bg-slate-200/70" />
      </div>
    </div>
  );
}

export default function ProductGrid({
  products,
  isLoading,
  isError,
  error,
  onRetry,
  page,
  totalPages,
  onNextPage,
  onPrevPage,
}) {
  if (isError) {
    return (
      <div className="mt-14 rounded-[28px] border border-red-100 bg-red-50 p-10 text-center">
        <p className="text-slate-700">
          {error || "Something went wrong loading products."}
        </p>
        <button
          onClick={onRetry}
          className="mt-4 rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
        >
          Try again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="mt-14 rounded-[28px] border border-slate-200 bg-white/60 p-10 text-center">
        <p className="text-slate-600">
          No products here yet — check back soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={onPrevPage}
            disabled={page <= 1}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-slate-500">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={onNextPage}
            disabled={page >= totalPages}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
