import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReservationList from "../components/ReservationList";

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
    <>
      <section>
        <h1>
          {user ? `Welcome, ${user.first_name}!` : "No user logged in 😦"}
        </h1>
        <p>Reservations</p>
      </section>
      <section>
        <ReservationList />
      </section>
    </>
  );
};

export default Dashboard;
