import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { userSlice } from "../features/User/UserSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
