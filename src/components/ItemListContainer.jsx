import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isValidCategory, setIsValidCategory] = useState(true);

  const categoryNames = {
    "skins-legendarias": "Skins Legendarias",
    "skins-epicas": "Skins Épicas",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let productsRef = collection(db, "products");

      if (categoryId && !categoryNames[categoryId]) {
        setIsValidCategory(false);
        return;
      }

      if (categoryId) {
        productsRef = query(productsRef, where("category", "==", categoryId));
      }

      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, [categoryId]);

  if (!isValidCategory) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="item-list-container">
      <h2>{categoryId ? categoryNames[categoryId] || "Categoría desconocida" : "¡Bienvenido/a a nuestra tienda!"}</h2>
      <ItemList products={products} className="item-list" />
    </div>
  );
};

export default ItemListContainer;