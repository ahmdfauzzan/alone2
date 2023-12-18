/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      screens: {
        mobile: "425px",
        desktop: "1024px",
        desktopfull: "1400px",
      },
      colors: {
        primary: "#6148FF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
