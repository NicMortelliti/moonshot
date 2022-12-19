import React from "react";

// Styled components
import { CardFeedback as Feedback } from "../../styles/Card.styled";
import { Legend } from "../../styles/Widgets.styled";

const FeedbackMessage = ({ first, second, third }) => {
  return (
    <Feedback>
      <h1>{first}</h1>
      <h3>{second}</h3>
      <Legend>{third}</Legend>
    </Feedback>
  );
};

export default FeedbackMessage;
