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

export default GlobalStyles;
