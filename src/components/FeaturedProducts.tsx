import Link from "next/link";

const featuredProducts = [
  {
    slug: "azomax",
    name: "BPCI-AZOMAX",
    type: "Azotobacter Biofertilizer",
    image: "/images/products/azomax.jpg",
  },
  {
    slug: "npk-consomax",
    name: "BPCI-NPK CONSOMAX",
    type: "NPK Biofertilizer",
    image: "/images/products/npk-consomax.jpg",
  },
  {
    slug: "trishul",
    name: "BPCI-TRISHUL",
    type: "Trichoderma viride 1.5% WP",
    image: "/images/products/trishul.jpg",
  },
  {
    slug: "nemoleum",
    name: "BPCI-NEMOLEUM",
    type: "Azadirachtin 0.15% and 1%",
    image: "/images/products/nemoleum.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Featured Products
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Biological solutions for every stage of farming
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore selected products from our plant nutrition and plant
              protection range.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex shrink-0 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            View All Products →
          </Link>
        </div>

        {/* Products */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden border border-[var(--border)] bg-white"
            >
              {/* Image */}
              <div className="flex h-80 items-center justify-center bg-[#f7f8f6] p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Information */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                  {product.type}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm font-semibold text-gray-500 transition-colors group-hover:text-[var(--primary)]">
                  View Product →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}