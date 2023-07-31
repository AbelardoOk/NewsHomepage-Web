/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(35, 77%, 62%)",
          red: "hsl(5, 85%, 63%)",
        },

        neutral: {
          white: "hsl(36, 100%, 99%)",
          darkBlue: "hsl(236, 13%, 42%)",
          blue: "hsl(233, 8%, 79%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },

      fontFamily: {
        sans: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
