import { createGlobalStyle } from "styled-components";
import image from "../images/moon.jpg";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${({ theme }) => theme.bgColors.body};
  background-image: url(${image});
  background-size: cover;
  background-attachment: fixed;

  color: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  margin: 0;

}

h1,
h2,
h3,
h4,
h5,
p {
  display: flex;
  color: ${({ theme }) => theme.colors.dark};
  line-height: ${({ lineHeight }) => lineHeight || "2"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  text-align: ${({ align }) => align || "left"};
}
`;

// .gradient-background {
//   background: linear-gradient(320deg,#2ae65f,#801fbf,#5c2d16);
//   background-size: 180% 180%;
//   animation: gradient-animation 27s ease infinite;
// }
//
// @keyframes gradient-animation {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }

export default GlobalStyles;
