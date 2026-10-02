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
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
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
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
        >
          <img
            src="/images/logo/logo.png"
            alt="Bio-Pest Control Industries"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-[60px]" : "h-[74px] sm:h-[80px]"
            }`}
          />
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
  );
}