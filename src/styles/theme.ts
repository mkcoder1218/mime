import "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#000000",
  primary: "#000000",
  secondary: "#000000",
  background: "#fff",
  inputBackground: "rgb(241, 242, 243)",
  inputFocus: "#000000",
  linkColor: "#000000",
  linkHover: "#000000",
  secondaryText: "#000000",
  secondaryBackground: "#ffffff",
  secondaryBorder: "#000000",
};

export const darkTheme = {
  body: "#1a1a1a",
  text: "#ffffff",
  primary: "#ffffff",
  secondary: "#ffffff",
  background: "#1a1a1a",
  inputBackground: "#2d2d2d",
  inputFocus: "#ffffff",
  linkColor: "#ffffff",
  linkHover: "#ffffff",
  secondaryText: "#ffffff",
  secondaryBackground: "#1a1a1a",
  secondaryBorder: "#ffffff",
};

export type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
