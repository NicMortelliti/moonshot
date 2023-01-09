import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reservationService from "./reservationService";
import { toast } from "react-toastify";

const initialState = {
  reservations: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

// Fetch user reservations
export const getReservations = createAsyncThunk(
  "reservations/get",
  async (_args, { rejectWithValue }) => {
    try {
      return await reservationService.getReservations();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete user reservation
export const deleteReservation = createAsyncThunk(
  "reservations/delete",
  async (id, { rejectWithValue }) => {
    try {
      const result = await reservationService.deleteReservation(id);
      toast.success("Successfully deleted your reservation.");
      return result;
    } catch (error) {
      toast.warn(error.error);
      return rejectWithValue(error);
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
        state.reservations = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.reservations = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteReservation.pending, (state) => {
        // state.reservations = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        // state.reservations = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

// export const { reset } = reservationSlice.actions;
export default reservationSlice.reducer;
