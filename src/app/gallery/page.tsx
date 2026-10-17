
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Bio Pest Control Industries field photographs, crops, nursery plants, flowers and agricultural videos.",
  alternates: {
    canonical: "https://www.biopestindia.com/gallery",
  },
  openGraph: {
    title: "Gallery | Bio Pest Control Industries",
    description:
      "Explore BPCI field photographs, crops, nursery plants, flowers and agricultural videos.",
    url: "https://www.biopestindia.com/gallery",
    type: "website",
    locale: "en_IN",
    siteName: "Bio Pest Control Industries",
  },
};

const photos = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
  "/images/gallery/gallery-07.jpg",
  "/images/gallery/gallery-08.jpg",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-10.jpg",
  "/images/gallery/gallery-11.jpg",
  "/images/gallery/gallery-12.jpg",
  "/images/gallery/gallery-13.jpg",
  "/images/gallery/gallery-14.jpg",
  "/images/gallery/gallery-15.jpg",
  "/images/gallery/gallery-16.jpg",
  "/images/gallery/gallery-17.jpg",
  "/images/gallery/gallery-18.jpg",
];

const videos = [
  "/images/gallery/gallery-video-01.mp4",
  "/images/gallery/gallery-video-02.mp4",
  "/images/gallery/gallery-video-03.mp4",
  "/images/gallery/gallery-video-04.mp4",
  "/images/gallery/gallery-video-05.mp4",
  "/images/gallery/gallery-video-06.mp4",
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#f7f8f6] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Gallery
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              From nature to field.
            </h1>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Photo Gallery
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <a
                  key={photo}
                  href={photo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open larger image"
                  className="group block overflow-hidden rounded-sm bg-[#f1f4f1]"
                >
                  <img
                    src={photo}
                    alt="Agricultural gallery photograph"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8f6] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Videos
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <div
                  key={video}
                  className="overflow-hidden rounded-sm border border-[var(--border)] bg-white"
                >
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full bg-black"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Explore BPCI
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Discover our biological solutions
            </h2>

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
