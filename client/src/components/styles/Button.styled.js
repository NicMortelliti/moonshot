import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  /* Appearance */
  box-shadow: ${({ secondary }) =>
    secondary ? "none" : `0 0 1em rgba(0, 0, 0, 0.15)`};
  background-color: ${({ theme, alert, primary }) =>
    alert ? theme.alert : primary ? `${theme.colors.button}33` : "transparent"};
  border: ${({ theme, alert, primary }) =>
    alert
      ? `0.1em solid ${theme.alert}`
      : primary
      ? `0.1em solid ${theme.colors.button}`
      : "none"};
  color: ${({ theme, alert, primary }) =>
    alert ? theme.dark : primary ? `${theme.dark}` : `${theme.colors.button}`};

  /* Text Settings */
  font-size: 1em;
  font-weight: ${({ secondary }) => (secondary ? "bold" : "normal")};
  text-align: ${({ textAlign }) => textAlign || "center"};

  /* Size and Positioning */
  width: fit-content;
  align-self: center;
  margin: ${({ margin }) => margin || 0};
  padding: 1em 1.5em;

  /* On Hover */
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
