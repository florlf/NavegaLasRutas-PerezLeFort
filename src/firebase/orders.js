import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

export const createOrder = async (buyerData, cartItems, total) => {
  try {
    const order = {
      buyer: buyerData,  
      items: cartItems,  
      total: total,
      date: Timestamp.fromDate(new Date()), 
      status: "pending"
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear la orden:", error);
  }
};