import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#1E1E1E',
        'surface-2': '#2A2A2A',
        primary: '#E01F1F',
        'primary-dark': '#B51818',
        text: '#F5F5F5',
        muted: '#8A8A8A',
        success: '#22C55E',
        border: '#3A3A3A',
        warning: '#F59E0B',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 6px #E01F1F, 0 0 12px #E01F1F' },
          '50%': { boxShadow: '0 0 18px #E01F1F, 0 0 32px #E01F1F' },
        },
      },
    },
  },
  plugins: [],
}

export default config
