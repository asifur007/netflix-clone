import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />

        <img
          className="nav_avatar"
          src="https://cdn3.iconfinder.com/data/icons/robotic-technology-color/64/modern-technology-hero-avatar-robotics-512.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
