/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
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

