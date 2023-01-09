import React from "react";
import ReservationCard from "./ReservationCard";

const ReservationList = ({ cards }) => {
  // Send cards to the Card component to be rendered.
  const RenderCards = () => {
    return cards.map((card, i) => <ReservationCard key={i} data={card} />);
  };

  return <RenderCards />;
};

export default ReservationList;
