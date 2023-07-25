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
        sans: ["Antonio", ...fontFamily.sans],
        alt: ["League Spartan", ...fontFamily.sans],
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
        "h1.t": [pxToRem(48), pxToRem(62)],
        "h1.m": [pxToRem(40), pxToRem(52)],
        h2: [
          pxToRem(40),
          { lineHeight: pxToRem(52), letterSpacing: pxToRem(-1.5) },
        ],
        "h2.t": [
          pxToRem(24),
          { lineHeight: pxToRem(31), letterSpacing: pxToRem(-0.9) },
        ],
        "h2.m": [
          pxToRem(20),
          { lineHeight: pxToRem(26), letterSpacing: pxToRem(-0.75) },
        ],
        h3: [
          pxToRem(12),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(2.57),
            fontWeight: 700,
          },
        ],
        "h3.t": [
          pxToRem(9),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(1.93),
            fontWeight: 700,
          },
        ],
        "h3.m": [
          pxToRem(9),
          {
            lineHeight: pxToRem(10),
            letterSpacing: pxToRem(1.93),
            fontWeight: 700,
          },
        ],
        s: [pxToRem(12), pxToRem(25)],
        h4: [
          pxToRem(11),
          {
            lineHeight: pxToRem(25),
            letterSpacing: pxToRem(1),
            fontWeight: 700,
          },
        ],
        "h4.t": [
          pxToRem(8),
          {
            lineHeight: pxToRem(16),
            letterSpacing: pxToRem(0.72),
            fontWeight: 700,
          },
        ],
        body: [pxToRem(14), pxToRem(25)],
        "body.t": [pxToRem(11), pxToRem(22)],
      },
      colors: {
        gray: {
          700: "#070724",
          400: "#38384F",
          200: "#D8D8D8",
          100: "#838391",
        },
      },
      height: {
        4.25: pxToRem(17),
      },
      maxWidth: {
        275: pxToRem(1110),
      },
      padding: {
        1.75: pxToRem(7),
        2.75: pxToRem(11),
        3.75: pxToRem(15),
        4.75: pxToRem(19),
        5.5: pxToRem(22),
        5.75: pxToRem(23),
        6.75: pxToRem(27),
        7.25: pxToRem(29),
        13.5: pxToRem(54),
      },
      margin: {
        4.25: pxToRem(17),
        5.5: pxToRem(22),
        5.75: pxToRem(23),
        6.75: pxToRem(27),
        9.75: pxToRem(39),
        12.25: pxToRem(49),
        21.75: pxToRem(87),
      },
      gap: {
        2.75: pxToRem(11),
        8.25: pxToRem(33),
        7.5: pxToRem(30),
        9.75: pxToRem(39),
        17.25: pxToRem(69),
      },
      backgroundImage: {
        stars: "url('/images/background-stars.svg')",
      },
      spacing: {
        17.25: pxToRem(69),
      },
      flexBasis: {
        70.25: pxToRem(281),
        84.75: pxToRem(339),
        87.5: pxToRem(350),
      },
    },
  },
  plugins: [],
};
