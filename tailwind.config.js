import scrollbar from "tailwind-scrollbar";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,vue,ts}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), animate],
};
