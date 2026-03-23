// src/app/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Brands from "@/components/sections/Brands";
import ExpandableServices from "@/components/sections/ExpandableServices";
import About from "@/components/sections/About";
import CuratedPicks from "@/components/sections/CuratedPicks";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export const revalidate = 60;

export default async function Home() {

  // 1. Query untuk Work
  const worksQuery = groq`
    *[_type == "work"] | order(_createdAt desc)[0...5] {
      _id,
      title,
      brandName,
      category,
      objective,
      metrics,
      "thumbnailUrl": thumbnail.asset->url,
      tags,
      projectUrl
    }
  `;

  // 2. Query untuk Spill (Curated Picks) - Ambil 3 data terbaru
  const spillsQuery = groq`
    *[_type == "spill"] | order(_createdAt desc)[0...3] {
      _id,
      title,
      category,
      "imageUrl": image.asset->url,
      link
    }
  `;

  // Fetch kedua data secara paralel agar lebih cepat
  const [works, spills] = await Promise.all([
    client.fetch(worksQuery),
    client.fetch(spillsQuery)
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <About />
      <Marquee />

      {/* Lempar data works */}
      <ExpandableServices works={works} />
      <Brands />


      {/* Lempar data spills */}
      <CuratedPicks spills={spills} />

      <Contact />
      <Footer />
    </main>
  );
}