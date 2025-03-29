import { Theme } from "../../styles/ThemeContext";

export interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
  theme?: Theme;
  name?: string;
}
