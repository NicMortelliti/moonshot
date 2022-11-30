import React, { useEffect } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { reLogin } from "./features/auth/authSlice";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Refresh user session if possible
  useEffect(() => {
    if (!user) {
      dispatch(reLogin());
    }
  }, [dispatch, user]);

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      {/* <ToastContainer /> */}
    </>
  );
};

export default App;
