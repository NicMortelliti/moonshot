import React from "react";
import FlightCard from "./FlightCard";

// Styled components
import { CardList as List } from "../styles/Card.styled";

const FlightList = ({ cards }) => {
  // Send cards to the Card component
  // to be rendered.
  const RenderCards = () => {
    return (
      <List>
        {cards.map((card, i) => (
          <FlightCard key={i} data={card} />
        ))}
      </List>
    );
  };

  return <RenderCards />;
};

export default FlightList;
