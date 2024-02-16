import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Menu from "../components/Menu";

export default function About() {
  const [activeMenu, setActiveMenu] = useState(false);

  function activateMenu() {
    setActiveMenu((prevValue) => !prevValue);
  }
  return (
    <div className="Main fade-in about-slide">
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
      <div className="about-text">
        <h1>ABOUT ME</h1>
        <p style={{ marginBottom: 0 }}>
          Hi!! I'm Maddy the stylist behind the chair and lover all things hair.
        </p>
        <br />
        <p style={{ marginBottom: 0, marginTop: 0 }}>
          I have been doing hair for over 6 years now and just absolutely LOVE
          it. I specialize in blondes, brondes, lived in hair, and extensions.
        </p>
        <br />
        <p style={{ marginTop: 0 }}>
          Ever since I was a little girl, I dreamed of being a hairstylist! I
          even started my own hair salon called “Pizzazz” in 3rd grade where I
          would wash girls hair in my sink at home. I would watch never ending
          YouTube videos to perfect braids and learn all that I could. I
          couldn't get enough. In highschool, did most of my senior year classes
          online so I could go to hair school and start living my dream as soon
          as possible. Every day since then has been an absolute dream. I can't
          believe I get to do what I love and continue to live my childhood
          dream everyday.
        </p>
        <p>
          Thank you so much for following along and supporting me. As I have
          reflected on my career, I have been overcome with so much gratitude
          for all of you and making my dreams a reality. 8 year old Maddy would
          be SO PROUD. Thank you for supporting my small business, posting,
          referring friends, and continuing to come back. I love and appreciate
          every single one of you. Hope to see you in my chair soon!!
        </p>
        <h2 style={{ borderBottom: "2px solid black" }}>Fun Facts</h2>
        <ul style={{ textAlign: "left" }}>
          <li>Born in CA, raised in AZ</li>
          <li>
            I am married to the love of my life and have the sweetest baby boy.
            Family is everything to me.
          </li>
          <li>I have been doing hair for 6 years!!</li>
          <li>I'm left handed</li>
          <li>Fluent in Spanish</li>
          <li>I love to travel</li>
          <li>I love to sing and play the violin + piano</li>
          <li>I love shopping</li>
          <li>The beach is my happy place</li>
        </ul>
      </div>
    </div>
  );
}
