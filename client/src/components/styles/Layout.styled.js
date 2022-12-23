import styled from "styled-components";

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const Wrapper = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "footer";

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "header    header"
      "sidebar  content"
      "footer    footer";
  }
`;

export const Header = styled.div`
  background: black;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Side = styled.div`
  grid-area: sidebar;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Footer = styled.div`
  background: black;
  grid-area: footer;
  z-index: 999;
`;

// -------------------------------------------
// -------------------------------------------
