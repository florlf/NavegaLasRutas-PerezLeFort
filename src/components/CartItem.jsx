import React from "react";
import { useCart } from "../context/CartContext";

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
    <div>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px"}}/>
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <p>Cantidad: {product.quantity}</p>
      
      <button onClick={handleIncrease}>+ Agregar</button>
      <button onClick={handleDecrease}>- Quitar</button>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;
