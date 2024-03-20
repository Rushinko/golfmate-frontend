/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backdropDark: '#17181A',
        panel: '#202123',
        panelAccent: '#303133',
      },
      spacing: {
        '38': '9.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
