export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        cream: "#FAF9F6",
        primary: "#1B222C",
        gold: "#9D744D",
        sand: "#D5A97D",
        slate: "#5E6C7A",
        text: "#1B222C",
        muted: "#5E6C7A",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(27,34,44,0.07)",
        navy: "0 20px 50px rgba(27,34,44,0.15)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
