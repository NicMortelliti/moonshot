import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.bgColors.body};
  color: ${({ theme }) => theme.colors.body};
  font-family: 'Poppins', sans-serif;
  font-size: 1.15em;
  flex-direction: column;

}

h1,
h2,
h3,
h4,
h5,
p {
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark};
  line-height: ${({ lineHeight }) => lineHeight || "30px"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  text-align: ${({ align }) => align || "auto"};
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
