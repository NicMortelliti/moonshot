import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "../features/User/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
