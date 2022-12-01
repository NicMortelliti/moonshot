import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const initialState = {
  data: null, // Null prevents checks for data === true from returning true
  origin: null,
  destination: null,
  flight: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

// Get list of origins
export const getOrigins = createAsyncThunk(
  "booking/origins",
  async (_args, { rejectWithValue }) => {
    try {
      return await bookingService.getOrigins();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Set location
export const getDestinations = createAsyncThunk(
  "booking/destinations",
  async (id, state, { rejectWithValue }) => {
    try {
      state.origin = id;
      return await bookingService.getDestinations();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// TODO Get Flights
export const getFlights = () => console.log("Feature not yet implemented");

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = null;
      state.origin = null;
      state.destination = null;
      state.flight = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrigins.pending, (state) => {
        state.data = null;
        state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getOrigins.fulfilled, (state, action) => {
        state.data = action.payload;
        state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(getOrigins.rejected, (state, action) => {
        state.data = null;
        state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getDestinations.pending, (state) => {
        state.data = null;
        // state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.data = null;
        state.origin = null;
        state.destination = null;
        state.flight = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;
