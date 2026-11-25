/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'hsl(var(--paper) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
        sun: '#F59E0B',
        signal: '#EB4726',
        pool: '#7CE2E2',
        forest: '#285844',
        slate: '#59738f',
        jet: '#111111',
      },
      fontFamily: {
        display: ['Archivo', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
