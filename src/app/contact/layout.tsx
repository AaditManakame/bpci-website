import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bio Pest Control Industries in Bengaluru for biological agricultural products, plant nutrition, plant protection, soil health solutions and product enquiries.",
  alternates: {
    canonical: "https://www.biopestindia.com/contact",
  },
  openGraph: {
    title: "Contact Bio Pest Control Industries",
    description:
      "Get in touch with Bio Pest Control Industries in Bengaluru for biological, plant nutrition, plant protection and soil health solutions.",
    url: "https://www.biopestindia.com/contact",
    type: "website",
    locale: "en_IN",
    siteName: "Bio Pest Control Industries",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}