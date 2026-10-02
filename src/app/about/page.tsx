import Link from "next/link";
import Navbar from "@/components/Navbar";

const offerings = [
  {
    number: "01",
    title: "Biofertilizers",
    description:
      "Biological products designed to support nutrient availability, root development and healthy crop growth.",
  },
  {
    number: "02",
    title: "Biological Crop Protection",
    description:
      "Biological solutions supporting sustainable approaches to disease and insect management.",
  },
  {
    number: "03",
    title: "Botanical Solutions",
    description:
      "Plant-based solutions supporting practical and environmentally responsible crop protection.",
  },
  {
    number: "04",
    title: "Micronutrients",
    description:
      "Plant nutrition solutions designed to support balanced crop nutrition and development.",
  },
];

const principles = [
  "Quality",
  "Consistency",
  "Innovation",
  "Practical agricultural solutions",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              About BPCI
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Supporting agriculture through biological solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Bio-Pest Control Industries provides biological, plant nutrition
              and crop protection solutions designed to support healthier
              crops, healthier soil and sustainable farming.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Who We Are
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Biological solutions for modern agriculture
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-gray-600">
                  Bio-Pest Control Industries is committed to supporting
                  modern agriculture through quality biological and plant
                  nutrition solutions.
                </p>

                <p className="mt-6 leading-8 text-gray-600">
                  Our product range includes biofertilizers, biocontrol agents,
                  botanical solutions and micronutrients developed to provide
                  practical solutions for agriculture.
                </p>

                <p className="mt-6 leading-8 text-gray-600">
                  We focus on quality, consistency and innovation while working
                  towards solutions that help farmers achieve better crop
                  health and productivity in harmony with nature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision / Mission */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-[var(--border)] bg-white p-8 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Vision
                </p>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
                  A healthier and more sustainable agricultural future.
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We envision a healthier and more sustainable agricultural
                  future through effective biological and eco-friendly
                  solutions.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-white p-8 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Mission
                </p>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Supporting farmers through quality biological products.
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our mission is to develop and provide quality biological
                  products that support soil health, improve crop productivity
                  and help farmers adopt sustainable and environmentally
                  responsible farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                What We Offer
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Solutions designed around agricultural needs
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our solutions cover key areas of plant nutrition and
                biological crop management.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
              {offerings.map((offering) => (
                <div
                  key={offering.number}
                  className="bg-white p-8 lg:p-10"
                >
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    {offering.number}
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
                    {offering.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Approach
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Practical solutions. Responsible agriculture.
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  BPCI focuses on providing practical biological and plant
                  nutrition solutions that can support farmers in achieving
                  healthier crops and productive agricultural systems.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Our approach is centred around quality, consistency and
                  innovation, with solutions designed to work in harmony with
                  nature.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-white p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                  What Guides Us
                </p>

                <div className="mt-7 divide-y divide-[var(--border)]">
                  {principles.map((principle, index) => (
                    <div
                      key={principle}
                      className="flex items-center gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-[var(--primary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-medium text-[var(--foreground)]">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--primary)] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Explore BPCI
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Discover our biological and agricultural solutions.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/80">
                  Explore our complete product range across plant nutrition,
                  plant protection and soil health.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-[var(--primary-dark)] hover:bg-[#f4f6f4]"
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="rounded-md border border-white/50 px-7 py-3.5 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
                >
                  Contact BPCI
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}