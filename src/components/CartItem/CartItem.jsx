import React from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "./CartItem.css";

const CartItem = ({ product, stock }) => { 
  const { removeFromCart, updateQuantity } = useCart();

  const MAX_QUANTITY = 10;

  const handleIncrease = () => {
    if (product.quantity >= MAX_QUANTITY) {
      toast.error(`No puedes agregar más de ${MAX_QUANTITY} unidades de este producto.`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        style: {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.24)",
          backgroundColor: "white",
          color: "black",
          fontSize: "16px",
          borderRadius: "20px",
          borderColor: "black",
          padding: "10px 30px",
        },
      });
      return;
    }
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