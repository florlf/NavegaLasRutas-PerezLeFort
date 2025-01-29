import React from "react";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();


  const displayCount = totalItems > 99 ? "+99" : totalItems;

  return (
    <div className="cart-widget">
      <img src="/cart.svg" alt="Carrito" style={{ width: '26px', height: '26px' }} />
      {totalItems > 0 && <span className="cart-count">{displayCount}</span>}
    </div>
  );
};

export default CartWidget;