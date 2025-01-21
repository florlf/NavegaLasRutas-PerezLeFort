import React from "react"
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="/">Star Store</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/category/smartphones">Smartphones</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/category/laptops">Laptops</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/category/fragrances">Fragancias</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar