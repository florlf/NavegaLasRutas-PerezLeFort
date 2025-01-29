import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <div className="item shadow">
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }}/>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;