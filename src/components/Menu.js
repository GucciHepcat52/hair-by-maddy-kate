import React from "react";
import "./Components.css";
import { Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";

import { Link } from "react-router-dom";

export default function Menu({ isActive }) {
  return (
    <div className={`Menu ${isActive ? "active" : ""}`}>
      <Link className="link" to={"/"}>
        <h3>HOME</h3>
      </Link>
      <Link className="link" to={"/about"}>
        <h3>ABOUT</h3>
      </Link>
      <Link className="link" to={"/services"}>
        <h3>SERVICES</h3>
      </Link>
      <Link className="link" to={"/future-clients"}>
        <h3>FUTURE CLIENTS</h3>
      </Link>
      <h3>BOOK NOW</h3>
      <Button className="socials">
        <a
          href="https://www.instagram.com/hairbymaddykate/"
          target="blank"
          style={{ color: "black" }}
        >
          <Instagram />
        </a>
      </Button>
    </div>
  );
}
