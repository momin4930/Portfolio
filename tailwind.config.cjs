/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#ECDFCC",
        bg_light_primary: "#3C3D37",
        gray: "#B7C5D3",
        bg_color:"#181C14",
        oneMore:"#b7c5d3"
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #3C3D37 0.48%, #181C14 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
