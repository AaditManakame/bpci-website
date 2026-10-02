import Link from "next/link";
import Navbar from "@/components/Navbar";
import { products } from "@/data/products";

const categories = [
  {
    slug: "plant-nutrition",
    number: "01",
    title: "Plant Nutrition",
    shortTitle: "Nutrition",
    description:
      "Biofertilizers, microbial solutions, mycorrhiza and micronutrient products designed to support nutrient availability, root development and balanced crop growth.",
  },
  {
    slug: "plant-protection",
    number: "02",
    title: "Plant Protection",
    shortTitle: "Protection",
    description:
      "Biological and botanical solutions designed to support sustainable crop protection and management.",
  },
  {
    slug: "soil-health",
    number: "03",
    title: "Soil Health",
    shortTitle: "Soil Health",
    description:
      "Products supporting soil health, decomposition, organic matter management and soil conditioning.",
  },
] as const;

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-[var(--border)] bg-white"
    >
      <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#f5f7f4] p-8">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
        />

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
          →
        </div>
      </div>

      <div className="border-t border-[var(--border)] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          {product.type}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {product.name}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-[var(--primary)]">
            View product
          </span>

          <span className="text-sm font-semibold text-[var(--primary)]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategorySection({
  category,
}: {
  category: (typeof categories)[number];
}) {
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase().replaceAll(" ", "-") === category.slug
  );

  return (
    <section
      id={category.slug}
      className="scroll-mt-28 border-t border-[var(--border)] bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[var(--primary)]">
                {category.number}
              </span>

              <span className="h-px w-12 bg-[var(--border)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                {category.shortTitle}
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {category.title}
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
              {category.description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <span className="font-semibold text-[var(--foreground)]">
                {categoryProducts.length}
              </span>
              <span>
                {categoryProducts.length === 1 ? "product" : "products"}
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;

  const activeCategory =
    category &&
    categories.some((item) => item.slug === category)
      ? category
      : undefined;

  const visibleCategories = activeCategory
    ? categories.filter((item) => item.slug === activeCategory)
    : categories;

  const totalProducts = products.length;

  return (
    <>
      <Navbar />

      <main>
        {/* PAGE INTRO */}
        <section className="relative overflow-hidden bg-[#f4f6f2] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  BPCI Product Portfolio
                </p>

                <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                  Biological solutions for the modern farm.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                  Explore BPCI&apos;s portfolio of biological, plant nutrition,
                  plant protection and soil health products developed to
                  support practical agricultural needs.
                </p>
              </div>

              <div className="border-l border-[var(--border)] pl-7 lg:pb-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Portfolio
                </p>

                <p className="mt-3 text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                  {totalProducts}
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  products across plant nutrition, plant protection and soil
                  health.
                </p>
              </div>
            </div>

            {/* CATEGORY NAVIGATION */}
            <div className="mt-16 border-t border-[var(--border)] pt-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Explore by solution area
                </p>

                <nav className="flex flex-wrap gap-2">
                  <Link
                    href="/products"
                    className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                      !activeCategory
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    All Products
                  </Link>

                  {categories.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products?category=${item.slug}`}
                      className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                        activeCategory === item.slug
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY OVERVIEW */}
        {!activeCategory && (
          <section className="bg-white py-14 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid border-l border-t border-[var(--border)] md:grid-cols-3">
                {categories.map((category) => {
                  const count = products.filter(
                    (product) =>
                      product.category
                        .toLowerCase()
                        .replaceAll(" ", "-") === category.slug
                  ).length;

                  return (
                    <Link
                      key={category.slug}
                      href={`/products?category=${category.slug}`}
                      className="group border-b border-r border-[var(--border)] p-7 transition-colors hover:bg-[#f7faf6] lg:p-9"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[var(--primary)]">
                          {category.number}
                        </span>

                        <span className="text-gray-300 transition-colors group-hover:text-[var(--primary)]">
                          →
                        </span>
                      </div>

                      <h2 className="mt-12 text-2xl font-semibold text-[var(--foreground)]">
                        {category.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-gray-600">
                        {category.description}
                      </p>

                      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                        {count} products
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* PRODUCT CATALOGUE */}
        {visibleCategories.map((category) => (
          <CategorySection key={category.slug} category={category} />
        ))}

        {/* ENQUIRY CTA */}
        <section className="bg-[#f4f6f2] py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Product Enquiries
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Looking for the right solution for your crop?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600">
              Explore the complete BPCI portfolio or contact us to discuss
              your agricultural requirements and product enquiries.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Contact BPCI
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}