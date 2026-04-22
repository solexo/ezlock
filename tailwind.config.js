/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium dark blue/black palette
        'dark-bg': '#020617',
        'dark-secondary': '#0F172A',
        'dark-tertiary': '#1E293B',
        // Electric red accent
        'blue-accent': '#EF4444',
        'blue-hover': '#DC2626',
        'blue-dark': '#B91C1C',
        // Glow colors
        'glow-red': 'rgba(239,68,68,0.4)',
        'glow-red-dim': 'rgba(239,68,68,0.15)',
        // Text colors
        'text-primary': '#000000',
        'text-secondary': '#666666',
        'text-tertiary': '#888888',
        // Dark theme variants
        'text-primary-dark': '#FFFFFF',
        'text-secondary-dark': '#CCCCCC',
        'text-tertiary-dark': '#AAAAAA',
      },
      backgroundColor: {
        'glass': 'rgba(15, 23, 42, 0.5)',
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(239,68,68,0.3)',
        'glow-red-lg': '0 0 40px rgba(239,68,68,0.4)',
        'glow-red-xl': '0 0 60px rgba(239,68,68,0.5)',
        'depth-sm': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'depth-md': '0 8px 24px rgba(0, 0, 0, 0.4)',
        'depth-lg': '0 12px 36px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1s',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59,130,246,0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(59,130,246,0.6)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to right, #020617, #0F172A)',
        'gradient-glow': 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, rgba(2,6,23,0) 70%)',
        'gradient-red-accent': 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      },
    },
  },
  plugins: [],
};
