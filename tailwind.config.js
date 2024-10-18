/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customGreen: "rgb(0, 80, 60)",
        customBrown: "#c59a6f",
        primary: {
          DEFAULT: "#1030ff",
          light: "#506eff",
          dark: "#0b23b3",
        },
        secondary: {
          DEFAULT: "#272727",
          light: "#3d3d3d",
          dark: "#1b1b1b",
        },
      },
      width: {
        inherit: "inherit",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "576px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen xxl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
