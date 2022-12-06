import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "../features/auth/authSlice";
import bookingReducer from "../features/booking/bookingSlice";
import reservationReducer from "../features/reservations/reservationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    reservations: reservationReducer,
  },
});

export default store;
