import React from "react";
import { useSelector } from "react-redux";

const ConfirmDialog = (message, confirmText, ConfirmDialog) => {
  const { messages, buttons } = useSelector((state) => state.dialog);

  // Render a message for each message in the store.
  // We have 2 messages in the store, so at most, this
  // function will produce two messages.
  const RenderMessages = () => {
    return messages.map((each) => {
      if (each.message !== null) {
        return <p>{each.message}</p>;
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
          <button onClick={(e) => console.log(each.button.actionOnClick)}>
            {each.button}
          </button>
        );
      }
    });
  };

  return (
    <div>
      <p>Confirm Dialog</p>
      <RenderMessages />
      <RenderButtons />
    </div>
  );
};

export default ConfirmDialog;
