import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3200F0',
        'primary-dark': '#2300a8',
        'primary-light': 'rgba(50, 0, 240, 0.04)',
        black: '#000000',
        white: '#ffffff',
        'gray-light': '#e6ebf0',
        gray: '#808080',
        'gray-dark': '#333333',
      },
      fontFamily: {
        stolzl: ['Stolzl', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
      },
      boxShadow: {
        'sm': '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'md': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'lg': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      },
      spacing: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.4rem',
        '5xl': '3.2rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      lineHeight: {
        tight: '120%',
        normal: '1.5',
        relaxed: '1.75',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in',
        'slide-up': 'slideUp 0.4s ease-in',
        'scale-in': 'scaleIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
