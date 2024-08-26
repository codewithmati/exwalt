/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        hd: { min: "320px", max: "1020px" },
        xs: { min: "475px", max: "1024px" },
        dmf: { min: "320px", max: "1024px" },
        ball: { min: "300px", max: "475px" },
      },
      fontFamily: {
        body: ["fontBody", "sans-serif"],
        title: ["fontTitle", "sans-serif"],
      },
      fontWeight: {
        regularNM: "400",
        mediumNMGT: "500",
        boldNM: "700",
      },
      fontSize: {
        "custom-size": "10px", // Define your custom size here
      },
      spacing: {
        "word-spacing": "0.50em", // Example value for word spacing
      },
      // Add custom word spacing utility
      letterSpacing: {
        wider: "0.1em", // Custom letter spacing example
      },
    },
  },
  plugins: [],
};
