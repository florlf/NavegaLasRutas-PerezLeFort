import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchProductById } from "../firebase/db";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await fetchProductById(id);
        if (product) {
          setProduct(product);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProduct(null);
      }
  
      setLoading(false);
    };
  
    fetchProduct();
  }, [id]);  

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <Navigate to="/404" />;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;