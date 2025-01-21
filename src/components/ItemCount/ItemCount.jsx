import React, { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increase = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrease = () => {
    if (count > 1) setCount(count - 1)
  }

  const handleAddToCart = () => {
    onAdd(count)
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount