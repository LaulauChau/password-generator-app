/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'dark-grey': '#24232C',
      grey: '#817D92',
      'almost-white': '#e6e5ea',
      'very-dark-grey': '#18171f',
      'neon-green': '#a4ffaf',
      red: '#f64a4a',
      orange: '#fb7c58',
      yellow: '#f8cd65',
    },
    screens: {
      sm: '375px',
      md: '768px',
    },
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
};
