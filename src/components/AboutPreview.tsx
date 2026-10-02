import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#f7f8f6] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              About BPCI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Supporting agriculture through biological solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bio-Pest Control Industries is committed to supporting modern
              agriculture through quality biological and plant nutrition
              solutions.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              We offer biofertilizers, biocontrol agents, botanical solutions
              and micronutrients designed to provide practical solutions for
              healthier crops, healthier soil and sustainable farming.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Discover BPCI
            </Link>
          </div>

          {/* Information Panel */}
          <div className="border border-[var(--border)] bg-white p-8 lg:p-10">
            <div className="border-b border-[var(--border)] pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                Our Vision
              </p>

              <p className="mt-4 text-xl leading-8 text-[var(--foreground)]">
                A healthier and more sustainable agricultural future through
                effective biological and eco-friendly solutions.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                Our Mission
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                To develop and provide quality biological products that support
                soil health, improve crop productivity and help farmers adopt
                sustainable and environmentally responsible farming practices.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}