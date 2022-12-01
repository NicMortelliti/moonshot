import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import { reLogin } from "../features/auth/authSlice";
import ReservationList from "../components/reservations/ReservationList";
import Booking from "../components/booking/Booking";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Redirect if user not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Refresh user session if possible
  useEffect(() => {
    if (!user) {
      dispatch(reLogin());
    }
  }, []);

  return (
    <>
      <section>
        <h1>
          {user ? `Welcome, ${user.first_name}!` : "No user logged in 😦"}
        </h1>
        <p>Reservations</p>
      </section>
      <section>
        <Booking />
      </section>
      <section>
        <ReservationList />
      </section>
    </>
  );
};

export default Dashboard;
