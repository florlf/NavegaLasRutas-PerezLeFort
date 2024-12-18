import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">¡Oops!</h1>
        <h2 className="not-found-subtitle">La página que buscas no existe.</h2>
        <p className="not-found-description">
          Parece que te has perdido en el camino. Pero no te preocupes, hay muchas más cosas por descubrir.
        </p>
        <Link to="/" className="go-home-button">Regresar a la página principal</Link>
      </div>
    </div>
  )
}

export default NotFound