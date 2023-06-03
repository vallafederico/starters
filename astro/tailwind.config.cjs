/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // spacing: {
    //   sm: "8px",
    //   md: "12px",
    //   lg: "16px",
    //   xl: "24px",
    // },
    fontFamily: {
      sohne: ["Sohne-web", "sans-serif"],
    },
    fontSize: {
      sm: ["0.8rem", "1.2em"],
      base: ["14px", "1.2em"],
      md: ["1.25rem", "1.2em"],
      lg: ["1.5rem", "1.2em"],
      xl: ["2rem", "1.2em"],
      "2xl": ["1.563rem", "1.2em"],
      "3xl": ["1.953rem", "1.2em"],
      "4xl": ["2.441rem", "1.2em"],
      "5xl": ["3.052rem", "1.2em"],
    },
    extend: {
      spacing: {
        gx: "5vw",
        gy: "2rem",
        // ...col12,
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

// const col12 = {
//   "1/12": "8.333333%",
//   "2/12": "16.666667%",
//   "3/12": "25%",
//   "4/12": "33.333333%",
//   "5/12": "41.666667%",
//   "6/12": "50%",
//   "7/12": "58.333333%",
//   "8/12": "66.666667%",
//   "9/12": "75%",
//   "10/12": "83.333333%",
//   "11/12": "91.666667%",
//   "12/12": "100%",
// };
