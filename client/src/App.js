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
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import { reLogin } from "./features/auth/authSlice";

// Styled Components
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/*" element={<Landing />} />
              <Route exact path="/home" element={<Dashboard />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
