/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      keyframes: {
        textUp: {
          "0%": { transform: "translateY(0px)" },
          "5%": { transform: "translateY(-10px)" },
          "15%": { transform: "translateY(0px)" },
          "60%": { transform: "translateY(0px)" },
          "80%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(0px)" },
        }
      },
      animation: {
        textUp: "textUp 3s infinite"
      }
    },
  },
  plugins: [],
}

