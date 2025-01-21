import React from "react"
import { Link } from "react-router-dom"

const Item = ({ id, title, thumbnail, price }) => {
  return (
    <div className="product-item">
      <h3>{title}</h3>
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "150px", height: "150px" }}
      />
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item