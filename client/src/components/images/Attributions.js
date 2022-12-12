import React from "react";

// Styled Components
import { Flex } from "../styles/Flex.styled";
import {  FooterFinePrint } from "../styles/Footer.styled";

const Attributions = () => {
  return (
    <Flex justify="flex-start" align="flex-start">
      <FooterFinePrint>
        Photo by{" "}
        <a href="https://unsplash.com/@bradskidley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Bradley Jasper Ybanez
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/collections/1284166/spaceship?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </FooterFinePrint>
    </Flex>
  );
};

export default Attributions;
