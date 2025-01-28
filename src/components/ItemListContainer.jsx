import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h2>¡Bienvenido a nuestra tienda!</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;