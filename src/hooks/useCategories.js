// src/hooks/useCategories.js
import { useEffect, useState } from "react";
import { fetchCategories } from "../services/woocommerce";

/** Loads the shop's product categories once, for the filter bar / nav. */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      try {
        const data = await fetchCategories();
        if (!cancelled) {
          // Hide the "Uncategorized" default WooCommerce ships with, and
          // anything with zero published products, so the filter bar only
          // shows categories shoppers can actually browse.
          const visible = (data || []).filter(
            (cat) => cat.slug !== "uncategorized" && cat.count > 0
          );
          setCategories(visible);
          setStatus("success");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Couldn't load categories.");
          setStatus("error");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    categories,
    isLoading: status === "loading",
    isError: status === "error",
    error,
  };
}
