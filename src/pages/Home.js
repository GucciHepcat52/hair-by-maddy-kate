import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Menu from "../components/Menu";
import pic1 from "../assets/profile-pic-1-2.jpg";
import pic2 from "../assets/profile-pic-2-2.jpg";
import pic3 from "../assets/profile-pic-3-2.jpg";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);
  // const slides = [
  //   <img key={1} src={pic1} alt="pic one" className="slide" loading="lazy" />,
  //   <img key={2} src={pic2} alt="pic two" className="slide" loading="lazy" />,
  //   <img key={3} src={pic3} alt="pic three" className="slide" loading="lazy" />,
  // ];

  useEffect(() => {
    const imagesToPreload = [pic1, pic2, pic3];
    const preloaded = imagesToPreload.map((src, index) => {
      const img = new Image();
      img.src = src;
      return (
        <img
          key={index + 1}
          src={src}
          alt={`pic ${index + 1}`}
          className="slide"
          loading="lazy"
        />
      );
    });
    setPreloadedImages(preloaded);

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % preloaded.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [preloadedImages.length]);

  function activateMenu() {
    setActiveMenu((prevValue) => !prevValue);
  }

  return (
    <div className={`Main fade-in`}>
      {activeMenu ? (
        <IconButton
          className="menuIconButton"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={activateMenu}
        >
          <KeyboardArrowLeft style={{ fontSize: "2rem" }} />
        </IconButton>
      ) : (
        <IconButton
          className="menuIconButton"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={activateMenu}
        >
          <MenuIcon style={{ fontSize: "2rem" }} />
        </IconButton>
      )}
      <Menu isActive={activeMenu} activateMenu={activateMenu} />
      <div className="title-text">
        <h1>HAIR BY MADDY KATE</h1>
        <h3>Blonde | Lived-in Color | Extensions</h3>
      </div>
      <div className="slide-container">{preloadedImages[slideIndex]}</div>
    </div>
  );
}
