import styled from "styled-components";

// -------------------------------------------
// GRID --------------------------------------
// -------------------------------------------
export const FooterGrid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "data   socials"
    "data   buttons";
`;

export const Data = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Socials = styled.div`
  grid-area: socials;
  display: flex;
  justify-content: end;
  align-items: center;
`;

// -------------------------------------------
// -------------------------------------------

export const FooterFinePrint = styled.li`
  /* Color and style */
  color: ${({ theme }) => theme.colors.footer || "white"};
  padding: 0px 0;
  text-decoration: none;

  /* Size */
  font-size: xx-small;
  line-height: 1.5;

  /* Alignment */
  display: block;
  text-align: start;
`;

export const FooterLink = styled(FooterFinePrint)`
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
