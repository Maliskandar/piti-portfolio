// src/app/work/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, BarChart } from "lucide-react";
import Footer from "@/components/layout/Footer";

// Data Mockup Diperluas (Nanti ini diganti dengan fetch dari Sanity CMS)
const worksData = [
    { id: 1, title: "Viral Product Launch", brandName: "TechGear Pro", category: "Commercial", metrics: "2.5M Views", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Rebranding Series", brandName: "Lumina Skincare", category: "Brand Strategy", metrics: "1M+ Views", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "UGC Strategy", brandName: "UrbanFit", category: "UGC", metrics: "500K Views", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Holiday Conversion", brandName: "BiteSnacks", category: "Commercial", metrics: "4x ROAS", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "The 'Salting' POV", brandName: "Local Cafe", category: "Viral Skit", metrics: "5.4M Views", image: "https://images.unsplash.com/photo-1525642055660-8f9f6e1f0a20?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Gen-Z Market Entry", brandName: "Fintech X", category: "Brand Strategy", metrics: "12% CVR", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
];

const categories = ["All", "Commercial", "Brand Strategy", "UGC", "Viral Skit"];

export default function WorkArchive() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredWorks = activeCategory === "All"
        ? worksData
        : worksData.filter(work => work.category === activeCategory);

    return (
        <main className="flex min-h-screen flex-col bg-black pt-32 relative overflow-hidden">

            {/* Aksen Blueprint / DKV */}
            <div className="absolute top-20 left-10 text-white/20 font-light text-xl pointer-events-none">+</div>
            <div className="absolute top-20 right-10 text-white/20 font-light text-xl pointer-events-none">+</div>

            {/* --- HEADER SECTION --- */}
            <header className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mb-16 md:mb-24 relative z-10">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-pink-500 transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Main
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-pink-500 text-xs font-bold tracking-[0.3em] uppercase border border-pink-500/30 px-4 py-1.5 rounded-full w-max bg-pink-500/5 mb-6 inline-block">
                            [ INDEX : 02 ]
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
                            The Work <br />
                            <span className="font-serif italic text-white/40">Archive.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-xl">
                            Eksplorasi mendalam dari setiap kampanye, *skit*, dan strategi yang mengubah cara *brand* berinteraksi dengan audiens Gen-Z.
                        </p>
                    </motion.div>

                    {/* Stats Highlight Cepat */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-6 p-6 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md"
                    >
                        <BarChart className="w-10 h-10 text-pink-500 opacity-50" />
                        <div>
                            <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">Total Impact Generated</p>
                            <p className="text-3xl font-black text-white">100M<span className="text-pink-500">+</span> <span className="text-lg font-light text-white/60">Views</span></p>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* --- FILTER & GRID SECTION --- */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-32 flex-grow relative z-10">

                {/* Navigasi Kategori */}
                <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black"
                                    : "bg-transparent border border-white/20 text-white/50 hover:border-pink-500 hover:text-pink-500"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Animated Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer block"
                            >
                                {/* Background Image */}
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Ikon Panah di Kanan Atas */}
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                                    <ArrowUpRight className="text-black w-6 h-6" />
                                </div>

                                {/* Konten Teks */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 border border-white/20 rounded-full text-[9px] font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md">
                                                {work.category}
                                            </span>
                                            <span className="text-pink-500 text-xs font-bold tracking-[0.2em] uppercase">
                                                {work.brandName}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                                            {work.title}
                                        </h3>

                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <span className="text-white/50 text-xs font-light uppercase tracking-widest">Impact:</span>
                                            <span className="text-white text-sm font-bold tracking-wider px-3 py-1 bg-white/10 rounded-full">
                                                {work.metrics}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </section>

            <Footer />
        </main>
    );
}