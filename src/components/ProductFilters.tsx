"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filters = [
  {
    label: "All Products",
    value: "",
  },
  {
    label: "Plant Nutrition",
    value: "plant-nutrition",
  },
  {
    label: "Plant Protection",
    value: "plant-protection",
  },
  {
    label: "Soil Health",
    value: "soil-health",
  },
];

type ProductFiltersProps = {
  resultCount: number;
  totalCount: number;
};

export default function ProductFilters({
  resultCount,
  totalCount,
}: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState(currentQuery);

  useEffect(() => {
    setSearch(currentQuery);
  }, [currentQuery]);

  function updateFilters(category: string, query: string) {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (query.trim()) {
      params.set("q", query.trim());
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateFilters(currentCategory, search);
  }

  function clearSearch() {
    setSearch("");
    updateFilters(currentCategory, "");
  }

  return (
    <div className="mt-14 border-t border-[var(--border)] pt-7">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="w-full lg:max-w-md">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>

          <div className="relative">
            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="h-12 w-full border-b border-gray-300 bg-transparent pl-0 pr-10 text-base text-[var(--foreground)] outline-none transition-colors placeholder:text-gray-400 focus:border-[var(--primary)]"
            />

            <button
              type="submit"
              aria-label="Search products"
              className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-gray-400 transition-colors hover:text-[var(--primary)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
          </div>
        </form>

        {/* Result count */}
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-[var(--foreground)]">
            {resultCount}
          </span>{" "}
          {resultCount === 1 ? "product" : "products"}
          {resultCount !== totalCount && (
            <>
              {" "}
              <span className="text-gray-400">of {totalCount}</span>
            </>
          )}
        </p>
      </div>

      {/* Category navigation */}
      <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
        {filters.map((filter) => {
          const active = currentCategory === filter.value;

          return (
            <button
              key={filter.value || "all"}
              type="button"
              onClick={() => updateFilters(filter.value, search)}
              className={`relative py-2 text-sm font-semibold transition-colors ${
                active
                  ? "text-[var(--primary)]"
                  : "text-gray-500 hover:text-[var(--primary)]"
              }`}
            >
              {filter.label}

              {active && (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[var(--primary)]" />
              )}
            </button>
          );
        })}

        {(search || currentCategory) && (
          <button
            type="button"
            onClick={clearSearch}
            className="py-2 text-sm font-medium text-gray-400 transition-colors hover:text-[var(--primary)]"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}