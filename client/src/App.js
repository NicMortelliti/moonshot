// TODO Navigating to "/" results in the about panel and
// empty frosted panel on the right. Need to determine how
// to handle navigating to "/".

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Header from "./components/header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/footer/Footer";
import Reservations from "./components/reservations/Reservations";
import Booking from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Landing from "./pages/Landing";
import { reLogin } from "./features/auth/authSlice";
import { ProtectedRoute, PublicRoute } from "./components/auth/RouteHandling";

// Styled Components
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { Wrapper } from "./components/styles/Layout.styled";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // Refresh user session if possible
  useEffect(() => {
    if (!user) {
      dispatch(reLogin());
    }
  }, [dispatch, user]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route element={<PublicRoute user={user} />}>
              <Route path="/" element={<Landing />}>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </Route>
            </Route>
            {/* User logged-in routes */}
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/my-trips" element={<Reservations />} />
              <Route path="/flight-search" element={<Booking />} />
              <Route path="/my-profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
      <ToastContainer
        position="bottom-right"
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
