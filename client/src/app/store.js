import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "../features/auth/authSlice";
import reservationReducer from "../features/reservations/reservationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationReducer,
  },
});

export default store;
