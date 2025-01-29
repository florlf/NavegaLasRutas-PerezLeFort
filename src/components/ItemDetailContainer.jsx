import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { fetchProductById } from "../firebase/db";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await fetchProductById(id);
  
      if (product) {
        setProduct(product);
      } else {
        console.log("Producto no encontrado");
      }
  
      setLoading(false);
    };
  
    fetchProduct();
  }, [id]);


  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;