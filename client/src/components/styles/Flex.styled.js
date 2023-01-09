import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex: ${({ flex }) => flex || "0 1 auto"};
  text-align: center;
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  gap: ${({ gap }) => gap || "normal"};
  position: ${({ position }) => position || "inherit"};
  bottom: ${({ bottom }) => bottom || "inherit"};

  align-content: stretch;
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};

  & > * {
    flex: 1 100%;
  }
`;
