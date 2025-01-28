import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  const goToCheckout = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío, agrega productos para continuar.");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div>
      <h2>Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}

      <button onClick={() => navigate("/")}>Volver a la Página Principal</button>

      {cart.length > 0 && (
        <button onClick={goToCheckout}>Continuar con la compra</button>
      )}
    </div>
  );
};

export default Cart;