import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const fetchProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Producto no encontrado");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
};