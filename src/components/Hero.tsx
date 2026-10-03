import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f6]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex items-center px-6 py-20 lg:px-12 lg:py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--primary)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Bio Pest  Control Industries
              </p>
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[4.25rem]">
              Biological solutions for
              <span className="mt-2 block text-[var(--primary)]">
                sustainable agriculture
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              Quality biological and plant nutrition solutions designed to
              support healthier crops, healthier soil and sustainable farming.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Explore Products
              </Link>

              <Link
                href="/about"
                className="rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                About BPCI
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-[var(--border)] pt-7">
              <div className="pr-5">
                <p className="text-xl font-semibold text-[var(--foreground)]">
                  Plant
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Nutrition
                </p>
              </div>

              <div className="border-l border-[var(--border)] px-5">
                <p className="text-xl font-semibold text-[var(--foreground)]">
                  Crop
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Protection
                </p>
              </div>

              <div className="border-l border-[var(--border)] pl-5">
                <p className="text-xl font-semibold text-[var(--foreground)]">
                  Soil
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Health
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-full">
          <img
            src="/images/hero/agriculture.jpg"
            alt="Agricultural field"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/5" />

          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6 backdrop-blur-sm lg:left-auto lg:w-[320px] lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Nature&apos;s Way
            </p>

            <p className="mt-3 text-lg font-medium leading-7 text-[var(--foreground)]">
              For a sustainable tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}