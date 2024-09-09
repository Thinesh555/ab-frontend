// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>ABC Restaurant</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services and Facilities</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login/Register</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
