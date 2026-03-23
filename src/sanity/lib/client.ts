// src/sanity/lib/client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-23', // Gunakan tanggal hari ini atau versi API Sanity
  useCdn: false, // Set false agar data selalu up-to-date (tidak di-cache CDN saat development)
})