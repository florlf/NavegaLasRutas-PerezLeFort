import React from "react";
import { useCart } from "../context/CartContext";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrease = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="cart-item-details">
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <p>Cantidad: {product.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;