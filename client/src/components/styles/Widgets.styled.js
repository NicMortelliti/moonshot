import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const HR = styled(Flex)`
  border-bottom: 2px solid black;
  width: 80%;
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
