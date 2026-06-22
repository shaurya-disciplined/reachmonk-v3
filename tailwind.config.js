/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D12',
        accent: '#C9A84C',
        ivory: '#FAF8F5',
        slate: '#2A2A35',
        background: '#0D0D12',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        data: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
