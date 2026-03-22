// src/components/sections/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
    const sectionRef = useRef(null);

    // Setup efek Parallax untuk gambar saat di-scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} id="about" className="py-32 md:py-48 px-6 md:px-12 w-full bg-black text-white relative overflow-hidden">

            {/* --- DECORATIVE TECHNICAL ACCENTS (DKV BRUTALIST STYLE) --- */}
            {/* Tanda Plus (+) di sudut-sudut untuk kesan 'Blueprint/Artboard' */}
            <div className="absolute top-10 left-10 text-white/20 font-light text-xl pointer-events-none">+</div>
            <div className="absolute top-10 right-10 text-white/20 font-light text-xl pointer-events-none">+</div>
            <div className="absolute bottom-10 left-10 text-white/20 font-light text-xl pointer-events-none">+</div>
            <div className="absolute bottom-10 right-10 text-white/20 font-light text-xl pointer-events-none">+</div>

            {/* Garis vertikal tipis pembatas artboard */}
            <div className="absolute top-0 bottom-0 left-[5%] md:left-[8%] w-[1px] bg-white/5 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-[5%] md:right-[8%] w-[1px] bg-white/5 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- BAGIAN ATAS: THE MANIFESTO --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-4"
                    >
                        <span className="text-pink-500 text-xs font-bold tracking-[0.3em] uppercase border border-pink-500/30 px-4 py-1.5 rounded-full w-max bg-pink-500/5">
                            [ IDENT : 01 ]
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] uppercase">
                            I Don't Just <br />
                            Follow Trends.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-md text-right md:text-left"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-light tracking-tight leading-[0.9] text-white/80">
                            I <span className="font-serif italic text-pink-500">dissect</span> them.
                        </h2>
                    </motion.div>
                </div>

                {/* --- BAGIAN BAWAH: ASYMMETRICAL GRID (FOTO & TEKS) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

                    {/* KOLOM KIRI: Foto dengan efek Parallax */}
                    <div className="lg:col-span-6 xl:col-span-5 relative h-[600px] md:h-[800px] w-full rounded-sm overflow-hidden border border-white/10 group">
                        <motion.div style={{ y: imageY }} className="absolute inset-[-15%] w-[130%] h-[130%]">
                            <Image
                                src="/img/Piti 2.png"
                                alt="Piti Portrait"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>

                        {/* Overlay Gradient & Noise */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Floating Badge ala DKV di atas foto */}
                        <div className="absolute bottom-8 left-8 p-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg">
                            <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-1">Current Status</p>
                            <p className="text-pink-500 text-sm font-serif italic">Decoding the FYP</p>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Copywriting / Narasi (Sengaja digeser ke bawah / margin-top) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 xl:col-span-5 xl:col-start-7 lg:mt-32 flex flex-col gap-10"
                    >
                        {/* Paragraf 1 */}
                        <div className="relative">
                            <div className="hidden md:block absolute -left-12 top-2 w-6 h-[1px] bg-pink-500" />
                            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                                Memulai perjalanan dari merekam video POV di kamar, saya menyadari satu hal: audiens Gen-Z tidak bisa dibohongi. Mereka membenci iklan yang terasa seperti iklan. Mereka mencari <span className="font-serif italic text-white">koneksi, humor, dan validasi emosional.</span>
                            </p>
                        </div>

                        {/* Paragraf 2 */}
                        <div className="relative">
                            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                                Dengan lebih dari <strong className="text-white font-bold">4 Juta audiens setia</strong>, saya tidak lagi sekadar membuat konten. Saya membedah anatomi algoritma TikTok, menganalisis retensi penonton dari detik ke detik, dan mengubah rasa "salting" menjadi strategi konversi yang terukur untuk brand.
                            </p>
                        </div>

                        {/* Stat Grid (Tampilan Data) */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-10 border-t border-white/10 mt-4">
                            <div>
                                <h4 className="text-5xl font-black text-white mb-2">4M<span className="text-pink-500">+</span></h4>
                                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Followers</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-white mb-2">Gen-Z</h4>
                                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Core Demographics</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-white mb-2">15<span className="text-pink-500">%</span></h4>
                                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Avg. Engagement</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-white mb-2">POV</h4>
                                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Creative Strategy</p>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}