/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Warm / organic palette. Tones are tuned for WCAG AA contrast on `cream`.
        cream: {
          DEFAULT: "#FAF6EF", // page background
          100: "#FFFDF9",
          200: "#F3ECE0", // surfaces / cards
          300: "#E7DFD3", // hover surface
        },
        ink: {
          DEFAULT: "#2B2622", // body + headings (~13:1 on cream)
          soft: "#5B5446", // secondary text (~6:1 on cream)
        },
        // Use the dark tones (600/700) for text/links on cream; DEFAULT for fills.
        terracotta: {
          DEFAULT: "#C8654B",
          600: "#B5482E", // CTA fill (white text ≈ AA)
          700: "#9E3B22", // accent text/links on cream (≈ AA)
        },
        olive: {
          DEFAULT: "#6B7256",
          700: "#4F5640", // accent text on cream (≈ AA)
        },
        line: "#E7DFD3", // soft borders / dividers
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(43, 38, 34, 0.35)",
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
