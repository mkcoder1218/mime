import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface Theme {
  body: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  cardBg: string;
  shadow: string;
  background: string;
  inputBackground: string;
  inputFocus: string;
  linkColor: string;
  linkHover: string;
  secondaryText: string;
  secondaryBackground: string;
  secondaryBorder: string;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const lightTheme: Theme = {
  body: "#FFFFFF",
  text: "#2D3436",
  primary: "#6C5CE7",
  secondary: "#A8A4E6",
  accent: "#00B894",
  gradient: "linear-gradient(135deg, #6C5CE7 0%, #A8A4E6 100%)",
  cardBg: "#F8F9FA",
  shadow: "rgba(0, 0, 0, 0.1)",
  background: "#FFFFFF",
  inputBackground: "#F8F9FA",
  inputFocus: "#6C5CE7",
  linkColor: "#6C5CE7",
  linkHover: "#A8A4E6",
  secondaryText: "#2D3436",
  secondaryBackground: "#F8F9FA",
  secondaryBorder: "#E9ECEF",
};

export const darkTheme: Theme = {
  body: "#2D3436",
  text: "#FFFFFF",
  primary: "#A8A4E6",
  secondary: "#6C5CE7",
  accent: "#00B894",
  gradient: "linear-gradient(135deg, #A8A4E6 0%, #6C5CE7 100%)",
  cardBg: "#353B48",
  shadow: "rgba(0, 0, 0, 0.3)",
  background: "#2D3436",
  inputBackground: "#353B48",
  inputFocus: "#A8A4E6",
  linkColor: "#A8A4E6",
  linkHover: "#6C5CE7",
  secondaryText: "#FFFFFF",
  secondaryBackground: "#353B48",
  secondaryBorder: "#2D3436",
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
