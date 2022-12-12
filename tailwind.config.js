/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorsColor: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#27273F",
          "base-100": "#FFFFFF",
        }
      },
    ]
  },
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
