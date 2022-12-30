import React from "react";
import { useNavigate } from "react-router-dom";

// Styled components
import { Button } from "../../styles/Button.styled";
import { FrostedContainer } from "../../styles/Frost.styled";
import { P } from "../../styles/Text.styled";

const JumpToSearch = () => {
  const navigate = useNavigate();

  return (
    <>
      <P light>You have no reservations.</P>
      <Button onClick={() => navigate("/flight-search")}>Book one!</Button>
    </>
  );
};

export default JumpToSearch;
