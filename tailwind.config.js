/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Josefin-sans": ["Josefin Sans", "sans-serif"],
    },
    colors: {
      "primary-bright-blue": "hsl(220, 98%, 61%)",
      "primary-check-background":
        "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
      "light-neutral-very-light-gray": "hsl(0, 0%, 98%)",
      "light-neutral-very-light-grayish-blue": "hsl(236, 33%, 92%)",
      "light-neutral-light-grayish-blue": "hsl(233, 11%, 84%)",
      "light-neutral-dark-grayish-blue": "hsl(236, 9%, 61%)",
      "light-neutral-very-dark-grayish-blue": "hsl(235, 19%, 35%)",
      "dark-neutral-very-dark-blue": "hsl(235, 21%, 11%)",
      "dark-neutral-very-dark-desat-blue": "hsl(235, 24%, 19%)",
      "dark-neutral-light-grayish-blue": "hsl(234, 39%, 85%)",
      "dark-neutral-light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      "dark-neutral-dark-grayish-blue": "hsl(234, 11%, 52%)",
      "dark-neutral-very-dark-grayish-blue-1": "hsl(233, 14%, 35%)",
      "dark-neutral-very-dark-grayish-blue-2": "hsl(237, 14%, 26%)",
    },
    extend: {},
  },
  plugins: [],
};
