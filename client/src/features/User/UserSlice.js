import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user",
  initialState: {
    data: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: [],
  },
};

// User Login
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

// User Logout
export const fetchUserLogout = createAsyncThunk("users/fetchUserLogout", () => {
  return fetch("/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      return null;
    } else {
      r.json().then((err) => err.errors);
    }
  });
});

// User Signup
export const fetchUserSignup = createAsyncThunk(
  "users/fetchUserSignup",
  (userSignup) => {
    // Return promise with user data
    return fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSignup),
    })
      .then((r) => r.json())
      .then((data) => data);
  }
);

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
    userSignup(state, action) {
      state.user = action.payload;
    },
    clearSate(state) {
      state.user = initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state = initialState;
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.errorMessages = action.errors;
        state.isError = true;
        state.isFetching = false;
      })

      // Logout User
      .addCase(fetchUserLogout.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.errorMessages = action.payload.errors;
        state.data = clearState();
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(fetchUserLogout.rejected, (state, action) => {
        state.errorMessages = action.errors;
        state.isError = true;
        state.isFetching = false;
      })

      // Signup User
      .addCase(fetchUserSignup.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchUserSignup.fulfilled, (state, action) => {
        state.errorMessages = action.payload.errors;
        state.data = action.payload;
        state.isError = false;
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(fetchUserSignup.rejected, (state, action) => {
        state.errorMessages = action.errors;
        state.isError = true;
        state.isFetching = false;
      });
  },
});

export const { clearState, userLogin, userSignup } = userSlice.actions;

export default userSlice.reducer;
