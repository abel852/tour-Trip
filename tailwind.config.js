/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53B0AD", // Mint Blue
        secondary: "#1F2937",
        mint: {
          50: "#F4FBFB",
          100: "#DFF0F0",
          200: "#BCE0DF",
          300: "#99D0CE",
          400: "#76C0BE",
          500: "#53B0AD",
          600: "#3E8B89",
          700: "#296665",
          800: "#144241",
          900: "#0A2120",
        },
        accent: "#FBBF24",
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(83, 176, 173, 0.3)',
        'mint': '0 4px 14px 0 rgba(83, 176, 173, 0.5)',
      }
    },
  },
  plugins: [],
}
