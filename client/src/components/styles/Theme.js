import styled from "styled-components";
import planet from "../../components/images/planet.jpg";

const white = "#ffffff";
const black = "#000000";
const lightBlue = "#676f9d";
const medBlue = "#424769";
const darkBlue = "#2d3250";
const accent = "#f9b17a";

export const theme = {
  bgColors: {
    header: darkBlue,
    body: medBlue,
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

export const WallPaperContainer = styled.div`
  display: flex;
  background-image: url(${planet});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: -70px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
