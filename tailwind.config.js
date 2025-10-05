/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'neon-magenta': '#ff0080',
      },
      fontFamily: {
        'space': ['var(--font-space-grotesk)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00ffff, 0 0 40px #00ffff',
        'neon-magenta': '0 0 10px #ff0080, 0 0 40px #ff0080',
      },
    },
  },
  plugins: [],
};
