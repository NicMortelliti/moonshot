import styled from "styled-components";

export const FooterContainer = styled.ul`
  background-color: ${({ theme }) => theme.bgColors.header};
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* Fix bar to top of page */
  position: fixed;
  bottom: 0;

  /* Set to full width of page */
  width: 100%;
`;
