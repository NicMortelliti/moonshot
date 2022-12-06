import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsClicked } from "../../features/dialogs/dialogSlice";

const ConfirmDialog = (message, confirmText, ConfirmDialog) => {
  const { messages, buttons } = useSelector((state) => state.dialog);
  const dispatch = useDispatch;

  // Render a message for each message in the store.
  // We have 2 messages in the store, so at most, this
  // function will produce two messages.
  const RenderMessages = () => {
    return messages.map((each) => {
      if (each.message !== null) {
        return <p key={each.message}>{each.message}</p>;
      }
    });
  };

  // Render a button for each button in the store.
  // We have 2 buttons in the store, so at most, this
  // function will produce two buttons (e.g. "Confirm"
  // and "Cancel").
  const RenderButtons = () => {
    return buttons.map((each) => {
      if (each.button !== null) {
        return (
          <button
            key={each.button}
            onClick={() => dispatch(setIsClicked(each.button))}
          >
            {each.button}
          </button>
        );
      }
    });
  };

  const runOnClickAction = (action) => null;

  return (
    <div>
      <p>Confirm Dialog</p>
      <RenderMessages />
      <RenderButtons />
    </div>
  );
};

export default ConfirmDialog;
