import Link from "next/link";
import Navbar from "@/components/Navbar";

const solutions = [
  {
    id: "plant-nutrition",
    number: "01",
    title: "Plant Nutrition",
    description:
      "Biological and microbial solutions that support nutrient availability, root development and healthy crop growth.",
    items: [
      "Biofertilizers",
      "Microbial Consortia",
      "Mycorrhiza",
      "Micronutrients",
    ],
    href: "/products?category=plant-nutrition",
  },
  {
    id: "plant-protection",
    number: "02",
    title: "Plant Protection",
    description:
      "Biological and botanical solutions designed to support effective and sustainable crop protection.",
    items: [
      "Biological Crop Protection",
      "Botanical Solutions",
      "Disease Management",
      "Insect Management",
    ],
    href: "/products?category=plant-protection",
  },
  {
    id: "soil-health",
    number: "03",
    title: "Soil Health",
    description:
      "Solutions focused on improving soil health, organic matter management and long-term soil productivity.",
    items: [
      "Crop Residue Decomposition",
      "Organic Matter Management",
      "Soil Health Products",
      "Microbial Solutions",
    ],
    href: "/products?category=soil-health",
  },
  {
    id: "product-development",
    number: "04",
    title: "Biological Product Development",
    description:
      "Development and production of microbial and biological agricultural products for practical farming applications.",
    items: [
      "Microbial Products",
      "Biological Formulations",
      "Product Development",
      "Production Support",
    ],
    href: "/products",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Our Solutions
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Biological solutions for sustainable agriculture
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              BPCI provides biological, plant nutrition, plant protection and
              soil health solutions designed to support healthier crops and
              sustainable farming.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {solutions.map((solution) => (
                <Link
                  key={solution.id}
                  id={solution.id}
                  href={solution.href}
                  className="group block scroll-mt-28 border border-[var(--border)] bg-white p-8 transition-colors hover:bg-[#f7f8f6] lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold text-[var(--primary)]">
                      {solution.number}
                    </span>

                    <span className="text-xl text-gray-300 transition-colors group-hover:text-[var(--primary)]">
                      →
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
                    {solution.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {solution.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {solution.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-sm font-semibold text-[var(--primary)]">
                    View Related Products →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f7f8f6] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Looking for the right solution for your crop?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Explore our product range or get in touch with BPCI to discuss
              your agricultural requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Explore All Products
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