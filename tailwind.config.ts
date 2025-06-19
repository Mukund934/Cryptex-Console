
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0D0D0D",
        foreground: "#FAFAF8",
        primary: {
          DEFAULT: "#8989DE",
          foreground: "#FAFAF8",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FAFAF8",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#FAFAF8",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#FAFAF8",
        },
        muted: {
          DEFAULT: "#605F5B",
          foreground: "#E6E4DD",
        },
        accent: {
          DEFAULT: "#8989DE",
          foreground: "#FAFAF8",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 20px rgba(137, 137, 222, 0.3)"
          },
          "50%": { 
            opacity: "0.8",
            boxShadow: "0 0 40px rgba(137, 137, 222, 0.5)"
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
