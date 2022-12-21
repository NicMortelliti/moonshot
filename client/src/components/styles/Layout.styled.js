import styled from "styled-components";

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const Wrapper = styled.div`
  display: grid;
  gap: 5px;

  /* For displays less than 500px wide */
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "footer";

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "header     header"
      "sidebar   content"
      "footer     footer";

    .header div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  border: 2px dotted red;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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
`;

export const Footer = styled.div`
  border: 2px dotted red;
  grid-area: footer;
`;

// -------------------------------------------
// -------------------------------------------
