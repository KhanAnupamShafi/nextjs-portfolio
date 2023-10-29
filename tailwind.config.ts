import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        mono: ['var(--font-alegreya-sans)'],
      },
      colors: {
        theme: {
          light: 'var(--site-theme-light)',
          dark: 'var(--site-theme-dark)',
          // and so on...
        },
        blue: '#232946',
        pink: '#EEBBC3',
        violet: '#B8C1EC',
        white: '#FFFFFE',
      },
      animation: {
        changewidth: 'width 2s ease-in-out infinite',
        spin: 'spin 8s linear infinite',
        absoluteright: 'absoluteright 4s ease-in infinite',
        translateright: 'translateright 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'light-xl': '0 15px 30px -15px rgba(256, 256, 256, 0.3)',
        'light-2xl': '-1px 6px 13px 0px rgba(0,0,0,0.44)',
        'light-3xl':
          '0 25px 60px rgba(255,255,255, 0.1), 0 19px 30px rgba(255,255,255, 0.1)',
        'light-4xl':
          '0 45px 100px rgba(220,220,220, 0.3), 0 16px 40px rgba(220,220,252205, 0.3)',
        'violet-5xl': '0px 6px 58px -8px rgba(184,193,236,0.36)',
      },
      keyframes: {
        width: {
          '0%, 100%': { width: '20px' },
          '50%': { width: '40%' },
        },
        absoluteright: {
          '0%,100%': {
            right: '0px',
          },
          '50%': {
            right: '-30px',
          },
        },
        translateright: {
          '0%,100%': {
            'margin-left': '0px',
          },
          '50%': {
            'margin-left': '20px',
          },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
};
export default config;
