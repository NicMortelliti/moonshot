import styled from "styled-components";

import { P } from "../styles/Text.styled";

const HrStyled = styled.div`
  flex: 0 0 90%;
  flex-direction: row;
  margin: 1em 2em;

  div {
    height: 0px;
    padding: 0;
    border-bottom: 0.15em solid ${({ theme }) => theme.dark || "black"};
    padding: 0;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex: 1;

    div {
      width: 0.5em;
      height: 0.5em;
      background-color: ${({ theme }) => theme.dark || "black"};
      border: none;
      position: absolute;
      top: -0.15em;
    }

    .right {
      right: 0;
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
  color: ${({ theme, light }) => (light ? theme.light : theme.colors.dark)};
  font-size: x-small;
  line-height: ${({ lineHeight }) => lineHeight || "30px"};
  margin: ${({ margin }) => margin || 0};
  padding: 0;
`;

export const LocationBlock = ({ align, name, macroName }) => {
  const verb = align === "start" ? "From" : "To";

  return (
    <div
      style={{
        border: "2px dotted blue",
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        justifyContent: "center",
        color: "black",
      }}>
      <Legend>{verb}</Legend>
      <h5>
        {name}, {macroName}
      </h5>
    </div>
  );
};

export const CenteredTextRow = ({ lgd, readout }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: "1 1 100%",
      }}>
      <Legend
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: "1 1 50%",
          textAlign: "end",
        }}>
        {lgd}
      </Legend>
      <P
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "0 10px",
          flex: "1 1 50%",
          textAlign: "start",
        }}>
        {readout}
      </P>
    </div>
  );
};
