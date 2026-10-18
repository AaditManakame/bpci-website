import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bio Pest Control Industries, a Bengaluru-based agricultural biological products company providing biofertilizers, plant protection, plant nutrition and soil health solutions.",
  alternates: {
    canonical: "https://www.biopestindia.com/about",
  },
  openGraph: {
    title: "About Us | Bio Pest Control Industries",
    description:
      "Learn about Bio Pest Control Industries and our biological, plant nutrition, plant protection and soil health solutions for sustainable agriculture.",
    url: "https://www.biopestindia.com/about",
    type: "website",
    locale: "en_IN",
    siteName: "Bio Pest Control Industries",
  },
};
const solutionAreas = [
  {
    number: "01",
    title: "Plant Nutrition",
    description:
      "Biofertilizers, microbial solutions and micronutrients supporting nutrient availability, root development and healthy crop growth.",
    href: "/products?category=plant-nutrition",
  },
  {
    number: "02",
    title: "Plant Protection",
    description:
      "Biological and botanical solutions supporting integrated approaches to crop disease and pest management.",
    href: "/products?category=plant-protection",
  },
  {
    number: "03",
    title: "Soil Health",
    description:
      "Solutions supporting soil biological activity, organic matter management, nutrient cycling and healthier root-zone conditions.",
    href: "/products?category=soil-health",
  },
];

const principles = [
  {
    number: "01",
    title: "Quality",
    description:
      "A focus on quality biological and plant nutrition products designed to provide practical value in agricultural applications.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "A commitment to consistent product performance and dependable solutions for agricultural requirements.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Continuous focus on biological and sustainable approaches that can support the changing needs of modern agriculture.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                About BPCI
              </p>

              
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
  Science, Experience, and a
  <br />
  Commitment to Agriculture.
</h1>


              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                Bio Pest Control Industries provides biological, plant
                nutrition, plant protection and soil health solutions designed
                to support healthy crops, healthy soil and sustainable farming.
              </p>
              </div>

              <div className="relative overflow-hidden bg-[#f1f4f1]">
                <img
                  src="/images/gallery/gallery-06.jpg"
                  alt="Flower cultivation in a greenhouse"
                  className="aspect-[4/3] w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Who We Are
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Supporting modern agriculture through biology
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Bio Pest Control Industries is committed to supporting modern
                  agriculture through quality biological and plant nutrition
                  solutions.
                </p>

                <p>
                  Our portfolio includes biofertilizers, biocontrol agents,
                  botanical solutions, micronutrients and soil health products
                  designed to provide practical solutions for agricultural
                  requirements.
                </p>

                <p>
                  We focus on quality, consistency and innovation while working
                  towards solutions that help farmers achieve better crop
                  health and productivity in harmony with nature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Field photography */}
        <section className="bg-white pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="overflow-hidden bg-[#f1f4f1] md:col-span-2">
                <img
                  src="/images/gallery/gallery-07.jpg"
                  alt="Pomegranate crop in the field"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden bg-[#f1f4f1]">
                <img
                  src="/images/gallery/gallery-13.jpg"
                  alt="Plant roots and nursery growth"
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution areas */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Three areas of agricultural focus
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                BPCI&apos;s solutions span crop nutrition, biological crop
                protection and soil health, providing farmers with biological
                options across different stages of crop management.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solutionAreas.map((area) => (
                <Link
                  key={area.number}
                  href={area.href}
                  className="group border border-[var(--border)] bg-white p-5 transition-colors hover:bg-[#fafbf9]"
                >
                  <div className="mb-6 overflow-hidden bg-[#f1f4f1]">
                    <img
                      src={
                        area.number === "01"
                          ? "/images/gallery/gallery-12.jpg"
                          : area.number === "02"
                            ? "/images/gallery/gallery-05.jpg"
                            : "/images/gallery/gallery-13.jpg"
                      }
                      alt={area.title}
                      loading="lazy"
                      className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3">
                  <p className="text-sm font-semibold text-[var(--primary)]">
                    {area.number}
                  </p>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {area.description}
                  </p>

                  <p className="mt-7 text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                    Explore Solutions →
                  </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Vision + Mission */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-[var(--border)] bg-[#f7f8f6] p-8 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Vision
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                  A healthier and more sustainable agricultural future
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To contribute to a healthier and more sustainable
                  agricultural future through effective biological and
                  eco-friendly solutions.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-[#f7f8f6] p-8 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Mission
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                  Supporting soil health, crop productivity and responsible
                  farming
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To develop and provide quality biological products that
                  support soil health, improve crop productivity and help
                  farmers adopt sustainable and environmentally responsible
                  farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Approach
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Built around practical agricultural solutions
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Our approach is centred on delivering quality biological and
                  plant nutrition solutions with a focus on practical
                  agricultural applications.
                </p>
              </div>

              <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
                  >
                    <p className="text-sm font-semibold text-[var(--primary)]">
                      {principle.number}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">
                        {principle.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              BPCI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Nature&apos;s way for a sustainable tomorrow.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Explore our portfolio of biological and plant nutrition
              solutions developed to support healthier crops, healthier soil
              and sustainable agriculture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Explore Products
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