import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Menu from "../components/Menu";

export default function Services() {
  const [activeMenu, setActiveMenu] = useState(false);

  function activateMenu() {
    setActiveMenu((prevValue) => !prevValue);
  }
  return (
    <div className="Main fade-in services-slide">
      {activeMenu ? (
        <IconButton
          className="menuIconButton"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={activateMenu}
        >
          <KeyboardArrowLeft />
        </IconButton>
      ) : (
        <IconButton
          className="menuIconButton"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={activateMenu}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Menu isActive={activeMenu} />
      <div className="services-text">
        <h1>Services</h1>
      </div>
    </div>
  );
}
