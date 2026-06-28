/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./*.html",
    "./**/*.{html,js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        secondary: {
          500: "#9333ea",
        },
        success: "#16a34a",
        danger: "#dc2626",
      },

      fontFamily: {
        sans: ["Inter", "system-ui"],
        heading: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      spacing: {
        18: "4.5rem",
        72: "18rem",
        112: "28rem",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};