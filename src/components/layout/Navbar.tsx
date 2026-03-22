// src/components/layout/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Efek untuk mendeteksi scroll agar background navbar sedikit menggelap saat di-scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                    PITI<span className="text-pink-500">.</span>
                </Link>

                {/* LINKS (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {["Work", "Expertise", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-widest"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA BUTTON */}
                <Link
                    href="#contact"
                    className="relative px-6 py-2.5 rounded-full overflow-hidden group bg-white text-black font-semibold text-sm tracking-wide transition-transform hover:scale-105"
                >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                    {/* Efek fill animasi saat di-hover */}
                    <div className="absolute inset-0 h-full w-full bg-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                </Link>

            </div>
        </motion.nav>
    );
}