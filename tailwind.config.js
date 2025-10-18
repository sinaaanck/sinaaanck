/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#0f172a",
        accent: "#f59e0b",
        background: "#f8fafc",
        textPrimary: "#0f172a",
        textSecondary: "#475569",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
    fontFamily: {
      inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      roboto: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
