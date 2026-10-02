import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main>
        <section className="flex min-h-[70vh] items-center bg-[#f7f8f6]">
          <div className="mx-auto w-full max-w-4xl px-6 py-24 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              404
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Page not found
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              The page you are looking for may have moved or no longer exists.
              You can return to the BPCI homepage or explore our products.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Back to Home
              </Link>

              <Link
                href="/products"
                className="rounded-md border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}