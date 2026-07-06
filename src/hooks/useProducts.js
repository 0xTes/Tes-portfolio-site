// src/hooks/useProducts.js
import { useEffect, useState, useCallback } from "react";
import { fetchProducts } from "../services/woocommerce";

/**
 * Loads a page of products for a given category/search, and exposes simple
 * pagination controls. Kept deliberately dependency-free (no react-query)
 * since the shop is small — swap this out if the catalog grows large enough
 * to need caching/prefetching.
 */
export function useProducts({ category, search, perPage = 12, featured } = {}) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const load = useCallback(
    async (pageToLoad) => {
      setStatus("loading");
      setError(null);
      try {
        const data = await fetchProducts({
          category,
          search,
          page: pageToLoad,
          perPage,
          featured,
        });

        setProducts(data.products ?? data ?? []);
        // Store API returns pagination info in the `total` header set on the
        // raw response; since our proxy passes JSON straight through, we
        // fall back to a conservative estimate when it's not present.
        setTotalPages(data.totalPages ?? 1);
        setStatus("success");
      } catch (err) {
        setError(err.message || "Couldn't load products.");
        setStatus("error");
      }
    },
    [category, search, perPage]
  );

  // Reset to page 1 whenever the category or search term changes.
  useEffect(() => {
    setPage(1);
    load(1);
  }, [category, search, perPage, featured, load]);

  const nextPage = () => {
    if (page < totalPages) {
      const next = page + 1;
      setPage(next);
      load(next);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      const prev = page - 1;
      setPage(prev);
      load(prev);
    }
  };

  return {
    products,
    status,
    error,
    isLoading: status === "loading",
    isError: status === "error",
    page,
    totalPages,
    nextPage,
    prevPage,
    refetch: () => load(page),
  };
}
