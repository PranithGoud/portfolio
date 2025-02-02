/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'aot',  // Disables JIT Mode
    content: [
      "./projects/shell/src/*.{html,ts, css}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  