import styled from "styled-components";

const ButtonPrimary = styled.button`
  border: none;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1em;
  margin: ${({ margin }) => margin || 0};
  padding: 1em 1.5em;
  background-color: transparent;
  border: 0.1em solid ${({ theme }) => theme.bgColors.button};
  color: ${({ theme }) => theme.colors.button};

  width: fit-content;
  align-self: center;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const ButtonSecondary = styled.button`
  background-color: transparent;
  color: ${({ theme, alert }) => (alert && theme.alert) || theme.colors.button};
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin: ${({ margin }) => margin || 0};
  text-align: ${({ textAlign }) => textAlign || "center"};

  width: fit-content;
  align-self: center;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const Button = ({
  alert,
  name,
  secondary = false,
  text,
  handleClick = null,
  type = null,
}) => {
  switch (true) {
    case secondary:
      return (
        <ButtonSecondary
          alert={alert}
          name={name}
          type={type}
          onClick={(e) => handleClick(e)}>
          {text}
        </ButtonSecondary>
      );

    default:
      return (
        <ButtonPrimary
          name={name}
          type={type}
          alert={alert}
          onClick={(e) => handleClick(e)}>
          {text}
        </ButtonPrimary>
      );
  }
};
