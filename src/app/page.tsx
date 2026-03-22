// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Brands from "@/components/sections/Brands";
import ExpandableServices from "@/components/sections/ExpandableServices";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact"; // Section baru
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Marquee />
      <About />
      <Brands />
      <ExpandableServices />
      <Contact /> {/* Masuk ke sini */}
      <Footer />
    </main>
  );
}