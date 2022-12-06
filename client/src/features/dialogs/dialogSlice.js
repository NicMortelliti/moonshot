import { createSlice } from "@reduxjs/toolkit";

// TODO Add to initial state a way to track what
// TODO button has been selected. That way, the
// TODO part of the app that dispatches a dialog
// TODO will know what to do when a button is clicked
const initialState = {
  messages: [{ message: null }, { message: null }],
  buttons: [
    { button: null, actionOnClick: null },
    { button: null, actionOnClick: null },
  ],
};

// Reservation slice
export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    reset: (state) => initialState,
    confirmDialog: (state, action) => {
      for (let i = 0; i < action.payload.messages.length; i++) {
        state.messages[i].message = action.payload.messages[i].message;
      }

      for (let i = 0; i < action.payload.buttons.length; i++) {
        state.buttons[i].button = action.payload.buttons[i].button;
        state.buttons[i].actionOnClick =
          action.payload.buttons[i].actionOnClick;
      }
    },
  },
  extraReducers: () => {},
});

export const { confirmDialog, reset } = dialogSlice.actions;
export default dialogSlice.reducer;
