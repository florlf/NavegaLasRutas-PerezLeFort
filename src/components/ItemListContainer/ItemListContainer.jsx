import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const endpoint = id
      ? `https://dummyjson.com/products/category/${id}`
      : `https://dummyjson.com/products`

    setLoading(true)
    setError(null)

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos.")
        }
        return response.json()
      })
      .then((data) => {
        if (id && data.products.length === 0) {
          navigate("/404")
        } else {
          setProducts(data.products)
        }
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id, navigate])

  return (
    <div className="product-list-container">
      <h2>{greeting}</h2>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer