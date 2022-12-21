import styled from "styled-components";

export const FrostedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 80%;
  border-radius: 4px;
  background: ${({ theme }) => `${theme.accent}50` || "rgba(255, 255, 255, 0.4)"};
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  max-width: ${({ maxWidth }) => maxWidth || "auto"};

  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;

  gap: 30px;
`;
