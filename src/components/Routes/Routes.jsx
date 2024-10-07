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
        <Link to="/" className="logo">
          <img src={logo} alt="Action to Resilience Uganda" />
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        {/* <li className="close" onClick={toggleMenu}>
          X
        </li> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <span>Products</span>
          <ul style={{ listStyleType: "none" }}>
            {/* List of Products */}
            {[
              "All products",
              "Strip lights",
              "Flood lights",
              "LED bulbs",
              "Filament bulbs",
              "Wall lamps",
              "Down lights",
              "Track lights",
              "Street lights",
              "Chandeliers",
              "Table lamps",
              "Ceiling lights",
              "Panel lamps",
              "Garden lamps",
              "LED accessories",
              "LED Tubes",
            ].map((product, index) => (
              <li key={index}>
                <Link
                  to={`/products/${product.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  {product}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>|</li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>|</li>
        <li className="support-team">
          <span>Support Team</span>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/support/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/support/policy">Privacy Policy</Link>
            </li>
          </ul>
        </li>
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
