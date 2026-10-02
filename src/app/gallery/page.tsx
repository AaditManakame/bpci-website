import Navbar from "@/components/Navbar";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "BPCI agricultural solutions",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "BPCI biological agriculture products",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "BPCI plant nutrition solutions",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "BPCI plant protection solutions",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "BPCI soil health solutions",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "BPCI products for sustainable agriculture",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Gallery
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Our products and agricultural solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Explore BPCI&apos;s biological, plant nutrition, plant protection
              and soil health solutions.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="group overflow-hidden border border-[var(--border)] bg-[#f7f8f6]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Gallery CTA */}
        <section className="bg-[#f7f8f6] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              BPCI Product Range
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Explore our complete product range
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Discover biological solutions across plant nutrition, plant
              protection and soil health.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Explore Products
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}