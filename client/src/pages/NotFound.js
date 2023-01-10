import React from "react";

// Styled components
import { Flex } from "../components/styles/Flex.styled";
import { H1, H2 } from "../components/styles/Text.styled";
import { Content } from "../components/styles/Layout.styled";

const NotFound = () => {
  return (
    <Content frosted>
      <Flex direction="column" margin="auto" justifyContent="center">
        <H1 light>404</H1>
        <H2 light>Page Not Found</H2>
      </Flex>
    </Content>
  );
};

export default NotFound;
