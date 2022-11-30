import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleResponse } from "../../helpers/helpers";
import authService from "./authService";

const initialState = {
  user: null, // Null prevents checks for user === true from returning true
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Login User
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Re-Login User with cookie
export const reLogin = createAsyncThunk(
  "auth/relogin",
  async (_args, { rejectWithValue }) => {
    try {
      return await authService.reLogin();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Logout user
export const logout = createAsyncThunk(
  "auth/logout",
  async (_args, { rejectWithValue }) => {
    try {
      return await authService.logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(reLogin.pending, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(reLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(reLogin.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(logout.rejected, (state, action) => {
        // state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
