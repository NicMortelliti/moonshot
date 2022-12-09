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

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1px solid ${({theme})=> theme.colors.footer};
    border-radius: 50%;
    color: ${({theme})=> theme.colors.footer};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

`
