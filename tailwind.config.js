import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "*.html"],
  theme: {
    extend: {
      width: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
