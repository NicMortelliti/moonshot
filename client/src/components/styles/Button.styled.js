import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ theme }) => theme.bgColors.button};
  color: ${({ theme }) => theme.colors.button};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const MinimalButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.button};
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    transform: scale(0.98);
  }
`;
