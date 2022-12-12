import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/booking/bookingSlice";

// Styled Components
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";
import { SearchFlex, FlightContainer } from "../styles/Search.styled";
import {
  StyledReservationCard,
  ReservationContainer,
} from "../styles/Card.styled";

// Helpers
import { capitalize, shortFormatDate } from "../../helpers/helpers";
import { HR } from "../styles/Widgets.styled";

const BookingConfirmation = ({ data }) => {
  // Destructure props
  const {
    id: confirmationNumber,
    flight: { id: flightId, departure, arrival },
    origin: { name: originName, macro_place: originMacroName },
    destination: { name: destinationName, macro_place: destinationMacroName },
    vehicle: { make: vehicleMake, model: vehicleModel, name: vehicleName },
  } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user: { first_name: firstName, last_name: lastName },
  } = useSelector((state) => state.auth);

  // Close confirmation window and clear out booking store
  const closeConfirmation = () => {
    dispatch(reset());
    navigate("/my-trips");
  };

  return (
    <ReservationContainer>
      <StyledReservationCard align="flex-start">
        <>
          <Flex direction="column" align="flex-start">
            <Flex gap="0 20px">
              <h1>Far out!</h1>
              <h3>You're going to space!</h3>
            </Flex>
            <Flex>
              <h5>The following booking has been confirmed</h5>
            </Flex>
            <Flex>
              <HR margin="20px" />
            </Flex>
            <Flex gap="0 10px">
              <h5>Confirmation number:</h5>
              <h3> {confirmationNumber}</h3>
            </Flex>
            <Flex gap="0 10px">
              <h5>Passenger:</h5>
              <p>
                {capitalize(firstName)} {capitalize(lastName)}
              </p>
            </Flex>
            {/* <Flex>
              <HR margin="20px" />
            </Flex> */}
          </Flex>
          <Flex align="flex-start" margin="20px 0 10px">
            <Flex direction="column" align="flex-start">
              <h5>From</h5>
              <h1>{originName}</h1>
              <h2>{originMacroName}</h2>
              <h5>{shortFormatDate(departure)}</h5>
            </Flex>
            <Flex direction="column" justify="flex-start">
              <h5>Flight</h5>
              <h2>{flightId}</h2>
            </Flex>
            <Flex direction="column" align="flex-end">
              <h5>To</h5>
              <h1>{destinationName}</h1>
              <h2>{destinationMacroName}</h2>
              <h5>{shortFormatDate(arrival)}</h5>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Flex>
              <p>
                On the beautiful {vehicleName}, a {vehicleMake} {vehicleModel}!
              </p>
            </Flex>
            <Flex margin="20px 0 0">
              <Button onClick={() => closeConfirmation()}>ok!</Button>
            </Flex>
          </Flex>
        </>
      </StyledReservationCard>
    </ReservationContainer>
  );
};

export default BookingConfirmation;
