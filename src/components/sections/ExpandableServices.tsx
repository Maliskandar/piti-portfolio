// src/components/sections/ExpandableServices.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Sesuaikan tipe data dengan skema Sanity kita
export interface WorkData {
    _id: string;
    title: string;
    brandName: string;
    category: string;
    objective: string;
    metrics: string;
    thumbnailUrl: string; // URL gambar yang sudah di-resolve
    tags: string[];
    projectUrl: string;
}

// Komponen sekarang menerima props 'works'
export default function ExpandableServices({ works }: { works: WorkData[] }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    // Kalau data kosong, tampilkan pesan fallback
    if (!works || works.length === 0) {
        return <div className="text-white text-center py-32">Loading works...</div>;
    }

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-28 bg-black max-h-[1400px]">

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
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-[800px] md:h-[550px] lg:h-[600px]">
                {works.map((service, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                        <motion.div
                            key={service._id} // Gunakan _id dari Sanity
                            layout
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => setExpandedIndex(index)}
                            className={`group relative rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] ${isExpanded ? "flex-[4] md:flex-[5]" : "flex-[1] opacity-60 hover:opacity-100"
                                }`}
                        >
                            {/* Pastikan thumbnailUrl ada sebelum merender Image */}
                            {service.thumbnailUrl && (
                                <Image
                                    src={service.thumbnailUrl}
                                    alt={service.title}
                                    fill
                                    className={`object-cover transition-all duration-[1.2s] ease-out ${isExpanded ? "scale-100 opacity-50" : "scale-110 opacity-30 grayscale"
                                        }`}
                                />
                            )}

                            <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${isExpanded ? "from-black via-black/50 to-transparent opacity-100" : "from-black/80 to-transparent opacity-80"
                                }`} />

                            <div className={`absolute top-5 right-5 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-700 ease-out ${isExpanded ? "opacity-100 translate-y-0 scale-100 delay-300" : "opacity-0 -translate-y-4 scale-50"
                                }`}>
                                <ArrowUpRight className="text-black w-5 h-5" />
                            </div>

                            {/* LAYER 1: VERTICAL (DESKTOP) / HORIZONTAL (MOBILE) TEXT */}
                            <div className={`absolute inset-0 flex items-center md:items-end justify-center md:pb-8 transition-all duration-500 ease-in-out z-10 ${isExpanded ? "opacity-0 pointer-events-none blur-sm" : "opacity-100 delay-200 blur-0"
                                }`}>
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest md:[writing-mode:vertical-rl] md:-rotate-180 whitespace-nowrap">
                                    {service.title}
                                </h3>
                            </div>

                            {/* LAYER 2: EXPANDED CONTENT */}
                            <div className={`absolute inset-0 p-5 md:p-8 flex flex-col justify-end z-20 transition-all duration-700 ease-[0.16,1,0.3,1] ${isExpanded ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-12 pointer-events-none"
                                }`}>
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                                    {/* Cek apakah tags ada sebelum di-map */}
                                    {service.tags?.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] md:text-xs font-semibold tracking-wider text-white uppercase bg-white/10 backdrop-blur-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight tracking-tight max-w-2xl">
                                    {service.title}
                                </h3>
                                <p className="text-pink-500 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase">
                                    {service.brandName || "PERSONAL"}
                                </p>

                                <p className="text-white/70 text-xs md:text-base mb-6 line-clamp-3 font-light leading-relaxed max-w-2xl">
                                    {service.objective}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/20 pt-6 mt-auto">
                                    <div className="inline-flex items-center px-5 py-2.5 border border-white/20 rounded-full bg-black/60 backdrop-blur-md">
                                        <span className="text-xs md:text-sm font-semibold tracking-widest text-white uppercase">
                                            {service.metrics || "Impact Measured"}
                                        </span>
                                    </div>

                                    {service.projectUrl && (
                                        <a href={service.projectUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/60 hover:text-pink-500 transition-colors ml-auto sm:ml-0">
                                            <span className="text-sm md:text-base font-medium tracking-wider uppercase">
                                                View Full Project
                                            </span>
                                            <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                                                <ArrowRight size={20} />
                                            </motion.div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}