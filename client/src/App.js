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
import Dashboard from "./pages/Dashboard";
import { reLogin } from "./features/auth/authSlice";

// Styled Components
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { Wrapper, Wallpaper } from "./components/styles/Layout.styled";

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
        <Wrapper>
          <Header />
          <Wallpaper>
            <Routes>
              <Route path="/" element={!user ? <Landing /> : <Dashboard />}>
                {!user ? (
                  <>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                  </>
                ) : (
                  <>
                    {/* User logged-in routes */}
                    <Route path="my-trips" element={<Reservations />} />
                    <Route path="flight-search" element={<Booking />} />
                    <Route path="my-profile" element={<Profile />} />
                  </>
                )}
              </Route>
            </Routes>
            <Footer />
          </Wallpaper>
        </Wrapper>
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
