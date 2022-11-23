import { createApi } from "@reduxjs/toolkit/dist/query";
import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/sessions" }),
  endpoints: (builder) => ({}),
});
