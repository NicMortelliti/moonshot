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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, libero.
        Corporis nostrum dolores saepe sequi culpa? Tenetur consectetur
        blanditiis sunt corporis nam cupiditate eaque ipsam voluptas assumenda
        repudiandae. Distinctio, quidem?
      </P>
    </Container>
  );
};

export default About;
