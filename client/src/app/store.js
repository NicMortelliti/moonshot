import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "../features/User/UserSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
