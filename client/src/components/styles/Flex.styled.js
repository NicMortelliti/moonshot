import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  width: 100%;
  height: ${({ height }) => height || "auto"};
  margin: 0;
  padding: ${({ padding }) => padding || 0};
  position: ${({ position }) => position || "inherit"};
  bottom: ${({ bottom }) => bottom || "inherit"};
  gap: ${({ gap }) => gap || "normal"};

  /* TODO  VVV Comment me out VVV */
  /* border: 2px dashed red; */
`;
