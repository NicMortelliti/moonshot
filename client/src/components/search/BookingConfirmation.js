import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../features/booking/bookingSlice";
import Card from "../card/Card";

const BookingConfirmation = ({ data, newReservation = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Close confirmation window and clear out booking store
  const closeConfirmation = () => {
    dispatch(reset());
    navigate("/my-trips");
  };

  return <Card data={data} typeOfList="confirmation" />;
};

export default BookingConfirmation;
