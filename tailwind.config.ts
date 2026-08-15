import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF3E8",
          soft: "#FDF8F1",
          deep: "#F5E7D5",
        },
        ink: {
          DEFAULT: "#1A1A2E",
          soft: "#3A3950",
        },
        brand: {
          50: "#FFF4EA",
          100: "#FFE3C7",
          200: "#FFCB99",
          300: "#FFAD68",
          400: "#FB9142",
          500: "#F4763C",
          600: "#E1602A",
          700: "#BC4A20",
          800: "#8F391C",
          900: "#5F2A16",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.4rem",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(26, 26, 46, 0.18)",
        nav: "0 4px 24px -8px rgba(244, 118, 60, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
