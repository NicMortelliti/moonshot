import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";
import FlightList from "./FlightList";

// Styled components
import { SearchLocationContainer } from "../styles/Search.styled";
import { Content } from "../styles/Layout.styled";
import { H1 } from "../styles/Text.styled";
import { Flex } from "../styles/Flex.styled";

const Search = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getOrigins());
  }, [dispatch]);

  // Destructure props
  const { flight, origin, destination, data, isLoading } = useSelector(
    (state) => state.booking
  );

  // Simple buttons with location names on them
  const RenderLocationPicker = () => {
    return (
      <div>
        {data.map((eachData) => (
          <Location key={eachData.id} data={eachData} />
        ))}
      </div>
    );
  };

  // Determine what to render via switch/case
  const Render = () => {
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
          return (
            <Flex direction="column" margin="auto" justifyContent="center">
              <SearchLocationContainer>
                <H1 light>From...</H1>
                <RenderLocationPicker />
              </SearchLocationContainer>
            </Flex>
          );

        case !destination:
          return (
            <Flex direction="column" margin="auto" justifyContent="center">
              <SearchLocationContainer>
                <H1 light>To...</H1>
                <RenderLocationPicker />
              </SearchLocationContainer>
            </Flex>
          );

        // If we've made it this far and the flight has
        // yet to be set, we'll display the flight picker.
        case !flight:
          return (
            <Flex direction="column" margin="auto" justifyContent="center">
              <SearchLocationContainer>
                <H1 light>Results</H1>
                <FlightList cards={data} />
              </SearchLocationContainer>
            </Flex>
          );

        default:
          return (
            <div>
              <p>Oops! Something went wrong.</p>
            </div>
          );
      }
    } else if (flight) {
      // Finally, we display the booking confirmation page 💲💲💲
      return <Confirmation data={flight} newReservation />;
    } else return null;
  };

  return (
    <Content frosted>
      <Render />
    </Content>
  );
};
export default Search;
