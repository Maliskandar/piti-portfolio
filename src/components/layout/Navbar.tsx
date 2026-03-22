// src/components/layout/Navbar.tsx
"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Menggunakan hook framer-motion untuk mendeteksi scroll lebih smooth
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        // Wrapper luar yang fixed. Pointer-events-none agar bagian kosong tidak menutupi klik di bawahnya
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 md:px-6 pointer-events-none">

            <motion.nav
                layout // Ini kunci ajaib Framer Motion untuk transisi bentuk/ukuran yang mulus
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                // Pointer-events-auto mengembalikan fungsi klik khusus untuk area navbar ini
                className={`pointer-events-auto flex items-center justify-between overflow-hidden transition-all duration-500 ${scrolled
                        ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-full px-6 py-3 w-[95%] md:w-max gap-8 md:gap-12"
                        : "bg-transparent border-transparent w-full max-w-7xl px-2 py-2 rounded-none gap-4"
                    }`}
            >
                {/* --- LOGO --- */}
                <Link href="/" className="relative z-10 flex items-center group">
                    <motion.span
                        layout="position"
                        className={`font-black tracking-tighter uppercase text-white transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl md:text-3xl"
                            }`}
                    >
                        PITI<span className="text-pink-500">.</span>
                    </motion.span>
                </Link>

                {/* --- LINKS (Desktop & Tablet) --- */}
                <motion.div
                    layout="position"
                    className="hidden md:flex items-center gap-8"
                >
                    {["Work", "Expertise", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-xs font-bold text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] group"
                        >
                            {item}
                            {/* Garis bawah tipis gaya arsitektural/editorial */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-500 transition-all duration-300 ease-out group-hover:w-full" />
                        </Link>
                    ))}
                </motion.div>

                {/* --- CTA BUTTON --- */}
                <motion.div layout="position">
                    <Link
                        href="#contact"
                        className={`relative flex items-center justify-center rounded-full overflow-hidden group bg-white text-black font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 ${scrolled ? "px-5 py-2 text-[10px]" : "px-6 py-3 text-xs"
                            }`}
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            Let's Talk
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                    </Link>
                </motion.div>

            </motion.nav>

        </div>
    );
}