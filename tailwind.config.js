/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        'blue-900':'#242c63',
        'purple-400':'#6415F8',
        'white':'#fff',
        'black':'#000',
        'black-200':'#494949',
        'gray-300':'#718096',
        'blue-600':'#2563eb',
        'green-600':'#16a34a',
        'gray-200':'#edf2f7',
        'gray-600':'#718096',
        'gray-100':'#f7fafc',
        'blue-700':'#506582',
        'black-300':'#1a202c',
        'primary':'#FD6F00',
        'gray':'#a0aec0',
        'slate':'#02020263',
        'slate-200':'#ced4da',
      }
    },
  },
  plugins: [],
}

