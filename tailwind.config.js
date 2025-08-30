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
        'tipaix-primary': '#6E5597',
        'tipaix-light': '#8B7AB8',
        'tipaix-dark': '#4A3A6A',
        'purple-400': '#A78BFA',
        'purple-300': '#C4B5FD',
        'purple-200': '#DDD6FE',
        'purple-100': '#EDE9FE',
        'purple-50': '#F5F3FF',
        'mauve-400': '#9F7AEA',
        'mauve-300': '#B794F6',
        'mauve-200': '#D6BCFA',
        'mauve-100': '#E9D8FD',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'gagalin': ['Gagalin', 'serif'],
      },
      textShadow: {
        'sm': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'dramatic': '0 20px 50px rgba(110, 85, 151, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}