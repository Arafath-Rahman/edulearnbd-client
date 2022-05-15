module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "forest"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
