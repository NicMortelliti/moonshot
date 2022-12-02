import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // Grab properties from auth state
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (message && isError) {
      message.errors.map((each) => {
        toast.error(each);
      });
    }
  }, [isError]);

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
