import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";
import { useNavigate } from "react-router-dom";

// Components
import BookingConfirmation from "../booking/BookingConfirmation";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";
import Card from "../card/Card";

const ReservationList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  // Grab properties from reservation state
  const { reservations, isLoading } = useSelector(
    (state) => state.reservations
  );

  // Redirect user to the booking page
  const redirectToBooking = () => {
    navigate("/flight-search");
  };

  // Display each reservation or a message to user
  const RenderReservations = () => {
    switch (true) {
      case isLoading:
        return <p>Loading...</p>;
      case reservations !== null:
        // Display reservations if there are any
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
              flexBasis: "90%",
              maxWidth: "800px",
              gap: "30px",
            }}>
            {reservations.map((reservation) => (
              <BookingConfirmation key={reservation.id} data={reservation} />
            ))}
          </div>
        );
      default:
        return (
          <Flex direction="column">
            <p>You have no reservations.</p>
            <Button onClick={redirectToBooking}>Book one!</Button>
          </Flex>
        );
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "20px",
          placeContent: "stretch center",
          alignItems: "center",
          flexBasis: "100%",
        }}>
        <RenderReservations />
      </div>
      {reservations ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            flexBasis: "90%",
            maxWidth: "800px",
            gap: "30px",
          }}>
          <Card key={reservations[0].id} data={reservations[0]} />
        </div>
      ) : null}
    </>
  );
};

export default ReservationList;
