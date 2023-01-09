import React from "react";
import { useNavigate } from "react-router-dom";

// Styled components
import { Button } from "../../styles/Button.styled";
import { P } from "../../styles/Text.styled";

const JumpToSearch = () => {
  const navigate = useNavigate();

  return (
    <>
      <P light>You have no reservations.</P>
      <Button primary onClick={() => navigate("/flight-search")}>Book one!</Button>
    </>
  );
};

export default JumpToSearch;
