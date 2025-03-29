import styled from "styled-components";
import { ButtonProps } from "./types";
import { Theme } from "../../styles/ThemeContext";

export const StyledButton = styled("button")<ButtonProps>`
  border: 0;
  display: inline-block;
  line-height: 1;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "header"
      ? "transparent"
      : color === "primary"
      ? theme.primary
      : theme.secondary};
  box-shadow: ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "header" ? "none" : `0 2px 4px ${theme.shadow}`};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color === "header" ? "none" : `0 4px 8px ${theme.shadow}`};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: ${({ color, theme }: { color?: string; theme: Theme }) =>
      color === "header" ? "none" : `0 0 0 2px ${theme.accent}`};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

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
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: ${({ theme }: { theme: Theme }) => theme.text};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  ${({ color, theme }: { color?: string; theme: Theme }) =>
    color === "header" &&
    `
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.text};
    border: none;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background: ${theme.text};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  `}
`;
