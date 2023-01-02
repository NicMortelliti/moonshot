import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Components
import JumpToSearch from "./components/JumpToSearch";
import CardList from "../card/CardList";

// Styled Components
import { Content } from "../styles/Layout.styled";
import { Flex } from "../styles/Flex.styled";
import { H1 } from "../styles/Text.styled";

const Reservations = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  // Grab properties from reservation state
  const { reservations, isLoading } = useSelector(
    (state) => state.reservations
  );

  const Render = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <Flex direction="column" margin="auto" justifyContent="center">
          <H1 light>Your reservations</H1>
          <CardList
            cards={reservations}
            isLoading={isLoading}
            typeOfList="reservation"
          />
        </Flex>
      );
    }
  };

  return (
    <Content frosted>{reservations ? <Render /> : <JumpToSearch />}</Content>
  );
};

export default Reservations;
