// Tailwind config for the memory camera theme and layout.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f1e5',
        charcoal: '#2b2b2b',
        clay: '#c48c6a',
        parchment: '#f2e6d8'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(43,43,43,0.45)'
      }
    }
  },
  plugins: []
};

export default config;
