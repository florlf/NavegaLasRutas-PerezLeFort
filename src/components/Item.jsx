import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }}/>
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;