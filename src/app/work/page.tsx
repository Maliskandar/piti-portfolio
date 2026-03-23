// src/app/work/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import WorkClient from "./WorkClient";

export const revalidate = 60; // ISR update

export default async function WorkPage() {
    // Ambil SEMUA data work dari Sanity (tidak ada limit [0...4] seperti di homepage)
    const query = groq`
    *[_type == "work"] | order(_createdAt desc) {
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

    const works = await client.fetch(query);

    return (
        <main className="flex min-h-screen flex-col bg-black pt-32 relative overflow-hidden">
            {/* Aksen Blueprint / DKV */}
            <div className="absolute top-20 left-10 text-white/20 font-light text-xl pointer-events-none z-0">+</div>
            <div className="absolute top-20 right-10 text-white/20 font-light text-xl pointer-events-none z-0">+</div>

            {/* Render Client Component dan oper data dari Sanity */}
            <WorkClient works={works} />
        </main>
    );
}