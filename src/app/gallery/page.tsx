import Link from "next/link";
import Navbar from "@/components/Navbar";

const galleryItems = [
  {
    image: "/images/gallery/gallery-1.jpg",
    category: "Agriculture",
    title: "Supporting healthier crops",
    description:
      "Biological and plant nutrition solutions designed to support healthy crop development and sustainable agricultural practices.",
    size: "large",
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    category: "Plant Nutrition",
    title: "Better nutrition through biology",
    description:
      "Solutions that support nutrient availability, root development and efficient crop nutrition.",
    size: "small",
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    category: "Plant Protection",
    title: "Biological crop protection",
    description:
      "Biological and botanical approaches supporting integrated crop protection programmes.",
    size: "small",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    category: "Soil Health",
    title: "Building healthier soil",
    description:
      "Products and practices supporting soil biological activity, organic matter and nutrient cycling.",
    size: "small",
  },
  {
    image: "/images/gallery/gallery-5.jpg",
    category: "BPCI Products",
    title: "Solutions for modern agriculture",
    description:
      "A portfolio of biological, plant nutrition, plant protection and soil health products.",
    size: "large",
  },
  {
    image: "/images/gallery/gallery-6.jpg",
    category: "Sustainable Agriculture",
    title: "From nature to field",
    description:
      "Practical biological solutions developed to work alongside modern agricultural practices.",
    size: "small",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Gallery
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                From nature to field.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Explore BPCI&apos;s approach to biological agriculture, plant
                nutrition, crop protection and soil health.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12">
              {galleryItems.map((item, index) => (
                <article
                  key={item.image}
                  className={`group overflow-hidden border border-[var(--border)] bg-white ${
                    item.size === "large"
                      ? "lg:col-span-7"
                      : "lg:col-span-5"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-[#f1f4f1] ${
                      item.size === "large"
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6 pt-20">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Visual statement */}
        <section className="bg-[#f7f8f6] py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Practical biological solutions for a changing agricultural
              landscape.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              BPCI focuses on biological and plant nutrition solutions that
              support healthier crops, healthier soil and more sustainable
              farming practices.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Explore BPCI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Discover our biological solutions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Explore our complete range of plant nutrition, plant protection
              and soil health products.
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