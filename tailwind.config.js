/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Raleway", "static"],
    },
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#e00034",
        lightText: "#959595",
        greyColor: "rgb(121,103,107)",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
