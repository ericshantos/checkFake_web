module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fake-red': '#ef4444',
        'real-green': '#10b981',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}