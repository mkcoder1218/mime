import { useEffect, useState } from "react";
import { useTheme } from "../../styles/ThemeContext";
import { SvgIconProps } from "../types";

export const ThemedSvgIcon = ({ src, width, height }: SvgIconProps) => {
  const { isDarkMode } = useTheme();
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(`/img/svg/${src}`)
      .then((response) => response.text())
      .then((data) => {
        // Only replace colors if it's not a flag
        if (!src.includes("ethiopia.svg")) {
          const themedSvg = data
            .replace(
              /fill="#[0-9A-Fa-f]{6}"/g,
              `fill="${isDarkMode ? "#ffffff" : "#000000"}"`
            )
            .replace(
              /fill="#[0-9A-Fa-f]{3}"/g,
              `fill="${isDarkMode ? "#ffffff" : "#000000"}"`
            )
            .replace(
              /stroke="#[0-9A-Fa-f]{6}"/g,
              `stroke="${isDarkMode ? "#ffffff" : "#000000"}"`
            )
            .replace(
              /stroke="#[0-9A-Fa-f]{3}"/g,
              `stroke="${isDarkMode ? "#ffffff" : "#000000"}"`
            );
          setSvgContent(themedSvg);
        } else {
          setSvgContent(data);
        }
      });
  }, [src, isDarkMode]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ width, height }}
    />
  );
};
