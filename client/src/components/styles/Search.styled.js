import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > button {
    cursor: pointer;

    background-color: ${({ theme }) => theme.bgColors.searchButton};
    color: ${({ theme }) => theme.colors.searchButton};
    border: none;

    overflow-wrap: normal;
    width: 100px;
    height: 100px;
    margin: 5px;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.hoverColor};
      opacity: 0.9;
      transform: scale(0.98);
    }
  }
`;
