import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  border-radius: 4px;

  /* For displays less than 500px wide */
  max-width: 90vw;

  /* For displays 500px and larger */
  @media (min-width: 500px) {
    max-width: ${({ maxWidth }) => maxWidth || "50vw"};
  }

  justify-content: center;
  align-items: start;
  padding: 20px;

  gap: 20px;
`;

export const FrostedContainer = styled(Container)`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;
