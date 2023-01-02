const light = "#ffffff";
const dark = "#333333";
const lightBlue = "#676f9d";
const darkBlue = "#141720";
const accent = "#3498db";
const alert = "#e74c3c";
const primary = "#2ecc71";

// --oxford-blue: #152541ff;
// --space-cadet: #1E1E37ff;
// --dark-purple: #292036ff;
// --space-cadet-2: #383958ff;
// --rose-taupe: #885258ff;

// --phlox: #CB4AFFff;
// --purple: #5416A8ff;
// --russian-violet: #181137ff;
// --middle-red: #F59071ff;
// --sky-blue-crayola: #71E4EFff;

// Chat GPT results
// Light:
//
//     #ffffff (white)
//     #f8f8f8 (light grey)
//     #f4f4f4 (off-white)
//     #ebebeb (light grey)
//
// Dark:
//
//     #333333 (dark grey)
//     #2d2d2d (dark grey)
//     #1a1a1a (dark grey)
//     #000000 (black)
//
// Accent:
//
//     #9b59b6 (purple)
//     #f1c40f (yellow)
//     #e74c3c (red)
//     #3498db (blue)
//
// Alert:
//
//     #e74c3c (red)
//     #ff4136 (red)
//     #ff0000 (red)
//     #8b0000 (dark red)
//
// Primary:
//
//     #3498db (blue)
//     #2ecc71 (green)
//     #9b59b6 (purple)
//     #f1c40f (yellow)
//
// Secondary:
//
//     #f39c12 (orange)
//     #d35400 (orange-brown)
//     #c0392b (dark red)
//     #7f8c8d (grey)

const white = "#FFFFFF";
const black = "#000000";

export const theme = {
  bgColors: {
    dark: dark,
    light: light,
    header: darkBlue,
    footer: darkBlue,
    body: black,
    searchButton: darkBlue,
    button: accent,
    sidebar: white + "55",
  },

  colors: {
    dark: dark,
    light: light,
    header: light,
    body: light,
    footer: lightBlue,
    searchButton: light,
    button: accent,
  },

  white: "FFFFFF",
  black: "000000",
  hoverColor: accent,
  primary: primary,
  alert: alert,
  light: light,
  dark: dark,
  accent: accent,
};
