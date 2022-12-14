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
const inputBackground = "rgba(57, 63, 84, 0.8)";
const inputTextInactive = "#7881A1";
const inputTextActive = "#BFD2FF";

export const InputContainer = styled(Flex)`
  margin: 10px 10px;
  padding: 0.5rem;
  background: ${inputBackground};

  input {
    width: inherit;
    display: flex;
    background-color: transparent;
    border: none;
    outline: none;
    flex-grow: 1;
    color: ${inputTextActive};
    font-size: 1.5rem;
    line-height: 2rem;
    /* box-sizing: border-box; */
    &::-webkit-input-placeholder {
      color: ${inputTextInactive};
    }
  }
`;
