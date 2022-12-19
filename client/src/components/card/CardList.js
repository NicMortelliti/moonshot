import React from "react";
import Card from "./Card";

// Styled components
import { CardList as List } from "../styles/Card.styled";

const CardList = ({
  cards,
  isLoading = false,
  backup = null,
  typeOfList = null,
}) => {
  // Send cards to the Card component
  // to be rendered.
  const RenderCards = () => {
    return (
      <List>
        {cards.map((card) => (
          <Card data={card} typeOfList={typeOfList} />
        ))}
      </List>
    );
  };

  // Determine what to display here.
  // If we're waiting on data to be
  // returned to us (isLoading?) then
  // we'll display a loading indicator.
  // If we have the data, render a
  // list of cards for each data object.
  // If we get nothing back, fallback
  // to whatever backup action was
  // passed in here.
  const RenderList = () => {
    switch (true) {
      case isLoading:
        return <p>Loading...</p>;

      case cards !== null:
        return <RenderCards />;

      case backup !== null:
        return backup();

      default:
        return null;
    }
  };

  return <RenderList />;
};

export default CardList;
