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

// Send flight booking to API
export const bookFlight = createAsyncThunk(
  "booking/book",
  async ({ userId, flightId }, { rejectWithValue }) => {
    try {
      return await bookingService.bookFlight(userId, flightId);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setOrigin: (state, action) => {
      return {
        ...state,
        origin: action.payload,
      };
    },
    setDestination: (state, action) => {
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
      })
      .addCase(bookFlight.pending, (state) => {
        state.data = null;
        // state.origin = null;
        // state.destination = null;
        state.flight = null;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = null;
      })
      .addCase(bookFlight.fulfilled, (state, action) => {
        state.data = null;
        state.origin = null;
        state.destination = null;
        state.flight = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = null;
      })
      .addCase(bookFlight.rejected, (state, action) => {
        state.data = null;
        // state.origin = null;
        // state.destination = null;
        state.flight = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset, setOrigin, setDestination } = bookingSlice.actions;
export default bookingSlice.reducer;
