import React from "react";
import styled from "styled-components";

// Styled components
import { Button } from "../../styles/Button.styled";

const JumpToSearch = ({ handleClick }) => {
  const JumpToBookFlights = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;
  return (
    <JumpToBookFlights>
      <p>You have no reservations.</p>
      <Button onClick={handleClick}>Book one!</Button>
    </JumpToBookFlights>
  );
};

export default JumpToSearch;
