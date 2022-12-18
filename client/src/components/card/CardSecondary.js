import React from "react";

// Redux services
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../features/reservations/reservationSlice";

// Styled components
import { Button, MinimalButton } from "../styles/Button.styled";

// This is the secondary data. It resides within the
// MainContainer. It is only displayed when 'expandPanel'
// is set to true. Examples of secondary data are
// confirmation buttons, warning messages (e.g. when
// cancelling a reservation), etc.
const CardSecondary = ({ expand }) => {
  const dispatch = useDispatch();

  const SecondarySection = () => {
    return (
      <div>
        <h4>Secondary</h4>
      </div>
    );
  };

  const RenderSecondary = () => {
    switch (expand) {
      case true:
        return <SecondarySection />;

      default:
        return null;
    }
  };

  return <RenderSecondary />;
};

export default CardSecondary;
