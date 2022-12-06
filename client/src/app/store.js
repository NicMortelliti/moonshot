import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "../features/auth/authSlice";
import bookingReducer from "../features/booking/bookingSlice";
import dialogReducer from "../features/dialogs/dialogSlice";
import reservationReducer from "../features/reservations/reservationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    dialog: dialogReducer,
    reservations: reservationReducer,
  },
});

export default store;
