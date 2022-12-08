import styled from "styled-components";

export const HeaderContainer = styled.ul`
  /* Color and style */
  background-color: ${({ theme }) => theme.bgColors.header};
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  /* Fix bar to top of page */
  position: fixed;
  top: 0;

  /* Set to full width of page */
  width: 100%;
`;

export const HeaderListItem = styled.li`
  /* Color and style */
  color: ${({ theme }) => theme.colors.header};
  padding: 14px 16px;
  text-decoration: none;

  /* Size */
  font-size: ${(props) => props.fontSize || "large"};
  font-weight: 300;

  /* Alignment */
  float: ${(props) => props.alignment || "left"};
  display: block;
  text-align: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
  }

  &.active {
    color: ${({ theme }) => theme.hoverColor};
    font-weight: 400;
    border-bottom: 5px solid;
    border-color: ${({ theme }) => theme.hoverColor};
  }
`;
