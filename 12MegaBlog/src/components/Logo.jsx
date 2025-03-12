import React from "react";
import logo from "../assets/logo.png";

function Logo({ width = "25px" }) {
  return (
    <div>
      <img src={logo} alt="Logo" width="50px" height="50px" />
    </div>
  );
}

export default Logo;
