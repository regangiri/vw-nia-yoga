import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4B6272',
        secondary: '#D2E4E8',
        accent: '#A59482',
        palewhite: '#F6F6F6',
        choco: '#7C8996',
        button: '#fff',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        baskervville: ['var(--font-baskervville)'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
