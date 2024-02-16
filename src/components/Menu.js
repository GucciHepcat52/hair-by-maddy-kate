import React, { useState } from "react";
import "./Components.css";
import { Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { Modal, Box, Fade } from "@mui/material";

import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  fontFamily: `"Cormorant", sans-serif`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " 2px solid lightgray",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  backgroundColor: "#f0f0f0",
  textAlign: "center",
};

export default function Menu({ isActive, activateMenu }) {
  const [bookNow, setBookNow] = useState(false);

  function handleModal() {
    setBookNow((prevVal) => !prevVal);
  }

  function handleClick() {
    activateMenu();
    handleModal();
  }
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
      {/* <Link className="link" to={"/gallery"}>
        <h3>GALLERY</h3>
      </Link> */}
      <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
        BOOK NOW
      </h3>
      <Button className="socials">
        <a
          href="https://www.instagram.com/hairbymaddykate/"
          target="blank"
          style={{ color: "black" }}
        >
          <Instagram />
        </a>
      </Button>
      <Modal open={bookNow} onClose={handleModal}>
        <Fade in={bookNow}>
          <Box style={style}>
            <h3>
              If you would like to book with me, send me a DM through my
              Instagram Account!
            </h3>
            <Button className="socials">
              <a
                href="https://www.instagram.com/hairbymaddykate/"
                target="blank"
                style={{ color: "black" }}
              >
                {/* <Instagram /> */}
                CLICK HERE
              </a>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
