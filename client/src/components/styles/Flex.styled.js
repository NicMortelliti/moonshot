import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  width: 100%;
  height: auto;
  margin: 0;
  padding: ${({ padding }) => padding || 0};
  position: ${({ position }) => position || "inherit"};
  bottom: ${({ bottom }) => bottom || "inherit"};
`;
