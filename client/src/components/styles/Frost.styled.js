import styled from "styled-components";

export const FrostedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  border-radius: 4px;
  background: ${({ theme }) => null || "rgba(255, 255, 255, 0.4)"};
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  max-width: ${({ maxWidth }) => maxWidth || "auto"};

  justify-content: center;
  align-items: start;
  /* text-align: center; */
  padding: 20px;

  gap: 20px;
`;
