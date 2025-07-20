/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}