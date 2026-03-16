/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#d8ccff',
          300: '#baa6ff',
          400: '#9775fa',
          500: '#7c4dff',
          600: '#6c35f5',
          700: '#5c23e0',
          800: '#4a1bba',
          900: '#3a1690',
          950: '#220d5e',
        },
        zinc: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft':    '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'soft-xl': '0 20px 60px -15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
