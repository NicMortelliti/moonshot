import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Components
import JumpToSearch from "./components/JumpToSearch";
import CardList from "../card/CardList";

// Styled Components
import { FrostedContainer } from "../styles/Frost.styled";
import { Content } from "../styles/Layout.styled";

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
        <CardList
          cards={reservations}
          isLoading={isLoading}
          typeOfList="reservation"
        />
      );
    }
  };

  return (
    <Content>
      <FrostedContainer maxWidth="none" align="center">
        {reservations ? <Render /> : <JumpToSearch />}
      </FrostedContainer>
    </Content>
  );
};

export default Reservations;
