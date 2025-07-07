/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // any custom components
  ],
  theme: {
    extend: {
      colors:  {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'gray' : '4px 4px 0 #ccc',
        'white' : '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
}

