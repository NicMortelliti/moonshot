import styled from "styled-components";
import { FaSpaceShuttle } from "react-icons/fa";

const HrStyled = styled.div`
  flex: 0 0 90%;
  flex-direction: row;
  margin: 2em auto;

  div {
    height: 0px;
    padding: 0;
    border-bottom: 0.15em solid ${({ theme }) => theme.black || "black"};
    padding: 0;
    margin: 0 auto;
    position: relative;
    display: flex;

    div {
      width: 0.5em;
      height: 0.5em;
      background-color: ${({ theme }) => theme.black || "black"};
      border: none;
      position: absolute;
      top: -0.15em;
    }

    .right {
      right: 0;
    }

    svg {
      font-size: xx-large;
      box-sizing: border-box;
      margin: auto;
      position: absolute;
      top: -0.38em;
      background-color: ${({ theme }) => theme.bgColors.light || "none"};
      color: ${({ theme }) => theme.accent || "black"};
      border: 1px dashed red;
    }
  }
`;

export const HorizontalRule = () => {
  return (
    <HrStyled>
      <div>
        <div />
        <div className="right" />
      </div>
    </HrStyled>
  );
};

export const Legend = styled.h5`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.5;
  font-size: small;
  line-height: ${({ lineHeight }) => lineHeight || 1};
  margin: ${({ margin }) => margin || "0"};
  padding: 0;
`;
