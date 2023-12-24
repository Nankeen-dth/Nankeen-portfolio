/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["ibm"],
        ibmBold: ["ibmBold"],
      },
      colors: {
        "Raisin-Black": "#2D2E36",
        "Harvest-Gold": "#c88928",
        "Gun-Metal": "#2a2e38",
        Charcoal: "#3C4350",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
