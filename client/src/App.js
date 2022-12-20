import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservations from "./components/reservations/Reservations";
import Booking from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Landing from "./pages/Landing";
import { reLogin } from "./features/auth/authSlice";

// Styled Components
import { ThemeProvider } from "styled-components";
import { theme, WallPaperContainer } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Refresh user session if possible
  useEffect(() => {
    if (!user) {
      dispatch(reLogin());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />

        {/* TODO Fix landing page auto navigation
        When a user is deleted, the app should
        automatically reroute the user to either
        the landing page or the sign up page. */}
        <WallPaperContainer source="planet">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>

          {user ? (
            <Routes>
              <Route path="my-trips" element={<Reservations />} />
              <Route path="flight-search" element={<Booking />} />
              <Route path="my-profile" element={<Profile />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          )}
          <Routes>{/* User logged-in routes */}</Routes>
        </WallPaperContainer>

        <Footer />
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
};

export default App;
