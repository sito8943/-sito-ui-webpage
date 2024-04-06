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

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "400px" },
      // => @media (max-width: 383px) { ... }
    },
    extend: {
      colors: {
        bg: "#1B1B1B",
        yellow: "#D7942E",
        green: "#00997B",
      },
    },
  },
  plugins: [],
};
