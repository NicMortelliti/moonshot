import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

export const fetchUserLogin = createAsyncThunk("user/fetchUserLogin", () => {
  // Return promise with user data
  return fetch("/sessions")
    .then((r) => r.json())
    .then((data) => data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // Handle async actions
    [fetchUserLogin.pending](state) {
      state.isFetching = true;
    },
    [fetchUserLogin.fulfilled](state, action) {
      state = action.payload;
      state.isFetching = false;
    },
    [fetchUserLogin.error](state, action) {
      state.errorMessage = action.payload;
      state.isError = true;
    },
  },
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
