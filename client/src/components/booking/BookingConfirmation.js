import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/booking/bookingSlice";

// Styled Components
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";
import {
  StyledReservationCard,
  ReservationContainer,
} from "../styles/Card.styled";
import { HorizontalRule, Legend } from "../styles/Widgets.styled";

// Helpers
import { capitalize, shortFormatDate } from "../../helpers/helpers";

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
    <div
      style={{
        display: "flex",
        flex: "1 100%",
        flexDirection: "column",
        margin: "30px 30px",
        color: "black",
        border: "1px dashed red",
      }}>
      <div
        style={{
          background: "white",
          padding: "20px",
          border: "1px dashed magenta",
        }}>
        {/* Top Half */}
        <div
          style={{
            border: "1px dashed green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1>Far out!</h1>
          <h3>You're going to space!</h3>
          <Legend>The following booking has been confirmed.</Legend>
        </div>
        <div>
          <HorizontalRule margin="20px" />
        </div>
        <div
          style={{
            border: "1px dashed orange",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
          <div style={{}}>
            <div>
              <h5>Passenger:</h5>
              <p>
                {capitalize(firstName)} {capitalize(lastName)}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}>
              <h3>Flight {flightId}</h3>
              <p>
                {vehicleMake} {vehicleModel} - "{vehicleName}"
              </p>
            </div>
          </div>
          <h5>Confirmation number:</h5>
          <h3> {confirmationNumber}</h3>
        </div>

        {/* Bottom half */}
        <div
          style={{
            display: "flex",
            // justifyContent: "stretch",
            flex: "1 1 100%",
            alignItems: "center",
            border: "1px dashed red",
            // height: "2em",
          }}>
          <div
            style={{
              border: "1px solid magenta",
              display: "flex",
              flex: "1 1 100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}>
            <Legend>From</Legend>
            <h5>
              {originName}, {originMacroName}
            </h5>
            <h5>{shortFormatDate(departure)}</h5>
          </div>
          {/* Flight # and Vehicle */}
          <div
            style={{
              border: "1px solid magenta",
              display: "flex",
              flex: "1 1 100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}>
            <Legend>To</Legend>
            <h5>
              {destinationName}, {destinationMacroName}
            </h5>
            <h5>{shortFormatDate(arrival)}</h5>
          </div>
        </div>
        <div
          style={{
            border: "2px solid purple",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div>
            <Button onClick={() => closeConfirmation()}>ok!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
