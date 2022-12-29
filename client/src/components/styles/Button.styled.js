import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  /* Appearance */
  box-shadow: ${({ secondary }) =>
    secondary ? "none" : `0 0 1em rgba(0, 0, 0, 0.15)`};
  background-color: transparent;
  border: ${({ theme, secondary }) =>
    secondary ? "none" : `0.1em solid ${theme.bgColors.button}`};
  color: ${({ theme, alert }) =>
    (alert && theme.alert) || `${theme.colors.button}`};

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
