import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme,  } = useContext(ThemeContext);

  const { isLightTheme, light, dark } = theme;
  const themes = isLightTheme ? light : dark;

  return (
    <nav style={{ background: themes.ui, color: themes.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
