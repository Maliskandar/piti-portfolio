// src/app/spill/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import SpillClient from "./SpillClient";

export const revalidate = 60;

export default async function SpillPage() {
    // Ambil SEMUA data spill dari Sanity (tidak ada limit)
    const query = groq`
    *[_type == "spill"] | order(_createdAt desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url,
      link
    }
  `;

    const spills = await client.fetch(query);

    return (
        <main className="flex min-h-screen flex-col bg-black pt-32">
            <SpillClient spills={spills} />
        </main>
    );
}