import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ReservationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Res Form</label>
      </form>
    </section>
  );
};

export default ReservationForm;
