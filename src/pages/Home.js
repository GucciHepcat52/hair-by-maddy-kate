import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Menu from "../components/Menu";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Main">
      <Menu />
      <IconButton
        className="menuIconButton"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => alert("Menu button clicked!")}
      >
        <MenuIcon />
      </IconButton>
      <div className="Title">
        <div className={`slides slide${currentSlide}`}></div>
        <div className="title-text">
          <h1>HAIR BY MADDY KATE</h1>
          <h3>Blonde | Lived-in Color | Extensions</h3>
        </div>
      </div>
      {/* <div className="review">
        <img
          src={hairstyle}
          alt="client-one"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat." - Ashley P.
        </p>
      </div>
      <div className="review">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat." - Ashley P.
        </p>
        <img
          src={hairstyle}
          alt="client-one"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div> */}
    </div>
  );
}
