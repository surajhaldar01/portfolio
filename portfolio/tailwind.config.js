/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      colors: {
        'neon-blue': '#00f0ff',
        'neon-purple': '#b24bff',
        'neon-cyan': '#00ffcc',
        'dark-bg': '#030712',
        'dark-card': '#0d1117',
        'dark-border': '#1e293b',
        'glow-blue': 'rgba(0, 240, 255, 0.15)',
        'glow-purple': 'rgba(178, 75, 255, 0.15)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.25)',
        'neon-purple': '0 0 20px rgba(178,75,255,0.5), 0 0 40px rgba(178,75,255,0.25)',
        'neon-cyan': '0 0 20px rgba(0,255,204,0.5), 0 0 40px rgba(0,255,204,0.25)',
        'card-glow': '0 0 30px rgba(0,240,255,0.1), 0 4px 40px rgba(0,0,0,0.4)',
        'ring-glow': '0 0 0 3px rgba(0,240,255,0.4), 0 0 40px rgba(0,240,255,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'float-delay2': 'float 6s ease-in-out infinite 4s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
