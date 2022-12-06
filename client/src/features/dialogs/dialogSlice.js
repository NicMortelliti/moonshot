import { createSlice } from "@reduxjs/toolkit";

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
      console.log(action.payload.messages);
      console.log(action.payload.buttons);

      for (let i = 0; i < action.payload.messages.length; i++) {
        state.messages[i].message = action.payload.messages[i].message;
      }

      for (let i = 0; i < action.payload.buttons.length; i++) {
        state.buttons[i].button = action.payload.buttons[i].button;
      }
    },
  },
  extraReducers: () => {},
});

export const { confirmDialog, reset } = dialogSlice.actions;
export default dialogSlice.reducer;
