import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";

// Styled components
import CardList from "../card/CardList";

const Search = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getOrigins());
  }, []);

  // Destructure props
  const { flight, origin, destination, data, isLoading } = useSelector(
    (state) => state.booking
  );

  // This function determines where we're at in terms of
  // booking workflow. If 'origin' is yet to be set
  // the switch method stops at case 'origin' and
  // retrieves a list of origins from the backend.
  // The same logic applies to the 'destination' and
  // 'flight' parts of the booking workflow.
  const determineWhatToRender = () => {
    switch (null) {
      case origin:
      case destination:
        return data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ));

      case flight:
        return (
          <CardList cards={data} isLoading={isLoading} typeOfList="search" />
        );

      default:
        break;
    }
  };

  return (
    <>
      {data ? determineWhatToRender() : null}
      {flight ? <Confirmation data={flight} newReservation /> : null}
    </>
  );
};
export default Search;
