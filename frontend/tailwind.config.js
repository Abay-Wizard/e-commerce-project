/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.6)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(239, 68, 68, 0.4)" },
        },
      },
      animation: {
        "bounce-slow":
          "bounce-slow 2s infinite ease-in-out, pulseGlow 2s infinite",
      },
    },
  },
  plugins: [],
};
