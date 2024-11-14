/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: { 
      screens:
      {
        'xs':{min:'440px',max:'639px'}
      }
    },
  },
  plugins: [],
}

