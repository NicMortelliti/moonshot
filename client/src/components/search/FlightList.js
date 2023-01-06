import React from "react";
import FlightCard from "./FlightCard";

const FlightList = ({ cards }) => {
  // Send cards to the Card component to be rendered.
  const RenderCards = () => {
    return cards.map((card, i) => <FlightCard key={i} data={card} />);
  };

  return <RenderCards />;
};

export default FlightList;
