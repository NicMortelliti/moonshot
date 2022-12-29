import React from "react";
import { useNavigate } from "react-router-dom";

// Styled components
import { Button } from "../../styles/Button.styled";
import { FrostedContainer } from "../../styles/Frost.styled";

const JumpToSearch = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <FrostedContainer>
      <p>You have no reservations.</p>
      <Button onClick={() => navigate("/flight-search")}>"Book one!"</Button>
    </FrostedContainer>
  );
};

export default JumpToSearch;
