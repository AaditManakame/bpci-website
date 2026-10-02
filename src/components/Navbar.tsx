"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
        >
          <img
            src="/images/logo/logo.png"
            alt="Bio-Pest Control Industries"
            className="h-[62px] w-auto object-contain sm:h-[68px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[var(--primary)]"
            >
              {item.name}
            </Link>
          ))}

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
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-gray-700 lg:hidden"
        >
          <span className="text-xl leading-none">
            {mobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--border)] bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-[var(--border)] py-4 text-sm font-medium text-gray-700 hover:text-[var(--primary)]"
              >
                {item.name}
              </Link>
            ))}

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