/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1537px" },
      // => @media (min-width: 1535px) { ... }

      xl: { max: "1536px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1200px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 767px) { ... }

      msm: { min: "600px" },
      // => @media (min-width: 640px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "400px" },
      // => @media (max-width: 383px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        only: "1fr",
      },
      colors: {
        bg: "#1B1B1B",
        primary: "#CD212A",
        secondary: "#041E42",
        white: "#FBFBFB",
        yellow: "#D7942E",
        green: "#00997B",
      },
    },
  },
  plugins: [],
};
