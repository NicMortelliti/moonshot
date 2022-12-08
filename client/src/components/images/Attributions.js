import React from "react";

// Styled Components
import { Button } from "../styles/Button.styled";

const Attributions = ({ setShowAttributions }) => {
  return (
    <div>
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/@bradskidley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Bradley Jasper Ybanez
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/collections/1284166/spaceship?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
      <Button onClick={() => setShowAttributions(false)}>Hide</Button>
    </div>
  );
};

export default Attributions;
