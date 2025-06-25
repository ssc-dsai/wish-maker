/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          foreground: '#ffffff',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#1f2937',
        card: '#ffffff',
        'card-foreground': '#1f2937',
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#3b82f6',
        secondary: '#f3f4f6',
        'secondary-foreground': '#1f2937',
        muted: '#f9fafb',
        'muted-foreground': '#6b7280',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
} 