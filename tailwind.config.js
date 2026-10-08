/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B1120',
          surface: '#0F172A',
          card: '#131D33',
          cardHover: '#182440',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
        },
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#818CF8',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
          light: '#A78BFA',
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          light: '#38BDF8',
        },
        muted: '#94A3B8',
        glass: 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(79, 70, 229, 0.4)',
        'glow-accent': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-secondary': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
