import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "../features/User/UserSlice";

export default store({
  reducer: {
    user: userSlice.reducer,
  },
});
