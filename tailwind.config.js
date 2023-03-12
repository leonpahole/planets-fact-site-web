const { fontFamily } = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  return `${px / 16}rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-antonio)", ...fontFamily.sans],
        alt: ["var(--font-league-spartan)", ...fontFamily.sans],
      },
      fontSize: {
        logo: [
          pxToRem(28),
          { lineHeight: pxToRem(36), letterSpacing: pxToRem(-1.05) },
        ],
        nav: [
          pxToRem(15),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(1.36),
            fontWeight: 700,
          },
        ],
        h1: [pxToRem(80), pxToRem(104)],
        h2: [
          pxToRem(40),
          { lineHeight: pxToRem(52), letterSpacing: pxToRem(-1.5) },
        ],
        h3: [
          pxToRem(12),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(2.57),
            fontWeight: 700,
          },
        ],
        h4: [
          pxToRem(11),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(1),
            fontWeight: 700,
          },
        ],
        body: [pxToRem(14), pxToRem(25)],
      },
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
      height: {
        4.25: pxToRem(17),
      },
      maxWidth: {
        275: pxToRem(1110),
      },
      padding: {
        5.5: pxToRem(22),
        6.75: pxToRem(27),
      },
      gap: {
        8.25: pxToRem(33),
        9.75: pxToRem(39),
      },
      backgroundImage: {
        stars: "url('/images/background-stars.svg')",
      },
      spacing: {
        17.25: pxToRem(69),
      },
    },
  },
  plugins: [],
};
