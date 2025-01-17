/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "serif"], // Usa la fuente personalizada
      },
      boxShadow: {
        '3xl': '8px 4px 10px 2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

