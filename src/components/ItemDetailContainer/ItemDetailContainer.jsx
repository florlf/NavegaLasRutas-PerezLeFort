import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { addToCart } = useCart()

  useEffect(() => {
    const endpoint = `https://dummyjson.com/products/${id}`

    setLoading(true)
    setError(null)

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el detalle del producto.")
        }
        return response.json()
      })
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Cargando detalles del producto...</p>
  if (error) return <p>Error: {error}</p>

  const handleAddToCart = (quantity) => {
    addToCart({ ...product, quantity })
  }

  return (
    <div>
      {product && (
        <>
          <ItemDetail product={product} />
          
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
        </>
      )}
    </div>
  )
}

export default ItemDetailContainer