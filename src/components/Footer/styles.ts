import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: ${({ theme }) => theme.body};
  padding: 2.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.text};
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.text};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.text};
  }
`;

export const Extra = styled("section")`
  background: ${({ theme }) => theme.body};
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
  border-top: 1px solid ${({ theme }) => theme.text};
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: ${({ theme }) => theme.text};
    text-underline-position: under;
    text-decoration: ${({ theme }) => theme.text} wavy underline;
  }
`;

export const Chat = styled("p")`
  color: ${({ theme }) => theme.text};
  max-width: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: ${({ theme }) => theme.text};
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
