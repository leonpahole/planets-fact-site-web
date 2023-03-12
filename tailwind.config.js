const pxToRem = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#070724",
          400: "#38384F",
          100: "#838391",
        },
        teal: {
          100: "#419EBB",
        },
        orange: {
          100: "#EDA249",
        },
        purple: {
          100: "#6D2ED5",
        },
        orange: {
          100: "#CD5120",
          200: "#D14C32",
        },
        red: {
          100: "#D83A34",
        },
        green: {
          100: "#1EC1A2",
        },
        blue: {
          100: "#2D68F0",
        },
      },
    },
  },
  plugins: [],
};
