/** @type {import('tailwindcss').Config} */

const plugin = require('tailwind-scrollbar');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "scrollbar",
    "scrollbar-thin",
    "scrollbar-thumb-green-500",
    "scrollbar-track-black",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      colors: {
        'bash-bg': '#1d1f21',
        'bash-green': '#b5bd68',
        'bash-blue': '#81a2be',
        'bash-yellow': '#f0c674',
        'bash-white': '#c5c8c6',
        'bash-gray': '#373b41',
        'bash-red': '#cc6666',
        'bash-cyan': '#8abeb7',
        'bash-magenta': '#b294bb',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}