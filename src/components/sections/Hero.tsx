// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Beaker } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    // Ganti string ini dengan ID Video YouTube yang diinginkan.
    // Contoh link: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID-nya adalah dQw4w9WgXcQ
    const youtubeVideoId = "KKiM4CsM4x4";

    const featuredProjects = [
        {
            id: 1,
            title: "Tokopedia Mega Haul",
            category: "Commercial",
            metrics: "2.5M Views",
            link: "#"
        },
        {
            id: 2,
            title: "The 'Salting' Series",
            category: "Viral Skit",
            metrics: "5.4M Views",
            link: "#"
        },
        {
            id: 3,
            title: "Erigo Youth Campaign",
            category: "Brand Strategy",
            metrics: "3.2M Views",
            link: "#"
        },
    ];

    return (
        <section className="relative h-screen min-h-[850px] w-full flex flex-col justify-between overflow-hidden bg-black border-b border-white/10">

            {/* --- YOUTUBE VIDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Trik Aspect Ratio agar Iframe berperilaku seperti object-cover */}
                <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
                        className="absolute top-0 left-0 w-full h-full scale-125" // Scale 125 untuk menyembunyikan logo YouTube di pojok
                        allow="autoplay; fullscreen"
                        title="Background Video"
                    />
                </div>
            </div>

            {/* --- OVERLAYS (Glitch & Noise Aesthetic) --- */}
            {/* Gradient untuk memastikan teks terbaca */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black" />

            {/* Efek scanline/grid khas "The Lab" */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />


            {/* --- MAIN HERO CONTENT (Tengah) --- */}
            <div className="relative z-20 flex flex-col items-center justify-center flex-grow w-full max-w-[90vw] md:max-w-7xl mx-auto text-center mt-20 md:mt-0">

                {/* Badge "The Lab" */}
                {/* <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md text-pink-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
                >
                    <Beaker className="w-4 h-4" />
                    Welcome to The Lab
                </motion.div> */}

                {/* Main Hook / Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] font-black tracking-tighter text-white uppercase max-w-5xl"
                >
                    Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Binus Design Principles</span> <br className="hidden md:block" />
                    meet <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] italic">TikTok Algorithms.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="mt-8 text-white/50 text-base md:text-xl font-light tracking-wide max-w-2xl"
                >
                    Engineering viral moments with data-driven precision and scroll-stopping visual narratives.
                </motion.p>
            </div>


            {/* --- FEATURED PROJECTS (Bawah) --- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] flex-grow bg-white/10" />
                    <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Featured Experiments</span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredProjects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={project.id}
                            className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/50 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Efek Hover Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <div className="relative z-10">
                                <p className="text-pink-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
                                    {project.category}
                                </p>
                                <h3 className="text-white text-base md:text-lg font-bold tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="relative z-10 flex items-center gap-4">
                                <span className="text-white/40 text-xs font-medium tracking-wider bg-black/50 px-3 py-1 rounded-full">
                                    {project.metrics}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-black text-white transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}