import type { Metadata } from "next";

import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";

import "./globals.css";

const siteUrl = "https://www.biopestindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Bio Pest Control Industries | Biological Solutions for Sustainable Agriculture",
    template: "%s | Bio Pest Control Industries",
  },

  description:
    "Bio Pest Control Industries provides biological, plant nutrition, plant protection and soil health solutions for sustainable agriculture.",

  keywords: [
    "Bio Pest Control Industries",
    "BPCI",
    "biofertilizers",
    "biopesticides",
    "plant nutrition",
    "plant protection",
    "soil health",
    "biological agriculture",
    "sustainable agriculture",
    "agricultural biological products",
    "Bengaluru",
    "Bangalore",
  ],

  authors: [
    {
      name: "Bio Pest Control Industries",
    },
  ],

  creator: "Bio Pest Control Industries",
  publisher: "Bio Pest Control Industries",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Bio Pest Control Industries | Biological Solutions for Sustainable Agriculture",
    description:
      "Biological, plant nutrition, plant protection and soil health solutions for sustainable agriculture.",
    url: siteUrl,
    siteName: "Bio Pest Control Industries",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary",
    title:
      "Bio Pest Control Industries | Biological Solutions for Sustainable Agriculture",
    description:
      "Biological, plant nutrition, plant protection and soil health solutions for sustainable agriculture.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta property="og:url" content={siteUrl} />
      </head>

      <body>
        <PageTransition>
          {children}
        </PageTransition>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}