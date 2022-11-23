import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { loginApi } from "../services/login";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(loginApi.middleware),
});
