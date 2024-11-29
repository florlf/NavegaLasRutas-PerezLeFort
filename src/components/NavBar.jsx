import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">Star Skins</a>
  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link" href="#">Skins</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">Chromas</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">Aspectos de legado</a>
            </li>
           </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}
  
export default NavBar