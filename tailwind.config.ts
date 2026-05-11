import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Light elegant palette
        void: "#ffffff",      // Pure white base
        abyss: "#f8f9fa",     // Off-white / light gray section bg
        carbon: "#f1f3f5",    // Light cards / subtle elements
        smoke: "#e9ecef",     // Borders / dividers
        ash: "#dee2e6",       // Stronger borders
        steel: "#6c757d",     // Muted text
        chalk: "#495057",     // Body text
        snow: "#111111",      // Deep charcoal/black for primary text
        
        // Refined vibrant accents for elegant light UI
        neon: "#2563eb",      // Cobalt Blue
        "neon-dim": "#1d4ed8",
        electric: "#7c3aed",  // Deep Violet
        flame: "#ea580c",     // Rich Orange
        ice: "#0ea5e9",       // Sky Blue
        rose: "#e11d48",      // Elegant Rose
        gold: "#d97706",      // Refined Gold
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-fast": "floatFast 4s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spinReverse 30s linear infinite",
        "pulse-elegant": "pulseElegant 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        grain: "grain 8s steps(10) infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseElegant: {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.2)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
