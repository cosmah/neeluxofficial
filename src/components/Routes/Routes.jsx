import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";
import logo from "../../assets/img/new/logo.jpeg";

const RoutingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Action to Resilience Uganda" />
          </Link>
        </div>
        <div className="logo-text">
          {/* <h4>Neelux Qianyiyuan SMC</h4> */}
          {/* <p>Identify. Transform. Sustain</p> */}
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <div className="close" onClick={toggleMenu}>
          X
        </div>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/products">
            <span>Products</span>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </li>
        <li>|</li>

        <li>
          <Link to="/support">
            <span>Support Team</span>
          </Link>
        </li>
        <li>|</li>
        
        
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default RoutingComponent;
