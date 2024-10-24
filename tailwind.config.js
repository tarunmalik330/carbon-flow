/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#061E10",
        "light-green": "#44B902",
        "white-100": "#FFFFFF08",
      },
      fontSize: {
        "custom-xs": "10px",
        "custom-sm": "70px",
      },
      lineHeight: {
        126: "126%",
        160: "160%",
      },
    },
  },
  plugins: [],
};
