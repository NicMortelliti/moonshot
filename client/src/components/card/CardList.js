import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-basis: 90%;
  max-width: 800px;
  gap: 30px;
`;

const CardList = ({ cards, isLoading = false, backup }) => {
  // Send cards to the Card component
  // to be rendered.
  const RenderCards = () => {
    return (
      <CardsListDiv>
        {cards.map((card) => (
          <Card data={card} />
        ))}
      </CardsListDiv>
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

      default:
        return backup();
    }
  };

  return <RenderList />;
};

export default CardList;
