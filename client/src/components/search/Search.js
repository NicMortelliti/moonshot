import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";
import CardList from "../card/CardList";

// Styled components
import { FrostedWallpaper } from "../styles/Frost.styled";

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

  // Determine what to render via switch/case
  const Render = () => {
    console.log(data);
    if (data) {
      switch (true) {
        // If isLoading is true, display the loading page.
        case isLoading:
          return <p>Loading...</p>;

        // If either of these are null, display
        // the associated location picker. The
        // order of these are important. We want
        // the user to select an origin first,
        // therefore, it is checked first. Then
        // the destination is checked if it's null.
        case !origin:
        case !destination:
          return data.map((eachData) => (
            <Location key={eachData.id} data={eachData} />
          ));

        // If we've made it this far and the flight has
        // yet to be set, we'll display the flight picker.
        case !flight:
          return (
            <CardList cards={data} isLoading={isLoading} typeOfList="search" />
          );

        default:
          break;
      }
    } else if (flight) {
      // Finally, we display the booking confirmation page 💲💲💲
      return <Confirmation data={flight} newReservation />;
    } else return null;
  };

  return (
    <FrostedWallpaper>
      <Render />
    </FrostedWallpaper>
  )
};
export default Search;
