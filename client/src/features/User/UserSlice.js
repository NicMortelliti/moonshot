import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user",
  initialState: {
    userData: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
};

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  (userAuth) => {
    // Return promise with user data
    return fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userAuth),
    })
      .then((r) => r.json())
      .then((data) => data);
  }
);

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
      state.userData = action.payload;
      state.isFetching = false;
    },
    [fetchUserLogin.error](state, action) {
      state.errorMessage = action.payload;
      state.isError = true;
      state.isFetching = false;
    },
  },
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
