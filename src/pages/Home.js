import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Menu from "../components/Menu";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  function activateMenu() {
    setActiveMenu((prevValue) => !prevValue);
  }

  return (
    <div className={`Main fade-in slide${currentSlide}`}>
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
      <div className="title-text">
        <h1>HAIR BY MADDY KATE</h1>
        <h3>Blonde | Lived-in Color | Extensions</h3>
      </div>
    </div>
  );
}
