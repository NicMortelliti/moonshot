import React from "react";

// Styled components
import { Flex } from "../components/styles/Flex.styled";
import { H1 } from "../components/styles/Text.styled";
import { Content } from "../components/styles/Layout.styled";

const NotAuthorized = () => {
  return (
    <Content frosted>
      <Flex direction="column" margin="auto" justifyContent="center">
        <H1 light>Not</H1>
        <H1 light>Authorized</H1>
      </Flex>
    </Content>
  );
};

export default NotAuthorized;
