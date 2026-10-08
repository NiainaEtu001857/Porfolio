/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        canvas: '#f8faff',
        surface: '#ffffff',
        ink: '#0f1f3d',
        text: '#1e3a5f',
        muted: '#5b7396',
        line: '#dbeafe',
        accent: '#2563eb',
        azur: '#0ea5e9',
        ambre: '#f59e0b',
        navy: '#0f1f3d',
      },
      maxWidth: { site: '1060px' },
    },
  },
  plugins: [],
};
