// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-10 pb-10 px-6 md:px-12 relative z-20">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

                {/* --- KIRI: Logo Minimalis --- */}
                {/* flex-1 memastikan kolom ini mengambil 1/3 ruang. justify-start meratakan logo ke kiri mentok */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center md:justify-start w-full md:w-auto"
                >
                    <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
                        PITI<span className="text-pink-500">.</span>
                    </div>
                </motion.div>

                {/* --- TENGAH: Social Links --- */}
                {/* flex-1 dan justify-center memastikan menu ini berada 100% di tengah layar (Desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 flex justify-center gap-6 md:gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/50 w-full md:w-auto"
                >
                    <Link href="https://tiktok.com/@pitijustpretty" target="_blank" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        TikTok
                    </Link>
                    <Link href="https://www.instagram.com/firsty.sl " className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        Instagram
                    </Link>
                    <Link href="#" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        YouTube
                    </Link>
                </motion.div>

                {/* --- KANAN: Copyright --- */}
                {/* flex-1 dan justify-end meratakan teks copyright mentok ke kanan layar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end text-white/30 text-[9px] md:text-[10px] tracking-[0.2em] uppercase w-full md:w-auto text-center md:text-right"
                >
                    <p>© {new Date().getFullYear()} Piti Studio. All Rights Reserved.</p>
                </motion.div>

            </div>
        </footer>
    );
}