import styled from "styled-components";

const ButtonPrimary = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: ${({ margin }) => margin || 0};
  padding: 15px 60px;
  background-color: ${({ theme }) => theme.bgColors.button};
  color: ${({ theme }) => theme.colors.button};

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

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const MinimalButton = styled.button`
  background-color: transparent;
  color: ${({ theme, alert }) => (alert && theme.alert) || theme.colors.button};
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin: ${({ margin }) => margin || 0};
  text-align: ${({ textAlign }) => textAlign || "center"};

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
  handleClick,
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
          alert={alert}
          name={name}
          type={type}
          onClick={(e) => handleClick(e)}>
          {text}
        </ButtonPrimary>
      );
  }
};
