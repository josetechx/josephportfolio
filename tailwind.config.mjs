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
        montserrat: ["Montserrat", "sans-serif"], // Added Montserrat font
        'montserrat-semibold': ["Montserrat SemiBold", "sans-serif"], // Added Montserrat SemiBold font
        'montserrat-bold': ["Montserrat Bold", "sans-serif"], // Added Montserrat Bold font
      },
      backgroundImage: {
        hero: "url('/images/banner.jpg')", // Correct placement for background images
      },
      boxShadow: {
        'purple-glow': '4px 4px 15px rgba(107, 33, 168, 0.5)', // purple-800 with opacity
        'gray-soft': '4px 4px 15px rgba(107, 114, 128, 0.5)', // gray-500 with opacity
      },
      border: {
        'gray-soft': 'rgba(107, 114, 128, 0.5)', // gray-500 with opacity
        'purple-soft': 'rgba(107, 33, 168, 0.8)', 
      },
    },
  },
  plugins: [],
};
