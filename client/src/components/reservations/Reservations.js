import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Components
import JumpToSearch from "./components/JumpToSearch";
import ReservationList from "./ReservationList";

// Styled Components
import { Content } from "../styles/Layout.styled";
import { Flex } from "../styles/Flex.styled";
import { H1 } from "../styles/Text.styled";
import { ResultsHeader } from "../styles/Search.styled";

const Reservations = () => {
  const dispatch = useDispatch();
  // Grab properties from reservation state
  const { isLoading, isSuccess, isError, reservations } = useSelector(
    (state) => state.reservations
  );

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  let content;
  // If we're fetching reservations from backend, show loader
  if (isLoading === true) {
    content = <p>Loading...</p>;
  }
  // If we get a success message back from the backend, show results
  else if (isSuccess === true) {
    const orderedReservations = reservations
      // Sort the list by next departure first
      .slice()
      .sort((a, b) =>
        new Date(a.flight.departure) > new Date(b.flight.departure) ? 1 : -1
      );

    content = (
      <>
        <ResultsHeader center>
          <H1 light fancy>
            Your reservations
          </H1>
        </ResultsHeader>
        <ReservationList cards={orderedReservations} />
      </>
    );
  }

  // If we don't find any reservations in the backend
  else if (isLoading === false && isError === true) {
    content = <JumpToSearch />;
  }

  return (
    <Content frosted>
      <Flex direction="column" margin="auto" justifyContent="center">
        {content}
      </Flex>
    </Content>
  );
};

export default Reservations;
