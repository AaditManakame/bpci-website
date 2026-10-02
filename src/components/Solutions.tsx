const solutions = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Biological solutions for modern agriculture
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide biological, plant nutrition and soil health solutions
            designed to support healthier crops and more sustainable farming.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group bg-white p-8 transition-colors hover:bg-[#f7f8f6] lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {solution.number}
                </span>

                <span className="text-xl text-gray-300 transition-colors group-hover:text-[var(--primary)]">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[var(--foreground)]">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {solution.description}
              </p>

              <ul className="mt-6 space-y-2">
                {solution.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}