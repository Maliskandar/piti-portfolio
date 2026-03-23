// src/components/sections/ExpandableServices.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface Service {
    id: number;
    title: string;
    brandName: string;
    objective: string;
    metrics: string;
    thumbnail: string;
    tags: string[];
    projectUrl: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Viral Product Launch",
        brandName: "TechGear Pro",
        objective: "Drive initial awareness and day-1 sales conversion through fast-paced TikTok editing.",
        metrics: "2.5M Views • 8% CTR",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
        tags: ["TECH", "LAUNCH", "GEN-Z", "VIRAL"],
        projectUrl: "#",
    },
    {
        id: 2,
        title: "Rebranding Series",
        brandName: "Lumina Skincare",
        objective: "Shift brand perception to Gen-Z audience with emotional POV storytelling.",
        metrics: "1M+ Views • +20% Lift",
        thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop",
        tags: ["BEAUTY", "SKINCARE", "REBRAND"],
        projectUrl: "#",
    },
    {
        id: 3,
        title: "UGC Strategy",
        brandName: "UrbanFit",
        objective: "Community building and organic social proofing through relatable fitness skits.",
        metrics: "500K Views • 12% ER",
        thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop",
        tags: ["FITNESS", "UGC", "COMMUNITY"],
        projectUrl: "#",
    },
    {
        id: 4,
        title: "Holiday Conversion",
        brandName: "BiteSnacks",
        objective: "Maximize Q4 ROAS through short-form direct response video.",
        metrics: "3M Views • 4x ROAS",
        thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
        tags: ["FOOD", "SNACKS", "CONVERSION"],
        projectUrl: "#",
    },
];

export default function ExpandableServices() {
    // Set default expanded index (misal: 0 agar kartu pertama terbuka di awal)
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-black border-y border-white/10">

            {/* --- HEADER SECTION --- */}
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
                    >
                        Selected Works<span className="text-pink-500">.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-lg md:text-xl font-light tracking-wide"
                    >
                        Where creativity meets measurable impact.
                    </motion.p>
                </div>

                {/* SEE MORE SERVICES BUTTON - Bergaya premium */}
                <Link href="/work" className="group flex items-center gap-3 text-white hover:text-pink-500 transition-colors">
                    <span className="text-sm font-medium tracking-widest uppercase">
                        See More Services
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                </Link>
            </div>

            {/* --- EXPANDABLE ACCORDION CONTAINER --- */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[800px] md:h-[600px] lg:h-[700px]">
                {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                        <motion.div
                            key={service.id}
                            layout // Framer motion akan membuat animasi width/height-nya smooth
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => setExpandedIndex(index)}
                            className={`group relative rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] ${isExpanded ? "flex-[4] md:flex-[5]" : "flex-[1] opacity-60 hover:opacity-100"
                                }`}
                        >
                            {/* Background Image */}
                            <Image
                                src={service.thumbnail}
                                alt={service.title}
                                fill
                                className={`object-cover transition-all duration-[1.2s] ease-out ${isExpanded ? "scale-100 opacity-50" : "scale-110 opacity-30 grayscale"
                                    }`}
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${isExpanded ? "from-black via-black/50 to-transparent opacity-100" : "from-black/80 to-transparent opacity-80"
                                }`} />

                            {/* Top Right Icon (Hanya muncul saat expanded) */}
                            <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-700 ease-out ${isExpanded ? "opacity-100 translate-y-0 scale-100 delay-300" : "opacity-0 -translate-y-4 scale-50"
                                }`}>
                                <ArrowUpRight className="text-black w-6 h-6" />
                            </div>

                            {/* --- LAYER 1: KONTEN COLLAPSED (TEKS VERTIKAL) --- */}
                            {/* writing-mode:vertical-rl dan -rotate-180 membuat teks dibaca dari bawah ke atas */}
                            <div
                                className={`absolute inset-0 flex items-end justify-center pb-12 transition-all duration-500 ease-in-out z-10 ${isExpanded ? "opacity-0 pointer-events-none blur-sm" : "opacity-100 delay-200 blur-0"
                                    }`}
                            >
                                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-widest [writing-mode:vertical-rl] -rotate-180 whitespace-nowrap">
                                    {service.title}
                                </h3>
                            </div>

                            {/* --- LAYER 2: KONTEN EXPANDED (FULL DETAIL) --- */}
                            <div
                                className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-20 transition-all duration-700 ease-[0.16,1,0.3,1] ${isExpanded ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-12 pointer-events-none"
                                    }`}
                            >
                                {/* Tag Kategori */}
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                                    {service.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] md:text-xs font-semibold tracking-wider text-white uppercase bg-white/10 backdrop-blur-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Judul & Brand */}
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight max-w-2xl">
                                    {service.title}
                                </h3>
                                <p className="text-pink-500 text-sm md:text-base font-bold tracking-[0.2em] mb-6 uppercase">
                                    FOR {service.brandName}
                                </p>

                                {/* Deskripsi */}
                                <p className="text-white/70 text-sm md:text-lg mb-8 line-clamp-3 font-light leading-relaxed max-w-2xl">
                                    {service.objective}
                                </p>

                                {/* Bottom Action Bar: Metrik & Link Proyek */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/20 pt-6 mt-auto">
                                    <div className="inline-flex items-center px-5 py-2.5 border border-white/20 rounded-full bg-black/60 backdrop-blur-md">
                                        <span className="text-xs md:text-sm font-semibold tracking-widest text-white uppercase">
                                            {service.metrics}
                                        </span>
                                    </div>

                                    <a href={service.projectUrl} className="group flex items-center gap-3 text-white/60 hover:text-pink-500 transition-colors ml-auto sm:ml-0">
                                        <span className="text-sm md:text-base font-medium tracking-wider uppercase">
                                            View Full Project
                                        </span>
                                        <motion.div
                                            animate={{ x: [0, 8, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                        >
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}