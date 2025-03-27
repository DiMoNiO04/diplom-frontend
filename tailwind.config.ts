import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ff642f',
        blue: '#3e14bc',
        black: '#2d2b39',
        grey: '#7b7b7b',
        greyLight: '#706e7c',
        whiteDark: '#f9f9f9',
        white: '#ffffff',
        whiteLight: '#ffffff90',
        red: '#f85a81',
        pink: '#ffd7c9',
      },
      boxShadow: {
        customLight: '0px 1px 23.8px 0px #C2C2D047',
        customShadow: '0px 4px 53.7px 0px #DFDFEC61',
        customSlide: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 38.05%, rgba(0, 0, 0, 0.5) 100%)',
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        onest: ['var(--font-onest)', 'sans-serif'],
      },
      animation: {
        spin: 'spin 3s linear infinite',
        fadeIn: 'fadeIn 0.2s ease-out forwards',
        fadeOut: 'fadeOut 0.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '100%': { opacity: '1' },
          '0%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
