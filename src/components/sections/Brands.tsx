// src/components/sections/Brands.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

// Definisikan tipe untuk Brand
interface BrandLogo {
    id: string;
    name: string;
    logoUrl: string; // Path ke file logo (misal: "/images/brands/tokopedia.svg")
}

// Data Mockup: Baris Atas
// Ganti "/images/brands/..." dengan path atau URL logo yang sebenarnya.
const topRowBrands: BrandLogo[] = [
    { id: "t1", name: "Tokopedia", logoUrl: "/images/brands/tokopedia.svg" },
    { id: "t2", name: "Somethinc", logoUrl: "/images/brands/somethinc.png" },
    { id: "t3", name: "Erigo", logoUrl: "/images/brands/erigo.svg" },
    { id: "t4", name: "Samsung", logoUrl: "/images/brands/samsung.png" },
    { id: "t5", name: "Wardah", logoUrl: "/images/brands/wardah.png" },
    { id: "t6", name: "Scarlett", logoUrl: "/images/brands/scarlett.png" },
    { id: "t7", name: "Gojek", logoUrl: "/images/brands/gojek.svg" },
];

// Data Mockup: Baris Bawah
const bottomRowBrands: BrandLogo[] = [
    { id: "b1", name: "Make Over", logoUrl: "/images/brands/makeover.png" },
    { id: "b2", name: "Shopee", logoUrl: "/images/brands/shopee.svg" },
    { id: "b3", name: "Indomie", logoUrl: "/images/brands/indomie.png" },
    { id: "b4", name: "Maybelline", logoUrl: "/images/brands/maybelline.png" },
    { id: "b5", name: "Unilever", logoUrl: "/images/brands/unilever.svg" },
    { id: "b6", name: "Garnier", logoUrl: "/images/brands/garnier.png" },
    { id: "b7", name: "BYD", logoUrl: "/images/brands/byd.png" },
];

export default function Brands() {
    return (
        <section className="py-20 md:py-32 bg-black overflow-hidden relative border-t border-white/5">

            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center md:text-left relative z-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-pink-500 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
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

            {/* Gradient Mask: Membuat logo memudar di pinggir layar */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* --- BARIS ATAS (Bergerak ke Kiri) --- */}
            <div className="flex mb-12 md:mb-16">
                <motion.div
                    className="flex flex-nowrap w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                >
                    {[...Array(2)].map((_, blockIndex) => (
                        <div key={`top-${blockIndex}`} className="flex gap-20 md:gap-32 items-center px-10 md:px-16">
                            {topRowBrands.map((brand) => (
                                <div
                                    key={brand.id}
                                    // Efek Hover: Logo membesar, filter grayscale hilang, muncul glow pink
                                    className="relative w-32 md:w-48 h-12 md:h-16 flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer group"
                                >
                                    {/* Efek Glow di belakang logo saat di-hover */}
                                    <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Image
                                        src={brand.logoUrl}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain drop-shadow-md relative z-10"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* --- BARIS BAWAH (Bergerak ke Kanan) --- */}
            <div className="flex">
                <motion.div
                    className="flex flex-nowrap w-max"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {[...Array(2)].map((_, blockIndex) => (
                        <div key={`bottom-${blockIndex}`} className="flex gap-20 md:gap-32 items-center px-10 md:px-16">
                            {bottomRowBrands.map((brand) => (
                                <div
                                    key={brand.id}
                                    className="relative w-32 md:w-48 h-12 md:h-16 flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer group"
                                >
                                    <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Image
                                        src={brand.logoUrl}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain drop-shadow-md relative z-10"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}