import Link from "next/link";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const solutionLinks = [
  {
    name: "Plant Nutrition",
    href: "/solutions#plant-nutrition",
  },
  {
    name: "Plant Protection",
    href: "/solutions#plant-protection",
  },
  {
    name: "Soil Health",
    href: "/solutions#soil-health",
  },
  {
    name: "Biological Product Development",
    href: "/solutions#product-development",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d211f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo/logo.png"
                alt="Bio-Pest Control Industries"
                className="h-[78px] w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Quality biological and plant nutrition solutions supporting
              healthier crops, healthier soil and sustainable farming.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Solutions
            </h3>

            <ul className="mt-6 space-y-4">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-400">
              <p>
                Bio-Pest Control Industries
                <br />
                #51/3, Agrahara, Yelahanka
                <br />
                Bengaluru – 560064
              </p>

              <div>
                <a
                  href="tel:+919341972727"
                  className="block hover:text-white"
                >
                  +91 93419 72727
                </a>

                <a
                  href="tel:+917019639489"
                  className="block hover:text-white"
                >
                  +91 70196 39489
                </a>

                <a
                  href="tel:+919845830168"
                  className="block hover:text-white"
                >
                  +91 98458 30168
                </a>
              </div>

              <a
                href="mailto:bpcibangalore@gmail.com"
                className="block break-all hover:text-white"
              >
                bpcibangalore@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bio-Pest Control Industries. All
            rights reserved.
          </p>

          <p>Nature&apos;s way for sustainable tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}