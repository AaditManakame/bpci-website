import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProduct, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug
    )
    .slice(0, 3);

  const categorySlug = product.category
    .toLowerCase()
    .replaceAll(" ", "-");

  return (
    <>
      <Navbar />

      <main>
        {/* Product Header */}
        <section className="bg-[#f7f8f6] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-500 hover:text-[var(--primary)]"
            >
              ← Back to Products
            </Link>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              <p className="mt-5 text-lg text-gray-600">
                {product.type}
              </p>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              {/* Product Image */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex min-h-[500px] items-center justify-center border border-[var(--border)] bg-[#f7f8f6] p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[560px] w-full object-contain"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    Product Description
                  </p>

                  <p className="mt-5 text-lg leading-8 text-gray-700">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mt-12 border-t border-[var(--border)] pt-10">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    Benefits
                  </h2>

                  <ul className="mt-6 space-y-4">
                    {product.benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-base leading-7 text-gray-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application */}
                <div className="mt-12 border-t border-[var(--border)] pt-10">
                  <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                    Application
                  </h2>

                  <div className="mt-5 space-y-5 text-base leading-8 text-gray-700">
                    {product.application
                      .split("\n\n")
                      .map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                  </div>
                </div>

                {/* Enquiry CTA */}
                <div className="mt-12 border border-[var(--border)] bg-[#f7f8f6] p-7 lg:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Product Enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    Interested in this product?
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    Contact BPCI for product information and agricultural
                    requirements.
                  </p>

                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.name
                    )}`}
                    className="mt-6 inline-flex rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
                  >
                    Send an Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-[#f7f8f6] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    Related Products
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    More from {product.category}
                  </h2>
                </div>

                <Link
                  href={`/products?category=${categorySlug}`}
                  className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  View All →
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/${relatedProduct.slug}`}
                    className="group border border-[var(--border)] bg-white p-6 hover:bg-[#fafbf9]"
                  >
                    <div className="flex h-64 items-center justify-center bg-[#f7f8f6] p-5">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="max-h-full w-full object-contain"
                      />
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                      {relatedProduct.type}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                      {relatedProduct.name}
                    </h3>

                    <p className="mt-4 text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                      View Product →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              BPCI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Explore our complete product range
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Explore biological, plant nutrition, plant protection and soil
              health solutions from Bio Pest  Control Industries.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                View All Products
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Contact BPCI
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}