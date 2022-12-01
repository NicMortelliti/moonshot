import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOriginId,
  setDestinationId,
  getDestinations,
  getFlights,
} from "../../features/booking/bookingSlice";

const BookingLocationButton = ({ data }) => {
  // Destructure props
  const { id, name, macro_place } = data;

  const dispatch = useDispatch();
  const { origin, destination } = useSelector((state) => state.booking);

  const setLocation = () => {
    if (!origin) {
      dispatch(setOriginId(id));
      dispatch(getDestinations(id));
    } else if (origin && !destination) {
      dispatch(setDestinationId(id));
      dispatch(getFlights({ origin, id }));
    }
  };

  return (
    <button onClick={() => setLocation()}>
      <h5>{macro_place}</h5>
      <p>{name}</p>
    </button>
  );
};

export default BookingLocationButton;
