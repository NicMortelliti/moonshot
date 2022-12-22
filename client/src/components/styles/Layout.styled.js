import styled from "styled-components";

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const Wrapper = styled.div`
  display: grid;
  gap: 5px;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;

  /* For displays less than 500px wide */
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export const Header = styled.div`
  border: 2px dotted red;
  grid-area: header;
  display: flex;
  justify-content: space-between;
`;

export const Side = styled.div`
  border: 2px dotted red;
  grid-area: sidebar;
  overflow: auto;
`;

export const Content = styled.div`
  border: 2px dotted red;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: auto;
`;

export const Footer = styled.div`
  border: 2px dotted red;
  grid-area: footer;
`;

export const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-areas:
    "sidebar"
    "content";
  overflow: auto;

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    grid-template-columns: auto 1fr;
    grid-template-areas: "sidebar   content";
    .header div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

// -------------------------------------------
// -------------------------------------------
