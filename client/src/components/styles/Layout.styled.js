import styled from "styled-components";

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "footer";

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header    header"
      "sidebar  content"
      "footer    footer";
  }
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.bgColors.header || "black"};
  grid-area: header;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Side = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: start;
  align-items: ${({ align }) => align || "start"};
  margin: 0;
  flex: 1;

  background: ${({ frosted }) => (frosted ? "rgba(45, 45, 45, 0.5)" : null)};
  backdrop-filter: ${({ frosted }) => (frosted ? "blur(15px)" : null)};
  box-shadow: ${({ frosted }) =>
    frosted ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : null};
`;

export const Footer = styled.div`
  background: ${({ theme }) => theme.bgColors.footer || "black"};
  grid-area: footer;
  padding: 5px 1em;
  z-index: 999;
`;

// -------------------------------------------
// -------------------------------------------
