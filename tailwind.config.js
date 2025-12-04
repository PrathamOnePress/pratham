/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  Company: Prathamone
  Email: jawahar.mallah@gmail.com
  File: tailwind.config.js
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#7c3aed',
        accent: '#e0e7ff',
      },
    },
  },
  plugins: [],
}
