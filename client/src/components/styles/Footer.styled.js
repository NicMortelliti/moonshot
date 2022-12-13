import styled from "styled-components";

export const FooterContainer = styled.ul`
  /* Color and style */
  background-color: ${({ theme }) => theme.bgColors.footer};
  list-style-type: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  width: 100%;
  min-height: 88px;
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
`;

export const FooterLink = styled(FooterFinePrint)`
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
