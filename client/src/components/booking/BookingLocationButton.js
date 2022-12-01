import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getDestinations,
  getFlights,
} from "../../features/booking/bookingSlice";

const BookingLocationButton = ({ data }) => {
  // Destructure props
  const { id, name, macro_place } = data;

  const dispatch = useDispatch();
  const { origin, destination } = useSelector((state) => state.booking);

  const setLocation = (e) => {
    e.preventDefault();
    if (!origin) {
      dispatch(getDestinations(id));
    } else if (origin && !destination) {
      dispatch(getFlights(id));
    }
  };

  return (
    <button onClick={(e) => setLocation(e)}>
      <h5>{macro_place}</h5>
      <p>{name}</p>
    </button>
  );
};

export default BookingLocationButton;
