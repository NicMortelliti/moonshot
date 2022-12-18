import React from "react";
import styled from "styled-components";
import { MinimalButton } from "../styles/Button.styled";

// This is the primary data. It resides within the
// MainContainer. It is always displayed. Examples
// of Primary Data are flight number, origin/destination, etc.
const CardPrimary = ({ setExpand, expand }) => {
  const Wrapper = styled.div`
    display: flex;
    margin: 20px 0;
    place-content: stretch center;
    align-items: center;
    flex-basis: 100%;
  `;
  return (
    <Wrapper>
      <MinimalButton
        alert={expand ? false : true}
        onClick={() => setExpand(!expand)}>
        {expand ? "Don't Cancel Reservation" : "Cancel Reservation"}
      </MinimalButton>
    </Wrapper>
  );
};

export default CardPrimary;
