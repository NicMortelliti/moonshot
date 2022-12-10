import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Components
import ReservationList from "../components/reservations/ReservationList";
import Booking from "../components/booking/Booking";
import Profile from "../components/profile/Profile";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Redirect if user not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="my-trips" element={<ReservationList />} />
      <Route path="flight-search" element={<Booking />} />
      <Route path="my-profile" element={<Profile />} />
    </Routes>
  );
};

export default Dashboard;
