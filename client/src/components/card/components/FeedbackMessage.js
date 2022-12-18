import React from "react";
import styled from "styled-components";
import { Legend } from "../../styles/Widgets.styled";

const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeedbackMessage = ({ first, second, third }) => {
  return (
    <FeedbackDiv>
      <h1>{first}</h1>
      <h3>{second}</h3>
      <Legend>{third}</Legend>
    </FeedbackDiv>
  );
};

export default FeedbackMessage;
