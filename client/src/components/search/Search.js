import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { default as Location } from "./BookingLocationButton";
import { default as Confirmation } from "./BookingConfirmation";
import { getOrigins } from "../../features/booking/bookingSlice";
import CardList from "../card/CardList";

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

  // Determine what to render via switch/case
  const Render = () => {
    // TODO Add "From" and "To" legends to search pages to inform user what they are currently selecting

    const RenderLocationPicker = () => {
      return (
        <SearchLocationContainer>
          {data.map((eachData) => (
            <Location key={eachData.id} data={eachData} />
          ))}
        </SearchLocationContainer>
      );
    };

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
            <Flex direction="column" margin="0 3em" justifyContent="center">
              <H1 light>From...</H1>
              <RenderLocationPicker />
            </Flex>
          );

        case !destination:
          return (
            <Flex direction="column" margin="0 3em" justifyContent="center">
              <H1 light>To...</H1>
              <RenderLocationPicker />
            </Flex>
          );

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
    <Content frosted>
      <Render />
    </Content>
  );
};
export default Search;
