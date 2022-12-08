import React from "react";
import Attributions from "../components/images/Attributions";
import spacestation from "../components/images/spacestation.jpg";

const Landing = () => {
  return (
    <div>
      <Attributions />
      <img src={spacestation} alt="Spacestation" />
    </div>
  );
};

export default Landing;
