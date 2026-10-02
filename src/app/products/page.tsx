import Navbar from "@/components/Navbar";
import Link from "next/link";

const plantNutritionProducts = [
  {
    slug: "azomax",
    name: "BPCI-AZOMAX",
    type: "Azotobacter Biofertilizer",
    image: "/images/products/azomax.jpg",
  },
  {
    slug: "azospir",
    name: "BPCI-AZOSPIR",
    type: "Azospirillum Biofertilizer",
    image: "/images/products/azospir.jpg",
  },
  {
    slug: "rhizomax",
    name: "BPCI-RHIZOMAX",
    type: "Rhizobium Biofertilizer",
    image: "/images/products/rhizomax.jpg",
  },
  {
    slug: "phosphomax",
    name: "BPCI-PHOSPHOMAX",
    type: "PSB Biofertilizer",
    image: "/images/products/phosphomax.jpg",
  },
  {
    slug: "potamax",
    name: "BPCI-POTAMAX",
    type: "KMB Biofertilizer",
    image: "/images/products/potamax.jpg",
  },
  {
    slug: "npk-consomax",
    name: "BPCI-NPK CONSOMAX",
    type: "NPK Biofertilizer",
    image: "/images/products/npk-consomax.jpg",
  },
  {
    slug: "mycorrhiza",
    name: "BPCI-MYCORRHIZA",
    type: "VAM Biofertilizer",
    image: "/images/products/mycorrhiza.jpg",
  },
  {
    slug: "poshak",
    name: "BPCI-POSHAK",
    type: "Micronutrient Fertilizer",
    image: "/images/products/poshak.jpg",
  },
];

const plantProtectionProducts = [
  {
    slug: "trishul",
    name: "BPCI-TRISHUL",
    type: "Trichoderma viride 1.5% WP",
    image: "/images/products/trishul.jpg",
  },
  {
    slug: "bio-bectin",
    name: "BPCI-BIO BECTIN",
    type: "Bacillus thuringiensis 10% WSL",
    image: "/images/products/bio-bectin.jpg",
  },
  {
    slug: "fluoromax",
    name: "BPCI-FLUOROMAX",
    type: "Pseudomonas fluorescens 1.0% WP",
    image: "/images/products/fluoromax.jpg",
  },
  {
    slug: "nemoleum",
    name: "BPCI-NEMOLEUM",
    type: "Azadirachtin 0.15% and 1%",
    image: "/images/products/nemoleum.jpg",
  },
];

const soilHealthProducts = [
  {
    slug: "decomposer",
    name: "BPCI-DECOMPOSER",
    type: "Microbial Waste Decomposer",
    image: "/images/products/decomposer.jpg",
  },
  {
    slug: "neem-cake",
    name: "NEEM CAKE",
    type: "Organic Soil Amendment",
    image: "/images/products/neem-cake.jpg",
  },
  {
    slug: "prom",
    name: "BPCI-PROM",
    type: "Phosphate Rich Organic Manure",
    image: "/images/products/prom.jpg",
  },
  {
    slug: "humic-acid",
    name: "HUMIC ACID",
    type: "Soil Conditioner",
    image: "/images/products/humic-acid.jpg",
  },
];

type Product = {
  slug: string;
  name: string;
  type: string;
  image: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden border border-[var(--border)] bg-white"
    >
      <div className="flex h-80 items-center justify-center overflow-hidden bg-[#f7f8f6] p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="border-t border-[var(--border)] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
          {product.type}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {product.name}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500 transition-colors group-hover:text-[var(--primary)]">
            View Product
          </span>

          <span className="text-lg text-gray-300 transition-colors group-hover:text-[var(--primary)]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductSection({
  id,
  number,
  title,
  description,
  products,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
  products: Product[];
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[var(--border)] bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[var(--primary)]">
                {number}
              </span>

              <span className="h-px w-10 bg-[var(--border)]" />
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">{description}</p>
          </div>

          <p className="text-sm font-medium text-gray-400">
            {products.length} products
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;

  const showPlantNutrition =
    !category || category === "plant-nutrition";

  const showPlantProtection =
    !category || category === "plant-protection";

  const showSoilHealth =
    !category || category === "soil-health";

  const categoryTitle =
    category === "plant-nutrition"
      ? "Plant Nutrition Products"
      : category === "plant-protection"
        ? "Plant Protection Products"
        : category === "soil-health"
          ? "Soil Health Products"
          : "BPCI Product Range";

  const categoryDescription =
    category === "plant-nutrition"
      ? "Explore biological and micronutrient solutions designed to support crop nutrition, nutrient availability and healthy plant development."
      : category === "plant-protection"
        ? "Explore biological and botanical solutions designed to support sustainable crop protection and management."
        : category === "soil-health"
          ? "Explore products designed to support soil health, decomposition, organic matter management and soil conditioning."
          : "Explore BPCI's range of plant nutrition, plant protection and soil health products.";

  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Products
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                {categoryTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                {categoryDescription}
              </p>
            </div>

            {/* Category Navigation */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/products"
                className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  !category
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                All Products
              </Link>

              <Link
                href="/products?category=plant-nutrition"
                className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  category === "plant-nutrition"
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                Plant Nutrition
              </Link>

              <Link
                href="/products?category=plant-protection"
                className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  category === "plant-protection"
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                Plant Protection
              </Link>

              <Link
                href="/products?category=soil-health"
                className={`rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  category === "soil-health"
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                Soil Health
              </Link>
            </div>
          </div>
        </section>

        {/* Products */}
        {showPlantNutrition && (
          <ProductSection
            id="plant-nutrition"
            number="01"
            title="Plant Nutrition"
            description="Biofertilizers, microbial solutions, mycorrhiza and micronutrient products designed to support nutrient availability, root development and balanced crop growth."
            products={plantNutritionProducts}
          />
        )}

        {showPlantProtection && (
          <ProductSection
            id="plant-protection"
            number="02"
            title="Plant Protection"
            description="Biological and botanical solutions designed to support sustainable crop protection and management."
            products={plantProtectionProducts}
          />
        )}

        {showSoilHealth && (
          <ProductSection
            id="soil-health"
            number="03"
            title="Soil Health"
            description="Products supporting soil health, decomposition, organic matter management and soil conditioning."
            products={soilHealthProducts}
          />
        )}

        {/* Enquiry CTA */}
        <section className="bg-[#f7f8f6] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Need More Information?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Looking for the right product for your crop?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Get in touch with BPCI to discuss your agricultural requirements
              and product enquiries.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Contact BPCI
              </Link>

              <Link
                href="/solutions"
                className="rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}