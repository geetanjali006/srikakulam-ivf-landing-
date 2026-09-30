/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medcy: {
          primary: "#652D6C",
          dark: "#4D1F53",
          accent: "#9A389F",
          bg: "#FAF6FA",
          text: "#2A102D",
          muted: "#56335B",
          light: "#7E3282",
          border: "rgba(101, 45, 108, 0.2)"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        telugu: ['Gautami', 'Noto Sans Telugu', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(101, 45, 108, 0.12)',
        'glass-hover': '0 14px 40px 0 rgba(101, 45, 108, 0.22)',
        'starburst': '0 0 25px rgba(154, 56, 159, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'starburst': 'starburst 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        starburst: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
