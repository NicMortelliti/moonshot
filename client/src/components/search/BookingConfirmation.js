import React from "react";
import Card from "../card/Card";

import { Content } from "../styles/Layout.styled";

const BookingConfirmation = ({ data }) => {
  return (
    <Content>
      <Card data={data} typeOfList="confirmation" />
    </Content>
  );
};

export default BookingConfirmation;
