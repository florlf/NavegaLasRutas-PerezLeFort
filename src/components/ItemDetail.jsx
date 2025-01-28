import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max={product.stock}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;