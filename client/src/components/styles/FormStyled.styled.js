import styled from "styled-components";
import { keyframes } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// colors
const inputBackground = "rgba(57, 63, 84, 0.8)";
const inputTextInactive = "#7881A1";
const inputTextActive = "#BFD2FF";

// gradient animation
const animate = keyframes`  
  0%{background-position:0 0}
  100%{background-position:100% 0}
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  max-width: 400px;
  margin: 10px 10px;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: ${inputBackground};
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: ${animate} 3s linear infinite;
  }

  & > input {
    background-color: transparent;
    border-style: none;
    outline: none;
    flex-grow: 1;
    color: ${inputTextActive};
    font-size: 1.5rem;
    line-height: 2rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: ${inputTextInactive};
    }
  }
`;
