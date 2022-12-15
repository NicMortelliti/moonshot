import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex: ${({ flex }) => flex || "0 1 auto"};
  justify-content: ${({ justify }) => justify || "flex-end"};
  text-align: center;
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  position: ${({ position }) => position || "inherit"};
  bottom: ${({ bottom }) => bottom || "inherit"};
  gap: ${({ gap }) => gap || "normal"};

  /* Border for development use */
  border: ${({ border }) => (border && `1px dashed red`) || "none"};

  align-content: stretch;
  justify-content: stretch;

  & > * {
    flex: 1 100%;
    text-align: ${({ textAlign }) => textAlign || "center"};
  }
`;
