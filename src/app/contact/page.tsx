"use client";

import {
  FormEvent,
  Suspense,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const products = [
  "BPCI-AZOMAX",
  "BPCI-AZOSPIR",
  "BPCI-RHIZOMAX",
  "BPCI-PHOSPHOMAX",
  "BPCI-POTAMAX",
  "BPCI-NPK CONSOMAX",
  "BPCI-MYCORRHIZA",
  "BPCI-POSHAK",
  "BPCI-TRISHUL",
  "BPCI-BIO BECTIN",
  "BPCI-FLUOROMAX",
  "BPCI-NEMOLEUM",
  "BPCI-DECOMPOSER",
  "NEEM CAKE",
  "BPCI-PROM",
  "HUMIC ACID",
];

function ContactForm() {
  const searchParams = useSearchParams();
  const requestedProduct = searchParams.get("product") || "";

  const [selectedProduct, setSelectedProduct] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (requestedProduct && products.includes(requestedProduct)) {
      setSelectedProduct(requestedProduct);
    }
  }, [requestedProduct]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      product: formData.get("product"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your enquiry.",
        );
      }

      setSuccess(true);
      form.reset();
      setSelectedProduct("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-[var(--border)] bg-[#f7f8f6] p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
        Product Enquiry
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
        Send us an enquiry
      </h2>

      <p className="mt-4 leading-7 text-gray-600">
        Fill in the details below and our team can get back to you.
      </p>

      {requestedProduct && selectedProduct && (
        <div className="mt-6 border border-green-200 bg-green-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
            Product Selected
          </p>

          <p className="mt-1 font-semibold text-green-900">
            {selectedProduct}
          </p>
        </div>
      )}

      {success && (
        <div className="mt-6 border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800">
          <strong>Enquiry sent successfully.</strong>
          <br />
          Thank you for contacting BPCI. Our team will get back to you.
        </div>
      )}

      {error && (
        <div className="mt-6 border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700"
          >
            Company / Farm
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company or farm name"
            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="block text-sm font-semibold text-gray-700"
          >
            Product Interested In
          </label>

          <select
            id="product"
            name="product"
            value={selectedProduct}
            onChange={(event) => setSelectedProduct(event.target.value)}
            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          >
            <option value="">Select a product</option>

            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Message *
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us what you are looking for..."
            className="mt-2 w-full resize-y rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
        </button>

        <p className="text-xs leading-5 text-gray-500">
          By submitting this form, your enquiry will be sent to Bio-Pest
          Control Industries.
        </p>
      </form>
    </div>
  );
}

function ContactPageContent() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-[#f7f8f6] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Contact BPCI
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Let&apos;s talk about your agricultural requirements
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Get in touch with Bio-Pest Control Industries for product
              information, agricultural requirements and enquiries.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Get In Touch
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  Bio-Pest Control Industries
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  We provide biological, plant nutrition, plant protection and
                  soil health solutions for sustainable agriculture.
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Address
                    </p>

                    <p className="mt-3 leading-7 text-gray-700">
                      #51/3, Agrahara, Yelahanka
                      <br />
                      Bengaluru – 560064
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Phone
                    </p>

                    <div className="mt-3 space-y-2">
                      <a
                        href="tel:+919341972727"
                        className="block text-gray-700 hover:text-[var(--primary)]"
                      >
                        +91 93419 72727
                      </a>

                      <a
                        href="tel:+917019639489"
                        className="block text-gray-700 hover:text-[var(--primary)]"
                      >
                        +91 70196 39489
                      </a>

                      <a
                        href="tel:+919845830168"
                        className="block text-gray-700 hover:text-[var(--primary)]"
                      >
                        +91 98458 30168
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Email
                    </p>

                    <a
                      href="mailto:bpcibangalore@gmail.com"
                      className="mt-3 block break-all text-gray-700 hover:text-[var(--primary)]"
                    >
                      bpcibangalore@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <Suspense
                fallback={
                  <div className="border border-[var(--border)] bg-[#f7f8f6] p-8 lg:p-10">
                    <p className="text-sm text-gray-500">
                      Loading enquiry form...
                    </p>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="bg-[#f7f8f6] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                What We Offer
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Explore our product solutions
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link
                href="/products?category=plant-nutrition"
                className="group border border-[var(--border)] bg-white p-8 hover:bg-[#fafbf9]"
              >
                <p className="text-sm font-semibold text-[var(--primary)]">
                  01
                </p>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  Plant Nutrition
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Explore biofertilizers, microbial solutions, mycorrhiza and
                  micronutrient products.
                </p>

                <p className="mt-6 text-sm font-semibold text-[var(--primary)]">
                  View Products →
                </p>
              </Link>

              <Link
                href="/products?category=plant-protection"
                className="group border border-[var(--border)] bg-white p-8 hover:bg-[#fafbf9]"
              >
                <p className="text-sm font-semibold text-[var(--primary)]">
                  02
                </p>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  Plant Protection
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Explore biological and botanical solutions for sustainable
                  crop protection.
                </p>

                <p className="mt-6 text-sm font-semibold text-[var(--primary)]">
                  View Products →
                </p>
              </Link>

              <Link
                href="/products?category=soil-health"
                className="group border border-[var(--border)] bg-white p-8 hover:bg-[#fafbf9]"
              >
                <p className="text-sm font-semibold text-[var(--primary)]">
                  03
                </p>

                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">
                  Soil Health
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Explore products supporting soil health, decomposition and
                  soil conditioning.
                </p>

                <p className="mt-6 text-sm font-semibold text-[var(--primary)]">
                  View Products →
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function ContactPage() {
  return <ContactPageContent />;
}