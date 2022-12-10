import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrigin,
  setDestination,
  getDestinations,
  getFlights,
} from "../../features/booking/bookingSlice";

const BookingLocationButton = ({ data }) => {
  // Destructure props
  const { id, name, macro_place } = data;

  const dispatch = useDispatch();
  const { origin, destination } = useSelector((state) => state.booking);

  // Set selected origin and destination, then dispatch API calls
  const setLocation = () => {
    if (!origin) {
      dispatch(setOrigin(data));
      dispatch(getDestinations(id));
    } else if (origin && !destination) {
      dispatch(setDestination(data));
      dispatch(getFlights({ origin, id }));
    }
  };

  return (
    <button onClick={() => setLocation()}>
      <p>{name}</p>
      <h5>{macro_place}</h5>
    </button>
  );
};

export default BookingLocationButton;
