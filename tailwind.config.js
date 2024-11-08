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
        primary: {
          light: '#E0E7FF',
          DEFAULT: '#818CF8',
          dark: '#4F46E5',
        },
        secondary: {
          light: '#F5F3FF',
          DEFAULT: '#A78BFA',
          dark: '#7C3AED',
        },
        background: {
          default: '#F8FAFC',
          paper: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
  },
  plugins: [],
} 