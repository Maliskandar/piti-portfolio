// src/components/sections/Marquee.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Marquee() {
    const tickerItems = [
        "4M+ TIKTOK FOLLOWERS",
        "100M+ TOTAL VIEWS",
        "15% AVG. ENGAGEMENT RATE",
        "TRUSTED BY TOP BRANDS",
    ];

    return (
        <section className="w-full bg-[#050505] py-5 overflow-hidden flex border-y border-white/10 relative z-20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">

            {/* Efek gradient di pinggir kiri dan kanan agar teks terlihat muncul dan menghilang perlahan (Fade Edges) */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex flex-nowrap w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20 // Sedikit diperlambat agar lebih elegan dan mudah dibaca
                }}
            >
                {[...Array(2)].map((_, blockIndex) => (
                    <div key={blockIndex} className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
                        {[...Array(2)].map((_, repeatIndex) => (
                            <React.Fragment key={repeatIndex}>
                                {tickerItems.map((item, itemIndex) => (
                                    <React.Fragment key={itemIndex}>
                                        <span className="text-sm md:text-lg font-bold tracking-[0.2em] text-white whitespace-nowrap">
                                            {item}
                                        </span>
                                        {/* Bintang pemisah diberi warna aksen */}
                                        <span className="text-pink-500 text-lg md:text-xl drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                                            ✦
                                        </span>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}