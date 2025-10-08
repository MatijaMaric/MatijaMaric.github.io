/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1e40af',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#1e40af',
          light: '#60a5fa',
        },
        neon: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          purple: '#9d00ff',
          green: '#39ff14',
          pink: '#ff10f0',
          blue: '#00d4ff',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
