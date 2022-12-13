import styled from "styled-components";

export const SocialContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1px solid ${({ theme }) => theme.colors.footer};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.footer};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  li {
    /* Color and style */
    color: ${({ theme }) => theme.colors.footer};
    padding: 14px 0 6px;
    text-decoration: none;

    /* Size */
    font-size: ${(props) => props.fontSize || "large"};
    font-weight: 300;

    /* Alignment */
    display: inline-block;
    text-align: center;

    cursor: pointer;
  }

  &:hover,
  &:focus {
    li {
      border-color: ${({ theme }) => theme.hoverColor};
    }
    a {
      border-color: ${({ theme }) => theme.hoverColor};
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.hoverColor};
    }
  }
`;
