import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ color, children, onClick, name }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} name={name}>
    {children}
  </StyledButton>
);
