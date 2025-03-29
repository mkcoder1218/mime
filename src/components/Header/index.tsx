import React, { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useTheme } from "../../styles/ThemeContext";
import { useTranslation } from "react-i18next";
import { Switch } from "../ui/switch";
import {
  HeaderSection,
  LogoContainer,
  LogoText,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  ScrollNavLink,
  Label,
  Outline,
  Span,
  ThemeToggleButton,
  NavLink,
} from "./styles";
import { Link } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setVisibility(false);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall to="/">
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/about">
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/contact">
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/policy">
          <Span>{t("Policy")}</Span>
        </CustomNavLinkSmall>
        <ScrollNavLink onClick={() => scrollToSection("contact")}>
          <Button color="header">{t("Contact")}</Button>
        </ScrollNavLink>
        <ThemeToggleButton>
          <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
        </ThemeToggleButton>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/">
            <LogoText>Mime Technology</LogoText>
          </LogoContainer>
          <NotHidden>
            <NavLink to="/">
              <Span>{t("Home")}</Span>
            </NavLink>
            <NavLink to="/about">
              <Span>{t("About")}</Span>
            </NavLink>
            <NavLink to="/contact">
              <Span>{t("Contact")}</Span>
            </NavLink>
            <NavLink to="/policy">
              <Span>{t("Policy")}</Span>
            </NavLink>
            <ScrollNavLink onClick={() => scrollToSection("contact")}>
              <Button color="header">{t("Contact")}</Button>
            </ScrollNavLink>
            <ThemeToggleButton>
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            </ThemeToggleButton>
          </NotHidden>
          <Burger>
            <Outline onClick={toggleButton} />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2rem" }}>
            <Label onClick={toggleButton}>
              <Col span={24}>
                <Menu>{t("Menu")}</Menu>
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
