import styled from "styled-components";
import image from "../images/spacestation.png";

const white = "#ffffff";
const black = "#000000";
const lightBlue = "#676f9d";
const medBlue = "#424769";
const darkBlue = "#2d3250";
const accent = "#f9b17a";

export const theme = {
  bgColors: {
    header: darkBlue,
    body: black,
    footer: darkBlue,
    light: white,
    searchButton: darkBlue,
    button: accent,
  },

  colors: {
    header: white,
    body: white,
    footer: lightBlue,
    dark: darkBlue,
    searchButton: white,
    button: darkBlue,
    light: lightBlue,
  },

  white: white,
  black: black,
  hoverColor: accent,
  alert: "lightcoral",
  accent: accent,
};
