import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";
import logo from "../../assets/img/new/logo.jpeg";

const RoutingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const productRoutes = {
    "All products": "/products",
    "Strip lights": "/strip",
    "Flood lights": "/flood",
    "LED bulbs": "/bulbs",
    "Filament bulbs": "/bulbs", // Assuming same route as LED bulbs
    "Wall lamps": "/walls",
    "Down lights": "/down",
    "Track lights": "/track",
    "Street lights": "/streets",
    "Chandeliers": "/chandeliers",
    "Table lamps": "/table",
    "Ceiling lights": "/ceiling",
    "Panel lamps": "/panels",
    "Garden lamps": "/garden",
    "LED accessories": "/accessories", // Assuming a route for accessories
    "LED Tubes": "/tubes",
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Action to Resilience Uganda" />
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>|</li>
        <li>
          <span>Products</span>
          <ul style={{ listStyleType: "none" }}>
            {Object.keys(productRoutes).map((product, index) => (
              <li key={index}>
                <Link to={productRoutes[product]}>
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
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
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