// src/components/shop/SearchBar.jsx
import { useEffect, useState } from "react";

/** Debounces input so we don't fire a request on every keystroke. */
export default function SearchBar({ value, onChange, placeholder = "Search products…" }) {
  const [draft, setDraft] = useState(value ?? "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (draft !== value) onChange(draft);
    }, 350);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="search"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        className="w-full rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
      />
    </div>
  );
}
