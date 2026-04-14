/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FAF7F2',
        'ivory-2': '#F3EDE3',
        'ivory-3': '#E9DFD0',
        'sand': '#D6C8B0',
        'sand-dark': '#B5A082',
        'warm-gray': '#8A7D6B',
        'ink': '#1C1510',
        'ink-soft': '#2E2418',
        'orange-50': '#FFF3E8',
        'orange-100': '#FFD9B3',
        'orange-200': '#FFBA7A',
        'orange-300': '#F59440',
        'orange-400': '#E07020',
        'orange-500': '#C4560E',
        'orange-600': '#9D3F06',
        'orange-700': '#712C02',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Jost', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 18s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
