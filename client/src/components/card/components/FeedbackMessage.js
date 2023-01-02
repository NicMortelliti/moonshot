import React from "react";

// Styled components
import { CardFeedback as Feedback } from "../../styles/Card.styled";
import { Legend } from "../../styles/Widgets.styled";
import { H1, H3 } from "../../styles/Text.styled";

const FeedbackMessage = ({ first, second, third }) => {
  return (
    <Feedback>
      <H1>{first}</H1>
      <H3>{second}</H3>
      <Legend>{third}</Legend>
    </Feedback>
  );
};

export default FeedbackMessage;
