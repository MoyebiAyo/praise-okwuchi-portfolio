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
        'cream': '#FAF7F2',
        'terracotta': '#B85C3A',
        'terracotta-light': '#C97050',
        'warm-beige': '#EDE0D4',
        'warm-brown': '#7A6355',
        'dark-brown': '#1C1512',
        'medium-brown': '#3A2E28',
        'light-taupe': '#D4B9A8',
        'soft-taupe': '#A89080',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
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
