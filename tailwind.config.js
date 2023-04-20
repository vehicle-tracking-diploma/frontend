/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#111827',
        'my-blue-hover': '#374151',
      },
    },
  },
  plugins: [],
}

