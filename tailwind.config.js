/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT:
          "2px 2px 3px 0 rgba(220, 38, 38,1), 30 3px 5px 0 rgba(220, 38, 38, 0.06)",
      },
    },
  },
  plugins: [],
};
