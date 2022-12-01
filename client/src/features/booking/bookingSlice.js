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

// Get list of destinations
export const getDestinations = createAsyncThunk(
  "booking/destinations",
  async (id, { rejectWithValue }) => {
    try {
      return await bookingService.getDestinations(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get list of flights
export const getFlights = createAsyncThunk(
  "booking/flights",
  async ({ origin, id }, { rejectWithValue }) => {
    try {
      return await bookingService.getFlights(origin, id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
    setOriginId: (state, action) => {
      return {
        ...state,
        origin: action.payload,
      };
    },
    setDestinationId: (state, action) => {
      return {
        ...state,
        destination: action.payload,
      };
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
        // state.origin = null;
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
      })
      .addCase(getFlights.pending, (state) => {
        state.data = null;
        // state.origin = null;
        // state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.origin = null;
        // state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(getFlights.rejected, (state, action) => {
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

export const { reset, setOriginId, setDestinationId } = bookingSlice.actions;
export default bookingSlice.reducer;
