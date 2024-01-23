import React, { useState, useEffect } from "react";
import "./Components.css";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to={"/"}>
        <h3>Home</h3>
      </Link>
      <Link to={"/about"}>
        <h3>About</h3>
      </Link>
      <Link to={"/services"}>
        <h3>Services</h3>
      </Link>
      <Link to={"/future-clients"}>
        <h3>Future Clients</h3>
      </Link>
    </div>
  );
}
