import styled from "styled-components";
import { keyframes } from "styled-components";

// colors
const inputBackground = "rgba(57, 63, 84, 0.8)";
const inputTextActive = "#7881A1";
const inputTextInactive = "#BFD2FF";

// gradient animation
const animate = keyframes`  
  0%{background-position:0 0}
  100%{background-position:100% 0}
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
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
`;

export const Input = styled.input`
  background-color: transparent;
  border-style: none;
  outline: none;
  flex-grow: 1;
  color: ${inputTextActive};
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: ${inputTextInactive};
  }
`;
