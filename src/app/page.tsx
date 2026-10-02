import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Solutions />
        <AboutPreview />
        <FeaturedProducts />
        <HomeCTA />
      </main>
    </>
  );
}