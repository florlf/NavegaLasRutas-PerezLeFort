import { doc, getDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import { db } from "./config"; 

export const checkStock = async (productId, quantityRequested) => {
  const productRef = doc(db, "products", productId);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    const stock = productSnap.data().stock;

    if (quantityRequested > stock) {
      Toastify({
        text: `Producto sin stock. Máximo permitido: ${stock} unidades.`,
        duration: 5000,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF5733"
      }).showToast();
      return false;
    }
    return true;
  }
  return false;
};

export const updateStock = async (productId, quantitySold) => {
    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);
  
    if (productSnap.exists()) {
      const currentStock = productSnap.data().stock;
      const newStock = currentStock - quantitySold;
  
      if (newStock >= 0) {
        await updateDoc(productRef, { stock: newStock });
      }
    }
};