import styled from "styled-components";
import { Flex } from "./Flex.styled";

export const Form = styled.form`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: stretch;
`;

// colors
const inputBackground = "rgba(57, 63, 84, 0.1)";
const inputTextInactive = "#7881A1";
const inputTextActive = "#BFD2FF";

export const InputContainer = styled(Flex)`
  padding: 0.5rem 0.5rem 0;
  background: ${inputBackground};
  border-bottom: 2px solid ${({ theme }) => theme.accent || "white"};

  input {
    width: inherit;
    display: flex;
    background-color: transparent;
    border: none;
    outline: none;
    flex-grow: 1;
    color: ${inputTextActive};
    font-size: 1.2rem;
    line-height: 2rem;
    &::-webkit-input-placeholder {
      color: ${inputTextInactive};
    }
  }
`;
