import styled from "styled-components";

export const FooterContainer = styled.ul`
  /* Color and style */
  background-color: ${({ theme }) => theme.bgColors.footer};
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* Fix bar to bottom of page */
  position: fixed;
  bottom: 0;

  /* Set to full width of page */
  width: 100%;
`;

export const FooterFinePrint = styled.li`
  /* Color and style */
  color: ${({ theme }) => theme.colors.footer};
  padding: 5px 0;
  text-decoration: ${(props) => props.decorations || "none"};

  /* Size */
  font-size: ${(props) => props.fontSize || "x-small"};
  font-weight: 300;

  /* Alignment */
  display: block;
  text-align: center;
`;

export const FooterLink = styled.li`
  text-decoration: underline;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
    cursor: pointer;
  }
`;
