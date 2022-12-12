import { useDispatch } from "react-redux";
import { shortFormatDate } from "../../helpers/helpers";
import { deleteReservation } from "../../features/reservations/reservationSlice";
import { FaSpaceShuttle } from "react-icons/fa";

// Styled components
import { Flex } from "../styles/Flex.styled";
import { MinimalButton } from "../styles/Button.styled";
import { StyledReservationCard } from "../styles/Card.styled";
import { HR } from "../styles/Widgets.styled";

const ReservationCard = ({ reservation }) => {
  const dispatch = useDispatch();

  // Destructure props
  const {
    id: reservationId,
    flight: { id: flightId, departure, arrival },
    origin,
    destination,
    vehicle,
  } = reservation;

  // Modify/Cancel reservation
  const modifyReservation = (e) => {
    switch (e.target.name) {
      case "cancel":
        dispatch(deleteReservation(reservationId));
        break;

      default:
        break;
    }
  };

  // Basic information about the reservation
  const PrimaryData = () => {
    return (
      <>
        <Flex align="flex-start">
          <Flex direction="column" justify="flex-start" align="flex-start">
            <h5>From</h5>
            <h1>{origin.name}</h1>
            <h2>{origin.macro_place}</h2>
            <h5>{shortFormatDate(departure)}</h5>
          </Flex>
          <Flex direction="column" justify="flex-start">
            <h5>Flight</h5>
            <h2>{flightId}</h2>
            <FaSpaceShuttle />
          </Flex>
          <Flex direction="column" justify="flex-end" align="flex-end">
            <h5>To</h5>
            <h1>{destination.name}</h1>
            <h2>{destination.macro_place}</h2>
            <h5>{shortFormatDate(arrival)}</h5>
          </Flex>
        </Flex>
        <Flex>
          <HR margin="30px 0" />
        </Flex>
        <Flex>
          <Flex align="flex-start" direction="column">
            <h5>Spacecraft</h5>
            <h4>
              {vehicle.make} {vehicle.model} "{vehicle.name}"
            </h4>
            <p>Seats a total of {vehicle.pax_capacity} passengers.</p>
          </Flex>
        </Flex>
      </>
    );
  };

  return (
    <StyledReservationCard>
      <PrimaryData />
      <Flex justify="flex-end">
        <MinimalButton name="cancel" onClick={(e) => modifyReservation(e)}>
          Cancel reservation
        </MinimalButton>
      </Flex>
    </StyledReservationCard>
  );
};

export default ReservationCard;
