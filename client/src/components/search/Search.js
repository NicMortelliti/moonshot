import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";
import BookingFlightList from "./BookingFlightList";

const Search = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getOrigins());
  }, []);

  // Destructure props
  const { flight, origin, destination, data } = useSelector(
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
        return data.map((eachData) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Location key={eachData.id} data={eachData} />
          </div>
        ));
      case destination:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}>
              {data.map((eachData) => (
                <Location key={eachData.id} data={eachData} />
              ))}
            </div>
          </div>
        );

      case flight:
        return <BookingFlightList data={data} />;

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
