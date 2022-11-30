import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reservationService from "./reservationService";

const initialState = {
  reservations: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Fetch user reservations
export const getReservations = createAsyncThunk(
  "reservations/get",
  async (thunkAPI) => {
    try {
      return await reservationService.getReservations();
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.reponse.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Reservation slice
export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reservations = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.reservations = null;
      });
  },
});

// export const { reset } = reservationSlice.actions;
export default reservationSlice.reducer;
