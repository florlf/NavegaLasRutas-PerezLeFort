import { useState, useEffect } from "react";
import { fetchProducts } from "../firebase/db";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return { products, loading };
};