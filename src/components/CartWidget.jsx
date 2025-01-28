import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      <img src="/cart.svg" alt="Carrito" style={{ width: '30px', height: '30px' }}/>
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartWidget;