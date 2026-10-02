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
    href: "/products?category=plant-nutrition",
  },
  {
    name: "Plant Protection",
    href: "/products?category=plant-protection",
  },
  {
    name: "Soil Health",
    href: "/products?category=soil-health",
  },
];

const contactDetails = {
  address: (
    <>
      #51/3, Agrahara, Yelahanka
      <br />
      Bengaluru – 560064
    </>
  ),
  phoneNumbers: [
    {
      display: "+91 93419 72727",
      href: "tel:+919341972727",
    },
    {
      display: "+91 70196 39489",
      href: "tel:+917019639489",
    },
    {
      display: "+91 98458 30168",
      href: "tel:+919845830168",
    },
  ],
  email: "bpcibangalore@gmail.com",
};

export default function Footer() {
  return (
    <footer className="bg-[#1d211f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.1fr]">
          {/* Company */}
          <div>
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

            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-gray-300 hover:text-white"
            >
              Learn More About BPCI →
            </Link>
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

            <Link
              href="/solutions"
              className="mt-6 inline-flex text-sm font-semibold text-gray-300 hover:text-white"
            >
              View All Solutions →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-400">
              <p>
                <span className="text-gray-300">
                  Bio-Pest Control Industries
                </span>
                <br />
                {contactDetails.address}
              </p>

              <div>
                {contactDetails.phoneNumbers.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block hover:text-white"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${contactDetails.email}`}
                className="block break-all hover:text-white"
              >
                {contactDetails.email}
              </a>

              <Link
                href="/contact"
                className="inline-flex rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-gray-200 hover:border-white/40 hover:text-white"
              >
                Send an Enquiry
              </Link>
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