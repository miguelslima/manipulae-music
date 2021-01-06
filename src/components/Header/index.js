import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container, LogoContainer, FavoritTitle } from "./styles";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">
        <LogoContainer>
          <img width="250" src={logo} />
          Music
        </LogoContainer>
      </Link>

      <FavoritTitle>
        <Link to="favorit">
          <p>Vejas suas músicas favoritas</p>
        </Link>
      </FavoritTitle>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.12, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
