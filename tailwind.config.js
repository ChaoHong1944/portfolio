/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // any custom components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

