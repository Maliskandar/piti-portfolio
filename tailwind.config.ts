// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A", // Warna latar belakang utama (Sleek Dark)
        foreground: "#FAFAFA", // Warna teks utama (Off-white)
        accent: "#FF007F",     // Warna aksen (Electric Neon Pink)
        surface: "#171717",    // Warna kartu/elemen di atas background
      },
      fontFamily: {
        // Kita akan set variable ini di layout.tsx nanti
        sans: ["var(--font-inter)", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
export default config;