// src/app/spill/SpillClient.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import type { SpillData } from "@/components/sections/CuratedPicks";

export default function SpillClient({ spills }: { spills: SpillData[] }) {
    const [activeCategory, setActiveCategory] = useState("All");

    // Membuat kategori dinamis
    const categories = useMemo(() => {
        const uniqueCats = new Set(spills.map(s => s.category).filter(Boolean));
        return ["All", ...Array.from(uniqueCats)];
    }, [spills]);

    const filteredData = activeCategory === "All"
        ? spills
        : spills.filter(item => item.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen relative z-10">
            <header className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mb-16 md:mb-24">
                <Link href="/#picks" className="inline-flex items-center gap-2 text-white/50 hover:text-pink-500 transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
                            The Spill <br />
                            <span className="font-serif italic text-white/40">Archive.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-xl">
                            Arsip lengkap gear, outfit, dan setup yang sering saya gunakan di dalam konten. Klik produk untuk melihat detailnya di Shopee.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
                        href="https://msha.ke/sepalsepilpiti" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-4 rounded-full border border-pink-500/50 bg-pink-500/10 hover:bg-pink-500 transition-all text-pink-500 hover:text-black font-bold text-sm tracking-widest uppercase"
                    >
                        <Sparkles className="w-4 h-4" />
                        Quick Link (Milkshake)
                    </motion.a>
                </div>
            </header>

            <section className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-32 flex-grow">
                <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black"
                                    : "bg-transparent border border-white/20 text-white/50 hover:border-pink-500 hover:text-pink-500"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    <AnimatePresence>
                        {filteredData.map((item) => (
                            <motion.a
                                href={item.link || "#"} target="_blank" rel="noopener noreferrer" key={item._id}
                                layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                                className="group relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 block"
                            >
                                {item.imageUrl && (
                                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                <div className="absolute top-4 right-4 bg-[#EE4D2D] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(238,77,45,0.5)] flex items-center gap-1 z-20">
                                    Shopee <ExternalLink className="w-3 h-3" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                                    <p className="text-pink-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">
                                        {item.category}
                                    </p>
                                    <h3 className="text-white text-lg md:text-xl font-bold tracking-tight leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}