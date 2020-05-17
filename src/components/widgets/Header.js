import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <nav style={{ boxShadow: "none" }}>
      <div className="nav-wrapper grey lighten-5">
        <a href="/" className="brand-logo" style={{ color: "#b71c1c" }}>
          <i style={{ fontSize: "45px", marginLeft: "30px" }}>
            <FaYoutube />
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
