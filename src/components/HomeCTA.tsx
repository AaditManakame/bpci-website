import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-[var(--primary)] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Nature&apos;s Way for a Sustainable Tomorrow
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Supporting healthier crops, healthier soil and sustainable
              farming.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Discover BPCI&apos;s biological, plant nutrition, plant
              protection and soil health solutions for modern agriculture.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:flex-col">
            <Link
              href="/products"
              className="rounded-md bg-white px-7 py-3.5 text-center text-sm font-semibold text-[var(--primary-dark)] hover:bg-[#f4f6f4]"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-md border border-white/50 px-7 py-3.5 text-center text-sm font-semibold text-white hover:border-white hover:bg-white/10"
            >
              Contact BPCI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}