// src/components/sections/Brands.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

// Mock data: Nama-nama brand (Nanti diganti dengan URL gambar logo asli)
const topRowBrands = ["TOKOPEDIA", "SOMETHINC", "ERIGO", "SAMSUNG", "WARDAH", "SCARLETT", "GOJEK"];
const bottomRowBrands = ["MAKE OVER", "SHOPEE", "INDOMIE", "MAYBELLINE", "UNILEVER", "GARNIER", "BYD"];

export default function Brands() {
    return (
        <section className="py-20 md:py-32 bg-black overflow-hidden relative border-t border-white/5">

            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-20 text-center md:text-left">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-pink-500 text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                >
                    Trusted By Visionaries
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-black tracking-tighter text-white"
                >
                    Collaborators & Partners
                </motion.h2>
            </div>

            {/* Efek Gradient di ujung kiri dan kanan agar logo memudar dengan halus */}
            <div className="absolute left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none mt-20" />
            <div className="absolute right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none mt-20" />

            {/* --- BARIS ATAS (Bergerak ke Kiri) --- */}
            <div className="flex mb-8 md:mb-12 group">
                <motion.div
                    className="flex flex-nowrap w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {[...Array(2)].map((_, blockIndex) => (
                        <div key={`top-${blockIndex}`} className="flex gap-16 md:gap-32 items-center px-8 md:px-16">
                            {topRowBrands.map((brand, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center h-16 md:h-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer"
                                >
                                    {/* Nanti ganti text ini dengan: <Image src={brand.logoUrl} alt={brand.name} fill className="object-contain" /> */}
                                    <span className="text-2xl md:text-4xl font-black tracking-widest text-white whitespace-nowrap drop-shadow-[0_0_15px_rgba(236,72,153,0)] hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] hover:text-pink-500 transition-colors">
                                        {brand}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* --- BARIS BAWAH (Bergerak ke Kanan) --- */}
            <div className="flex group">
                {/* Perhatikan animate x dimulai dari -50% ke 0% agar bergerak berlawanan arah */}
                <motion.div
                    className="flex flex-nowrap w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }} // Sedikit lebih cepat/lambat dari baris atas agar dinamis
                >
                    {[...Array(2)].map((_, blockIndex) => (
                        <div key={`bottom-${blockIndex}`} className="flex gap-16 md:gap-32 items-center px-8 md:px-16">
                            {bottomRowBrands.map((brand, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center h-16 md:h-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer"
                                >
                                    <span className="text-2xl md:text-4xl font-black tracking-widest text-white whitespace-nowrap drop-shadow-[0_0_15px_rgba(236,72,153,0)] hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] hover:text-white transition-colors">
                                        {brand}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}