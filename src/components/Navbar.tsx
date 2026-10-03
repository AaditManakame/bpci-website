"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/products") {
      return pathname === "/products" || pathname.startsWith("/products/");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      {/* Fixed Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.10)]"
            : "border-[var(--border)] bg-white/95 backdrop-blur"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo + Company Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src="/images/logo/logo.png"
              alt="Bio Pest Control Industries"
              className={`w-auto shrink-0 object-contain transition-all duration-300 ${
                scrolled ? "h-[48px]" : "h-[62px] sm:h-[68px]"
              }`}
            />

            <span
              className={`hidden whitespace-nowrap font-semibold tracking-[-0.02em] text-[var(--primary)] transition-all duration-300 sm:block ${
                scrolled
                  ? "text-base lg:text-lg"
                  : "text-base sm:text-lg lg:text-xl"
              }`}
            >
              Bio Pest Control Industries
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--primary)]"
                      : "text-gray-700 hover:text-[var(--primary)]"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
            >
              Enquire Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] lg:hidden"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--border)] bg-white lg:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto max-w-7xl px-5 py-3 sm:px-6"
            >
              <div className="mb-3 border-b border-[var(--border)] pb-3 sm:hidden">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Bio Pest Control Industries
                </p>
              </div>

              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block border-b border-[var(--border)] py-4 text-sm font-medium ${
                      active
                        ? "text-[var(--primary)]"
                        : "text-gray-700 hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="my-4 block rounded-md bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--primary-dark)]"
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content doesn't sit underneath the fixed navbar */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
}