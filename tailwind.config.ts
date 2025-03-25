import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ffb042',
        blue: '#3e14bc',
        black: '#2d2b39',
        grey: '#7b7b7b',
        greyLight: '#706e7c',
        whiteDark: '#f9f9f9',
        white: '#ffffff',
        red: '#f85a81',
      },
      boxShadow: {
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
