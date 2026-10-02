import Link from "next/link";
import Navbar from "@/components/Navbar";

const solutions = [
  {
    number: "01",
    title: "Plant Nutrition",
    intro:
      "Biological and micronutrient solutions designed to support nutrient availability, root development and balanced crop growth.",
    description:
      "BPCI's plant nutrition portfolio combines beneficial microorganisms and micronutrient solutions to support natural nutrient cycling and efficient nutrient utilization. These solutions are intended to complement integrated crop nutrition programmes.",
    products: [
      "BPCI-AZOMAX",
      "BPCI-AZOSPIR",
      "BPCI-RHIZOMAX",
      "BPCI-PHOSPHOMAX",
      "BPCI-POTAMAX",
      "BPCI-NPK CONSOMAX",
      "BPCI-MYCORRHIZA",
      "BPCI-POSHAK",
    ],
    href: "/products?category=plant-nutrition",
  },
  {
    number: "02",
    title: "Plant Protection",
    intro:
      "Biological and botanical solutions supporting integrated approaches to crop disease and pest management.",
    description:
      "BPCI's plant protection solutions use beneficial microorganisms and botanical approaches to help manage susceptible pests and plant pathogens. They are intended to form part of integrated crop and disease management programmes.",
    products: [
      "BPCI-TRISHUL",
      "BPCI-BIO BECTIN",
      "BPCI-FLUOROMAX",
      "BPCI-NEEMOLEUM",
    ],
    href: "/products?category=plant-protection",
  },
  {
    number: "03",
    title: "Soil Health",
    intro:
      "Solutions supporting soil biological activity, organic matter management, nutrient cycling and healthier root-zone conditions.",
    description:
      "Healthy soil provides the foundation for productive agriculture. BPCI's soil health portfolio includes microbial decomposers, organic amendments, phosphate-rich organic manure and humic substances that support soil conditioning and nutrient availability.",
    products: [
      "BPCI-DECOMPOSER",
      "NEEM CAKE",
      "BPCI-PROM",
      "HUMIC ACID",
    ],
    href: "/products?category=soil-health",
  },
];

const benefits = [
  {
    number: "01",
    title: "Nutrient availability",
    description:
      "Beneficial microorganisms can support the availability and utilization of essential nutrients in the crop root zone.",
  },
  {
    number: "02",
    title: "Root development",
    description:
      "Several BPCI solutions are designed to support healthy root development and stronger crop establishment.",
  },
  {
    number: "03",
    title: "Biological crop protection",
    description:
      "Microbial and botanical solutions provide biological approaches that can form part of integrated pest and disease management.",
  },
  {
    number: "04",
    title: "Soil health",
    description:
      "Soil-focused products support organic matter management, nutrient cycling and the biological environment around plant roots.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Our Solutions
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Biological solutions across the agricultural cycle.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                BPCI develops and supplies biological, plant nutrition, plant
                protection and soil health solutions designed to support
                healthier crops and more sustainable farming practices.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Our Focus
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Practical solutions for modern agriculture
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  Agriculture depends on a balance between plant nutrition,
                  crop protection and healthy soil. BPCI&apos;s portfolio
                  brings these areas together through biological and plant
                  nutrition solutions.
                </p>

                <p>
                  Our products are designed for practical agricultural
                  applications and can be incorporated into integrated crop
                  management, nutrient management and soil management
                  programmes as appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Areas */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Three Core Areas
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Solutions built around crop and soil needs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {solutions.map((solution) => (
                <Link
                  key={solution.number}
                  href={solution.href}
                  className="group block border border-[var(--border)] bg-white transition-colors hover:bg-[#fafbf9]"
                >
                  <div className="grid lg:grid-cols-[110px_1fr]">
                    <div className="border-b border-[var(--border)] bg-[#f1f4f1] p-8 lg:border-b-0 lg:border-r">
                      <p className="text-sm font-semibold text-[var(--primary)]">
                        {solution.number}
                      </p>
                    </div>

                    <div className="p-8 lg:p-10">
                      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
                        <div>
                          <h3 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                            {solution.title}
                          </h3>

                          <p className="mt-5 text-lg leading-8 text-gray-700">
                            {solution.intro}
                          </p>

                          <p className="mt-5 leading-7 text-gray-600">
                            {solution.description}
                          </p>

                          <p className="mt-7 text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                            Explore {solution.title} Products →
                          </p>
                        </div>

                        <div className="border-t border-[var(--border)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Product Portfolio
                          </p>

                          <ul className="mt-5 space-y-3">
                            {solution.products.map((product) => (
                              <li
                                key={product}
                                className="flex items-start gap-3 text-sm text-gray-700"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                                <span>{product}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What the solutions support */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  What They Support
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Supporting healthier crops and soil
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  BPCI&apos;s solutions are focused on practical outcomes
                  across crop nutrition, biological protection and soil
                  management.
                </p>
              </div>

              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="border-t border-[var(--border)] pt-6"
                  >
                    <p className="text-sm font-semibold text-[var(--primary)]">
                      {benefit.number}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrated approach */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Integrated Agriculture
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Biological solutions work as part of a broader agricultural
              programme.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              BPCI products can be incorporated into integrated nutrient,
              disease, pest and soil management programmes according to the
              crop, application method and recommended product directions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Explore Further
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Find the right BPCI product for your requirement
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Explore the complete BPCI product portfolio or contact our team
              for product information and agricultural requirements.
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