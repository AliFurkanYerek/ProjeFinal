/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#1A1F2E",
        secondary: "#E2E8F0",
        tertiary: "#141821",
        accent: {
          primary: "#64FFDA",
          secondary: "#7F9CF5",
        },
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.7)",
          hover: "rgba(30, 41, 59, 0.9)",
        },
        "black-100": "#1E293B",
        "black-200": "#0F172A",
        "white-100": "#F8FAFC",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1E293B",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
} 