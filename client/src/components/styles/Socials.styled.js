import styled from "styled-components";

export const SocialContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const SocialListItem = styled.li`
  /* Color and style */
  color: ${({ theme }) => theme.colors.footer};
  padding: 14px 16px;
  text-decoration: none;

  /* Size */
  font-size: ${(props) => props.fontSize || "x-small"};
  font-weight: 300;

  /* Alignment */
  display: inline-block;
  text-align: center;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.hoverColor};
    cursor: pointer;
  }
`;
