import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

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
      error.errors.map((each) => toast.error(each));
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
      error.errors.map((each) => toast.error(each));
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
      const result = await authService.logout();
      result.messages.map((each) => toast.success(each));
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Update user profile data (e.g. change password)
export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const result = await authService.updateUserData({ userId, userData });
      toast.success("Successfully updated your profile.");
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete user from database
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (_args, { rejectWithValue }) => {
    try {
      const result = await authService.deleteUser();
      toast.success("Successfully deleted your account.");
      return result;
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
      state.message = null;
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
      })
      .addCase(updateUserData.pending, (state) => {
        // state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        // state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        // state.user = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        // state.user = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
