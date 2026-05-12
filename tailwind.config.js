/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050505",
        coal: "#111111",
        graphite: "#2B2B2B",
        mist: "#F4F4F1",
        porcelain: "#FBFBF8",
        line: "#E6E2D9",
        brass: "#B89A5E",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.12)",
        lift: "0 18px 50px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
