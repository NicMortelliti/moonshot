import React from "react";
import Card from "./Card";

const CardList = (cards) => {
  return (
    <div
      div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        flexBasis: "90%",
        maxWidth: "800px",
        gap: "30px",
      }}>
      {cards.map((card) => (
        <Card data={card} />
      ))}
    </div>
  );
};

export default CardList;
