import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        panel: 'var(--color-panel)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 16px 40px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
