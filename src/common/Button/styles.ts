import styled from "styled-components";
import { Theme } from "../../styles/ThemeContext";

interface ButtonProps {
  color?: string;
  fixedWidth?: string;
}

export const Button = styled("button")<ButtonProps>`
  border-radius: 4px;
  background: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "primary"
      ? theme.primary
      : color === "secondary"
      ? theme.secondary
      : color === "header"
      ? "transparent"
      : theme.primary};
  color: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "header" ? theme.text : theme.body};
  padding: ${({ color }: { color?: string }) =>
    color === "header" ? "0.5rem 1.5rem" : "0.8rem 2.5rem"};
  font-weight: 500;
  cursor: pointer;
  width: ${({ fixedWidth }: { fixedWidth?: string }) =>
    fixedWidth ? fixedWidth : "auto"};
  border: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "header" ? `2px solid ${theme.primary}` : "none"};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color === "header" ? theme.primary : "transparent"};

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ color, theme }: { color?: string; theme: Theme }) =>
        color === "header" ? `${theme.primary}40` : `${theme.primary}40`};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &:hover {
      border-color: inherit;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: ${({ color }: { color?: string }) =>
      color === "header" ? "0.4rem 1.2rem" : "0.6rem 2rem"};
    font-size: 0.9rem;
  }
`;
