import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [classList, setClassList] = useState("hiddenBtn");
  const handleButtonClick = () => {
    if (classList === "hiddenBtn") {
      setClassList("");
    } else {
      setClassList("hiddenBtn");
    }
  };
  return (
    <div className="container">
      <nav id="nav-list">
        <div className="topNav">
          <h1>Plaza.Z</h1>
          <i class="fa-solid fa-bars option" onClick={handleButtonClick}></i>
        </div>
        <ul className={classList}>
          <HashLink smooth to="/">Home</HashLink>
          <HashLink smooth to="/#services">Services</HashLink>
          <HashLink smooth to="/about">About</HashLink>
          <HashLink smooth to="/contact">Contact Us</HashLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
