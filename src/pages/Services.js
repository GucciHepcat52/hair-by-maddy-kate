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
        <div>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>1 Row Extension Initial Install</li>
            <li>1 Row Extension Move-up</li>
            <li>2 Row Extension Initial Install</li>
            <li>2 Row Extension Move-up</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>Full Highlight</li>
            <li>Partial Highlight</li>
            <li>Full Balayage</li>
            <li>Partial Balayage</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>All-over Color (Dark)</li>
            <li>Root Re-touch (Dark)</li>
            <li>Trim Added onto Color Service</li>
            <li>Deep Conditioning Treatment</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>Bridal/Event Updo Style</li>
            <li>Women's Haircut</li>
            <li>Money-piece Refresh</li>
            <li>Toner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
