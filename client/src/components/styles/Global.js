import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.bgColors.body};
  color: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  font-size: 1.15em;
  margin: 0;
  padding-top: 55px;
  padding-bottom: 106px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  & > *{
    flex: 1 100%
  }
}

h1,
h2,
h3,
h4,
p {
  display: flex;
  color: ${({ theme }) => theme.colors.dark};
  line-height: ${({ lineHeight }) => lineHeight || 1};
  margin: ${({ margin }) => margin || "5px 0"};
  text-align: ${({ align }) => align || "auto"};
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
