import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return;

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + quantity;

      if (newQuantity > product.stock) {
        toast.error(`Producto sin stock. Máximo permitido: ${product.stock} unidades`, {
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

      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      if (quantity > product.stock) {
        toast.error(`Producto sin stock. Máximo permitido: ${product.stock} unidades`, {
          position: "bottom-right",
          autoClose: 3000,
        });
        return;
      }

      setCart([...cart, { ...product, quantity }]);
    }

    toast.success(`${product.title} ha sido agregado al carrito`, {
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
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, newQuantity, stock) => {
    const MAX_QUANTITY = 10;
  
    if (newQuantity > MAX_QUANTITY) {
      toast.error(`No puedes tener más de ${MAX_QUANTITY} unidades de este producto.`, {
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
  
    if (newQuantity > stock) {
      toast.error(`Producto sin stock. Máximo permitido: ${stock} unidades`, {
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
  
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };  

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};