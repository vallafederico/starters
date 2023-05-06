/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    spacing: {
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },
    fontFamily: {
      sohne: ["Sohne-web", "sans-serif"],
    },
    extend: {
      spacing: {
        // gy1: "1.618rem",
        // gx1: "1.618rem",
        // '13': '3.25rem',
      },
      aspectRatio: {
        imgv: "5/7",
        imgh: "7/5",
      },
    },
    colors: {
      black: "#111",
      white: "#fff",
      gray: "#ccc",
      light: "#eee",
    },
  },
  plugins: [],
};
