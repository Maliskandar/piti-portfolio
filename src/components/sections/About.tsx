// src/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-black text-white relative border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* --- BAGIAN TEKS (Kiri) --- */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-pink-500 text-sm font-bold tracking-[0.2em] mb-6 uppercase"
                    >
                        Behind The Screen
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.1]"
                    >
                        Turning relatable moments into <span className="italic text-white/70">cultural shifts.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-white/60 text-base md:text-lg font-light leading-relaxed"
                    >
                        <p>
                            Berawal dari konten POV, *skit* komedi ringan, dan drama percintaan remaja yang *relatable*, saya membangun komunitas lebih dari 4 juta pendengar setia. Saya tahu persis apa yang membuat audiens berhenti men-*scroll*, ikut *salting*, dan berinteraksi di kolom komentar.
                        </p>
                        <p>
                            Namun, *engagement* saja tidak cukup. Saya membawa pemahaman mendalam tentang algoritma dan psikologi Gen-Z ini ke ranah *advertising*. Fokus saya saat ini adalah membantu *brand* bercerita dengan bahasa yang dipahami audiens—mengubah sekadar *views* menjadi *loyalty*, dan *likes* menjadi *conversion*.
                        </p>
                    </motion.div>

                    {/* Metrik Cepat */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-white/10 py-8"
                    >
                        <div>
                            <h4 className="text-3xl font-black text-white">4M+</h4>
                            <p className="text-xs tracking-widest text-pink-500 uppercase mt-2">Followers</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black text-white">Gen-Z</h4>
                            <p className="text-xs tracking-widest text-pink-500 uppercase mt-2">Core Audience</p>
                        </div>
                        <div className="hidden md:block">
                            <h4 className="text-3xl font-black text-white">POV</h4>
                            <p className="text-xs tracking-widest text-pink-500 uppercase mt-2">Specialty</p>
                        </div>
                    </motion.div>
                </div>

                {/* --- BAGIAN FOTO (Kanan) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-5 relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    {/* Ganti src dengan foto portrait Piti yang paling bagus/editorial */}
                    <Image
                        src="/img/Piti.jpeg"
                        alt="Piti Portrait"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>

            </div>
        </section>
    );
}