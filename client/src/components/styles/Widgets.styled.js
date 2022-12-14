import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const HR = styled(Flex)`
  border-bottom: 2px solid black;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: ${({ margin }) => margin || "0 auto 20px"};

  & > span {
    height: 10px;
    width: 10px;
    background-color: black;
    display: inline-block;
    position: relative;
    top: 13px;
  }

  & > svg {
    font-size: x-large;
    left: -46%;
    top: 13px;
    position: relative;
    color: ${({ theme }) => theme.bgColors.dark};
  }
`;

export const Legend = styled.h5`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.5;
  font-size: small;
  line-height: ${({ lineHeight }) => lineHeight || 1};
  margin: ${({ margin }) => margin || "0"};
  padding: 0;
`;
