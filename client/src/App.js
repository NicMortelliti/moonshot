import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

// Styled Components
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";

const App = () => {
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
          </div>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
