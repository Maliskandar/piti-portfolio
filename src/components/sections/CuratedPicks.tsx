// src/components/sections/CuratedPicks.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

// Tipe data sesuai dengan skema 'spill' di Sanity
export interface SpillData {
    _id: string;
    title: string;
    category: string;
    imageUrl: string; // URL hasil resolve dari asset image
    link: string;
}

// Komponen sekarang menerima props 'spills'
export default function CuratedPicks({ spills }: { spills: SpillData[] }) {

    // Fallback jika belum ada data di Sanity
    if (!spills || spills.length === 0) {
        return <div className="text-white text-center py-32">Loading curated picks...</div>;
    }

    return (
        <section id="picks" className="py-24 md:py-32 px-6 md:px-28 bg-black relative overflow-hidden border-t border-white/5">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.03] overflow-hidden">
                <h2 className="text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    THE SPILL
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- HEADER SECTION --- */}
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="flex items-center gap-2 text-pink-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                            <ShoppingBag className="w-4 h-4" />
                            Curated Selection
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[1.1]">
                            The Curated <br />
                            <span className="font-serif italic text-white/70 font-light">Spill.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-sm md:text-base font-light max-w-sm md:text-right"
                    >
                        Sering ditanya pakai baju apa atau lampu apa? Ini adalah arsip perlengkapan tempur dan *daily outfit* yang sering seliweran di konten saya.
                    </motion.p>
                </div>

                {/* --- GRID PRODUK TEASER --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Looping data dari Sanity */}
                    {spills.map((pick, index) => (
                        <motion.a
                            href={pick.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={pick._id} // Gunakan _id dari Sanity
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 block"
                        >
                            {/* Pastikan imageUrl ada */}
                            {pick.imageUrl && (
                                <Image
                                    src={pick.imageUrl}
                                    alt={pick.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center gap-1 z-20">
                                View
                                <ArrowUpRight className="w-3 h-3" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                                <p className="text-pink-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                                    {pick.category}
                                </p>
                                <h3 className="text-white text-xl md:text-2xl font-black tracking-tight leading-tight">
                                    {pick.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}

                    {/* --- KARTU CTA KE MILKSHAKE / SPILL ARCHIVE --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-[400px] md:h-[450px] rounded-2xl border border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 transition-colors p-6 flex flex-col justify-between group"
                    >
                        <div className="flex justify-end">
                            <div className="w-12 h-12 rounded-full border border-pink-500/50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <p className="text-white/50 text-sm font-light mb-4">
                                Tidak menemukan yang kamu cari? Telusuri semua rak.
                            </p>
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6">
                                Explore The <br /> Full Archive.
                            </h3>
                            <Link
                                href="/spill"
                                className="inline-flex items-center justify-center w-full py-4 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:scale-[1.02] transition-transform"
                            >
                                Explore The Archive
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}