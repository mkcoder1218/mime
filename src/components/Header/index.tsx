import React, { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { ThemedSvgIcon } from "../../common/ThemedSvgIcon";
import { Button } from "../../common/Button";
import { useTheme } from "../../styles/ThemeContext";
import { useTranslation } from "react-i18next";
import { Switch } from "../ui/switch";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  ScrollNavLink,
  Label,
  Outline,
  Span,
  ThemeToggleButton,
} from "./styles";
import { Link } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
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
        <ScrollNavLink onClick={() => scrollTo("contact")}>
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
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Link to="/">
              <ThemedSvgIcon src="logo.svg" width="101px" height="64px" />
            </Link>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>{t("Menu")}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
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
