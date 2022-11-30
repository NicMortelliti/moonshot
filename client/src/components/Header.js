import React from "react";
import { FaRocket, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { getReservations } from "../features/reservations/reservationSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Handle logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // Handle reservations fetch
  const reservations = () => {
    dispatch(getReservations());
  };

  return (
    <header>
      <div>
        <Link to="/">
          <FaRocket />
          MoonShot
        </Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <FaUser />
              {user.first_name.charAt(0).toUpperCase() +
                user.first_name.slice(1)}
            </li>
            <li>
              <button onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            <li>
              <button onClick={reservations}>MY TRIPS</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
