import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <h1>Star Store</h1>
      </Link>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;