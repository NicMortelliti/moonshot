import { createSlice, createAsyncThunk } from "@redux/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: "",
    last_name: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer goes here
  },
});

export const userSelector = state => state.user
