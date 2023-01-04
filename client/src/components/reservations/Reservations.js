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

  // Spread the reservations array into a new array that we can sort.
  // Sorting destructively modifies the array, so we don't want to
  // sort directly on the states version of the reservations array.
  // We could do this inline when we pass reservations in as a prop
  // to CardList, but it becomes difficult to read that way.
  const newReservations = reservations
    ? [...reservations].sort((a, b) =>
        new Date(a.flight.departure) > new Date(b.flight.departure) ? 1 : -1
      )
    : null;

  // Render the list of reservations
  const Render = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <Flex direction="column" margin="auto" justifyContent="center">
          <H1 light>Your reservations</H1>
          <CardList
            cards={newReservations}
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
