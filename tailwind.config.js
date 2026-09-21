/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hero: '#0B0F19',
        'hero-foreground': '#F8FAFC',
        'hero-accent': '#6366F1',
        'hero-accent-foreground': '#FFFFFF',
        'hero-glow': '#818CF8',
        'hero-card': 'rgba(15, 23, 42, 0.65)',
        'hero-card-border': 'rgba(255, 255, 255, 0.12)',
        background: '#090D16',
        foreground: '#F1F5F9',
        card: '#0F172A',
        'card-foreground': '#F8FAFC',
        primary: {
          DEFAULT: '#6366F1',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1E293B',
          foreground: '#94A3B8',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1E293B',
          foreground: '#94A3B8',
        },
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out 2s infinite',
      },
    },
  },
  plugins: [],
}
