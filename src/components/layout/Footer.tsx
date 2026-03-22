// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo Minimalis */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black tracking-tighter text-white"
                >
                    PITI<span className="text-pink-500">.</span>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-6 md:gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/50"
                >
                    <Link href="https://tiktok.com/@pitijustpretty" target="_blank" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        TikTok
                    </Link>
                    <Link href="https://www.instagram.com/firsty.sl" target="_blank" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        Instagram
                    </Link>
                    <Link href="#" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                        YouTube
                    </Link>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase text-center md:text-right"
                >
                    <p>© {new Date().getFullYear()} Piti Studio. All Rights Reserved.</p>
                </motion.div>

            </div>
        </footer>
    );
}