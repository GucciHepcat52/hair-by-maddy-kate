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
      <Menu isActive={activeMenu} activateMenu={activateMenu} />
      <div className="services-text">
        <h1 style={{ marginBottom: "10px" }}>SERVICES</h1>
        <div>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>1 Row Extension Initial Install ($110+)</li>
            <li>1 Row Extension Move-up ($90+)</li>
            <li>2 Row Extension Initial Install ($220+)</li>
            <li>2 Row Extension Move-up ($180+)</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>Full Highlight ($185+)</li>
            <li>Partial Highlight ($165+)</li>
            <li>Full Balayage ($185+)</li>
            <li>Partial Balayage ($165+)</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>All-over Color (Dark) ($130+)</li>
            <li>Root Re-touch (Dark) ($90+)</li>
            <li>Trim Added onto Color Service ($20+)</li>
            <li>Deep Conditioning Treatment ($10+)</li>
          </ul>
          <ul
            style={{
              textAlign: "left",
            }}
          >
            <li>Bridal/Event Updo Style ($75+)</li>
            <li>Women's Haircut ($55+)</li>
            <li>Money-piece Refresh ($100+)</li>
            <li>Toner ($65+)</li>
            <li>Extra Bowl Mixture ($15+)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
