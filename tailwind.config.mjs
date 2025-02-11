/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        birth: ["Birth", "sans-serif"],
        decaydence: ["Decaydence", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/images/banner.jpg')", // Correct placement for background images
      },
    },
  },
  plugins: [],
};
