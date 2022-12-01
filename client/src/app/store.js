import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "../features/auth/authSlice";
import reservationReducer from "../features/reservations/reservationSlice";
import bookingReducer from "../features/booking/bookingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationReducer,
    booking: bookingReducer,
  },
});

export default store;
