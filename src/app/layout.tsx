// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Setup font Inter dengan CSS Variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PITI. | Creative Director & Strategist",
  description: "Directing attention. Driving conversion. Portfolio of a premium creative strategist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Menggabungkan font variable dan base styling */}
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
