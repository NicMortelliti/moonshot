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
  padding-bottom: 88px;
}

h1,
h2,
h3,
h4,
p {
  line-height: 1;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
