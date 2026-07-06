// src/pages/Shop.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/shop/SEO";
import SearchBar from "../components/shop/SearchBar";
import CategoryFilter from "../components/shop/CategoryFilter";
import ProductGrid from "../components/shop/ProductGrid";
import AdSlot from "../components/shop/AdSlot";
import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProducts";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  const { categories, isLoading: categoriesLoading } = useCategories();
  const {
    products,
    isLoading,
    isError,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
    refetch,
  } = useProducts({ category: activeCategory, search });

  return (
    <>
      <SEO
        title="Shop — Teslim Yussuph | Merch, Digital Courses, Books & Music"
        description="Branded merch, digital courses and eBooks, physical books, and featured artist music — shop it all in one place."
        path="/shop"
      />

      <Navbar />

      <main className="min-h-screen bg-[#FFF4EC] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900">
            Shop
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Merch, digital courses, physical books, and music from the
            artists we work with — including free blankets for the homeless,
            on us.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CategoryFilter
              categories={categories}
              activeSlug={activeCategory}
              onSelect={setActiveCategory}
              isLoading={categoriesLoading}
            />
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {/* Leaderboard ad between the controls and the grid — high
              viewability, doesn't interrupt product browsing. */}
          <div className="mt-10">
            <AdSlot slot="leaderboard" />
          </div>

          <ProductGrid
            products={products}
            isLoading={isLoading}
            isError={isError}
            error={error}
            onRetry={refetch}
            page={page}
            totalPages={totalPages}
            onNextPage={nextPage}
            onPrevPage={prevPage}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
