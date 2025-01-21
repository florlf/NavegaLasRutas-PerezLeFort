import React from "react"
import PropTypes from "prop-types"
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h2 className="item-title">{product.title}</h2>
      <img
        className="item-image"
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px", height: "300px" }}
      />
      <p className="item-description">Descripción: {product.description}</p>
      <p className="item-price">Precio: ${product.price}</p>
    </div>
  )
}


ItemDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default ItemDetail