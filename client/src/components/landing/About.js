import React from "react";

// Styled components
import { Container } from "../styles/Container.styled";
import { H1, H2, P } from "../styles/Text.styled";

const About = () => {
  return (
    <Container>
      <H1 light fancy large>
        MOONSHOT
      </H1>
      <H2 light fancy>
        The final frontier is just the beginning...
      </H2>
      <P light fancy>
        Space tourism is now more accessible than ever before. Moonshot offers regular flights to the cosmos, giving you the opportunity to experience the thrill of weightlessness and witness the beauty of our solar system firsthand. Our state-of-the-art spacecraft and highly trained pilots ensure a safe and comfortable journey beyond the atmosphere. Imagine the awe-inspiring views of the universe and the chance to be one of the few people in history to travel to space. Don't miss this opportunity to explore the final frontier. Book your flight today and join us on a journey of a lifetime.
      </P>
    </Container>
  );
};

export default About;
