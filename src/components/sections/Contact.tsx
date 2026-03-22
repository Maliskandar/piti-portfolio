// src/components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, Send, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser'; // Import EmailJS

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const waNumber = "6281242296712";
    const waMessage = encodeURIComponent("Halo Kak Eja, saya tertarik untuk mendiskusikan peluang kerja sama / endorse dengan Piti. Boleh minta ratecard terbarunya?");
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // GANTI STRING DI BAWAH DENGAN KODE DARI DASHBOARD EMAILJS KAMU
            const serviceId = "YOUR_SERVICE_ID";
            const templateId = "YOUR_TEMPLATE_ID";
            const publicKey = "YOUR_PUBLIC_KEY";

            // Parameter template harus sesuai dengan {{variabel}} yang ada di template EmailJS
            const templateParams = {
                name: formData.name,
                brand: formData.brand,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus("success");
            setFormData({ name: "", brand: "", email: "", message: "" });

            // Kembalikan status tombol setelah 3 detik
            setTimeout(() => setSubmitStatus("idle"), 3000);

        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-black border-t border-white/10 relative overflow-hidden">

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

                {/* --- KOLOM KIRI: Info & WhatsApp --- */}
                <div className="flex flex-col justify-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-pink-500 text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                    >
                        Business Inquiries
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
                    >
                        Let's create the <br />
                        <span className="text-pink-500 italic font-serif font-light">next big thing.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-base md:text-lg mb-12 max-w-md font-light leading-relaxed"
                    >
                        Punya ide kampanye yang out of the box? Atau butuh strategi konten yang relevan untuk audiens Gen-Z? Kirimkan brief Anda atau hubungi manajer kami langsung untuk fast response.
                    </motion.p>

                    {/* Tombol WhatsApp (Direct ke Manager Eja) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">
                            Direct Contact (Manager Eja)
                        </p>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-4 px-8 py-4 bg-white hover:bg-pink-500 text-black rounded-full font-bold text-sm md:text-base tracking-wide transition-all duration-300 transform hover:scale-105"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat via WhatsApp
                            <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                    </motion.div>
                </div>

                {/* --- KOLOM KANAN: Email Form --- */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-md relative"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white/50 text-xs font-semibold tracking-widest uppercase">Your Name</label>
                                <input
                                    type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                                    className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500 transition-colors rounded-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="brand" className="text-white/50 text-xs font-semibold tracking-widest uppercase">Brand / Agency</label>
                                <input
                                    type="text" id="brand" name="brand" required value={formData.brand} onChange={handleChange}
                                    className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500 transition-colors rounded-none"
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <label htmlFor="email" className="text-white/50 text-xs font-semibold tracking-widest uppercase">Email Address</label>
                            <input
                                type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500 transition-colors rounded-none"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <label htmlFor="message" className="text-white/50 text-xs font-semibold tracking-widest uppercase">Project Details</label>
                            <textarea
                                id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
                                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500 transition-colors rounded-none resize-none"
                                placeholder="Tell us about your campaign goals, timeline, and budget..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitStatus === "success"}
                            className={`mt-6 flex items-center justify-between w-full py-4 px-6 border rounded-full text-white transition-all duration-300 group
                                ${submitStatus === "success" ? "border-green-500 bg-green-500/10 text-green-500" :
                                    submitStatus === "error" ? "border-red-500 bg-red-500/10 text-red-500" :
                                        "border-white/20 hover:bg-white hover:text-black"}
                            `}
                        >
                            <span className="font-bold tracking-widest uppercase text-sm">
                                {isSubmitting ? "Sending..." :
                                    submitStatus === "success" ? "Proposal Sent!" :
                                        submitStatus === "error" ? "Error, Try Again" :
                                            "Send Proposal"}
                            </span>
                            {!isSubmitting && submitStatus !== "success" && (
                                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}