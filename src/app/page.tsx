import Link from "next/link";

import Navbar from "@/components/Navbar";
import { products } from "@/data/products";

const featuredProducts = [
  products.find((product) => product.slug === "npk-consomax"),
  products.find((product) => product.slug === "azomax"),
  products.find((product) => product.slug === "trishul"),
  products.find((product) => product.slug === "nemoleum"),
].filter(Boolean);

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[680px] overflow-hidden bg-[#f4f6f2] lg:min-h-[760px]">
          <div className="absolute inset-0">
            <img
              src="/images/hero/agriculture.jpg"
              alt="Sustainable agriculture"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-20 pt-32 lg:min-h-[760px] lg:px-8 lg:pb-24">
            <div className="max-w-4xl text-white">
              <p className="mb-8 text-xl font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-2xl lg:text-4xl">
                Bio Pest  Control Industries
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Biological solutions
                <br />
                for sustainable
                <br />
                agriculture.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                Quality biofertilizers, biological crop protection, botanical
                solutions and plant nutrition products designed to support
                healthier crops and healthier soil.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
                >
                  Explore Products
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-white/60 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-[var(--foreground)]"
                >
                  About BPCI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / POSITIONING */}
        <section className="border-b border-[var(--border)] bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Nature&apos;s way for a sustainable tomorrow
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Supporting modern agriculture through biological and
                plant-nutrition solutions.
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
                Bio Pest  Control Industries is committed to providing quality
                biological and plant nutrition solutions that support healthy
                crops, healthy soil and sustainable farming. Our portfolio
                brings together biofertilizers, biocontrol agents, botanical
                solutions, micronutrients and soil-health products.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
              >
                Discover BPCI <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="bg-[#f6f8f5] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                BPCI at a glance
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                A focused portfolio for the needs of modern agriculture.
              </h2>
            </div>

            <div className="mt-14 grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-b border-r border-[var(--border)] bg-white p-8 lg:p-10">
                <p className="text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                  16
                </p>

                <p className="mt-3 text-sm font-medium text-gray-600">
                  Products across our current portfolio
                </p>
              </div>

              <div className="border-b border-r border-[var(--border)] bg-white p-8 lg:p-10">
                <p className="text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                  3
                </p>

                <p className="mt-3 text-sm font-medium text-gray-600">
                  Core solution areas
                </p>
              </div>

              <div className="border-b border-r border-[var(--border)] bg-white p-8 lg:p-10">
                <p className="text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                  01
                </p>

                <p className="mt-3 text-sm font-medium text-gray-600">
                  Integrated approach to crop and soil health
                </p>
              </div>

              <div className="border-b border-r border-[var(--border)] bg-white p-8 lg:p-10">
                <p className="text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                  BPCI
                </p>

                <p className="mt-3 text-sm font-medium text-gray-600">
                  Biological solutions for sustainable agriculture
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Our solutions
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Supporting the crop from soil to plant protection.
                </h2>
              </div>

              <Link
                href="/solutions"
                className="shrink-0 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
              >
                View all solutions →
              </Link>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
              <Link
                href="/solutions#plant-nutrition"
                className="group bg-white p-8 transition-colors hover:bg-[#f7faf6] lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary)]">
                  <span className="text-lg">01</span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold text-[var(--foreground)]">
                  Plant Nutrition
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  Biofertilizers, microbial consortia, mycorrhiza and
                  micronutrient solutions supporting nutrient availability,
                  root development and crop growth.
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[var(--primary)]">
                  Explore nutrition →
                </span>
              </Link>

              <Link
                href="/solutions#plant-protection"
                className="group bg-white p-8 transition-colors hover:bg-[#f7faf6] lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary)]">
                  <span className="text-lg">02</span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold text-[var(--foreground)]">
                  Plant Protection
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  Biological and botanical solutions designed to support
                  integrated disease and insect management while working in
                  harmony with natural biological processes.
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[var(--primary)]">
                  Explore protection →
                </span>
              </Link>

              <Link
                href="/solutions#soil-health"
                className="group bg-white p-8 transition-colors hover:bg-[#f7faf6] lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-[var(--primary)]">
                  <span className="text-lg">03</span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold text-[var(--foreground)]">
                  Soil Health
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  Solutions supporting organic matter management, crop residue
                  decomposition, soil conditioning and long-term soil health.
                </p>

                <span className="mt-8 inline-block text-sm font-semibold text-[var(--primary)]">
                  Explore soil health →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="bg-[#f6f8f5] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Selected products
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Biological products built around crop needs.
                </h2>
              </div>

              <Link
                href="/products"
                className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]"
              >
                View complete portfolio →
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) =>
                product ? (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group border border-[var(--border)] bg-white p-5"
                  >
                    <div className="flex h-[330px] items-center justify-center overflow-hidden bg-[#f7f8f6] p-7">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {product.type}
                    </p>

                    <span className="mt-6 inline-block text-sm font-semibold text-[var(--primary)]">
                      View product →
                    </span>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </section>

        {/* NATURE TO FIELD */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <div className="overflow-hidden bg-[#f3f6f1]">
                <img
                  src="/images/hero/agriculture.jpg"
                  alt="Agricultural field"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  From nature to field
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Working with biological processes, not against them.
                </h2>

                <div className="mt-8 space-y-6 text-base leading-8 text-gray-600">
                  <p>
                    Agriculture depends on a complex relationship between
                    plants, soil, microorganisms, nutrients and the surrounding
                    environment.
                  </p>

                  <p>
                    BPCI develops and supplies biological and plant nutrition
                    solutions intended to work within these natural systems,
                    supporting nutrient cycling, root-zone health, crop
                    protection and soil management.
                  </p>

                  <p>
                    Our approach is centred on practical products that can be
                    incorporated into integrated crop and soil management
                    programmes.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-9 inline-flex items-center rounded-md border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Learn more about BPCI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY PRINCIPLES */}
        <section className="bg-[#f6f8f5] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  Our focus
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Quality. Consistency. Innovation.
                </h2>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">
                    Quality
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Focused on providing quality biological and plant nutrition
                    products for agricultural applications.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">
                    Consistency
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Developing practical solutions with a focus on consistent
                    product performance.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">
                    Innovation
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Continuing to develop biological approaches that support
                    sustainable agricultural practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[var(--primary)] py-20 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Work with BPCI
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for biological solutions for your agricultural needs?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
                Explore our product portfolio or contact Bio Pest  Control
                Industries to discuss your requirements.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-4 text-sm font-semibold text-[var(--primary)] hover:bg-gray-100"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"
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