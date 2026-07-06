// src/components/shop/CategoryFilter.jsx
export default function CategoryFilter({
  categories,
  activeSlug,
  onSelect,
  isLoading,
}) {
  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-28 animate-pulse rounded-full bg-slate-200/70"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap gap-3"
      role="tablist"
      aria-label="Product categories"
    >
      <button
        role="tab"
        aria-selected={!activeSlug}
        onClick={() => onSelect(null)}
        className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
          !activeSlug
            ? "bg-teal-500 text-white shadow-md"
            : "bg-white/70 text-slate-700 hover:bg-white"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={activeSlug === cat.slug}
          onClick={() => onSelect(cat.slug)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            activeSlug === cat.slug
              ? "bg-teal-500 text-white shadow-md"
              : "bg-white/70 text-slate-700 hover:bg-white"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
