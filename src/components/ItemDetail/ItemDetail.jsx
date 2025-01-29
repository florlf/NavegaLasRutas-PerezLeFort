import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail shadow">
      <img src={product.image} alt={product.title} style={{ width: '270px', height: '150px' }}/>
      <h2>{product.title}</h2>
      <p className="description">{product.description}</p>
      <p>${product.price}</p>
      <div>
        <input
          className="input-container"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max={product.stock}
        />
        <button onClick={handleAddToCart} className="btn-add">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;