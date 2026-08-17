/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141B2E",        // deep navy, primary text/bg
        paper: "#F6F5F1",      // warm off-white background
        signal: "#E0A63A",     // amber accent — "offer" gold
        signalDark: "#B9822A",
        line: "#DEDBD2",       // hairline borders
        danger: "#B5432B",     // overdue/urgent
        ok: "#3E7A5B",         // applied/done
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
