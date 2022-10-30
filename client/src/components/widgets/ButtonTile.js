import React from "react";

function ButtonTile(id, title, subtitle, handleClick) {
  return (
    <button key={id} id={id} value={id} onClick={() => handleClick()}>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
    </button>
  );
}

export default ButtonTile;
