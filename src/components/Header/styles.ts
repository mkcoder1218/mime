import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Theme } from "../../styles/ThemeContext";

export const HeaderSection = styled("header")`
  padding: 1.5rem 0;
  background: ${({ theme }: { theme: Theme }) => theme.body};

  .ant-row-space-between {
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-between;
    height: 64px;
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;
  line-height: 1;
  margin: 0;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
  }
`;

export const LogoText = styled("span")`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  letter-spacing: 0.5px;
  background: linear-gradient(
    135deg,
    ${({ theme }: { theme: Theme }) => theme.primary},
    ${({ theme }: { theme: Theme }) => theme.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }: { theme: Theme }) => theme.text};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  text-decoration: none;
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: ${({ theme }: { theme: Theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
    &:after {
      width: 100%;
    }
  }
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  display: flex;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  display: none;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 890px) {
    display: flex;
  }

  svg {
    fill: ${({ theme }: { theme: Theme }) => theme.text};
  }
`;

export const NotHidden = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  margin: 0;
`;

export const CustomNavLinkSmall = styled(Link)`
  font-size: 1.2rem;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  transition: color 0.2s ease-in-out;
  margin: 0.5rem 2rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: auto;

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

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const ScrollNavLink = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  transition: color 0.2s ease-in-out;
  margin: 0.5rem 2rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: auto;

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

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  display: flex;
  align-items: center;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.primary};
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ theme }: { theme: Theme }) => theme.text};

  @media only screen and (max-width: 890px) {
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;
