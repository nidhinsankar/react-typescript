/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "Josefin-sans": ["Josefin Sans", "sans-serif"],
    },
    colors: {
      "primary-bright-blue": "hsl(220, 98%, 61%)",
      background: "hsl(var(--bg-full) / <alpha-value>)",
      "color-text": "hsl(var(--full-text) / <alpha-value>)",
      "text-footer": "hsl(var(--footer-text) / <alpha-value>)",
      "text-todo": "hsl(var(--todo-text) / <alpha-value>)",
      "text-clear": "hsl(var(--todo-line-through) / <alpha-value>)",
      "background-todo": "hsl(var(--todo-bg) / <alpha-value>)",
      "border-todo": "hsl(var(--todo-border) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
