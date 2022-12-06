import { createSlice } from "@reduxjs/toolkit";

// TODO Add to initial state a way to track what
// TODO button has been selected. That way, the
// TODO part of the app that dispatches a dialog
// TODO will know what to do when a button is clicked
const initialState = {
  messages: [{ message: null }, { message: null }],
  buttons: [
    { button: null, isClicked: false },
    { button: null, isClicked: false },
  ],
};

// Reservation slice
export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    reset: (state) => initialState,
    confirmDialog: (state, action) => {
      // Populate the messages store with messages passed in
      action.payload.messages.map((each, index) => {
        state.messages[index].message = each.message;
      });

      // Populate the buttons store with buttons passed in
      action.payload.buttons.map((each, index) => {
        state.buttons[index].button = each.button;
      });
    },
    setIsClicked: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: () => {},
});

export const { confirmDialog, reset, setIsClicked } = dialogSlice.actions;
export default dialogSlice.reducer;
