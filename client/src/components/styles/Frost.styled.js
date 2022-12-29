import styled from "styled-components";

export const FrostBaseline = styled.div`
  border-radius: 0.125em;
  background: rgba(45, 45, 45, 0.4);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const FrostedContainer = styled(FrostBaseline)`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;

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
