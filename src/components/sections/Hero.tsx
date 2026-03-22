// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react"; // Pastikan kamu install lucide-react (npm install lucide-react)

export default function Hero() {
    const line1 = ["Directing", "Attention."];
    const line2 = ["Driving", "Conversion."];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1], // Kurva ease-out premium
            },
        },
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* --- VIDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Ganti src dengan link video atau path video di folder public (misal: "/videos/hero-piti.mp4") */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-60 scale-105"
                    src="https://cdn.pixabay.com/video/2020/05/24/40090-424846726_large.mp4"
                />
            </div>

            {/* --- GRADIENT OVERLAYS (Agar teks tetap kontras) --- */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-20 text-center flex flex-col items-center w-full max-w-[90vw] md:max-w-7xl mx-auto mt-16 md:mt-0">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-white/80 uppercase tracking-widest"
                >
                    Piti.Studio — Creative Strategist
                </motion.div>

                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-[14vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase"
                >
                    <div className="overflow-hidden pb-2">
                        {line1.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                className="inline-block mr-[0.2em] text-white"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                    <div className="overflow-hidden pb-2">
                        {line2.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordVariants}
                                // Warna aksen khusus di kata "Conversion"
                                className={i === 1 ? "inline-block text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" : "inline-block mr-[0.2em] text-white"}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="mt-8 md:mt-12 text-neutral-300 text-base md:text-xl max-w-2xl font-light leading-relaxed px-4"
                >
                    Not just another influencer. A creative powerhouse engineering high-converting, scroll-stopping content for brands that want to dominate the FYP.
                </motion.p>
            </div>

            {/* --- SCROLL DOWN INDICATOR --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-10 z-20 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>

        </section>
    );
}