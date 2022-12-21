import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../features/reservations/reservationSlice";

// Styled Components
import CardList from "../card/CardList";
import JumpToSearch from "./components/JumpToSearch";
import { FrostedWallpaper } from "../styles/Frost.styled";

const Reservations = () => {
  const dispatch = useDispatch();

  // Get reservations from API when component loads
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  // Grab properties from reservation state
  const { reservations, isLoading } = useSelector(
    (state) => state.reservations
  );

  const Render = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <CardList
          cards={reservations}
          isLoading={isLoading}
          typeOfList="reservation"
        />
      );
    }
  };

  return (
    <FrostedWallpaper>
      <div
        style={{
          border: "5px dotted blue",
          position: "absolute",
          left: 0,
          bottom: "80px",
          height: "76vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            border: "2px dotted red",
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
          }}>
          {reservations ? <Render /> : <JumpToSearch />}
        </div>
      </div>
    </FrostedWallpaper>
  );
};

export default Reservations;
